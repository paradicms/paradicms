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
@prefix ns1: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage0:> .
@prefix ns10: <http://example.com/collection1/work4:CmsImage1:> .
@prefix ns100: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage0:> .
@prefix ns101: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage1:> .
@prefix ns102: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage0:> .
@prefix ns103: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage0:> .
@prefix ns104: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage1:> .
@prefix ns105: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage0:> .
@prefix ns106: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage0:> .
@prefix ns107: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:> .
@prefix ns108: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage0:> .
@prefix ns109: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage1:> .
@prefix ns11: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage0:> .
@prefix ns110: <http://example.com/person4:> .
@prefix ns111: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage1:> .
@prefix ns112: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage1:> .
@prefix ns113: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:> .
@prefix ns114: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage1:> .
@prefix ns115: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage0:> .
@prefix ns116: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:> .
@prefix ns117: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage1:> .
@prefix ns118: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage1:> .
@prefix ns119: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage1:> .
@prefix ns12: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage0:> .
@prefix ns120: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:> .
@prefix ns121: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage1:> .
@prefix ns122: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage0:> .
@prefix ns123: <http://example.com/collection0/work0:CmsImage0:> .
@prefix ns124: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage0:> .
@prefix ns125: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage1:> .
@prefix ns126: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage1:> .
@prefix ns127: <http://example.com/organization1:> .
@prefix ns128: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:> .
@prefix ns129: <http://example.com/collection1/work5:CmsImage1:> .
@prefix ns13: <http://example.com/organization3:CmsImage1:> .
@prefix ns130: <http://example.com/freestandingwork11:CmsImage1:> .
@prefix ns131: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage1:> .
@prefix ns132: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage0:> .
@prefix ns133: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage0:> .
@prefix ns134: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage1:> .
@prefix ns135: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage0:> .
@prefix ns136: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage0:> .
@prefix ns137: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage1:> .
@prefix ns138: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage1:> .
@prefix ns139: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage0:> .
@prefix ns14: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage1:> .
@prefix ns140: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage0:> .
@prefix ns141: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage0:> .
@prefix ns142: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage0:> .
@prefix ns143: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage1:> .
@prefix ns144: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage1:> .
@prefix ns145: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage1:> .
@prefix ns146: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:> .
@prefix ns147: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage1:> .
@prefix ns148: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage0:> .
@prefix ns149: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage0:> .
@prefix ns15: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage1:> .
@prefix ns150: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage1:> .
@prefix ns151: <http://example.com/person3:CmsImage1:> .
@prefix ns152: <http://example.com/person2:> .
@prefix ns153: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage0:> .
@prefix ns154: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:> .
@prefix ns155: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage1:> .
@prefix ns156: <http://example.com/freestandingwork11:CmsImage0:> .
@prefix ns157: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage0:> .
@prefix ns158: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:> .
@prefix ns159: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage1:> .
@prefix ns16: <http://example.com/freestandingwork9:CmsImage1:> .
@prefix ns160: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage0:> .
@prefix ns161: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage0:> .
@prefix ns162: <http://example.com/freestandingwork10:CmsImage0:> .
@prefix ns163: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:> .
@prefix ns164: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage1:> .
@prefix ns165: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage0:> .
@prefix ns166: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage1:> .
@prefix ns167: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage1:> .
@prefix ns168: <http://example.com/person4:CmsImage1:> .
@prefix ns169: <http://example.com/collection0/work1:CmsImage0:> .
@prefix ns17: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage1:> .
@prefix ns170: <http://example.com/person0:> .
@prefix ns171: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:> .
@prefix ns172: <http://example.com/person4:CmsImage0:> .
@prefix ns173: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage0:> .
@prefix ns174: <http://example.com/collection0/work3:CmsImage0:> .
@prefix ns175: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage1:> .
@prefix ns176: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage0:> .
@prefix ns177: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage1:> .
@prefix ns178: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage1:> .
@prefix ns179: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:> .
@prefix ns18: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage0:> .
@prefix ns180: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:> .
@prefix ns181: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage0:> .
@prefix ns182: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage0:> .
@prefix ns183: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage1:> .
@prefix ns184: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage1:> .
@prefix ns185: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:> .
@prefix ns186: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:> .
@prefix ns187: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage0:> .
@prefix ns188: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage1:> .
@prefix ns189: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:> .
@prefix ns19: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:> .
@prefix ns190: <http://example.com/person0:CmsImage0:> .
@prefix ns191: <http://example.com/organization1:CmsImage0:> .
@prefix ns192: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage0:> .
@prefix ns193: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage1:> .
@prefix ns194: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage0:> .
@prefix ns195: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage0:> .
@prefix ns196: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage0:> .
@prefix ns197: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:> .
@prefix ns198: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage1:> .
@prefix ns199: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage1:> .
@prefix ns2: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage1:> .
@prefix ns20: <http://example.com/organization1:CmsImage1:> .
@prefix ns200: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:> .
@prefix ns201: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage0:> .
@prefix ns202: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:> .
@prefix ns203: <http://example.com/collection1/work6:CmsImage0:> .
@prefix ns204: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:> .
@prefix ns205: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage1:> .
@prefix ns206: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:> .
@prefix ns207: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:> .
@prefix ns208: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage1:> .
@prefix ns209: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage1:> .
@prefix ns21: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage0:> .
@prefix ns210: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage1:> .
@prefix ns211: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage1:> .
@prefix ns212: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage1:> .
@prefix ns213: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage1:> .
@prefix ns214: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage1:> .
@prefix ns215: <http://example.com/collection1:> .
@prefix ns216: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:> .
@prefix ns217: <http://example.com/person2:CmsImage1:> .
@prefix ns218: <http://example.com/organization4:CmsImage1:> .
@prefix ns219: <http://example.com/collection0/work3:CmsImage1:> .
@prefix ns22: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage1:> .
@prefix ns220: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:> .
@prefix ns221: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:> .
@prefix ns222: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage0:> .
@prefix ns223: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage0:> .
@prefix ns224: <http://example.com/collection0/work2:CmsImage0:> .
@prefix ns225: <http://example.com/collection1/work4:CmsImage0:> .
@prefix ns226: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage0:> .
@prefix ns227: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage1:> .
@prefix ns228: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage1:> .
@prefix ns229: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage1:> .
@prefix ns23: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage0:> .
@prefix ns230: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:> .
@prefix ns231: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:> .
@prefix ns232: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:> .
@prefix ns233: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage0:> .
@prefix ns234: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:> .
@prefix ns235: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage1:> .
@prefix ns236: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage1:> .
@prefix ns237: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage1:> .
@prefix ns238: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage0:> .
@prefix ns239: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:> .
@prefix ns24: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage0:> .
@prefix ns240: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage0:> .
@prefix ns241: <http://example.com/collection0/work0:CmsImage1:> .
@prefix ns242: <http://example.com/collection1/work6:CmsImage1:> .
@prefix ns243: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:> .
@prefix ns244: <http://example.com/collection0/work2:CmsImage1:> .
@prefix ns245: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage0:> .
@prefix ns246: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage0:> .
@prefix ns247: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage1:> .
@prefix ns248: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage1:> .
@prefix ns249: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:> .
@prefix ns25: <urn:paradicms_etl:pipeline:synthetic_data:concept:> .
@prefix ns250: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage1:> .
@prefix ns251: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:> .
@prefix ns252: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage0:> .
@prefix ns253: <http://example.com/freestandingwork8:CmsImage0:> .
@prefix ns254: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage0:> .
@prefix ns255: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:> .
@prefix ns256: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:> .
@prefix ns257: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:> .
@prefix ns258: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage1:> .
@prefix ns259: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage1:> .
@prefix ns26: <http://example.com/person2:CmsImage0:> .
@prefix ns260: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:> .
@prefix ns261: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:> .
@prefix ns262: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage1:> .
@prefix ns263: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage0:> .
@prefix ns264: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage0:> .
@prefix ns265: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:> .
@prefix ns266: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage0:> .
@prefix ns267: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:> .
@prefix ns268: <http://example.com/collection1:CmsImage0:> .
@prefix ns269: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage0:> .
@prefix ns27: <http://example.com/collection1/> .
@prefix ns270: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage1:> .
@prefix ns271: <http://example.com/collection1:CmsImage1:> .
@prefix ns272: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage0:> .
@prefix ns273: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:> .
@prefix ns274: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage0:> .
@prefix ns275: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:> .
@prefix ns276: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:> .
@prefix ns277: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage0:> .
@prefix ns278: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:> .
@prefix ns279: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:> .
@prefix ns28: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage0:> .
@prefix ns280: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:> .
@prefix ns281: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage0:> .
@prefix ns282: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage1:> .
@prefix ns283: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage0:> .
@prefix ns284: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage0:> .
@prefix ns285: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:> .
@prefix ns286: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage0:> .
@prefix ns287: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage1:> .
@prefix ns288: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:> .
@prefix ns289: <http://example.com/collection1/work6:> .
@prefix ns29: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage0:> .
@prefix ns290: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage0:> .
@prefix ns291: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage0:> .
@prefix ns292: <http://example.com/person1:CmsImage0:> .
@prefix ns293: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage0:> .
@prefix ns294: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:> .
@prefix ns295: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage1:> .
@prefix ns296: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:> .
@prefix ns297: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage0:> .
@prefix ns298: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage0:> .
@prefix ns299: <http://example.com/person3:> .
@prefix ns3: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage0:> .
@prefix ns30: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage0:> .
@prefix ns300: <http://example.com/organization4:> .
@prefix ns301: <http://example.com/organization2:> .
@prefix ns302: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage1:> .
@prefix ns303: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage0:> .
@prefix ns304: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage1:> .
@prefix ns305: <http://example.com/organization2:CmsImage1:> .
@prefix ns306: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage1:> .
@prefix ns307: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage0:> .
@prefix ns308: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:> .
@prefix ns309: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:> .
@prefix ns31: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage0:> .
@prefix ns310: <http://example.com/organization3:> .
@prefix ns311: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage0:> .
@prefix ns312: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage1:> .
@prefix ns313: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage0:> .
@prefix ns314: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:> .
@prefix ns315: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage0:> .
@prefix ns316: <http://example.com/person1:CmsImage1:> .
@prefix ns317: <http://example.com/collection1/work7:CmsImage0:> .
@prefix ns318: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:> .
@prefix ns319: <http://example.com/person3:CmsImage0:> .
@prefix ns32: <http://example.com/collection1/work5:CmsImage0:> .
@prefix ns320: <http://example.com/organization3:CmsImage0:> .
@prefix ns321: <http://example.com/freestandingwork8:CmsImage1:> .
@prefix ns322: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage0:> .
@prefix ns323: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage1:> .
@prefix ns324: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:> .
@prefix ns325: <http://example.com/collection1/work7:CmsImage1:> .
@prefix ns326: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:> .
@prefix ns327: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:> .
@prefix ns328: <http://example.com/freestandingwork8:> .
@prefix ns329: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage1:> .
@prefix ns33: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage0:> .
@prefix ns330: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:> .
@prefix ns331: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:> .
@prefix ns332: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage1:> .
@prefix ns333: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:> .
@prefix ns334: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage1:> .
@prefix ns335: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:> .
@prefix ns336: <http://example.com/freestandingwork9:CmsImage0:> .
@prefix ns337: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage1:> .
@prefix ns338: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage0:> .
@prefix ns339: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage0:> .
@prefix ns34: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage1:> .
@prefix ns340: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:> .
@prefix ns341: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage1:> .
@prefix ns342: <http://example.com/freestandingwork10:> .
@prefix ns343: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:> .
@prefix ns344: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:> .
@prefix ns345: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:> .
@prefix ns346: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:> .
@prefix ns347: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage1:> .
@prefix ns348: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:> .
@prefix ns349: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage1:> .
@prefix ns35: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:> .
@prefix ns350: <http://example.com/organization0:CmsImage1:> .
@prefix ns351: <http://example.com/collection0/work1:> .
@prefix ns352: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:> .
@prefix ns353: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage0:> .
@prefix ns354: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:> .
@prefix ns355: <http://example.com/person0:CmsImage1:> .
@prefix ns356: <http://example.com/freestandingwork9:> .
@prefix ns357: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:> .
@prefix ns358: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage0:> .
@prefix ns359: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage0:> .
@prefix ns36: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:> .
@prefix ns360: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:> .
@prefix ns361: <http://example.com/organization2:CmsImage0:> .
@prefix ns362: <http://example.com/organization4:CmsImage0:> .
@prefix ns363: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage1:> .
@prefix ns364: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage0:> .
@prefix ns365: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:> .
@prefix ns366: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage0:> .
@prefix ns367: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage0:> .
@prefix ns368: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage0:> .
@prefix ns369: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage1:> .
@prefix ns37: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage1:> .
@prefix ns370: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage0:> .
@prefix ns371: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:> .
@prefix ns372: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:> .
@prefix ns373: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage1:> .
@prefix ns374: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:> .
@prefix ns375: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:> .
@prefix ns376: <urn:paradicms_etl:pipeline:synthetic_data:> .
@prefix ns377: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:> .
@prefix ns378: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage1:> .
@prefix ns379: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage1:> .
@prefix ns38: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage1:> .
@prefix ns380: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:> .
@prefix ns381: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:> .
@prefix ns382: <http://example.com/organization0:> .
@prefix ns383: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage0:> .
@prefix ns384: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage1:> .
@prefix ns385: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:> .
@prefix ns386: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:> .
@prefix ns387: <http://example.com/freestandingwork11:> .
@prefix ns388: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:> .
@prefix ns389: <http://example.com/collection1/work7:> .
@prefix ns39: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage1:> .
@prefix ns390: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:> .
@prefix ns391: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage0:> .
@prefix ns392: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:> .
@prefix ns393: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:> .
@prefix ns394: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:> .
@prefix ns395: <http://example.com/collection1/work4:> .
@prefix ns396: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:> .
@prefix ns397: <http://example.com/collection0/work2:> .
@prefix ns398: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:> .
@prefix ns399: <http://example.com/collection1/work5:> .
@prefix ns4: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:> .
@prefix ns40: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage1:> .
@prefix ns400: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:> .
@prefix ns401: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:> .
@prefix ns402: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:> .
@prefix ns403: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:> .
@prefix ns404: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:> .
@prefix ns41: <http://example.com/collection0/work0:> .
@prefix ns42: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage0:> .
@prefix ns43: <http://example.com/> .
@prefix ns44: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage1:> .
@prefix ns45: <http://example.com/collection0/> .
@prefix ns46: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage0:> .
@prefix ns47: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage1:> .
@prefix ns48: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage1:> .
@prefix ns49: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage1:> .
@prefix ns5: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage1:> .
@prefix ns50: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:> .
@prefix ns51: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage0:> .
@prefix ns52: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:> .
@prefix ns53: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage1:> .
@prefix ns54: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage0:> .
@prefix ns55: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage1:> .
@prefix ns56: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage1:> .
@prefix ns57: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage0:> .
@prefix ns58: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:> .
@prefix ns59: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage1:> .
@prefix ns6: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:> .
@prefix ns60: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:> .
@prefix ns61: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage0:> .
@prefix ns62: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:> .
@prefix ns63: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage1:> .
@prefix ns64: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage0:> .
@prefix ns65: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage1:> .
@prefix ns66: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage0:> .
@prefix ns67: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage1:> .
@prefix ns68: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage1:> .
@prefix ns69: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage1:> .
@prefix ns7: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:> .
@prefix ns70: <http://example.com/collection0/work1:CmsImage1:> .
@prefix ns71: <http://example.com/freestandingwork10:CmsImage1:> .
@prefix ns72: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage1:> .
@prefix ns73: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage0:> .
@prefix ns74: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage0:> .
@prefix ns75: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage0:> .
@prefix ns76: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage1:> .
@prefix ns77: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:> .
@prefix ns78: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:> .
@prefix ns79: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage0:> .
@prefix ns8: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage0:> .
@prefix ns80: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage0:> .
@prefix ns81: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage1:> .
@prefix ns82: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage0:> .
@prefix ns83: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage1:> .
@prefix ns84: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:> .
@prefix ns85: <http://example.com/person1:> .
@prefix ns86: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage1:> .
@prefix ns87: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage0:> .
@prefix ns88: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage1:> .
@prefix ns89: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:> .
@prefix ns9: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage0:> .
@prefix ns90: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage0:> .
@prefix ns91: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage1:> .
@prefix ns92: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage1:> .
@prefix ns93: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:> .
@prefix ns94: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage1:> .
@prefix ns95: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage0:> .
@prefix ns96: <http://example.com/organization0:CmsImage0:> .
@prefix ns97: <http://example.com/collection0/work3:> .
@prefix ns98: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:> .
@prefix ns99: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix vra: <http://purl.org/vra/> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ns1:Thumbnail400x400 {
    ns200:CmsImage0 foaf:thumbnail ns1:Thumbnail400x400 .

    ns1:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns200:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:16 .
}

ns2:Thumbnail400x400 {
    ns340:CmsImage1 foaf:thumbnail ns2:Thumbnail400x400 .

    ns2:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns340:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:5 .
}

ns3:Thumbnail400x400 {
    ns128:CmsImage0 foaf:thumbnail ns3:Thumbnail400x400 .

    ns3:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:108 .
}

ns4:CmsImage0 {
    ns4:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:55 .
}

ns5:Thumbnail600x600 {
    ns348:CmsImage1 foaf:thumbnail ns5:Thumbnail600x600 .

    ns5:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:75 .
}

ns6:CmsImage0 {
    ns6:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:91 .
}

ns7:CmsImage0 {
    ns7:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:20 .
}

ns8:Thumbnail400x400 {
    ns265:CmsImage0 foaf:thumbnail ns8:Thumbnail400x400 .

    ns8:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns265:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:63 .
}

ns9:Thumbnail600x600 {
    ns202:CmsImage0 foaf:thumbnail ns9:Thumbnail600x600 .

    ns9:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns202:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:95 .
}

ns10:Thumbnail800x800 {
    ns395:CmsImage1 foaf:thumbnail ns10:Thumbnail800x800 .

    ns10:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns27:work4 .
}

ns11:Thumbnail600x600 {
    ns314:CmsImage0 foaf:thumbnail ns11:Thumbnail600x600 .

    ns11:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:78 .
}

ns12:Thumbnail400x400 {
    ns352:CmsImage0 foaf:thumbnail ns12:Thumbnail400x400 .

    ns12:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:8 .
}

ns13:Thumbnail200x200 {
    ns310:CmsImage1 foaf:thumbnail ns13:Thumbnail200x200 .

    ns13:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns310:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:organization3 .
}

ns14:Thumbnail400x400 {
    ns331:CmsImage1 foaf:thumbnail ns14:Thumbnail400x400 .

    ns14:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns331:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:39 .
}

ns15:Thumbnail600x600 {
    ns19:CmsImage1 foaf:thumbnail ns15:Thumbnail600x600 .

    ns15:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns19:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:54 .
}

ns16:Thumbnail200x200 {
    ns356:CmsImage1 foaf:thumbnail ns16:Thumbnail200x200 .

    ns16:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:freestandingwork9 .
}

ns17:Thumbnail600x600 {
    ns400:CmsImage1 foaf:thumbnail ns17:Thumbnail600x600 .

    ns17:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:71 .
}

ns4:CmsImage1 {
    ns4:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:55 .
}

ns18:Thumbnail600x600 {
    ns239:CmsImage0 foaf:thumbnail ns18:Thumbnail600x600 .

    ns18:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns239:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:30 .
}

ns19:CmsImage0 {
    ns19:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:54 .
}

ns20:Thumbnail400x400 {
    ns127:CmsImage1 foaf:thumbnail ns20:Thumbnail400x400 .

    ns20:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns127:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:organization1 .
}

ns21:Thumbnail200x200 {
    ns333:CmsImage0 foaf:thumbnail ns21:Thumbnail200x200 .

    ns21:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:29 .
}

ns22:Thumbnail200x200 {
    ns314:CmsImage1 foaf:thumbnail ns22:Thumbnail200x200 .

    ns22:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:78 .
}

ns23:Thumbnail800x800 {
    ns251:CmsImage0 foaf:thumbnail ns23:Thumbnail800x800 .

    ns23:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:85 .
}

ns24:Thumbnail400x400 {
    ns294:CmsImage0 foaf:thumbnail ns24:Thumbnail400x400 .

    ns24:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:69 .
}

_:N751367504bf04af285b213742aa8a451 {
    _:N751367504bf04af285b213742aa8a451 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Na7ac82e6903e4a1296fa562aa7656bf6 ;
        dcterms:title "CmsCollection1CmsWork7 closing" ;
        cms:work ns27:work7 .

    _:Na7ac82e6903e4a1296fa562aa7656bf6 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns25:80 {
    ns25:80 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 0" ;
        skos:prefLabel "CmsConcept 80" .
}

ns26:Thumbnail800x800 {
    ns152:CmsImage0 foaf:thumbnail ns26:Thumbnail800x800 .

    ns26:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns152:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:person2 .
}

ns27:work7Opening {
    ns27:work7Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-25"^^xsd:date ;
        dcterms:spatial _:Na7ac82e6903e4a1296fa562aa7656bf6 ;
        dcterms:title "CmsCollection1CmsWork7 opening" ;
        cms:work ns27:work7 .

    _:Na7ac82e6903e4a1296fa562aa7656bf6 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns28:Thumbnail600x600 {
    ns35:CmsImage0 foaf:thumbnail ns28:Thumbnail600x600 .

    ns28:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns35:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:76 .
}

ns29:Thumbnail600x600 {
    ns330:CmsImage0 foaf:thumbnail ns29:Thumbnail600x600 .

    ns29:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns330:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:19 .
}

ns30:Thumbnail800x800 {
    ns220:CmsImage0 foaf:thumbnail ns30:Thumbnail800x800 .

    ns30:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:22 .
}

ns31:Thumbnail600x600 {
    ns204:CmsImage0 foaf:thumbnail ns31:Thumbnail600x600 .

    ns31:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:11 .
}

ns11:Thumbnail400x400 {
    ns11:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:78 .

    ns314:CmsImage0 foaf:thumbnail ns11:Thumbnail400x400 .
}

ns32:Thumbnail600x600 {
    ns399:CmsImage0 foaf:thumbnail ns32:Thumbnail600x600 .

    ns32:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns27:work5 .
}

ns33:Thumbnail400x400 {
    ns179:CmsImage0 foaf:thumbnail ns33:Thumbnail400x400 .

    ns33:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:57 .
}

ns34:Thumbnail800x800 {
    ns257:CmsImage1 foaf:thumbnail ns34:Thumbnail800x800 .

    ns34:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:26 .
}

ns35:CmsImage1 {
    ns35:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:76 .
}

ns36:CmsImage1 {
    ns36:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:50 .
}

ns37:Thumbnail400x400 {
    ns216:CmsImage1 foaf:thumbnail ns37:Thumbnail400x400 .

    ns37:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns216:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:89 .
}

ns38:Thumbnail600x600 {
    ns377:CmsImage1 foaf:thumbnail ns38:Thumbnail600x600 .

    ns38:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:96 .
}

ns39:Thumbnail800x800 {
    ns113:CmsImage1 foaf:thumbnail ns39:Thumbnail800x800 .

    ns39:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns113:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:77 .
}

ns40:Thumbnail800x800 {
    ns380:CmsImage1 foaf:thumbnail ns40:Thumbnail800x800 .

    ns40:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:41 .
}

ns41:CmsImage0 {
    ns41:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns45:work0 .
}

ns23:Thumbnail200x200 {
    ns23:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:85 .

    ns251:CmsImage0 foaf:thumbnail ns23:Thumbnail200x200 .
}

ns42:Thumbnail400x400 {
    ns206:CmsImage0 foaf:thumbnail ns42:Thumbnail400x400 .

    ns42:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns206:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:3 .
}

ns16:Thumbnail800x800 {
    ns16:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:freestandingwork9 .

    ns356:CmsImage1 foaf:thumbnail ns16:Thumbnail800x800 .
}

ns43:collection0 {
    ns43:collection0 a cms:Collection ;
        dcterms:description _:N17de542a13074a8aa77adb67eac498d7 ;
        dcterms:title "CmsCollection0" .

    _:N17de542a13074a8aa77adb67eac498d7 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns44:Thumbnail800x800 {
    ns296:CmsImage1 foaf:thumbnail ns44:Thumbnail800x800 .

    ns44:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:9 .
}

ns45:work0 {
    ns45:work0 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork0 alternative title 0",
            "CmsCollection0CmsWork0 alternative title 1" ;
        dcterms:contributor _:Nf39bab295a204601ac07c00ab9cf2f09,
            _:Nf8fa4f24fa404671b0ba73c40ec6fc71 ;
        dcterms:creator ns43:organization2,
            ns43:organization3 ;
        dcterms:description _:N890bcd392da14df0b30049adcabc17e2 ;
        dcterms:extent ns25:10,
            ns25:11 ;
        dcterms:identifier "CmsCollection0CmsWork0Id0",
            "CmsCollection0CmsWork0Id1" ;
        dcterms:language ns25:20,
            ns25:21 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:40,
            ns25:41 ;
        dcterms:provenance "CmsCollection0CmsWork0 provenance 0",
            "CmsCollection0CmsWork0 provenance 1" ;
        dcterms:publisher ns25:50,
            ns25:51 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 rights holder" ;
        dcterms:source ns25:60,
            ns25:61 ;
        dcterms:spatial ns45:work0Location ;
        dcterms:subject ns25:80,
            ns25:81 ;
        dcterms:title "CmsCollection0CmsWork0" ;
        dcterms:type ns25:100,
            ns25:101 ;
        vra:culturalContext ns25:0,
            ns25:1 ;
        vra:material ns25:30,
            ns25:31 ;
        vra:technique ns25:90,
            ns25:91 ;
        cms:collection ns43:collection0 ;
        foaf:page <http://example.com/work/0> .

    _:N890bcd392da14df0b30049adcabc17e2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nf39bab295a204601ac07c00ab9cf2f09 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 0" .

    _:Nf8fa4f24fa404671b0ba73c40ec6fc71 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 1" .
}

ns46:Thumbnail200x200 {
    ns392:CmsImage0 foaf:thumbnail ns46:Thumbnail200x200 .

    ns46:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:86 .
}

ns47:Thumbnail800x800 {
    ns47:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns4:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:55 .

    ns4:CmsImage1 foaf:thumbnail ns47:Thumbnail800x800 .
}

ns48:Thumbnail400x400 {
    ns52:CmsImage1 foaf:thumbnail ns48:Thumbnail400x400 .

    ns48:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns52:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:90 .
}

ns49:Thumbnail600x600 {
    ns309:CmsImage1 foaf:thumbnail ns49:Thumbnail600x600 .

    ns49:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:52 .
}

ns50:CmsImage1 {
    ns50:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:100 .
}

ns51:Thumbnail800x800 {
    ns354:CmsImage0 foaf:thumbnail ns51:Thumbnail800x800 .

    ns51:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:23 .
}

ns52:CmsImage1 {
    ns52:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:90 .
}

ns53:Thumbnail200x200 {
    ns275:CmsImage1 foaf:thumbnail ns53:Thumbnail200x200 .

    ns53:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns275:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:65 .
}

ns54:Thumbnail400x400 {
    ns348:CmsImage0 foaf:thumbnail ns54:Thumbnail400x400 .

    ns54:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:75 .
}

ns55:Thumbnail400x400 {
    ns186:CmsImage1 foaf:thumbnail ns55:Thumbnail400x400 .

    ns55:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:72 .
}

ns56:Thumbnail400x400 {
    ns128:CmsImage1 foaf:thumbnail ns56:Thumbnail400x400 .

    ns56:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:108 .
}

ns57:Thumbnail400x400 {
    ns346:CmsImage0 foaf:thumbnail ns57:Thumbnail400x400 .

    ns57:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:103 .
}

ns58:CmsImage0 {
    ns58:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:7 .
}

ns59:Thumbnail600x600 {
    ns232:CmsImage1 foaf:thumbnail ns59:Thumbnail600x600 .

    ns59:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns232:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:98 .
}

ns60:CmsImage1 {
    ns60:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:24 .
}

ns61:Thumbnail200x200 {
    ns285:CmsImage0 foaf:thumbnail ns61:Thumbnail200x200 .

    ns61:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:82 .
}

ns62:CmsImage1 {
    ns62:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:60 .
}

ns38:Thumbnail800x800 {
    ns38:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:96 .

    ns377:CmsImage1 foaf:thumbnail ns38:Thumbnail800x800 .
}

ns31:Thumbnail800x800 {
    ns31:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:11 .

    ns204:CmsImage0 foaf:thumbnail ns31:Thumbnail800x800 .
}

ns63:Thumbnail800x800 {
    ns344:CmsImage1 foaf:thumbnail ns63:Thumbnail800x800 .

    ns63:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns344:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:25 .
}

ns64:Thumbnail800x800 {
    ns372:CmsImage0 foaf:thumbnail ns64:Thumbnail800x800 .

    ns64:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:10 .
}

ns65:Thumbnail600x600 {
    ns401:CmsImage1 foaf:thumbnail ns65:Thumbnail600x600 .

    ns65:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:17 .
}

ns66:Thumbnail600x600 {
    ns276:CmsImage0 foaf:thumbnail ns66:Thumbnail600x600 .

    ns66:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:14 .
}

ns45:work3 {
    ns45:work3 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork3 alternative title 0",
            "CmsCollection0CmsWork3 alternative title 1" ;
        dcterms:contributor _:Ncd09672a03b54700b4524b0907254a99,
            _:Nf991747fa7f348cfb38701545d2a328f ;
        dcterms:creator ns43:person0,
            ns43:person1 ;
        dcterms:extent ns25:13,
            ns25:14 ;
        dcterms:identifier "CmsCollection0CmsWork3Id0",
            "CmsCollection0CmsWork3Id1" ;
        dcterms:language ns25:23,
            ns25:24 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:43,
            ns25:44 ;
        dcterms:provenance "CmsCollection0CmsWork3 provenance 0",
            "CmsCollection0CmsWork3 provenance 1" ;
        dcterms:publisher ns25:53,
            ns25:54 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 rights holder" ;
        dcterms:source ns25:63,
            ns25:64 ;
        dcterms:spatial ns45:work3Location ;
        dcterms:subject ns25:83,
            ns25:84 ;
        dcterms:title "CmsCollection0CmsWork3" ;
        dcterms:type ns25:103,
            ns25:104 ;
        vra:culturalContext ns25:3,
            ns25:4 ;
        vra:material ns25:33,
            ns25:34 ;
        vra:technique ns25:93,
            ns25:94 ;
        cms:collection ns43:collection0 .

    _:Ncd09672a03b54700b4524b0907254a99 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 1" .

    _:Nf991747fa7f348cfb38701545d2a328f a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 0" .
}

ns67:Thumbnail200x200 {
    ns197:CmsImage1 foaf:thumbnail ns67:Thumbnail200x200 .

    ns67:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:107 .
}

ns32:Thumbnail400x400 {
    ns32:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns27:work5 .

    ns399:CmsImage0 foaf:thumbnail ns32:Thumbnail400x400 .
}

ns68:Thumbnail400x400 {
    ns68:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns60:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:24 .

    ns60:CmsImage1 foaf:thumbnail ns68:Thumbnail400x400 .
}

ns69:Thumbnail800x800 {
    ns385:CmsImage1 foaf:thumbnail ns69:Thumbnail800x800 .

    ns69:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:74 .
}

ns25:8 {
    ns25:8 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 8" ;
        skos:prefLabel "CmsConcept 8" .
}

ns70:Thumbnail800x800 {
    ns351:CmsImage1 foaf:thumbnail ns70:Thumbnail800x800 .

    ns70:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns45:work1 .
}

ns71:Thumbnail200x200 {
    ns342:CmsImage1 foaf:thumbnail ns71:Thumbnail200x200 .

    ns71:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:freestandingwork10 .
}

ns72:Thumbnail600x600 {
    ns200:CmsImage1 foaf:thumbnail ns72:Thumbnail600x600 .

    ns72:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns200:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:16 .
}

ns73:Thumbnail200x200 {
    ns261:CmsImage0 foaf:thumbnail ns73:Thumbnail200x200 .

    ns73:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:94 .
}

ns30:Thumbnail200x200 {
    ns30:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:22 .

    ns220:CmsImage0 foaf:thumbnail ns30:Thumbnail200x200 .
}

ns74:Thumbnail800x800 {
    ns231:CmsImage0 foaf:thumbnail ns74:Thumbnail800x800 .

    ns74:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:102 .
}

ns75:Thumbnail400x400 {
    ns326:CmsImage0 foaf:thumbnail ns75:Thumbnail400x400 .

    ns75:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:28 .
}

ns76:Thumbnail400x400 {
    ns372:CmsImage1 foaf:thumbnail ns76:Thumbnail400x400 .

    ns76:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:10 .
}

ns25:26 {
    ns25:26 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 6" ;
        skos:prefLabel "CmsConcept 26" .
}

ns77:CmsImage1 {
    ns77:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:13 .
}

ns78:CmsImage1 {
    ns78:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:53 .
}

ns79:Thumbnail400x400 {
    ns343:CmsImage0 foaf:thumbnail ns79:Thumbnail400x400 .

    ns79:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:1 .
}

ns25:45 {
    ns25:45 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 5" ;
        skos:prefLabel "CmsConcept 45" .
}

ns80:Thumbnail800x800 {
    ns120:CmsImage0 foaf:thumbnail ns80:Thumbnail800x800 .

    ns80:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns120:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:35 .
}

ns17:Thumbnail200x200 {
    ns17:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:71 .

    ns400:CmsImage1 foaf:thumbnail ns17:Thumbnail200x200 .
}

ns81:Thumbnail800x800 {
    ns221:CmsImage1 foaf:thumbnail ns81:Thumbnail800x800 .

    ns81:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:84 .
}

ns82:Thumbnail200x200 {
    ns327:CmsImage0 foaf:thumbnail ns82:Thumbnail200x200 .

    ns82:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:61 .
}

ns83:Thumbnail600x600 {
    ns273:CmsImage1 foaf:thumbnail ns83:Thumbnail600x600 .

    ns83:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns273:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:2 .
}

ns25:103 {
    ns25:103 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 3" ;
        skos:prefLabel "CmsConcept 103" .
}

ns84:CmsImage1 {
    ns84:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:79 .
}

ns85:CmsImage1 {
    ns85:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:person1 .
}

ns86:Thumbnail800x800 {
    ns120:CmsImage1 foaf:thumbnail ns86:Thumbnail800x800 .

    ns86:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns120:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:35 .
}

ns87:Thumbnail800x800 {
    ns158:CmsImage0 foaf:thumbnail ns87:Thumbnail800x800 .

    ns87:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:56 .
}

ns88:Thumbnail800x800 {
    ns374:CmsImage1 foaf:thumbnail ns88:Thumbnail800x800 .

    ns88:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:59 .
}

ns27:work6Creation {
    ns27:work6Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:person3,
            ns43:person4 ;
        dcterms:date _:N642f0291be65409896f7a7363082b17e ;
        dcterms:description _:N9d7629395a754994a79a19894d994109 ;
        dcterms:spatial ns27:work6Location ;
        dcterms:title "CmsCollection1CmsWork6 creation" ;
        cms:work ns27:work6 .

    _:N642f0291be65409896f7a7363082b17e a cms:DateTimeDescription ;
        time:day "---26"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N9d7629395a754994a79a19894d994109 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns89:CmsImage1 {
    ns89:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:67 .
}

ns90:Thumbnail800x800 {
    ns386:CmsImage0 foaf:thumbnail ns90:Thumbnail800x800 .

    ns90:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:80 .
}

ns91:Thumbnail200x200 {
    ns318:CmsImage1 foaf:thumbnail ns91:Thumbnail200x200 .

    ns91:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:44 .
}

ns56:Thumbnail200x200 {
    ns56:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:108 .

    ns128:CmsImage1 foaf:thumbnail ns56:Thumbnail200x200 .
}

ns92:Thumbnail600x600 {
    ns403:CmsImage1 foaf:thumbnail ns92:Thumbnail600x600 .

    ns92:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:83 .
}

ns93:CmsImage1 {
    ns93:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:104 .
}

ns94:Thumbnail600x600 {
    ns185:CmsImage1 foaf:thumbnail ns94:Thumbnail600x600 .

    ns94:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns185:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:62 .
}

ns28:Thumbnail200x200 {
    ns28:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns35:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:76 .

    ns35:CmsImage0 foaf:thumbnail ns28:Thumbnail200x200 .
}

ns95:Thumbnail400x400 {
    ns249:CmsImage0 foaf:thumbnail ns95:Thumbnail400x400 .

    ns95:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns249:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:48 .
}

ns96:Thumbnail200x200 {
    ns382:CmsImage0 foaf:thumbnail ns96:Thumbnail200x200 .

    ns96:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns382:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:organization0 .
}

ns49:Thumbnail400x400 {
    ns49:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:52 .

    ns309:CmsImage1 foaf:thumbnail ns49:Thumbnail400x400 .
}

ns97:CmsImage0 {
    ns97:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns45:work3 .
}

ns98:CmsImage1 {
    ns98:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:6 .
}

ns45:work1Location {
    ns45:work1Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns79:Thumbnail200x200 {
    ns79:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:1 .

    ns343:CmsImage0 foaf:thumbnail ns79:Thumbnail200x200 .
}

ns99:CmsImage1 {
    ns99:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:34 .
}

ns100:Thumbnail400x400 {
    ns365:CmsImage0 foaf:thumbnail ns100:Thumbnail400x400 .

    ns100:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:32 .
}

ns11:Thumbnail200x200 {
    ns11:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:78 .

    ns314:CmsImage0 foaf:thumbnail ns11:Thumbnail200x200 .
}

ns101:Thumbnail600x600 {
    ns101:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:50 .

    ns36:CmsImage1 foaf:thumbnail ns101:Thumbnail600x600 .
}

ns102:Thumbnail200x200 {
    ns107:CmsImage0 foaf:thumbnail ns102:Thumbnail200x200 .

    ns102:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns107:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:73 .
}

ns79:Thumbnail600x600 {
    ns79:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:1 .

    ns343:CmsImage0 foaf:thumbnail ns79:Thumbnail600x600 .
}

ns103:Thumbnail200x200 {
    ns390:CmsImage0 foaf:thumbnail ns103:Thumbnail200x200 .

    ns103:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:92 .
}

dcterms:language {
    dcterms:language a cms:Property ;
        rdfs:label "Language" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> .
}

ns104:Thumbnail400x400 {
    ns230:CmsImage1 foaf:thumbnail ns104:Thumbnail400x400 .

    ns104:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns230:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:97 .
}

ns57:Thumbnail800x800 {
    ns57:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:103 .

    ns346:CmsImage0 foaf:thumbnail ns57:Thumbnail800x800 .
}

ns105:Thumbnail200x200 {
    ns280:CmsImage0 foaf:thumbnail ns105:Thumbnail200x200 .

    ns105:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:106 .
}

dcterms:medium {
    dcterms:medium a cms:Property ;
        rdfs:label "Medium" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> .
}

ns106:Thumbnail800x800 {
    ns256:CmsImage0 foaf:thumbnail ns106:Thumbnail800x800 .

    ns106:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:40 .
}

ns107:CmsImage1 {
    ns107:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:73 .
}

ns108:Thumbnail800x800 {
    ns243:CmsImage0 foaf:thumbnail ns108:Thumbnail800x800 .

    ns108:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns243:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:46 .
}

ns109:Thumbnail600x600 {
    ns396:CmsImage1 foaf:thumbnail ns109:Thumbnail600x600 .

    ns109:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:88 .
}

ns110:CmsImage1 {
    ns110:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:person4 .
}

ns91:Thumbnail400x400 {
    ns91:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:44 .

    ns318:CmsImage1 foaf:thumbnail ns91:Thumbnail400x400 .
}

ns111:Thumbnail200x200 {
    ns402:CmsImage1 foaf:thumbnail ns111:Thumbnail200x200 .

    ns111:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:37 .
}

ns25:96 {
    ns25:96 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 6" ;
        skos:prefLabel "CmsConcept 96" .
}

ns112:Thumbnail200x200 {
    ns58:CmsImage1 foaf:thumbnail ns112:Thumbnail200x200 .

    ns112:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns58:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:7 .
}

ns113:CmsImage1 {
    ns113:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:77 .
}

ns114:Thumbnail400x400 {
    ns114:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns93:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:104 .

    ns93:CmsImage1 foaf:thumbnail ns114:Thumbnail400x400 .
}

ns115:Thumbnail400x400 {
    ns84:CmsImage0 foaf:thumbnail ns115:Thumbnail400x400 .

    ns115:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:79 .
}

ns116:CmsImage1 {
    ns116:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:33 .
}

ns117:Thumbnail600x600 {
    ns117:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns78:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:53 .

    ns78:CmsImage1 foaf:thumbnail ns117:Thumbnail600x600 .
}

ns34:Thumbnail400x400 {
    ns34:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:26 .

    ns257:CmsImage1 foaf:thumbnail ns34:Thumbnail400x400 .
}

ns118:Thumbnail600x600 {
    ns288:CmsImage1 foaf:thumbnail ns118:Thumbnail600x600 .

    ns118:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:105 .
}

ns25:2 {
    ns25:2 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 2" ;
        skos:prefLabel "CmsConcept 2" .
}

ns119:Thumbnail600x600 {
    ns171:CmsImage1 foaf:thumbnail ns119:Thumbnail600x600 .

    ns119:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns171:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:36 .
}

ns120:CmsImage0 {
    ns120:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:35 .
}

ns9:Thumbnail800x800 {
    ns9:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns202:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:95 .

    ns202:CmsImage0 foaf:thumbnail ns9:Thumbnail800x800 .
}

ns25:74 {
    ns25:74 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 4" ;
        skos:prefLabel "CmsConcept 74" .
}

ns69:Thumbnail400x400 {
    ns69:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:74 .

    ns385:CmsImage1 foaf:thumbnail ns69:Thumbnail400x400 .
}

ns121:Thumbnail800x800 {
    ns345:CmsImage1 foaf:thumbnail ns121:Thumbnail800x800 .

    ns121:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:109 .
}

ns122:Thumbnail400x400 {
    ns360:CmsImage0 foaf:thumbnail ns122:Thumbnail400x400 .

    ns122:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:51 .
}

ns123:Thumbnail200x200 {
    ns123:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns41:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns45:work0 .

    ns41:CmsImage0 foaf:thumbnail ns123:Thumbnail200x200 .
}

ns124:Thumbnail800x800 {
    ns340:CmsImage0 foaf:thumbnail ns124:Thumbnail800x800 .

    ns124:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns340:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:5 .
}

vra:culturalContext {
    vra:culturalContext a cms:Property ;
        rdfs:label "Cultural context" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> .
}

ns125:Thumbnail800x800 {
    ns243:CmsImage1 foaf:thumbnail ns125:Thumbnail800x800 .

    ns125:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns243:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:46 .
}

ns126:Thumbnail400x400 {
    ns398:CmsImage1 foaf:thumbnail ns126:Thumbnail400x400 .

    ns126:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:93 .
}

ns9:Thumbnail200x200 {
    ns9:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns202:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:95 .

    ns202:CmsImage0 foaf:thumbnail ns9:Thumbnail200x200 .
}

ns127:CmsImage1 {
    ns127:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:organization1 .
}

ns45:work2Location {
    ns45:work2Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns128:CmsImage0 {
    ns128:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:108 .
}

ns45:work2Opening {
    ns45:work2Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-30"^^xsd:date ;
        dcterms:description _:Nfa29969d136d4fd59f0337a93f4cb686 ;
        dcterms:spatial _:Nba137ba30dac4969b9eb89f6c0e172d0 ;
        dcterms:title "CmsCollection0CmsWork2 opening" ;
        cms:work ns45:work2 .

    _:Nba137ba30dac4969b9eb89f6c0e172d0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nfa29969d136d4fd59f0337a93f4cb686 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns129:Thumbnail600x600 {
    ns399:CmsImage1 foaf:thumbnail ns129:Thumbnail600x600 .

    ns129:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns27:work5 .
}

ns130:Thumbnail600x600 {
    ns387:CmsImage1 foaf:thumbnail ns130:Thumbnail600x600 .

    ns130:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:freestandingwork11 .
}

ns131:Thumbnail800x800 {
    ns327:CmsImage1 foaf:thumbnail ns131:Thumbnail800x800 .

    ns131:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:61 .
}

ns43:freestandingwork10Creation {
    ns43:freestandingwork10Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:organization2,
            ns43:organization3 ;
        dcterms:date _:N6d843813b61c4b1d87bf079a59fea5e9 ;
        dcterms:description _:N84697bd60dc24c469cf3b23b73cdfe5d ;
        dcterms:spatial ns43:freestandingwork10Location ;
        dcterms:title "FreestandingWork10 creation" ;
        cms:work ns43:freestandingwork10 .

    _:N6d843813b61c4b1d87bf079a59fea5e9 a cms:DateTimeDescription ;
        time:day "---22"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N84697bd60dc24c469cf3b23b73cdfe5d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns132:Thumbnail200x200 {
    ns288:CmsImage0 foaf:thumbnail ns132:Thumbnail200x200 .

    ns132:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:105 .
}

ns133:Thumbnail400x400 {
    ns171:CmsImage0 foaf:thumbnail ns133:Thumbnail400x400 .

    ns133:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns171:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:36 .
}

ns2:Thumbnail200x200 {
    ns2:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns340:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:5 .

    ns340:CmsImage1 foaf:thumbnail ns2:Thumbnail200x200 .
}

ns134:Thumbnail200x200 {
    ns261:CmsImage1 foaf:thumbnail ns134:Thumbnail200x200 .

    ns134:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:94 .
}

ns135:Thumbnail600x600 {
    ns36:CmsImage0 foaf:thumbnail ns135:Thumbnail600x600 .

    ns135:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:50 .
}

ns136:Thumbnail800x800 {
    ns331:CmsImage0 foaf:thumbnail ns136:Thumbnail800x800 .

    ns136:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns331:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:39 .
}

ns137:Thumbnail400x400 {
    ns330:CmsImage1 foaf:thumbnail ns137:Thumbnail400x400 .

    ns137:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns330:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:19 .
}

ns138:Thumbnail600x600 {
    ns371:CmsImage1 foaf:thumbnail ns138:Thumbnail600x600 .

    ns138:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:45 .
}

ns139:Thumbnail200x200 {
    ns139:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns19:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:54 .

    ns19:CmsImage0 foaf:thumbnail ns139:Thumbnail200x200 .
}

ns140:Thumbnail800x800 {
    ns403:CmsImage0 foaf:thumbnail ns140:Thumbnail800x800 .

    ns140:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:83 .
}

ns141:Thumbnail400x400 {
    ns273:CmsImage0 foaf:thumbnail ns141:Thumbnail400x400 .

    ns141:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns273:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:2 .
}

ns142:Thumbnail200x200 {
    ns154:CmsImage0 foaf:thumbnail ns142:Thumbnail200x200 .

    ns142:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns154:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:27 .
}

ns143:Thumbnail200x200 {
    ns189:CmsImage1 foaf:thumbnail ns143:Thumbnail200x200 .

    ns143:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns189:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:70 .
}

ns144:Thumbnail400x400 {
    ns354:CmsImage1 foaf:thumbnail ns144:Thumbnail400x400 .

    ns144:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:23 .
}

ns145:Thumbnail400x400 {
    ns267:CmsImage1 foaf:thumbnail ns145:Thumbnail400x400 .

    ns145:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns267:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:68 .
}

ns25:24 {
    ns25:24 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 4" ;
        skos:prefLabel "CmsConcept 24" .
}

ns132:Thumbnail800x800 {
    ns132:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:105 .

    ns288:CmsImage0 foaf:thumbnail ns132:Thumbnail800x800 .
}

ns78:CmsImage0 {
    ns78:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:53 .
}

ns146:CmsImage1 {
    ns146:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:58 .
}

ns138:Thumbnail400x400 {
    ns138:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:45 .

    ns371:CmsImage1 foaf:thumbnail ns138:Thumbnail400x400 .
}

ns147:Thumbnail600x600 {
    ns207:CmsImage1 foaf:thumbnail ns147:Thumbnail600x600 .

    ns147:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:42 .
}

ns53:Thumbnail600x600 {
    ns53:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns275:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:65 .

    ns275:CmsImage1 foaf:thumbnail ns53:Thumbnail600x600 .
}

ns148:Thumbnail800x800 {
    ns371:CmsImage0 foaf:thumbnail ns148:Thumbnail800x800 .

    ns148:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:45 .
}

ns149:Thumbnail200x200 {
    ns324:CmsImage0 foaf:thumbnail ns149:Thumbnail200x200 .

    ns149:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:99 .
}

ns150:Thumbnail800x800 {
    ns335:CmsImage1 foaf:thumbnail ns150:Thumbnail800x800 .

    ns150:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:12 .
}

ns25:98 {
    ns25:98 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 8" ;
        skos:prefLabel "CmsConcept 98" .
}

ns151:Thumbnail800x800 {
    ns299:CmsImage1 foaf:thumbnail ns151:Thumbnail800x800 .

    ns151:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns299:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:person3 .
}

ns152:CmsImage0 {
    ns152:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:person2 .
}

ns153:Thumbnail200x200 {
    ns380:CmsImage0 foaf:thumbnail ns153:Thumbnail200x200 .

    ns153:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:41 .
}

ns154:CmsImage0 {
    ns154:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:27 .
}

ns25:10 {
    ns25:10 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 0" ;
        skos:prefLabel "CmsConcept 10" .
}

ns155:Thumbnail800x800 {
    ns285:CmsImage1 foaf:thumbnail ns155:Thumbnail800x800 .

    ns155:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:82 .
}

ns92:Thumbnail400x400 {
    ns92:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:83 .

    ns403:CmsImage1 foaf:thumbnail ns92:Thumbnail400x400 .
}

ns156:Thumbnail600x600 {
    ns387:CmsImage0 foaf:thumbnail ns156:Thumbnail600x600 .

    ns156:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:freestandingwork11 .
}

ns118:Thumbnail800x800 {
    ns118:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:105 .

    ns288:CmsImage1 foaf:thumbnail ns118:Thumbnail800x800 .
}

ns157:Thumbnail600x600 {
    ns404:CmsImage0 foaf:thumbnail ns157:Thumbnail600x600 .

    ns157:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:43 .
}

ns43:collection1 {
    ns43:collection1 a cms:Collection ;
        dcterms:title "CmsCollection1" .
}

ns158:CmsImage0 {
    ns158:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:56 .
}

ns159:Thumbnail800x800 {
    ns251:CmsImage1 foaf:thumbnail ns159:Thumbnail800x800 .

    ns159:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:85 .
}

ns160:Thumbnail200x200 {
    ns160:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns78:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:53 .

    ns78:CmsImage0 foaf:thumbnail ns160:Thumbnail200x200 .
}

ns25:99 {
    ns25:99 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 9" ;
        skos:prefLabel "CmsConcept 99" .
}

ns25:41 {
    ns25:41 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 1" ;
        skos:prefLabel "CmsConcept 41" .
}

ns161:Thumbnail800x800 {
    ns275:CmsImage0 foaf:thumbnail ns161:Thumbnail800x800 .

    ns161:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns275:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:65 .
}

ns51:Thumbnail400x400 {
    ns51:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:23 .

    ns354:CmsImage0 foaf:thumbnail ns51:Thumbnail400x400 .
}

ns162:Thumbnail200x200 {
    ns342:CmsImage0 foaf:thumbnail ns162:Thumbnail200x200 .

    ns162:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:freestandingwork10 .
}

ns163:CmsImage0 {
    ns163:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:49 .
}

ns164:Thumbnail400x400 {
    ns394:CmsImage1 foaf:thumbnail ns164:Thumbnail400x400 .

    ns164:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:81 .
}

ns165:Thumbnail800x800 {
    ns375:CmsImage0 foaf:thumbnail ns165:Thumbnail800x800 .

    ns165:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:64 .
}

ns166:Thumbnail800x800 {
    ns357:CmsImage1 foaf:thumbnail ns166:Thumbnail800x800 .

    ns166:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns357:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:18 .
}

ns124:Thumbnail600x600 {
    ns124:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns340:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:5 .

    ns340:CmsImage0 foaf:thumbnail ns124:Thumbnail600x600 .
}

ns167:Thumbnail800x800 {
    ns163:CmsImage1 foaf:thumbnail ns167:Thumbnail800x800 .

    ns167:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns163:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:49 .
}

ns43:freestandingwork10Opening {
    ns43:freestandingwork10Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-22"^^xsd:date ;
        dcterms:description _:N84697bd60dc24c469cf3b23b73cdfe5d ;
        dcterms:spatial _:N8ee1b441e72143f0862cf5016f68cb6f ;
        dcterms:title "FreestandingWork10 opening" ;
        cms:work ns43:freestandingwork10 .

    _:N8ee1b441e72143f0862cf5016f68cb6f a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N84697bd60dc24c469cf3b23b73cdfe5d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns168:Thumbnail400x400 {
    ns168:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:person4 .

    ns110:CmsImage1 foaf:thumbnail ns168:Thumbnail400x400 .
}

ns169:Thumbnail400x400 {
    ns351:CmsImage0 foaf:thumbnail ns169:Thumbnail400x400 .

    ns169:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns45:work1 .
}

ns73:Thumbnail600x600 {
    ns73:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:94 .

    ns261:CmsImage0 foaf:thumbnail ns73:Thumbnail600x600 .
}

ns170:CmsImage0 {
    ns170:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:person0 .
}

ns21:Thumbnail400x400 {
    ns21:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:29 .

    ns333:CmsImage0 foaf:thumbnail ns21:Thumbnail400x400 .
}

ns139:Thumbnail600x600 {
    ns139:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns19:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:54 .

    ns19:CmsImage0 foaf:thumbnail ns139:Thumbnail600x600 .
}

ns171:CmsImage0 {
    ns171:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:36 .
}

ns172:Thumbnail800x800 {
    ns110:CmsImage0 foaf:thumbnail ns172:Thumbnail800x800 .

    ns172:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:person4 .
}

ns99:CmsImage0 {
    ns99:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:34 .
}

ns173:Thumbnail200x200 {
    ns173:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns58:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:7 .

    ns58:CmsImage0 foaf:thumbnail ns173:Thumbnail200x200 .
}

ns122:Thumbnail800x800 {
    ns122:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:51 .

    ns360:CmsImage0 foaf:thumbnail ns122:Thumbnail800x800 .
}

ns2:Thumbnail600x600 {
    ns2:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns340:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:5 .

    ns340:CmsImage1 foaf:thumbnail ns2:Thumbnail600x600 .
}

ns37:Thumbnail200x200 {
    ns37:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns216:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:89 .

    ns216:CmsImage1 foaf:thumbnail ns37:Thumbnail200x200 .
}

ns70:Thumbnail600x600 {
    ns70:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns45:work1 .

    ns351:CmsImage1 foaf:thumbnail ns70:Thumbnail600x600 .
}

ns135:Thumbnail800x800 {
    ns135:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:50 .

    ns36:CmsImage0 foaf:thumbnail ns135:Thumbnail800x800 .
}

ns136:Thumbnail200x200 {
    ns136:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns331:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:39 .

    ns331:CmsImage0 foaf:thumbnail ns136:Thumbnail200x200 .
}

ns174:Thumbnail400x400 {
    ns174:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns97:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns45:work3 .

    ns97:CmsImage0 foaf:thumbnail ns174:Thumbnail400x400 .
}

ns175:Thumbnail400x400 {
    ns206:CmsImage1 foaf:thumbnail ns175:Thumbnail400x400 .

    ns175:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns206:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:3 .
}

ns176:Thumbnail400x400 {
    ns176:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns4:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:55 .

    ns4:CmsImage0 foaf:thumbnail ns176:Thumbnail400x400 .
}

ns177:Thumbnail200x200 {
    ns249:CmsImage1 foaf:thumbnail ns177:Thumbnail200x200 .

    ns177:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns249:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:48 .
}

ns130:Thumbnail800x800 {
    ns130:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:freestandingwork11 .

    ns387:CmsImage1 foaf:thumbnail ns130:Thumbnail800x800 .
}

ns178:Thumbnail400x400 {
    ns279:CmsImage1 foaf:thumbnail ns178:Thumbnail400x400 .

    ns178:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:0 .
}

ns179:CmsImage1 {
    ns179:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:57 .
}

ns180:CmsImage1 {
    ns180:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:66 .
}

ns181:Thumbnail400x400 {
    ns394:CmsImage0 foaf:thumbnail ns181:Thumbnail400x400 .

    ns181:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:81 .
}

ns84:CmsImage0 {
    ns84:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:79 .
}

ns124:Thumbnail200x200 {
    ns124:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns340:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:5 .

    ns340:CmsImage0 foaf:thumbnail ns124:Thumbnail200x200 .
}

ns27:work4Creation {
    ns27:work4Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:person1,
            ns43:person2 ;
        dcterms:date _:N6d615c2cb0b8452699d49b2ce5081b65 ;
        dcterms:description _:N940ba015246c4205852489fcba411af1 ;
        dcterms:spatial ns27:work4Location ;
        dcterms:title "CmsCollection1CmsWork4 creation" ;
        cms:work ns27:work4 .

    _:N6d615c2cb0b8452699d49b2ce5081b65 a cms:DateTimeDescription ;
        time:day "---28"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N940ba015246c4205852489fcba411af1 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns144:Thumbnail200x200 {
    ns144:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:23 .

    ns354:CmsImage1 foaf:thumbnail ns144:Thumbnail200x200 .
}

ns182:Thumbnail200x200 {
    ns345:CmsImage0 foaf:thumbnail ns182:Thumbnail200x200 .

    ns182:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:109 .
}

_:Ne4787ee499e54c9a9c044b8e48081f44 {
    _:Ne4787ee499e54c9a9c044b8e48081f44 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N890bcd392da14df0b30049adcabc17e2 ;
        dcterms:spatial _:N6c006e2d41c3481b91395dd87265b5b6 ;
        dcterms:title "CmsCollection0CmsWork0 closing" ;
        cms:work ns45:work0 .

    _:N6c006e2d41c3481b91395dd87265b5b6 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N890bcd392da14df0b30049adcabc17e2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns183:Thumbnail600x600 {
    ns158:CmsImage1 foaf:thumbnail ns183:Thumbnail600x600 .

    ns183:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:56 .
}

ns184:Thumbnail400x400 {
    ns184:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns180:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:66 .

    ns180:CmsImage1 foaf:thumbnail ns184:Thumbnail400x400 .
}

ns54:Thumbnail600x600 {
    ns54:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:75 .

    ns348:CmsImage0 foaf:thumbnail ns54:Thumbnail600x600 .
}

ns105:Thumbnail600x600 {
    ns105:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:106 .

    ns280:CmsImage0 foaf:thumbnail ns105:Thumbnail600x600 .
}

ns159:Thumbnail600x600 {
    ns159:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:85 .

    ns251:CmsImage1 foaf:thumbnail ns159:Thumbnail600x600 .
}

ns38:Thumbnail400x400 {
    ns38:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:96 .

    ns377:CmsImage1 foaf:thumbnail ns38:Thumbnail400x400 .
}

ns185:CmsImage1 {
    ns185:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:62 .
}

ns186:CmsImage1 {
    ns186:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:72 .
}

ns122:Thumbnail600x600 {
    ns122:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:51 .

    ns360:CmsImage0 foaf:thumbnail ns122:Thumbnail600x600 .
}

ns187:Thumbnail200x200 {
    ns296:CmsImage0 foaf:thumbnail ns187:Thumbnail200x200 .

    ns187:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:9 .
}

ns188:Thumbnail800x800 {
    ns188:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns116:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:33 .

    ns116:CmsImage1 foaf:thumbnail ns188:Thumbnail800x800 .
}

ns189:CmsImage1 {
    ns189:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:70 .
}

ns169:Thumbnail600x600 {
    ns169:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns45:work1 .

    ns351:CmsImage0 foaf:thumbnail ns169:Thumbnail600x600 .
}

ns190:Thumbnail800x800 {
    ns190:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns170:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:person0 .

    ns170:CmsImage0 foaf:thumbnail ns190:Thumbnail800x800 .
}

ns191:Thumbnail400x400 {
    ns127:CmsImage0 foaf:thumbnail ns191:Thumbnail400x400 .

    ns191:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns127:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:organization1 .
}

ns25:31 {
    ns25:31 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 1" ;
        skos:prefLabel "CmsConcept 31" .
}

ns64:Thumbnail600x600 {
    ns64:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:10 .

    ns372:CmsImage0 foaf:thumbnail ns64:Thumbnail600x600 .
}

ns192:Thumbnail800x800 {
    ns267:CmsImage0 foaf:thumbnail ns192:Thumbnail800x800 .

    ns192:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns267:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:68 .
}

ns193:Thumbnail400x400 {
    ns256:CmsImage1 foaf:thumbnail ns193:Thumbnail400x400 .

    ns193:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:40 .
}

ns194:Thumbnail600x600 {
    ns335:CmsImage0 foaf:thumbnail ns194:Thumbnail600x600 .

    ns194:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:12 .
}

ns195:Thumbnail200x200 {
    ns197:CmsImage0 foaf:thumbnail ns195:Thumbnail200x200 .

    ns195:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:107 .
}

ns196:Thumbnail800x800 {
    ns308:CmsImage0 foaf:thumbnail ns196:Thumbnail800x800 .

    ns196:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:87 .
}

ns197:CmsImage1 {
    ns197:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:107 .
}

ns24:Thumbnail800x800 {
    ns24:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:69 .

    ns294:CmsImage0 foaf:thumbnail ns24:Thumbnail800x800 .
}

ns198:Thumbnail200x200 {
    ns390:CmsImage1 foaf:thumbnail ns198:Thumbnail200x200 .

    ns198:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:92 .
}

ns75:Thumbnail800x800 {
    ns75:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:28 .

    ns326:CmsImage0 foaf:thumbnail ns75:Thumbnail800x800 .
}

ns199:Thumbnail200x200 {
    ns346:CmsImage1 foaf:thumbnail ns199:Thumbnail200x200 .

    ns199:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:103 .
}

ns27:work4Location {
    ns27:work4Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns55:Thumbnail600x600 {
    ns55:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:72 .

    ns186:CmsImage1 foaf:thumbnail ns55:Thumbnail600x600 .
}

ns25:15 {
    ns25:15 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 5" ;
        skos:prefLabel "CmsConcept 15" .
}

ns200:CmsImage1 {
    ns200:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:16 .
}

ns121:Thumbnail200x200 {
    ns121:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:109 .

    ns345:CmsImage1 foaf:thumbnail ns121:Thumbnail200x200 .
}

ns167:Thumbnail600x600 {
    ns167:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns163:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:49 .

    ns163:CmsImage1 foaf:thumbnail ns167:Thumbnail600x600 .
}

ns201:Thumbnail600x600 {
    ns146:CmsImage0 foaf:thumbnail ns201:Thumbnail600x600 .

    ns201:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:58 .
}

ns202:CmsImage0 {
    ns202:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:95 .
}

dcterms:extent {
    dcterms:extent a cms:Property ;
        rdfs:label "Extent" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> .
}

ns137:Thumbnail200x200 {
    ns137:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns330:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:19 .

    ns330:CmsImage1 foaf:thumbnail ns137:Thumbnail200x200 .
}

ns25:6 {
    ns25:6 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 6" ;
        skos:prefLabel "CmsConcept 6" .
}

ns203:Thumbnail800x800 {
    ns289:CmsImage0 foaf:thumbnail ns203:Thumbnail800x800 .

    ns203:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns289:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns27:work6 .
}

ns204:CmsImage1 {
    ns204:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:11 .
}

ns25:54 {
    ns25:54 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 4" ;
        skos:prefLabel "CmsConcept 54" .
}

ns96:Thumbnail400x400 {
    ns96:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns382:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:organization0 .

    ns382:CmsImage0 foaf:thumbnail ns96:Thumbnail400x400 .
}

ns205:Thumbnail200x200 {
    ns205:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:11 .

    ns204:CmsImage1 foaf:thumbnail ns205:Thumbnail200x200 .
}

ns27:work5Creation {
    ns27:work5Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:person2,
            ns43:person3 ;
        dcterms:date _:Ne400be72bb524433865e4aa815e4ece7 ;
        dcterms:spatial ns27:work5Location ;
        dcterms:title "CmsCollection1CmsWork5 creation" ;
        cms:work ns27:work5 .

    _:Ne400be72bb524433865e4aa815e4ece7 a cms:DateTimeDescription ;
        time:day "---27"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns197:CmsImage0 {
    ns197:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:107 .
}

ns206:CmsImage0 {
    ns206:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:3 .
}

ns207:CmsImage0 {
    ns207:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:42 .
}

ns201:Thumbnail200x200 {
    ns201:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:58 .

    ns146:CmsImage0 foaf:thumbnail ns201:Thumbnail200x200 .
}

ns15:Thumbnail200x200 {
    ns15:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns19:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:54 .

    ns19:CmsImage1 foaf:thumbnail ns15:Thumbnail200x200 .
}

ns208:Thumbnail600x600 {
    ns352:CmsImage1 foaf:thumbnail ns208:Thumbnail600x600 .

    ns208:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:8 .
}

ns209:Thumbnail200x200 {
    ns209:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:67 .

    ns89:CmsImage1 foaf:thumbnail ns209:Thumbnail200x200 .
}

ns127:CmsImage0 {
    ns127:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:organization1 .
}

ns210:Thumbnail200x200 {
    ns393:CmsImage1 foaf:thumbnail ns210:Thumbnail200x200 .

    ns210:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:21 .
}

ns211:Thumbnail400x400 {
    ns360:CmsImage1 foaf:thumbnail ns211:Thumbnail400x400 .

    ns211:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:51 .
}

ns212:Thumbnail200x200 {
    ns220:CmsImage1 foaf:thumbnail ns212:Thumbnail200x200 .

    ns212:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:22 .
}

ns213:Thumbnail200x200 {
    ns213:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:58 .

    ns146:CmsImage1 foaf:thumbnail ns213:Thumbnail200x200 .
}

ns126:Thumbnail800x800 {
    ns126:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:93 .

    ns398:CmsImage1 foaf:thumbnail ns126:Thumbnail800x800 .
}

ns112:Thumbnail800x800 {
    ns112:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns58:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:7 .

    ns58:CmsImage1 foaf:thumbnail ns112:Thumbnail800x800 .
}

ns214:Thumbnail200x200 {
    ns214:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:57 .

    ns179:CmsImage1 foaf:thumbnail ns214:Thumbnail200x200 .
}

ns133:Thumbnail800x800 {
    ns133:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns171:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:36 .

    ns171:CmsImage0 foaf:thumbnail ns133:Thumbnail800x800 .
}

ns129:Thumbnail200x200 {
    ns129:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns27:work5 .

    ns399:CmsImage1 foaf:thumbnail ns129:Thumbnail200x200 .
}

ns215:CmsImage1 {
    ns215:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:collection1 .
}

ns42:Thumbnail600x600 {
    ns42:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns206:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:3 .

    ns206:CmsImage0 foaf:thumbnail ns42:Thumbnail600x600 .
}

ns27:work6 {
    ns27:work6 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork6 alternative title 0",
            "CmsCollection1CmsWork6 alternative title 1" ;
        dcterms:contributor _:Ned764d7bccc54824b93aea840fc18856,
            _:Nf96d0813c0894fd0b8bdb2dc8759038b ;
        dcterms:creator ns43:person3,
            ns43:person4 ;
        dcterms:description _:N9d7629395a754994a79a19894d994109 ;
        dcterms:extent ns25:16,
            ns25:17 ;
        dcterms:identifier "CmsCollection1CmsWork6Id0",
            "CmsCollection1CmsWork6Id1" ;
        dcterms:language ns25:26,
            ns25:27 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:46,
            ns25:47 ;
        dcterms:provenance "CmsCollection1CmsWork6 provenance 0",
            "CmsCollection1CmsWork6 provenance 1" ;
        dcterms:publisher ns25:56,
            ns25:57 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 rights holder" ;
        dcterms:source ns25:66,
            ns25:67 ;
        dcterms:spatial ns27:work6Location ;
        dcterms:subject ns25:86,
            ns25:87 ;
        dcterms:title "CmsCollection1CmsWork6" ;
        dcterms:type ns25:106,
            ns25:107 ;
        vra:culturalContext ns25:6,
            ns25:7 ;
        vra:material ns25:36,
            ns25:37 ;
        vra:technique ns25:96,
            ns25:97 ;
        cms:collection ns43:collection1 ;
        foaf:page <http://example.com/work/6> .

    _:Ned764d7bccc54824b93aea840fc18856 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 1" .

    _:Nf96d0813c0894fd0b8bdb2dc8759038b a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 0" .

    _:N9d7629395a754994a79a19894d994109 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns82:Thumbnail800x800 {
    ns82:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:61 .

    ns327:CmsImage0 foaf:thumbnail ns82:Thumbnail800x800 .
}

ns216:CmsImage1 {
    ns216:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:89 .
}

ns39:Thumbnail600x600 {
    ns39:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns113:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:77 .

    ns113:CmsImage1 foaf:thumbnail ns39:Thumbnail600x600 .
}

ns217:Thumbnail800x800 {
    ns152:CmsImage1 foaf:thumbnail ns217:Thumbnail800x800 .

    ns217:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns152:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:person2 .
}

ns218:Thumbnail600x600 {
    ns300:CmsImage1 foaf:thumbnail ns218:Thumbnail600x600 .

    ns218:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:organization4 .
}

dcterms:subject {
    dcterms:subject a cms:Property ;
        rdfs:label "Subject" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> .
}

ns219:Thumbnail200x200 {
    ns97:CmsImage1 foaf:thumbnail ns219:Thumbnail200x200 .

    ns219:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns97:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns45:work3 .
}

ns220:CmsImage0 {
    ns220:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:22 .
}

ns221:CmsImage1 {
    ns221:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:84 .
}

ns222:Thumbnail200x200 {
    ns189:CmsImage0 foaf:thumbnail ns222:Thumbnail200x200 .

    ns222:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns189:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:70 .
}

ns223:Thumbnail400x400 {
    ns318:CmsImage0 foaf:thumbnail ns223:Thumbnail400x400 .

    ns223:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:44 .
}

ns224:Thumbnail800x800 {
    ns397:CmsImage0 foaf:thumbnail ns224:Thumbnail800x800 .

    ns224:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns45:work2 .
}

ns25:100 {
    ns25:100 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 0" ;
        skos:prefLabel "CmsConcept 100" .
}

ns73:Thumbnail400x400 {
    ns73:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:94 .

    ns261:CmsImage0 foaf:thumbnail ns73:Thumbnail400x400 .
}

ns225:Thumbnail200x200 {
    ns395:CmsImage0 foaf:thumbnail ns225:Thumbnail200x200 .

    ns225:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns27:work4 .
}

ns226:Thumbnail600x600 {
    ns234:CmsImage0 foaf:thumbnail ns226:Thumbnail600x600 .

    ns226:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns234:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:47 .
}

ns227:Thumbnail800x800 {
    ns202:CmsImage1 foaf:thumbnail ns227:Thumbnail800x800 .

    ns227:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns202:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:95 .
}

ns228:Thumbnail200x200 {
    ns228:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns62:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:60 .

    ns62:CmsImage1 foaf:thumbnail ns228:Thumbnail200x200 .
}

ns229:Thumbnail400x400 {
    ns404:CmsImage1 foaf:thumbnail ns229:Thumbnail400x400 .

    ns229:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:43 .
}

ns230:CmsImage0 {
    ns230:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:97 .
}

ns231:CmsImage0 {
    ns231:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:102 .
}

ns8:Thumbnail200x200 {
    ns8:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns265:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:63 .

    ns265:CmsImage0 foaf:thumbnail ns8:Thumbnail200x200 .
}

ns212:Thumbnail800x800 {
    ns212:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:22 .

    ns220:CmsImage1 foaf:thumbnail ns212:Thumbnail800x800 .
}

dcterms:publisher {
    dcterms:publisher a cms:Property ;
        rdfs:label "Publisher" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> .
}

ns232:CmsImage0 {
    ns232:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:98 .
}

ns233:Thumbnail800x800 {
    ns62:CmsImage0 foaf:thumbnail ns233:Thumbnail800x800 .

    ns233:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns62:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:60 .
}

ns234:CmsImage0 {
    ns234:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:47 .
}

ns192:Thumbnail200x200 {
    ns192:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns267:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:68 .

    ns267:CmsImage0 foaf:thumbnail ns192:Thumbnail200x200 .
}

ns112:Thumbnail400x400 {
    ns112:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns58:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:7 .

    ns58:CmsImage1 foaf:thumbnail ns112:Thumbnail400x400 .
}

ns12:Thumbnail200x200 {
    ns12:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:8 .

    ns352:CmsImage0 foaf:thumbnail ns12:Thumbnail200x200 .
}

ns31:Thumbnail200x200 {
    ns31:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:11 .

    ns204:CmsImage0 foaf:thumbnail ns31:Thumbnail200x200 .
}

ns235:Thumbnail200x200 {
    ns235:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:79 .

    ns84:CmsImage1 foaf:thumbnail ns235:Thumbnail200x200 .
}

ns111:Thumbnail400x400 {
    ns111:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:37 .

    ns402:CmsImage1 foaf:thumbnail ns111:Thumbnail400x400 .
}

ns160:Thumbnail600x600 {
    ns160:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns78:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:53 .

    ns78:CmsImage0 foaf:thumbnail ns160:Thumbnail600x600 .
}

ns25:91 {
    ns25:91 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 1" ;
        skos:prefLabel "CmsConcept 91" .
}

ns236:Thumbnail800x800 {
    ns236:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns35:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:76 .

    ns35:CmsImage1 foaf:thumbnail ns236:Thumbnail800x800 .
}

ns237:Thumbnail400x400 {
    ns278:CmsImage1 foaf:thumbnail ns237:Thumbnail400x400 .

    ns237:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:4 .
}

ns226:Thumbnail400x400 {
    ns226:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns234:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:47 .

    ns234:CmsImage0 foaf:thumbnail ns226:Thumbnail400x400 .
}

ns25:1 {
    ns25:1 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 1" ;
        skos:prefLabel "CmsConcept 1" .
}

ns238:Thumbnail400x400 {
    ns113:CmsImage0 foaf:thumbnail ns238:Thumbnail400x400 .

    ns238:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns113:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:77 .
}

ns239:CmsImage1 {
    ns239:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:30 .
}

ns47:Thumbnail200x200 {
    ns47:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns4:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:55 .

    ns4:CmsImage1 foaf:thumbnail ns47:Thumbnail200x200 .
}

ns240:Thumbnail600x600 {
    ns374:CmsImage0 foaf:thumbnail ns240:Thumbnail600x600 .

    ns240:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:59 .
}

ns241:Thumbnail200x200 {
    ns41:CmsImage1 foaf:thumbnail ns241:Thumbnail200x200 .

    ns241:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns41:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns45:work0 .
}

ns33:Thumbnail200x200 {
    ns33:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:57 .

    ns179:CmsImage0 foaf:thumbnail ns33:Thumbnail200x200 .
}

ns43:person2 {
    ns43:person2 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "2, CmsPerson" ;
        foaf:familyName "2" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 2" ;
        foaf:page ns43:person2page .
}

ns117:Thumbnail400x400 {
    ns117:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns78:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:53 .

    ns78:CmsImage1 foaf:thumbnail ns117:Thumbnail400x400 .
}

ns5:Thumbnail800x800 {
    ns5:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:75 .

    ns348:CmsImage1 foaf:thumbnail ns5:Thumbnail800x800 .
}

ns242:Thumbnail400x400 {
    ns289:CmsImage1 foaf:thumbnail ns242:Thumbnail400x400 .

    ns242:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns289:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns27:work6 .
}

ns243:CmsImage0 {
    ns243:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:46 .
}

ns27:work7Creation {
    ns27:work7Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:organization0,
            ns43:person4 ;
        dcterms:date _:N16380f4eb0e44a4fba65115a09723111 ;
        dcterms:spatial ns27:work7Location ;
        dcterms:title "CmsCollection1CmsWork7 creation" ;
        cms:work ns27:work7 .

    _:N16380f4eb0e44a4fba65115a09723111 a cms:DateTimeDescription ;
        time:day "---25"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns244:Thumbnail400x400 {
    ns397:CmsImage1 foaf:thumbnail ns244:Thumbnail400x400 .

    ns244:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns45:work2 .
}

ns25:35 {
    ns25:35 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 5" ;
        skos:prefLabel "CmsConcept 35" .
}

ns25:109 {
    ns25:109 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 9" ;
        skos:prefLabel "CmsConcept 109" .
}

ns225:Thumbnail600x600 {
    ns225:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns27:work4 .

    ns395:CmsImage0 foaf:thumbnail ns225:Thumbnail600x600 .
}

ns141:Thumbnail800x800 {
    ns141:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns273:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:2 .

    ns273:CmsImage0 foaf:thumbnail ns141:Thumbnail800x800 .
}

ns245:Thumbnail400x400 {
    ns260:CmsImage0 foaf:thumbnail ns245:Thumbnail400x400 .

    ns245:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns260:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:31 .
}

ns28:Thumbnail800x800 {
    ns28:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns35:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:76 .

    ns35:CmsImage0 foaf:thumbnail ns28:Thumbnail800x800 .
}

ns181:Thumbnail800x800 {
    ns181:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:81 .

    ns394:CmsImage0 foaf:thumbnail ns181:Thumbnail800x800 .
}

ns246:Thumbnail600x600 {
    ns50:CmsImage0 foaf:thumbnail ns246:Thumbnail600x600 .

    ns246:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns50:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:100 .
}

ns247:Thumbnail800x800 {
    ns231:CmsImage1 foaf:thumbnail ns247:Thumbnail800x800 .

    ns247:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:102 .
}

ns208:Thumbnail400x400 {
    ns208:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:8 .

    ns352:CmsImage1 foaf:thumbnail ns208:Thumbnail400x400 .
}

ns113:CmsImage0 {
    ns113:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:77 .
}

ns211:Thumbnail800x800 {
    ns211:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:51 .

    ns360:CmsImage1 foaf:thumbnail ns211:Thumbnail800x800 .
}

ns187:Thumbnail800x800 {
    ns187:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:9 .

    ns296:CmsImage0 foaf:thumbnail ns187:Thumbnail800x800 .
}

ns27:work6Opening {
    ns27:work6Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-26"^^xsd:date ;
        dcterms:description _:N9d7629395a754994a79a19894d994109 ;
        dcterms:spatial _:N3da56120a0f940f68a23b81cc9338b76 ;
        dcterms:title "CmsCollection1CmsWork6 opening" ;
        cms:work ns27:work6 .

    _:N3da56120a0f940f68a23b81cc9338b76 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N9d7629395a754994a79a19894d994109 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns248:Thumbnail600x600 {
    ns248:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns239:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:30 .

    ns239:CmsImage1 foaf:thumbnail ns248:Thumbnail600x600 .
}

ns184:Thumbnail600x600 {
    ns184:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns180:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:66 .

    ns180:CmsImage1 foaf:thumbnail ns184:Thumbnail600x600 .
}

ns249:CmsImage0 {
    ns249:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:48 .
}

ns164:Thumbnail200x200 {
    ns164:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:81 .

    ns394:CmsImage1 foaf:thumbnail ns164:Thumbnail200x200 .
}

ns178:Thumbnail800x800 {
    ns178:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:0 .

    ns279:CmsImage1 foaf:thumbnail ns178:Thumbnail800x800 .
}

ns250:Thumbnail400x400 {
    ns255:CmsImage1 foaf:thumbnail ns250:Thumbnail400x400 .

    ns250:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns255:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:38 .
}

ns251:CmsImage0 {
    ns251:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:85 .
}

ns252:Thumbnail400x400 {
    ns221:CmsImage0 foaf:thumbnail ns252:Thumbnail400x400 .

    ns252:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:84 .
}

ns104:Thumbnail200x200 {
    ns104:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns230:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:97 .

    ns230:CmsImage1 foaf:thumbnail ns104:Thumbnail200x200 .
}

ns101:Thumbnail400x400 {
    ns101:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:50 .

    ns36:CmsImage1 foaf:thumbnail ns101:Thumbnail400x400 .
}

ns210:Thumbnail600x600 {
    ns210:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:21 .

    ns393:CmsImage1 foaf:thumbnail ns210:Thumbnail600x600 .
}

ns246:Thumbnail400x400 {
    ns246:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns50:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:100 .

    ns50:CmsImage0 foaf:thumbnail ns246:Thumbnail400x400 .
}

ns25:13 {
    ns25:13 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 3" ;
        skos:prefLabel "CmsConcept 13" .
}

ns100:Thumbnail800x800 {
    ns100:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:32 .

    ns365:CmsImage0 foaf:thumbnail ns100:Thumbnail800x800 .
}

ns253:Thumbnail600x600 {
    ns328:CmsImage0 foaf:thumbnail ns253:Thumbnail600x600 .

    ns253:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:freestandingwork8 .
}

ns254:Thumbnail800x800 {
    ns398:CmsImage0 foaf:thumbnail ns254:Thumbnail800x800 .

    ns254:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:93 .
}

ns255:CmsImage1 {
    ns255:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:38 .
}

ns25:65 {
    ns25:65 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 5" ;
        skos:prefLabel "CmsConcept 65" .
}

ns256:CmsImage0 {
    ns256:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:40 .
}

ns257:CmsImage0 {
    ns257:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:26 .
}

ns258:Thumbnail200x200 {
    ns265:CmsImage1 foaf:thumbnail ns258:Thumbnail200x200 .

    ns258:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns265:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:63 .
}

ns259:Thumbnail600x600 {
    ns324:CmsImage1 foaf:thumbnail ns259:Thumbnail600x600 .

    ns259:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:99 .
}

ns80:Thumbnail400x400 {
    ns80:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns120:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:35 .

    ns120:CmsImage0 foaf:thumbnail ns80:Thumbnail400x400 .
}

ns27:work6Location {
    ns27:work6Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns25:30 {
    ns25:30 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 0" ;
        skos:prefLabel "CmsConcept 30" .
}

ns215:CmsImage0 {
    ns215:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:collection1 .
}

ns176:Thumbnail600x600 {
    ns176:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns4:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:55 .

    ns4:CmsImage0 foaf:thumbnail ns176:Thumbnail600x600 .
}

ns260:CmsImage0 {
    ns260:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:31 .
}

ns199:Thumbnail400x400 {
    ns199:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:103 .

    ns346:CmsImage1 foaf:thumbnail ns199:Thumbnail400x400 .
}

ns156:Thumbnail800x800 {
    ns156:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:freestandingwork11 .

    ns387:CmsImage0 foaf:thumbnail ns156:Thumbnail800x800 .
}

ns261:CmsImage1 {
    ns261:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:94 .
}

ns262:Thumbnail400x400 {
    ns386:CmsImage1 foaf:thumbnail ns262:Thumbnail400x400 .

    ns262:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:80 .
}

ns263:Thumbnail400x400 {
    ns263:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:42 .

    ns207:CmsImage0 foaf:thumbnail ns263:Thumbnail400x400 .
}

ns264:Thumbnail400x400 {
    ns357:CmsImage0 foaf:thumbnail ns264:Thumbnail400x400 .

    ns264:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns357:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:18 .
}

ns265:CmsImage1 {
    ns265:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:63 .
}

ns149:Thumbnail600x600 {
    ns149:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:99 .

    ns324:CmsImage0 foaf:thumbnail ns149:Thumbnail600x600 .
}

ns67:Thumbnail400x400 {
    ns67:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:107 .

    ns197:CmsImage1 foaf:thumbnail ns67:Thumbnail400x400 .
}

ns25:37 {
    ns25:37 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 7" ;
        skos:prefLabel "CmsConcept 37" .
}

ns266:Thumbnail200x200 {
    ns266:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns230:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:97 .

    ns230:CmsImage0 foaf:thumbnail ns266:Thumbnail200x200 .
}

ns25:20 {
    ns25:20 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 0" ;
        skos:prefLabel "CmsConcept 20" .
}

ns53:Thumbnail400x400 {
    ns53:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns275:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:65 .

    ns275:CmsImage1 foaf:thumbnail ns53:Thumbnail400x400 .
}

ns214:Thumbnail400x400 {
    ns214:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:57 .

    ns179:CmsImage1 foaf:thumbnail ns214:Thumbnail400x400 .
}

ns25:5 {
    ns25:5 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 5" ;
        skos:prefLabel "CmsConcept 5" .
}

ns267:CmsImage0 {
    ns267:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:68 .
}

ns268:Thumbnail400x400 {
    ns268:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns215:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:collection1 .

    ns215:CmsImage0 foaf:thumbnail ns268:Thumbnail400x400 .
}

ns141:Thumbnail600x600 {
    ns141:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns273:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:2 .

    ns273:CmsImage0 foaf:thumbnail ns141:Thumbnail600x600 .
}

ns22:Thumbnail800x800 {
    ns22:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:78 .

    ns314:CmsImage1 foaf:thumbnail ns22:Thumbnail800x800 .
}

ns194:Thumbnail800x800 {
    ns194:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:12 .

    ns335:CmsImage0 foaf:thumbnail ns194:Thumbnail800x800 .
}

ns235:Thumbnail400x400 {
    ns235:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:79 .

    ns84:CmsImage1 foaf:thumbnail ns235:Thumbnail400x400 .
}

_:N1accfef14027463ab273e185deda68eb {
    _:N1accfef14027463ab273e185deda68eb a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Nce830309207d4704b090586dd36ada5e ;
        dcterms:title "FreestandingWork11 closing" ;
        cms:work ns43:freestandingwork11 .

    _:Nce830309207d4704b090586dd36ada5e a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns106:Thumbnail600x600 {
    ns106:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:40 .

    ns256:CmsImage0 foaf:thumbnail ns106:Thumbnail600x600 .
}

ns269:Thumbnail600x600 {
    ns116:CmsImage0 foaf:thumbnail ns269:Thumbnail600x600 .

    ns269:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns116:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:33 .
}

ns109:Thumbnail200x200 {
    ns109:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:88 .

    ns396:CmsImage1 foaf:thumbnail ns109:Thumbnail200x200 .
}

ns259:Thumbnail400x400 {
    ns259:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:99 .

    ns324:CmsImage1 foaf:thumbnail ns259:Thumbnail400x400 .
}

ns244:Thumbnail200x200 {
    ns244:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns45:work2 .

    ns397:CmsImage1 foaf:thumbnail ns244:Thumbnail200x200 .
}

ns270:Thumbnail400x400 {
    ns7:CmsImage1 foaf:thumbnail ns270:Thumbnail400x400 .

    ns270:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns7:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:20 .
}

ns271:Thumbnail800x800 {
    ns271:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns215:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:collection1 .

    ns215:CmsImage1 foaf:thumbnail ns271:Thumbnail800x800 .
}

ns272:Thumbnail400x400 {
    ns180:CmsImage0 foaf:thumbnail ns272:Thumbnail400x400 .

    ns272:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns180:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:66 .
}

ns273:CmsImage1 {
    ns273:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:2 .
}

ns246:Thumbnail200x200 {
    ns246:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns50:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:100 .

    ns50:CmsImage0 foaf:thumbnail ns246:Thumbnail200x200 .
}

ns25:36 {
    ns25:36 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 6" ;
        skos:prefLabel "CmsConcept 36" .
}

ns194:Thumbnail400x400 {
    ns194:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:12 .

    ns335:CmsImage0 foaf:thumbnail ns194:Thumbnail400x400 .
}

ns274:Thumbnail400x400 {
    ns381:CmsImage0 foaf:thumbnail ns274:Thumbnail400x400 .

    ns274:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:101 .
}

_:N12e44fe52c7049b386e3db7d3108a983 {
    _:N12e44fe52c7049b386e3db7d3108a983 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N14c99a0ea2e44396a3b96abc42277f81 ;
        dcterms:title "CmsCollection0CmsWork1 closing" ;
        cms:work ns45:work1 .

    _:N14c99a0ea2e44396a3b96abc42277f81 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns183:Thumbnail400x400 {
    ns183:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:56 .

    ns158:CmsImage1 foaf:thumbnail ns183:Thumbnail400x400 .
}

ns275:CmsImage0 {
    ns275:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:65 .
}

ns25:92 {
    ns25:92 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 2" ;
        skos:prefLabel "CmsConcept 92" .
}

ns276:CmsImage0 {
    ns276:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:14 .
}

ns38:Thumbnail200x200 {
    ns38:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:96 .

    ns377:CmsImage1 foaf:thumbnail ns38:Thumbnail200x200 .
}

ns68:Thumbnail600x600 {
    ns68:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns60:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:24 .

    ns60:CmsImage1 foaf:thumbnail ns68:Thumbnail600x600 .
}

ns186:CmsImage0 {
    ns186:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:72 .
}

ns190:Thumbnail600x600 {
    ns190:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns170:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:person0 .

    ns170:CmsImage0 foaf:thumbnail ns190:Thumbnail600x600 .
}

ns25:108 {
    ns25:108 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 8" ;
        skos:prefLabel "CmsConcept 108" .
}

ns277:Thumbnail200x200 {
    ns400:CmsImage0 foaf:thumbnail ns277:Thumbnail200x200 .

    ns277:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:71 .
}

ns278:CmsImage0 {
    ns278:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:4 .
}

ns149:Thumbnail400x400 {
    ns149:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:99 .

    ns324:CmsImage0 foaf:thumbnail ns149:Thumbnail400x400 .
}

ns15:Thumbnail800x800 {
    ns15:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns19:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:54 .

    ns19:CmsImage1 foaf:thumbnail ns15:Thumbnail800x800 .
}

ns258:Thumbnail800x800 {
    ns258:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns265:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:63 .

    ns265:CmsImage1 foaf:thumbnail ns258:Thumbnail800x800 .
}

ns11:Thumbnail800x800 {
    ns11:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:78 .

    ns314:CmsImage0 foaf:thumbnail ns11:Thumbnail800x800 .
}

ns252:Thumbnail200x200 {
    ns252:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:84 .

    ns221:CmsImage0 foaf:thumbnail ns252:Thumbnail200x200 .
}

ns279:CmsImage0 {
    ns279:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:0 .
}

ns52:CmsImage0 {
    ns52:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:90 .
}

ns227:Thumbnail400x400 {
    ns227:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns202:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:95 .

    ns202:CmsImage1 foaf:thumbnail ns227:Thumbnail400x400 .
}

ns280:CmsImage0 {
    ns280:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:106 .
}

ns281:Thumbnail600x600 {
    ns60:CmsImage0 foaf:thumbnail ns281:Thumbnail600x600 .

    ns281:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns60:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:24 .
}

ns216:CmsImage0 {
    ns216:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:89 .
}

dcterms:spatial {
    dcterms:spatial a cms:Property ;
        rdfs:label "Spatial" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> .
}

ns282:Thumbnail600x600 {
    ns333:CmsImage1 foaf:thumbnail ns282:Thumbnail600x600 .

    ns282:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:29 .
}

ns283:Thumbnail400x400 {
    ns283:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:26 .

    ns257:CmsImage0 foaf:thumbnail ns283:Thumbnail400x400 .
}

ns73:Thumbnail800x800 {
    ns73:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:94 .

    ns261:CmsImage0 foaf:thumbnail ns73:Thumbnail800x800 .
}

ns284:Thumbnail400x400 {
    ns344:CmsImage0 foaf:thumbnail ns284:Thumbnail400x400 .

    ns284:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns344:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:25 .
}

ns48:Thumbnail800x800 {
    ns48:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns52:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:90 .

    ns52:CmsImage1 foaf:thumbnail ns48:Thumbnail800x800 .
}

ns196:Thumbnail400x400 {
    ns196:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:87 .

    ns308:CmsImage0 foaf:thumbnail ns196:Thumbnail400x400 .
}

ns285:CmsImage1 {
    ns285:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:82 .
}

ns27:work7Location {
    ns27:work7Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns286:Thumbnail600x600 {
    ns393:CmsImage0 foaf:thumbnail ns286:Thumbnail600x600 .

    ns286:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:21 .
}

ns199:Thumbnail600x600 {
    ns199:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:103 .

    ns346:CmsImage1 foaf:thumbnail ns199:Thumbnail600x600 .
}

ns88:Thumbnail400x400 {
    ns88:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:59 .

    ns374:CmsImage1 foaf:thumbnail ns88:Thumbnail400x400 .
}

ns287:Thumbnail600x600 {
    ns287:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns98:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:6 .

    ns98:CmsImage1 foaf:thumbnail ns287:Thumbnail600x600 .
}

ns284:Thumbnail600x600 {
    ns284:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns344:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:25 .

    ns344:CmsImage0 foaf:thumbnail ns284:Thumbnail600x600 .
}

ns29:Thumbnail200x200 {
    ns29:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns330:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:19 .

    ns330:CmsImage0 foaf:thumbnail ns29:Thumbnail200x200 .
}

ns117:Thumbnail200x200 {
    ns117:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns78:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:53 .

    ns78:CmsImage1 foaf:thumbnail ns117:Thumbnail200x200 .
}

ns288:CmsImage1 {
    ns288:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:105 .
}

ns289:CmsImage1 {
    ns289:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns27:work6 .
}

ns290:Thumbnail600x600 {
    ns185:CmsImage0 foaf:thumbnail ns290:Thumbnail600x600 .

    ns290:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns185:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:62 .
}

ns61:Thumbnail600x600 {
    ns61:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:82 .

    ns285:CmsImage0 foaf:thumbnail ns61:Thumbnail600x600 .
}

ns25:61 {
    ns25:61 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 1" ;
        skos:prefLabel "CmsConcept 61" .
}

ns80:Thumbnail600x600 {
    ns80:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns120:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:35 .

    ns120:CmsImage0 foaf:thumbnail ns80:Thumbnail600x600 .
}

ns3:Thumbnail800x800 {
    ns3:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:108 .

    ns128:CmsImage0 foaf:thumbnail ns3:Thumbnail800x800 .
}

ns202:CmsImage1 {
    ns202:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:95 .
}

ns250:Thumbnail800x800 {
    ns250:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns255:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:38 .

    ns255:CmsImage1 foaf:thumbnail ns250:Thumbnail800x800 .
}

ns94:Thumbnail400x400 {
    ns94:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns185:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:62 .

    ns185:CmsImage1 foaf:thumbnail ns94:Thumbnail400x400 .
}

ns291:Thumbnail600x600 {
    ns291:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns7:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:20 .

    ns7:CmsImage0 foaf:thumbnail ns291:Thumbnail600x600 .
}

ns225:Thumbnail800x800 {
    ns225:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns27:work4 .

    ns395:CmsImage0 foaf:thumbnail ns225:Thumbnail800x800 .
}

ns25:23 {
    ns25:23 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 3" ;
        skos:prefLabel "CmsConcept 23" .
}

ns292:Thumbnail800x800 {
    ns85:CmsImage0 foaf:thumbnail ns292:Thumbnail800x800 .

    ns292:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns85:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:person1 .
}

ns44:Thumbnail400x400 {
    ns44:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:9 .

    ns296:CmsImage1 foaf:thumbnail ns44:Thumbnail400x400 .
}

ns59:Thumbnail800x800 {
    ns59:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns232:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:98 .

    ns232:CmsImage1 foaf:thumbnail ns59:Thumbnail800x800 .
}

ns25:44 {
    ns25:44 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 4" ;
        skos:prefLabel "CmsConcept 44" .
}

ns45:work0Location {
    ns45:work0Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns293:Thumbnail600x600 {
    ns396:CmsImage0 foaf:thumbnail ns293:Thumbnail600x600 .

    ns293:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:88 .
}

ns131:Thumbnail400x400 {
    ns131:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:61 .

    ns327:CmsImage1 foaf:thumbnail ns131:Thumbnail400x400 .
}

ns260:CmsImage1 {
    ns260:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:31 .
}

ns213:Thumbnail600x600 {
    ns213:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:58 .

    ns146:CmsImage1 foaf:thumbnail ns213:Thumbnail600x600 .
}

ns294:CmsImage0 {
    ns294:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:69 .
}

ns192:Thumbnail400x400 {
    ns192:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns267:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:68 .

    ns267:CmsImage0 foaf:thumbnail ns192:Thumbnail400x400 .
}

ns53:Thumbnail800x800 {
    ns53:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns275:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:65 .

    ns275:CmsImage1 foaf:thumbnail ns53:Thumbnail800x800 .
}

ns193:Thumbnail800x800 {
    ns193:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:40 .

    ns256:CmsImage1 foaf:thumbnail ns193:Thumbnail800x800 .
}

ns235:Thumbnail800x800 {
    ns235:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:79 .

    ns84:CmsImage1 foaf:thumbnail ns235:Thumbnail800x800 .
}

ns135:Thumbnail400x400 {
    ns135:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:50 .

    ns36:CmsImage0 foaf:thumbnail ns135:Thumbnail400x400 .
}

ns295:Thumbnail400x400 {
    ns308:CmsImage1 foaf:thumbnail ns295:Thumbnail400x400 .

    ns295:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:87 .
}

ns262:Thumbnail200x200 {
    ns262:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:80 .

    ns386:CmsImage1 foaf:thumbnail ns262:Thumbnail200x200 .
}

ns111:Thumbnail800x800 {
    ns111:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:37 .

    ns402:CmsImage1 foaf:thumbnail ns111:Thumbnail800x800 .
}

ns43:freestandingwork11Creation {
    ns43:freestandingwork11Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:organization3,
            ns43:organization4 ;
        dcterms:date _:N413f00d522114afd866d8d5a09680a0c ;
        dcterms:spatial ns43:freestandingwork11Location ;
        dcterms:title "FreestandingWork11 creation" ;
        cms:work ns43:freestandingwork11 .

    _:N413f00d522114afd866d8d5a09680a0c a cms:DateTimeDescription ;
        time:day "---21"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns296:CmsImage0 {
    ns296:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:9 .
}

ns104:Thumbnail600x600 {
    ns104:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns230:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:97 .

    ns230:CmsImage1 foaf:thumbnail ns104:Thumbnail600x600 .
}

ns89:CmsImage0 {
    ns89:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:67 .
}

ns43:organization4 {
    ns43:organization4 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 4" ;
        foaf:page ns43:organization4page .
}

ns212:Thumbnail600x600 {
    ns212:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:22 .

    ns220:CmsImage1 foaf:thumbnail ns212:Thumbnail600x600 .
}

ns154:CmsImage1 {
    ns154:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:27 .
}

ns75:Thumbnail200x200 {
    ns75:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:28 .

    ns326:CmsImage0 foaf:thumbnail ns75:Thumbnail200x200 .
}

vra:material {
    vra:material a cms:Property ;
        rdfs:label "Material" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> .
}

ns233:Thumbnail400x400 {
    ns233:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns62:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:60 .

    ns62:CmsImage0 foaf:thumbnail ns233:Thumbnail400x400 .
}

ns142:Thumbnail400x400 {
    ns142:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns154:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:27 .

    ns154:CmsImage0 foaf:thumbnail ns142:Thumbnail400x400 .
}

ns25:90 {
    ns25:90 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 0" ;
        skos:prefLabel "CmsConcept 90" .
}

ns297:Thumbnail200x200 {
    ns93:CmsImage0 foaf:thumbnail ns297:Thumbnail200x200 .

    ns297:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns93:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:104 .
}

ns298:Thumbnail800x800 {
    ns298:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns163:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:49 .

    ns163:CmsImage0 foaf:thumbnail ns298:Thumbnail800x800 .
}

ns25:84 {
    ns25:84 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 4" ;
        skos:prefLabel "CmsConcept 84" .
}

ns102:Thumbnail400x400 {
    ns102:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns107:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:73 .

    ns107:CmsImage0 foaf:thumbnail ns102:Thumbnail400x400 .
}

ns299:CmsImage1 {
    ns299:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:person3 .
}

ns25:50 {
    ns25:50 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 0" ;
        skos:prefLabel "CmsConcept 50" .
}

ns253:Thumbnail400x400 {
    ns253:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:freestandingwork8 .

    ns328:CmsImage0 foaf:thumbnail ns253:Thumbnail400x400 .
}

ns254:Thumbnail200x200 {
    ns254:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:93 .

    ns398:CmsImage0 foaf:thumbnail ns254:Thumbnail200x200 .
}

ns300:CmsImage1 {
    ns300:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:organization4 .
}

ns140:Thumbnail400x400 {
    ns140:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:83 .

    ns403:CmsImage0 foaf:thumbnail ns140:Thumbnail400x400 .
}

ns82:Thumbnail600x600 {
    ns82:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:61 .

    ns327:CmsImage0 foaf:thumbnail ns82:Thumbnail600x600 .
}

ns219:Thumbnail600x600 {
    ns219:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns97:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns45:work3 .

    ns97:CmsImage1 foaf:thumbnail ns219:Thumbnail600x600 .
}

ns25:32 {
    ns25:32 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 2" ;
        skos:prefLabel "CmsConcept 32" .
}

ns117:Thumbnail800x800 {
    ns117:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns78:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:53 .

    ns78:CmsImage1 foaf:thumbnail ns117:Thumbnail800x800 .
}

ns126:Thumbnail600x600 {
    ns126:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:93 .

    ns398:CmsImage1 foaf:thumbnail ns126:Thumbnail600x600 .
}

ns301:CmsImage0 {
    ns301:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:organization2 .
}

ns302:Thumbnail200x200 {
    ns343:CmsImage1 foaf:thumbnail ns302:Thumbnail200x200 .

    ns302:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:1 .
}

ns66:Thumbnail400x400 {
    ns66:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:14 .

    ns276:CmsImage0 foaf:thumbnail ns66:Thumbnail400x400 .
}

ns25:17 {
    ns25:17 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 7" ;
        skos:prefLabel "CmsConcept 17" .
}

ns303:Thumbnail200x200 {
    ns401:CmsImage0 foaf:thumbnail ns303:Thumbnail200x200 .

    ns303:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:17 .
}

ns191:Thumbnail200x200 {
    ns191:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns127:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:organization1 .

    ns127:CmsImage0 foaf:thumbnail ns191:Thumbnail200x200 .
}

ns25:9 {
    ns25:9 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 9" ;
        skos:prefLabel "CmsConcept 9" .
}

ns26:Thumbnail600x600 {
    ns26:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns152:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:person2 .

    ns152:CmsImage0 foaf:thumbnail ns26:Thumbnail600x600 .
}

ns304:Thumbnail200x200 {
    ns392:CmsImage1 foaf:thumbnail ns304:Thumbnail200x200 .

    ns304:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:86 .
}

ns114:Thumbnail800x800 {
    ns114:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns93:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:104 .

    ns93:CmsImage1 foaf:thumbnail ns114:Thumbnail800x800 .
}

ns175:Thumbnail600x600 {
    ns175:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns206:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:3 .

    ns206:CmsImage1 foaf:thumbnail ns175:Thumbnail600x600 .
}

ns262:Thumbnail800x800 {
    ns262:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:80 .

    ns386:CmsImage1 foaf:thumbnail ns262:Thumbnail800x800 .
}

ns183:Thumbnail200x200 {
    ns183:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:56 .

    ns158:CmsImage1 foaf:thumbnail ns183:Thumbnail200x200 .
}

ns305:Thumbnail800x800 {
    ns301:CmsImage1 foaf:thumbnail ns305:Thumbnail800x800 .

    ns305:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns301:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:organization2 .
}

ns61:Thumbnail400x400 {
    ns61:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:82 .

    ns285:CmsImage0 foaf:thumbnail ns61:Thumbnail400x400 .
}

ns71:Thumbnail400x400 {
    ns71:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:freestandingwork10 .

    ns342:CmsImage1 foaf:thumbnail ns71:Thumbnail400x400 .
}

ns306:Thumbnail400x400 {
    ns294:CmsImage1 foaf:thumbnail ns306:Thumbnail400x400 .

    ns306:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:69 .
}

ns143:Thumbnail800x800 {
    ns143:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns189:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:70 .

    ns189:CmsImage1 foaf:thumbnail ns143:Thumbnail800x800 .
}

ns307:Thumbnail200x200 {
    ns307:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:4 .

    ns278:CmsImage0 foaf:thumbnail ns307:Thumbnail200x200 .
}

ns308:CmsImage1 {
    ns308:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:87 .
}

ns70:Thumbnail400x400 {
    ns70:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns45:work1 .

    ns351:CmsImage1 foaf:thumbnail ns70:Thumbnail400x400 .
}

ns37:Thumbnail800x800 {
    ns37:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns216:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:89 .

    ns216:CmsImage1 foaf:thumbnail ns37:Thumbnail800x800 .
}

ns10:Thumbnail600x600 {
    ns10:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns27:work4 .

    ns395:CmsImage1 foaf:thumbnail ns10:Thumbnail600x600 .
}

ns224:Thumbnail200x200 {
    ns224:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns45:work2 .

    ns397:CmsImage0 foaf:thumbnail ns224:Thumbnail200x200 .
}

ns43:freestandingwork9Opening {
    ns43:freestandingwork9Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-23"^^xsd:date ;
        dcterms:spatial _:N449c0fde74df403aaf4a932de18eeaf1 ;
        dcterms:title "FreestandingWork9 opening" ;
        cms:work ns43:freestandingwork9 .

    _:N449c0fde74df403aaf4a932de18eeaf1 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns309:CmsImage1 {
    ns309:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:52 .
}

ns119:Thumbnail400x400 {
    ns119:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns171:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:36 .

    ns171:CmsImage1 foaf:thumbnail ns119:Thumbnail400x400 .
}

ns82:Thumbnail400x400 {
    ns82:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:61 .

    ns327:CmsImage0 foaf:thumbnail ns82:Thumbnail400x400 .
}

ns310:CmsImage0 {
    ns310:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:organization3 .
}

ns248:Thumbnail200x200 {
    ns248:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns239:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:30 .

    ns239:CmsImage1 foaf:thumbnail ns248:Thumbnail200x200 .
}

ns311:Thumbnail600x600 {
    ns402:CmsImage0 foaf:thumbnail ns311:Thumbnail600x600 .

    ns311:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:37 .
}

ns22:Thumbnail400x400 {
    ns22:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:78 .

    ns314:CmsImage1 foaf:thumbnail ns22:Thumbnail400x400 .
}

ns312:Thumbnail600x600 {
    ns276:CmsImage1 foaf:thumbnail ns312:Thumbnail600x600 .

    ns312:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:14 .
}

ns159:Thumbnail400x400 {
    ns159:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:85 .

    ns251:CmsImage1 foaf:thumbnail ns159:Thumbnail400x400 .
}

ns51:Thumbnail200x200 {
    ns51:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:23 .

    ns354:CmsImage0 foaf:thumbnail ns51:Thumbnail200x200 .
}

_:N8d2cf81b25144d3e87de22a1d033c051 {
    _:N8d2cf81b25144d3e87de22a1d033c051 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N4dbf259d2ff342d493439c430b065372 ;
        dcterms:title "CmsCollection0CmsWork3 closing" ;
        cms:work ns45:work3 .

    _:N4dbf259d2ff342d493439c430b065372 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns313:Thumbnail800x800 {
    ns313:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns216:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:89 .

    ns216:CmsImage0 foaf:thumbnail ns313:Thumbnail800x800 .
}

ns314:CmsImage0 {
    ns314:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:78 .
}

ns2:Thumbnail800x800 {
    ns2:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns340:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:5 .

    ns340:CmsImage1 foaf:thumbnail ns2:Thumbnail800x800 .
}

ns25:22 {
    ns25:22 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 2" ;
        skos:prefLabel "CmsConcept 22" .
}

ns224:Thumbnail600x600 {
    ns224:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns45:work2 .

    ns397:CmsImage0 foaf:thumbnail ns224:Thumbnail600x600 .
}

ns315:Thumbnail800x800 {
    ns315:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:67 .

    ns89:CmsImage0 foaf:thumbnail ns315:Thumbnail800x800 .
}

ns42:Thumbnail800x800 {
    ns42:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns206:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:3 .

    ns206:CmsImage0 foaf:thumbnail ns42:Thumbnail800x800 .
}

ns103:Thumbnail600x600 {
    ns103:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:92 .

    ns390:CmsImage0 foaf:thumbnail ns103:Thumbnail600x600 .
}

ns72:Thumbnail400x400 {
    ns72:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns200:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:16 .

    ns200:CmsImage1 foaf:thumbnail ns72:Thumbnail400x400 .
}

ns109:Thumbnail800x800 {
    ns109:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:88 .

    ns396:CmsImage1 foaf:thumbnail ns109:Thumbnail800x800 .
}

ns316:Thumbnail200x200 {
    ns316:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns85:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:person1 .

    ns85:CmsImage1 foaf:thumbnail ns316:Thumbnail200x200 .
}

ns317:Thumbnail200x200 {
    ns389:CmsImage0 foaf:thumbnail ns317:Thumbnail200x200 .

    ns317:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns27:work7 .
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
        foaf:depicts ns25:44 .
}

ns286:Thumbnail200x200 {
    ns286:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:21 .

    ns393:CmsImage0 foaf:thumbnail ns286:Thumbnail200x200 .
}

ns319:Thumbnail400x400 {
    ns299:CmsImage0 foaf:thumbnail ns319:Thumbnail400x400 .

    ns319:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns299:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:person3 .
}

ns124:Thumbnail400x400 {
    ns124:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns340:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:5 .

    ns340:CmsImage0 foaf:thumbnail ns124:Thumbnail400x400 .
}

ns134:Thumbnail400x400 {
    ns134:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:94 .

    ns261:CmsImage1 foaf:thumbnail ns134:Thumbnail400x400 .
}

ns43:person4 {
    ns43:person4 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "4, CmsPerson" ;
        foaf:familyName "4" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 4" ;
        foaf:page ns43:person4page .
}

ns320:Thumbnail400x400 {
    ns320:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns310:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:organization3 .

    ns310:CmsImage0 foaf:thumbnail ns320:Thumbnail400x400 .
}

ns321:Thumbnail600x600 {
    ns328:CmsImage1 foaf:thumbnail ns321:Thumbnail600x600 .

    ns321:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:freestandingwork8 .
}

ns214:Thumbnail800x800 {
    ns214:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:57 .

    ns179:CmsImage1 foaf:thumbnail ns214:Thumbnail800x800 .
}

ns199:Thumbnail800x800 {
    ns199:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:103 .

    ns346:CmsImage1 foaf:thumbnail ns199:Thumbnail800x800 .
}

ns59:Thumbnail200x200 {
    ns59:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns232:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:98 .

    ns232:CmsImage1 foaf:thumbnail ns59:Thumbnail200x200 .
}

ns182:Thumbnail400x400 {
    ns182:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:109 .

    ns345:CmsImage0 foaf:thumbnail ns182:Thumbnail400x400 .
}

ns145:Thumbnail200x200 {
    ns145:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns267:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:68 .

    ns267:CmsImage1 foaf:thumbnail ns145:Thumbnail200x200 .
}

ns143:Thumbnail600x600 {
    ns143:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns189:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:70 .

    ns189:CmsImage1 foaf:thumbnail ns143:Thumbnail600x600 .
}

ns210:Thumbnail800x800 {
    ns210:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:21 .

    ns393:CmsImage1 foaf:thumbnail ns210:Thumbnail800x800 .
}

ns322:Thumbnail400x400 {
    ns322:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:0 .

    ns279:CmsImage0 foaf:thumbnail ns322:Thumbnail400x400 .
}

ns296:CmsImage1 {
    ns296:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:9 .
}

ns85:CmsImage0 {
    ns85:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:person1 .
}

ns153:Thumbnail600x600 {
    ns153:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:41 .

    ns380:CmsImage0 foaf:thumbnail ns153:Thumbnail600x600 .
}

ns238:Thumbnail200x200 {
    ns238:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns113:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:77 .

    ns113:CmsImage0 foaf:thumbnail ns238:Thumbnail200x200 .
}

ns173:Thumbnail400x400 {
    ns173:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns58:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:7 .

    ns58:CmsImage0 foaf:thumbnail ns173:Thumbnail400x400 .
}

ns258:Thumbnail400x400 {
    ns258:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns265:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:63 .

    ns265:CmsImage1 foaf:thumbnail ns258:Thumbnail400x400 .
}

ns323:Thumbnail400x400 {
    ns234:CmsImage1 foaf:thumbnail ns323:Thumbnail400x400 .

    ns323:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns234:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:47 .
}

ns324:CmsImage1 {
    ns324:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:99 .
}

ns325:Thumbnail800x800 {
    ns389:CmsImage1 foaf:thumbnail ns325:Thumbnail800x800 .

    ns325:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns27:work7 .
}

ns160:Thumbnail400x400 {
    ns160:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns78:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:53 .

    ns78:CmsImage0 foaf:thumbnail ns160:Thumbnail400x400 .
}

ns326:CmsImage1 {
    ns326:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:28 .
}

ns25:72 {
    ns25:72 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 2" ;
        skos:prefLabel "CmsConcept 72" .
}

ns28:Thumbnail400x400 {
    ns28:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns35:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:76 .

    ns35:CmsImage0 foaf:thumbnail ns28:Thumbnail400x400 .
}

ns86:Thumbnail600x600 {
    ns86:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns120:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:35 .

    ns120:CmsImage1 foaf:thumbnail ns86:Thumbnail600x600 .
}

ns286:Thumbnail800x800 {
    ns286:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:21 .

    ns393:CmsImage0 foaf:thumbnail ns286:Thumbnail800x800 .
}

ns327:CmsImage0 {
    ns327:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:61 .
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
        foaf:depicts ns25:44 .
}

ns328:CmsImage1 {
    ns328:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:freestandingwork8 .
}

ns329:Thumbnail800x800 {
    ns6:CmsImage1 foaf:thumbnail ns329:Thumbnail800x800 .

    ns329:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns6:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:91 .
}

ns303:Thumbnail400x400 {
    ns303:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:17 .

    ns401:CmsImage0 foaf:thumbnail ns303:Thumbnail400x400 .
}

ns330:CmsImage0 {
    ns330:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:19 .
}

ns328:CmsImage0 {
    ns328:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:freestandingwork8 .
}

ns331:CmsImage1 {
    ns331:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:39 .
}

ns332:Thumbnail200x200 {
    ns280:CmsImage1 foaf:thumbnail ns332:Thumbnail200x200 .

    ns332:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:106 .
}

ns178:Thumbnail200x200 {
    ns178:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:0 .

    ns279:CmsImage1 foaf:thumbnail ns178:Thumbnail200x200 .
}

ns25:40 {
    ns25:40 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 0" ;
        skos:prefLabel "CmsConcept 40" .
}

ns284:Thumbnail800x800 {
    ns284:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns344:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:25 .

    ns344:CmsImage0 foaf:thumbnail ns284:Thumbnail800x800 .
}

ns248:Thumbnail400x400 {
    ns248:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns239:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:30 .

    ns239:CmsImage1 foaf:thumbnail ns248:Thumbnail400x400 .
}

ns25:76 {
    ns25:76 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 6" ;
        skos:prefLabel "CmsConcept 76" .
}

ns126:Thumbnail200x200 {
    ns126:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:93 .

    ns398:CmsImage1 foaf:thumbnail ns126:Thumbnail200x200 .
}

ns333:CmsImage0 {
    ns333:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:29 .
}

ns27:work7 {
    ns27:work7 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork7 alternative title 0",
            "CmsCollection1CmsWork7 alternative title 1" ;
        dcterms:contributor _:N26c35b6f1f1c486f8248259391a603ba,
            _:N7054ab85ba2a44f1921ff6b1572a99f8 ;
        dcterms:creator ns43:organization0,
            ns43:person4 ;
        dcterms:extent ns25:17,
            ns25:18 ;
        dcterms:identifier "CmsCollection1CmsWork7Id0",
            "CmsCollection1CmsWork7Id1" ;
        dcterms:language ns25:27,
            ns25:28 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:47,
            ns25:48 ;
        dcterms:provenance "CmsCollection1CmsWork7 provenance 0",
            "CmsCollection1CmsWork7 provenance 1" ;
        dcterms:publisher ns25:57,
            ns25:58 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 rights holder" ;
        dcterms:source ns25:67,
            ns25:68 ;
        dcterms:spatial ns27:work7Location ;
        dcterms:subject ns25:87,
            ns25:88 ;
        dcterms:title "CmsCollection1CmsWork7" ;
        dcterms:type ns25:107,
            ns25:108 ;
        vra:culturalContext ns25:7,
            ns25:8 ;
        vra:material ns25:37,
            ns25:38 ;
        vra:technique ns25:97,
            ns25:98 ;
        cms:collection ns43:collection1 .

    _:N26c35b6f1f1c486f8248259391a603ba a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 1" .

    _:N7054ab85ba2a44f1921ff6b1572a99f8 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 0" .
}

ns293:Thumbnail800x800 {
    ns293:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:88 .

    ns396:CmsImage0 foaf:thumbnail ns293:Thumbnail800x800 .
}

ns44:Thumbnail600x600 {
    ns44:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:9 .

    ns296:CmsImage1 foaf:thumbnail ns44:Thumbnail600x600 .
}

ns246:Thumbnail800x800 {
    ns246:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns50:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:100 .

    ns50:CmsImage0 foaf:thumbnail ns246:Thumbnail800x800 .
}

ns211:Thumbnail200x200 {
    ns211:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:51 .

    ns360:CmsImage1 foaf:thumbnail ns211:Thumbnail200x200 .
}

ns25:105 {
    ns25:105 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 5" ;
        skos:prefLabel "CmsConcept 105" .
}

ns188:Thumbnail200x200 {
    ns188:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns116:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:33 .

    ns116:CmsImage1 foaf:thumbnail ns188:Thumbnail200x200 .
}

ns334:Thumbnail800x800 {
    ns334:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:28 .

    ns326:CmsImage1 foaf:thumbnail ns334:Thumbnail800x800 .
}

ns290:Thumbnail800x800 {
    ns290:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns185:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:62 .

    ns185:CmsImage0 foaf:thumbnail ns290:Thumbnail800x800 .
}

ns190:Thumbnail400x400 {
    ns190:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns170:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:person0 .

    ns170:CmsImage0 foaf:thumbnail ns190:Thumbnail400x400 .
}

ns335:CmsImage0 {
    ns335:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:12 .
}

ns336:Thumbnail800x800 {
    ns356:CmsImage0 foaf:thumbnail ns336:Thumbnail800x800 .

    ns336:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:freestandingwork9 .
}

ns337:Thumbnail400x400 {
    ns381:CmsImage1 foaf:thumbnail ns337:Thumbnail400x400 .

    ns337:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:101 .
}

ns14:Thumbnail600x600 {
    ns14:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns331:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:39 .

    ns331:CmsImage1 foaf:thumbnail ns14:Thumbnail600x600 .
}

ns222:Thumbnail600x600 {
    ns222:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns189:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:70 .

    ns189:CmsImage0 foaf:thumbnail ns222:Thumbnail600x600 .
}

ns334:Thumbnail600x600 {
    ns334:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:28 .

    ns326:CmsImage1 foaf:thumbnail ns334:Thumbnail600x600 .
}

ns25:64 {
    ns25:64 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 4" ;
        skos:prefLabel "CmsConcept 64" .
}

ns207:CmsImage1 {
    ns207:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:42 .
}

ns25:57 {
    ns25:57 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 7" ;
        skos:prefLabel "CmsConcept 57" .
}

ns338:Thumbnail400x400 {
    ns338:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns6:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:91 .

    ns6:CmsImage0 foaf:thumbnail ns338:Thumbnail400x400 .
}

ns54:Thumbnail200x200 {
    ns54:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:75 .

    ns348:CmsImage0 foaf:thumbnail ns54:Thumbnail200x200 .
}

ns244:Thumbnail800x800 {
    ns244:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns45:work2 .

    ns397:CmsImage1 foaf:thumbnail ns244:Thumbnail800x800 .
}

ns10:Thumbnail400x400 {
    ns10:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns27:work4 .

    ns395:CmsImage1 foaf:thumbnail ns10:Thumbnail400x400 .
}

ns284:Thumbnail200x200 {
    ns284:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns344:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:25 .

    ns344:CmsImage0 foaf:thumbnail ns284:Thumbnail200x200 .
}

ns339:Thumbnail600x600 {
    ns388:CmsImage0 foaf:thumbnail ns339:Thumbnail600x600 .

    ns339:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:15 .
}

ns188:Thumbnail600x600 {
    ns188:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns116:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:33 .

    ns116:CmsImage1 foaf:thumbnail ns188:Thumbnail600x600 .
}

ns65:Thumbnail800x800 {
    ns65:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:17 .

    ns401:CmsImage1 foaf:thumbnail ns65:Thumbnail800x800 .
}

ns12:Thumbnail600x600 {
    ns12:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:8 .

    ns352:CmsImage0 foaf:thumbnail ns12:Thumbnail600x600 .
}

ns305:Thumbnail200x200 {
    ns305:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns301:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:organization2 .

    ns301:CmsImage1 foaf:thumbnail ns305:Thumbnail200x200 .
}

ns239:CmsImage0 {
    ns239:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:30 .
}

ns340:CmsImage0 {
    ns340:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:5 .
}

ns264:Thumbnail600x600 {
    ns264:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns357:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:18 .

    ns357:CmsImage0 foaf:thumbnail ns264:Thumbnail600x600 .
}

ns341:Thumbnail400x400 {
    ns341:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns50:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:100 .

    ns50:CmsImage1 foaf:thumbnail ns341:Thumbnail400x400 .
}

ns91:Thumbnail600x600 {
    ns91:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:44 .

    ns318:CmsImage1 foaf:thumbnail ns91:Thumbnail600x600 .
}

ns83:Thumbnail800x800 {
    ns83:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns273:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:2 .

    ns273:CmsImage1 foaf:thumbnail ns83:Thumbnail800x800 .
}

ns147:Thumbnail400x400 {
    ns147:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:42 .

    ns207:CmsImage1 foaf:thumbnail ns147:Thumbnail400x400 .
}

ns156:Thumbnail200x200 {
    ns156:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:freestandingwork11 .

    ns387:CmsImage0 foaf:thumbnail ns156:Thumbnail200x200 .
}

ns68:Thumbnail200x200 {
    ns68:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns60:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:24 .

    ns60:CmsImage1 foaf:thumbnail ns68:Thumbnail200x200 .
}

ns75:Thumbnail600x600 {
    ns75:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:28 .

    ns326:CmsImage0 foaf:thumbnail ns75:Thumbnail600x600 .
}

ns133:Thumbnail600x600 {
    ns133:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns171:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:36 .

    ns171:CmsImage0 foaf:thumbnail ns133:Thumbnail600x600 .
}

ns291:Thumbnail800x800 {
    ns291:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns7:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:20 .

    ns7:CmsImage0 foaf:thumbnail ns291:Thumbnail800x800 .
}

_:N45d0530c56b1487eaca606c74d8e448f {
    _:N45d0530c56b1487eaca606c74d8e448f a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N940ba015246c4205852489fcba411af1 ;
        dcterms:spatial _:N61900804604d4f3a8153625a20d168fb ;
        dcterms:title "CmsCollection1CmsWork4 closing" ;
        cms:work ns27:work4 .

    _:N61900804604d4f3a8153625a20d168fb a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N940ba015246c4205852489fcba411af1 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns25:79 {
    ns25:79 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 9" ;
        skos:prefLabel "CmsConcept 79" .
}

ns161:Thumbnail600x600 {
    ns161:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns275:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:65 .

    ns275:CmsImage0 foaf:thumbnail ns161:Thumbnail600x600 .
}

ns63:Thumbnail600x600 {
    ns63:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns344:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:25 .

    ns344:CmsImage1 foaf:thumbnail ns63:Thumbnail600x600 .
}

ns45:work1Creation {
    ns45:work1Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:organization3,
            ns43:organization4 ;
        dcterms:date _:N2d9e7d174fab4b40b8bdd7df95e6c3c1 ;
        dcterms:spatial ns45:work1Location ;
        dcterms:title "CmsCollection0CmsWork1 creation" ;
        cms:work ns45:work1 .

    _:N2d9e7d174fab4b40b8bdd7df95e6c3c1 a cms:DateTimeDescription ;
        time:day "---31"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns258:Thumbnail600x600 {
    ns258:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns265:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:63 .

    ns265:CmsImage1 foaf:thumbnail ns258:Thumbnail600x600 .
}

ns342:CmsImage1 {
    ns342:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:freestandingwork10 .
}

ns223:Thumbnail600x600 {
    ns223:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:44 .

    ns318:CmsImage0 foaf:thumbnail ns223:Thumbnail600x600 .
}

ns247:Thumbnail400x400 {
    ns247:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:102 .

    ns231:CmsImage1 foaf:thumbnail ns247:Thumbnail400x400 .
}

ns343:CmsImage1 {
    ns343:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:1 .
}

ns56:Thumbnail800x800 {
    ns56:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:108 .

    ns128:CmsImage1 foaf:thumbnail ns56:Thumbnail800x800 .
}

ns344:CmsImage0 {
    ns344:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:25 .
}

ns76:Thumbnail600x600 {
    ns76:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:10 .

    ns372:CmsImage1 foaf:thumbnail ns76:Thumbnail600x600 .
}

ns282:Thumbnail800x800 {
    ns282:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:29 .

    ns333:CmsImage1 foaf:thumbnail ns282:Thumbnail800x800 .
}

ns345:CmsImage1 {
    ns345:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:109 .
}

ns32:Thumbnail200x200 {
    ns32:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns27:work5 .

    ns399:CmsImage0 foaf:thumbnail ns32:Thumbnail200x200 .
}

ns289:CmsImage0 {
    ns289:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns27:work6 .
}

ns346:CmsImage0 {
    ns346:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:103 .
}

ns13:Thumbnail600x600 {
    ns13:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns310:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:organization3 .

    ns310:CmsImage1 foaf:thumbnail ns13:Thumbnail600x600 .
}

ns101:Thumbnail800x800 {
    ns101:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:50 .

    ns36:CmsImage1 foaf:thumbnail ns101:Thumbnail800x800 .
}

ns72:Thumbnail200x200 {
    ns72:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns200:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:16 .

    ns200:CmsImage1 foaf:thumbnail ns72:Thumbnail200x200 .
}

ns155:Thumbnail400x400 {
    ns155:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:82 .

    ns285:CmsImage1 foaf:thumbnail ns155:Thumbnail400x400 .
}

ns340:CmsImage1 {
    ns340:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:5 .
}

ns273:CmsImage0 {
    ns273:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:2 .
}

ns317:Thumbnail600x600 {
    ns317:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns27:work7 .

    ns389:CmsImage0 foaf:thumbnail ns317:Thumbnail600x600 .
}

ns25:82 {
    ns25:82 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 2" ;
        skos:prefLabel "CmsConcept 82" .
}

ns344:CmsImage1 {
    ns344:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:25 .
}

ns25:95 {
    ns25:95 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 5" ;
        skos:prefLabel "CmsConcept 95" .
}

ns347:Thumbnail200x200 {
    ns347:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns107:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:73 .

    ns107:CmsImage1 foaf:thumbnail ns347:Thumbnail200x200 .
}

ns39:Thumbnail400x400 {
    ns39:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns113:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:77 .

    ns113:CmsImage1 foaf:thumbnail ns39:Thumbnail400x400 .
}

ns33:Thumbnail600x600 {
    ns33:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:57 .

    ns179:CmsImage0 foaf:thumbnail ns33:Thumbnail600x600 .
}

ns348:CmsImage0 {
    ns348:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:75 .
}

ns349:Thumbnail200x200 {
    ns349:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns260:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:31 .

    ns260:CmsImage1 foaf:thumbnail ns349:Thumbnail200x200 .
}

ns350:Thumbnail400x400 {
    ns382:CmsImage1 foaf:thumbnail ns350:Thumbnail400x400 .

    ns350:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns382:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:organization0 .
}

ns25:59 {
    ns25:59 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 9" ;
        skos:prefLabel "CmsConcept 59" .
}

ns351:CmsImage1 {
    ns351:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns45:work1 .
}

ns182:Thumbnail800x800 {
    ns182:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:109 .

    ns345:CmsImage0 foaf:thumbnail ns182:Thumbnail800x800 .
}

ns180:CmsImage0 {
    ns180:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:66 .
}

ns193:Thumbnail600x600 {
    ns193:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:40 .

    ns256:CmsImage1 foaf:thumbnail ns193:Thumbnail600x600 .
}

ns334:Thumbnail400x400 {
    ns334:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:28 .

    ns326:CmsImage1 foaf:thumbnail ns334:Thumbnail400x400 .
}

ns87:Thumbnail200x200 {
    ns87:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:56 .

    ns158:CmsImage0 foaf:thumbnail ns87:Thumbnail200x200 .
}

ns305:Thumbnail600x600 {
    ns305:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns301:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:organization2 .

    ns301:CmsImage1 foaf:thumbnail ns305:Thumbnail600x600 .
}

ns293:Thumbnail400x400 {
    ns293:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:88 .

    ns396:CmsImage0 foaf:thumbnail ns293:Thumbnail400x400 .
}

ns43:organization1 {
    ns43:organization1 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 1" ;
        foaf:page ns43:organization1page .
}

ns25:87 {
    ns25:87 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 7" ;
        skos:prefLabel "CmsConcept 87" .
}

ns352:CmsImage0 {
    ns352:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:8 .
}

ns353:Thumbnail600x600 {
    ns77:CmsImage0 foaf:thumbnail ns353:Thumbnail600x600 .

    ns353:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns77:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:13 .
}

ns203:Thumbnail400x400 {
    ns203:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns289:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns27:work6 .

    ns289:CmsImage0 foaf:thumbnail ns203:Thumbnail400x400 .
}

ns21:Thumbnail800x800 {
    ns21:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:29 .

    ns333:CmsImage0 foaf:thumbnail ns21:Thumbnail800x800 .
}

ns338:Thumbnail600x600 {
    ns338:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns6:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:91 .

    ns6:CmsImage0 foaf:thumbnail ns338:Thumbnail600x600 .
}

ns140:Thumbnail200x200 {
    ns140:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:83 .

    ns403:CmsImage0 foaf:thumbnail ns140:Thumbnail200x200 .
}

ns254:Thumbnail400x400 {
    ns254:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:93 .

    ns398:CmsImage0 foaf:thumbnail ns254:Thumbnail400x400 .
}

ns354:CmsImage1 {
    ns354:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:23 .
}

ns355:Thumbnail200x200 {
    ns170:CmsImage1 foaf:thumbnail ns355:Thumbnail200x200 .

    ns355:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns170:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:person0 .
}

ns131:Thumbnail200x200 {
    ns131:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:61 .

    ns327:CmsImage1 foaf:thumbnail ns131:Thumbnail200x200 .
}

ns16:Thumbnail600x600 {
    ns16:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:freestandingwork9 .

    ns356:CmsImage1 foaf:thumbnail ns16:Thumbnail600x600 .
}

ns43:person3 {
    ns43:person3 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "3, CmsPerson" ;
        foaf:familyName "3" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 3" .
}

ns42:Thumbnail200x200 {
    ns42:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns206:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:3 .

    ns206:CmsImage0 foaf:thumbnail ns42:Thumbnail200x200 .
}

ns307:Thumbnail400x400 {
    ns307:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:4 .

    ns278:CmsImage0 foaf:thumbnail ns307:Thumbnail400x400 .
}

ns217:Thumbnail400x400 {
    ns217:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns152:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:person2 .

    ns152:CmsImage1 foaf:thumbnail ns217:Thumbnail400x400 .
}

ns356:CmsImage0 {
    ns356:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:freestandingwork9 .
}

ns257:CmsImage1 {
    ns257:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:26 .
}

ns100:Thumbnail600x600 {
    ns100:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:32 .

    ns365:CmsImage0 foaf:thumbnail ns100:Thumbnail600x600 .
}

ns316:Thumbnail600x600 {
    ns316:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns85:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:person1 .

    ns85:CmsImage1 foaf:thumbnail ns316:Thumbnail600x600 .
}

ns156:Thumbnail400x400 {
    ns156:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:freestandingwork11 .

    ns387:CmsImage0 foaf:thumbnail ns156:Thumbnail400x400 .
}

ns173:Thumbnail800x800 {
    ns173:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns58:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:7 .

    ns58:CmsImage0 foaf:thumbnail ns173:Thumbnail800x800 .
}

ns101:Thumbnail200x200 {
    ns101:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:50 .

    ns36:CmsImage1 foaf:thumbnail ns101:Thumbnail200x200 .
}

ns350:Thumbnail800x800 {
    ns350:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns382:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:organization0 .

    ns382:CmsImage1 foaf:thumbnail ns350:Thumbnail800x800 .
}

ns45:work3Location {
    ns45:work3Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns353:Thumbnail800x800 {
    ns353:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns77:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:13 .

    ns77:CmsImage0 foaf:thumbnail ns353:Thumbnail800x800 .
}

ns179:CmsImage0 {
    ns179:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:57 .
}

ns83:Thumbnail400x400 {
    ns83:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns273:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:2 .

    ns273:CmsImage1 foaf:thumbnail ns83:Thumbnail400x400 .
}

_:Nde4ad7aa5128419a8412545b9e97ae07 {
    _:Nde4ad7aa5128419a8412545b9e97ae07 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N7db6d7f0bda84c3ea112b69989c3993c ;
        dcterms:spatial _:N97b6a69798744ed6b1375702dbbff815 ;
        dcterms:title "FreestandingWork8 closing" ;
        cms:work ns43:freestandingwork8 .

    _:N7db6d7f0bda84c3ea112b69989c3993c a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N97b6a69798744ed6b1375702dbbff815 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

_:N823b0b7da26d49a0a91866ae3fb1b9d5 {
    _:N823b0b7da26d49a0a91866ae3fb1b9d5 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:Nfa29969d136d4fd59f0337a93f4cb686 ;
        dcterms:spatial _:Nba137ba30dac4969b9eb89f6c0e172d0 ;
        dcterms:title "CmsCollection0CmsWork2 closing" ;
        cms:work ns45:work2 .

    _:Nba137ba30dac4969b9eb89f6c0e172d0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nfa29969d136d4fd59f0337a93f4cb686 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns332:Thumbnail800x800 {
    ns332:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:106 .

    ns280:CmsImage1 foaf:thumbnail ns332:Thumbnail800x800 .
}

ns160:Thumbnail800x800 {
    ns160:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns78:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:53 .

    ns78:CmsImage0 foaf:thumbnail ns160:Thumbnail800x800 .
}

ns43:freestandingwork11Location {
    ns43:freestandingwork11Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns25:70 {
    ns25:70 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 0" ;
        skos:prefLabel "CmsConcept 70" .
}

ns357:CmsImage1 {
    ns357:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:18 .
}

ns240:Thumbnail800x800 {
    ns240:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:59 .

    ns374:CmsImage0 foaf:thumbnail ns240:Thumbnail800x800 .
}

ns46:Thumbnail400x400 {
    ns46:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:86 .

    ns392:CmsImage0 foaf:thumbnail ns46:Thumbnail400x400 .
}

ns358:Thumbnail400x400 {
    ns358:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns52:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:90 .

    ns52:CmsImage0 foaf:thumbnail ns358:Thumbnail400x400 .
}

ns238:Thumbnail600x600 {
    ns238:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns113:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:77 .

    ns113:CmsImage0 foaf:thumbnail ns238:Thumbnail600x600 .
}

ns229:Thumbnail200x200 {
    ns229:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:43 .

    ns404:CmsImage1 foaf:thumbnail ns229:Thumbnail200x200 .
}

ns195:Thumbnail800x800 {
    ns195:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:107 .

    ns197:CmsImage0 foaf:thumbnail ns195:Thumbnail800x800 .
}

ns223:Thumbnail200x200 {
    ns223:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:44 .

    ns318:CmsImage0 foaf:thumbnail ns223:Thumbnail200x200 .
}

ns25:27 {
    ns25:27 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 7" ;
        skos:prefLabel "CmsConcept 27" .
}

ns359:Thumbnail400x400 {
    ns385:CmsImage0 foaf:thumbnail ns359:Thumbnail400x400 .

    ns359:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:74 .
}

ns245:Thumbnail200x200 {
    ns245:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns260:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:31 .

    ns260:CmsImage0 foaf:thumbnail ns245:Thumbnail200x200 .
}

ns17:Thumbnail800x800 {
    ns17:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:71 .

    ns400:CmsImage1 foaf:thumbnail ns17:Thumbnail800x800 .
}

ns312:Thumbnail400x400 {
    ns312:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:14 .

    ns276:CmsImage1 foaf:thumbnail ns312:Thumbnail400x400 .
}

ns34:Thumbnail600x600 {
    ns34:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:26 .

    ns257:CmsImage1 foaf:thumbnail ns34:Thumbnail600x600 .
}

ns35:CmsImage0 {
    ns35:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:76 .
}

ns360:CmsImage0 {
    ns360:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:51 .
}

ns298:Thumbnail400x400 {
    ns298:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns163:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:49 .

    ns163:CmsImage0 foaf:thumbnail ns298:Thumbnail400x400 .
}

ns361:Thumbnail200x200 {
    ns361:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns301:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:organization2 .

    ns301:CmsImage0 foaf:thumbnail ns361:Thumbnail200x200 .
}

ns164:Thumbnail600x600 {
    ns164:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:81 .

    ns394:CmsImage1 foaf:thumbnail ns164:Thumbnail600x600 .
}

ns195:Thumbnail400x400 {
    ns195:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:107 .

    ns197:CmsImage0 foaf:thumbnail ns195:Thumbnail400x400 .
}

ns115:Thumbnail600x600 {
    ns115:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:79 .

    ns84:CmsImage0 foaf:thumbnail ns115:Thumbnail600x600 .
}

ns45:work3Creation {
    ns45:work3Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:person0,
            ns43:person1 ;
        dcterms:date _:N73d32a0a3b1a467baa9c57ecafab637b ;
        dcterms:spatial ns45:work3Location ;
        dcterms:title "CmsCollection0CmsWork3 creation" ;
        cms:work ns45:work3 .

    _:N73d32a0a3b1a467baa9c57ecafab637b a cms:DateTimeDescription ;
        time:day "---29"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns292:Thumbnail600x600 {
    ns292:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns85:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:person1 .

    ns85:CmsImage0 foaf:thumbnail ns292:Thumbnail600x600 .
}

ns55:Thumbnail800x800 {
    ns55:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:72 .

    ns186:CmsImage1 foaf:thumbnail ns55:Thumbnail800x800 .
}

ns23:Thumbnail600x600 {
    ns23:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:85 .

    ns251:CmsImage0 foaf:thumbnail ns23:Thumbnail600x600 .
}

ns249:CmsImage1 {
    ns249:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:48 .
}

ns1:Thumbnail600x600 {
    ns1:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns200:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:16 .

    ns200:CmsImage0 foaf:thumbnail ns1:Thumbnail600x600 .
}

ns263:Thumbnail800x800 {
    ns263:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:42 .

    ns207:CmsImage0 foaf:thumbnail ns263:Thumbnail800x800 .
}

ns25:14 {
    ns25:14 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 4" ;
        skos:prefLabel "CmsConcept 14" .
}

ns251:CmsImage1 {
    ns251:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:85 .
}

ns338:Thumbnail200x200 {
    ns338:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns6:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:91 .

    ns6:CmsImage0 foaf:thumbnail ns338:Thumbnail200x200 .
}

ns102:Thumbnail800x800 {
    ns102:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns107:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:73 .

    ns107:CmsImage0 foaf:thumbnail ns102:Thumbnail800x800 .
}

ns25:42 {
    ns25:42 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 2" ;
        skos:prefLabel "CmsConcept 42" .
}

ns362:Thumbnail200x200 {
    ns300:CmsImage0 foaf:thumbnail ns362:Thumbnail200x200 .

    ns362:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:organization4 .
}

ns172:Thumbnail200x200 {
    ns172:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:person4 .

    ns110:CmsImage0 foaf:thumbnail ns172:Thumbnail200x200 .
}

ns363:Thumbnail400x400 {
    ns363:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns99:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:34 .

    ns99:CmsImage1 foaf:thumbnail ns363:Thumbnail400x400 .
}

ns123:Thumbnail600x600 {
    ns123:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns41:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns45:work0 .

    ns41:CmsImage0 foaf:thumbnail ns123:Thumbnail600x600 .
}

ns121:Thumbnail600x600 {
    ns121:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:109 .

    ns345:CmsImage1 foaf:thumbnail ns121:Thumbnail600x600 .
}

ns131:Thumbnail600x600 {
    ns131:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:61 .

    ns327:CmsImage1 foaf:thumbnail ns131:Thumbnail600x600 .
}

ns217:Thumbnail600x600 {
    ns217:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns152:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:person2 .

    ns152:CmsImage1 foaf:thumbnail ns217:Thumbnail600x600 .
}

ns326:CmsImage0 {
    ns326:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:28 .
}

ns29:Thumbnail400x400 {
    ns29:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns330:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:19 .

    ns330:CmsImage0 foaf:thumbnail ns29:Thumbnail400x400 .
}

ns106:Thumbnail200x200 {
    ns106:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:40 .

    ns256:CmsImage0 foaf:thumbnail ns106:Thumbnail200x200 .
}

ns200:CmsImage0 {
    ns200:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:16 .
}

ns165:Thumbnail600x600 {
    ns165:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:64 .

    ns375:CmsImage0 foaf:thumbnail ns165:Thumbnail600x600 .
}

ns43:freestandingwork8Creation {
    ns43:freestandingwork8Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:organization0,
            ns43:organization1 ;
        dcterms:date _:N82221f357bb04943bcb50d1bd7db3467 ;
        dcterms:description _:N7db6d7f0bda84c3ea112b69989c3993c ;
        dcterms:spatial ns43:freestandingwork8Location ;
        dcterms:title "FreestandingWork8 creation" ;
        cms:work ns43:freestandingwork8 .

    _:N82221f357bb04943bcb50d1bd7db3467 a cms:DateTimeDescription ;
        time:day "---24"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N7db6d7f0bda84c3ea112b69989c3993c a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns145:Thumbnail600x600 {
    ns145:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns267:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:68 .

    ns267:CmsImage1 foaf:thumbnail ns145:Thumbnail600x600 .
}

ns153:Thumbnail800x800 {
    ns153:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:41 .

    ns380:CmsImage0 foaf:thumbnail ns153:Thumbnail800x800 .
}

ns57:Thumbnail600x600 {
    ns57:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:103 .

    ns346:CmsImage0 foaf:thumbnail ns57:Thumbnail600x600 .
}

ns348:CmsImage1 {
    ns348:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:75 .
}

ns67:Thumbnail600x600 {
    ns67:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:107 .

    ns197:CmsImage1 foaf:thumbnail ns67:Thumbnail600x600 .
}

ns364:Thumbnail800x800 {
    ns309:CmsImage0 foaf:thumbnail ns364:Thumbnail800x800 .

    ns364:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:52 .
}

ns162:Thumbnail800x800 {
    ns162:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:freestandingwork10 .

    ns342:CmsImage0 foaf:thumbnail ns162:Thumbnail800x800 .
}

ns10:Thumbnail200x200 {
    ns10:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns27:work4 .

    ns395:CmsImage1 foaf:thumbnail ns10:Thumbnail200x200 .
}

ns130:Thumbnail200x200 {
    ns130:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:freestandingwork11 .

    ns387:CmsImage1 foaf:thumbnail ns130:Thumbnail200x200 .
}

ns324:CmsImage0 {
    ns324:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:99 .
}

ns43:freestandingwork11Opening {
    ns43:freestandingwork11Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-21"^^xsd:date ;
        dcterms:spatial _:Nce830309207d4704b090586dd36ada5e ;
        dcterms:title "FreestandingWork11 opening" ;
        cms:work ns43:freestandingwork11 .

    _:Nce830309207d4704b090586dd36ada5e a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns116:CmsImage0 {
    ns116:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:33 .
}

ns266:Thumbnail800x800 {
    ns266:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns230:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:97 .

    ns230:CmsImage0 foaf:thumbnail ns266:Thumbnail800x800 .
}

ns265:CmsImage0 {
    ns265:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:63 .
}

ns359:Thumbnail200x200 {
    ns359:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:74 .

    ns385:CmsImage0 foaf:thumbnail ns359:Thumbnail200x200 .
}

ns353:Thumbnail400x400 {
    ns353:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns77:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:13 .

    ns77:CmsImage0 foaf:thumbnail ns353:Thumbnail400x400 .
}

ns125:Thumbnail600x600 {
    ns125:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns243:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:46 .

    ns243:CmsImage1 foaf:thumbnail ns125:Thumbnail600x600 .
}

ns86:Thumbnail400x400 {
    ns86:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns120:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:35 .

    ns120:CmsImage1 foaf:thumbnail ns86:Thumbnail400x400 .
}

ns135:Thumbnail200x200 {
    ns135:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:50 .

    ns36:CmsImage0 foaf:thumbnail ns135:Thumbnail200x200 .
}

ns25:63 {
    ns25:63 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 3" ;
        skos:prefLabel "CmsConcept 63" .
}

ns25:93 {
    ns25:93 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 3" ;
        skos:prefLabel "CmsConcept 93" .
}

ns236:Thumbnail200x200 {
    ns236:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns35:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:76 .

    ns35:CmsImage1 foaf:thumbnail ns236:Thumbnail200x200 .
}

ns204:CmsImage0 {
    ns204:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:11 .
}

ns208:Thumbnail200x200 {
    ns208:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:8 .

    ns352:CmsImage1 foaf:thumbnail ns208:Thumbnail200x200 .
}

ns235:Thumbnail600x600 {
    ns235:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:79 .

    ns84:CmsImage1 foaf:thumbnail ns235:Thumbnail600x600 .
}

ns365:CmsImage0 {
    ns365:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:32 .
}

ns278:CmsImage1 {
    ns278:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:4 .
}

ns220:CmsImage1 {
    ns220:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:22 .
}

ns148:Thumbnail400x400 {
    ns148:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:45 .

    ns371:CmsImage0 foaf:thumbnail ns148:Thumbnail400x400 .
}

ns366:Thumbnail200x200 {
    ns377:CmsImage0 foaf:thumbnail ns366:Thumbnail200x200 .

    ns366:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:96 .
}

ns271:Thumbnail400x400 {
    ns271:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns215:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:collection1 .

    ns215:CmsImage1 foaf:thumbnail ns271:Thumbnail400x400 .
}

ns90:Thumbnail400x400 {
    ns90:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:80 .

    ns386:CmsImage0 foaf:thumbnail ns90:Thumbnail400x400 .
}

ns362:Thumbnail600x600 {
    ns362:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:organization4 .

    ns300:CmsImage0 foaf:thumbnail ns362:Thumbnail600x600 .
}

ns184:Thumbnail200x200 {
    ns184:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns180:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:66 .

    ns180:CmsImage1 foaf:thumbnail ns184:Thumbnail200x200 .
}

ns225:Thumbnail400x400 {
    ns225:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns27:work4 .

    ns395:CmsImage0 foaf:thumbnail ns225:Thumbnail400x400 .
}

ns43:freestandingwork11 {
    ns43:freestandingwork11 a cms:Work ;
        dcterms:alternative "FreestandingWork11 alternative title 0",
            "FreestandingWork11 alternative title 1" ;
        dcterms:contributor _:N0e5ce14dbee840fb8456c263916bc366,
            _:Nc93ac97356d74489914dddec553781f5 ;
        dcterms:creator ns43:organization3,
            ns43:organization4 ;
        dcterms:extent ns25:11,
            ns25:12 ;
        dcterms:identifier "FreestandingWork11Id0",
            "FreestandingWork11Id1" ;
        dcterms:language ns25:21,
            ns25:22 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:41,
            ns25:42 ;
        dcterms:provenance "FreestandingWork11 provenance 0",
            "FreestandingWork11 provenance 1" ;
        dcterms:publisher ns25:51,
            ns25:52 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 rights holder" ;
        dcterms:source ns25:61,
            ns25:62 ;
        dcterms:spatial ns43:freestandingwork11Location ;
        dcterms:subject ns25:81,
            ns25:82 ;
        dcterms:title "FreestandingWork11" ;
        dcterms:type ns25:101,
            ns25:102 ;
        vra:culturalContext ns25:1,
            ns25:2 ;
        vra:material ns25:31,
            ns25:32 ;
        vra:technique ns25:91,
            ns25:92 .

    _:N0e5ce14dbee840fb8456c263916bc366 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 0" .

    _:Nc93ac97356d74489914dddec553781f5 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 1" .
}

ns40:Thumbnail400x400 {
    ns40:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:41 .

    ns380:CmsImage1 foaf:thumbnail ns40:Thumbnail400x400 .
}

ns149:Thumbnail800x800 {
    ns149:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:99 .

    ns324:CmsImage0 foaf:thumbnail ns149:Thumbnail800x800 .
}

ns165:Thumbnail400x400 {
    ns165:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:64 .

    ns375:CmsImage0 foaf:thumbnail ns165:Thumbnail400x400 .
}

ns87:Thumbnail600x600 {
    ns87:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:56 .

    ns158:CmsImage0 foaf:thumbnail ns87:Thumbnail600x600 .
}

ns356:CmsImage1 {
    ns356:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:freestandingwork9 .
}

ns367:Thumbnail800x800 {
    ns367:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns232:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:98 .

    ns232:CmsImage0 foaf:thumbnail ns367:Thumbnail800x800 .
}

ns76:Thumbnail200x200 {
    ns76:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:10 .

    ns372:CmsImage1 foaf:thumbnail ns76:Thumbnail200x200 .
}

ns190:Thumbnail200x200 {
    ns190:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns170:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:person0 .

    ns170:CmsImage0 foaf:thumbnail ns190:Thumbnail200x200 .
}

ns227:Thumbnail200x200 {
    ns227:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns202:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:95 .

    ns202:CmsImage1 foaf:thumbnail ns227:Thumbnail200x200 .
}

ns315:Thumbnail200x200 {
    ns315:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:67 .

    ns89:CmsImage0 foaf:thumbnail ns315:Thumbnail200x200 .
}

ns240:Thumbnail400x400 {
    ns240:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:59 .

    ns374:CmsImage0 foaf:thumbnail ns240:Thumbnail400x400 .
}

ns174:Thumbnail800x800 {
    ns174:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns97:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns45:work3 .

    ns97:CmsImage0 foaf:thumbnail ns174:Thumbnail800x800 .
}

ns25:49 {
    ns25:49 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 9" ;
        skos:prefLabel "CmsConcept 49" .
}

ns306:Thumbnail200x200 {
    ns306:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:69 .

    ns294:CmsImage1 foaf:thumbnail ns306:Thumbnail200x200 .
}

ns349:Thumbnail800x800 {
    ns349:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns260:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:31 .

    ns260:CmsImage1 foaf:thumbnail ns349:Thumbnail800x800 .
}

ns361:Thumbnail400x400 {
    ns361:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns301:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:organization2 .

    ns301:CmsImage0 foaf:thumbnail ns361:Thumbnail400x400 .
}

ns80:Thumbnail200x200 {
    ns80:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns120:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:35 .

    ns120:CmsImage0 foaf:thumbnail ns80:Thumbnail200x200 .
}

ns193:Thumbnail200x200 {
    ns193:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:40 .

    ns256:CmsImage1 foaf:thumbnail ns193:Thumbnail200x200 .
}

ns47:Thumbnail600x600 {
    ns47:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns4:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:55 .

    ns4:CmsImage1 foaf:thumbnail ns47:Thumbnail600x600 .
}

ns25:4 {
    ns25:4 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 4" ;
        skos:prefLabel "CmsConcept 4" .
}

ns226:Thumbnail200x200 {
    ns226:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns234:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:47 .

    ns234:CmsImage0 foaf:thumbnail ns226:Thumbnail200x200 .
}

ns228:Thumbnail800x800 {
    ns228:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns62:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:60 .

    ns62:CmsImage1 foaf:thumbnail ns228:Thumbnail800x800 .
}

ns241:Thumbnail400x400 {
    ns241:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns41:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns45:work0 .

    ns41:CmsImage1 foaf:thumbnail ns241:Thumbnail400x400 .
}

ns112:Thumbnail600x600 {
    ns112:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns58:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:7 .

    ns58:CmsImage1 foaf:thumbnail ns112:Thumbnail600x600 .
}

ns357:CmsImage0 {
    ns357:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:18 .
}

ns37:Thumbnail600x600 {
    ns37:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns216:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:89 .

    ns216:CmsImage1 foaf:thumbnail ns37:Thumbnail600x600 .
}

ns159:Thumbnail200x200 {
    ns159:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:85 .

    ns251:CmsImage1 foaf:thumbnail ns159:Thumbnail200x200 .
}

ns359:Thumbnail600x600 {
    ns359:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:74 .

    ns385:CmsImage0 foaf:thumbnail ns359:Thumbnail600x600 .
}

ns182:Thumbnail600x600 {
    ns182:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:109 .

    ns345:CmsImage0 foaf:thumbnail ns182:Thumbnail600x600 .
}

ns177:Thumbnail600x600 {
    ns177:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns249:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:48 .

    ns249:CmsImage1 foaf:thumbnail ns177:Thumbnail600x600 .
}

ns299:CmsImage0 {
    ns299:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:person3 .
}

ns368:Thumbnail400x400 {
    ns368:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:72 .

    ns186:CmsImage0 foaf:thumbnail ns368:Thumbnail400x400 .
}

ns25:69 {
    ns25:69 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 9" ;
        skos:prefLabel "CmsConcept 69" .
}

ns369:Thumbnail400x400 {
    ns375:CmsImage1 foaf:thumbnail ns369:Thumbnail400x400 .

    ns369:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:64 .
}

ns177:Thumbnail400x400 {
    ns177:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns249:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:48 .

    ns249:CmsImage1 foaf:thumbnail ns177:Thumbnail400x400 .
}

ns321:Thumbnail400x400 {
    ns321:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:freestandingwork8 .

    ns328:CmsImage1 foaf:thumbnail ns321:Thumbnail400x400 .
}

ns125:Thumbnail200x200 {
    ns125:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns243:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:46 .

    ns243:CmsImage1 foaf:thumbnail ns125:Thumbnail200x200 .
}

ns317:Thumbnail800x800 {
    ns317:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns27:work7 .

    ns389:CmsImage0 foaf:thumbnail ns317:Thumbnail800x800 .
}

ns27:work4 {
    ns27:work4 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork4 alternative title 0",
            "CmsCollection1CmsWork4 alternative title 1" ;
        dcterms:contributor _:N505e7d3cf0af45ccaf2bebe451573c23,
            _:Nb1d2a50e945d4c3bab48c7dc87f32692 ;
        dcterms:creator ns43:person1,
            ns43:person2 ;
        dcterms:description _:N940ba015246c4205852489fcba411af1 ;
        dcterms:extent ns25:14,
            ns25:15 ;
        dcterms:identifier "CmsCollection1CmsWork4Id0",
            "CmsCollection1CmsWork4Id1" ;
        dcterms:language ns25:24,
            ns25:25 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:44,
            ns25:45 ;
        dcterms:provenance "CmsCollection1CmsWork4 provenance 0",
            "CmsCollection1CmsWork4 provenance 1" ;
        dcterms:publisher ns25:54,
            ns25:55 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 rights holder" ;
        dcterms:source ns25:64,
            ns25:65 ;
        dcterms:spatial ns27:work4Location ;
        dcterms:subject ns25:84,
            ns25:85 ;
        dcterms:title "CmsCollection1CmsWork4" ;
        dcterms:type ns25:104,
            ns25:105 ;
        vra:culturalContext ns25:4,
            ns25:5 ;
        vra:material ns25:34,
            ns25:35 ;
        vra:technique ns25:94,
            ns25:95 ;
        cms:collection ns43:collection1 ;
        foaf:page <http://example.com/work/4> .

    _:N505e7d3cf0af45ccaf2bebe451573c23 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 0" .

    _:Nb1d2a50e945d4c3bab48c7dc87f32692 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 1" .

    _:N940ba015246c4205852489fcba411af1 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns370:Thumbnail800x800 {
    ns370:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns99:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:34 .

    ns99:CmsImage0 foaf:thumbnail ns370:Thumbnail800x800 .
}

ns210:Thumbnail400x400 {
    ns210:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:21 .

    ns393:CmsImage1 foaf:thumbnail ns210:Thumbnail400x400 .
}

ns62:CmsImage0 {
    ns62:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:60 .
}

ns282:Thumbnail400x400 {
    ns282:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:29 .

    ns333:CmsImage1 foaf:thumbnail ns282:Thumbnail400x400 .
}

ns43:freestandingwork9Location {
    ns43:freestandingwork9Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns90:Thumbnail200x200 {
    ns90:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:80 .

    ns386:CmsImage0 foaf:thumbnail ns90:Thumbnail200x200 .
}

ns25:12 {
    ns25:12 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 2" ;
        skos:prefLabel "CmsConcept 12" .
}

ns371:CmsImage1 {
    ns371:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:45 .
}

ns277:Thumbnail800x800 {
    ns277:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:71 .

    ns400:CmsImage0 foaf:thumbnail ns277:Thumbnail800x800 .
}

ns17:Thumbnail400x400 {
    ns17:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:71 .

    ns400:CmsImage1 foaf:thumbnail ns17:Thumbnail400x400 .
}

ns5:Thumbnail200x200 {
    ns5:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:75 .

    ns348:CmsImage1 foaf:thumbnail ns5:Thumbnail200x200 .
}

ns8:Thumbnail800x800 {
    ns8:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns265:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:63 .

    ns265:CmsImage0 foaf:thumbnail ns8:Thumbnail800x800 .
}

ns370:Thumbnail200x200 {
    ns370:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns99:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:34 .

    ns99:CmsImage0 foaf:thumbnail ns370:Thumbnail200x200 .
}

_:Nbce1573251cc4b48861f2f4cae5d0670 {
    _:Nbce1573251cc4b48861f2f4cae5d0670 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N84697bd60dc24c469cf3b23b73cdfe5d ;
        dcterms:spatial _:N8ee1b441e72143f0862cf5016f68cb6f ;
        dcterms:title "FreestandingWork10 closing" ;
        cms:work ns43:freestandingwork10 .

    _:N8ee1b441e72143f0862cf5016f68cb6f a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N84697bd60dc24c469cf3b23b73cdfe5d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns144:Thumbnail800x800 {
    ns144:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:23 .

    ns354:CmsImage1 foaf:thumbnail ns144:Thumbnail800x800 .
}

_:Nb54a62c85aad4587846e06c3f70d0239 {
    _:Nb54a62c85aad4587846e06c3f70d0239 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N449c0fde74df403aaf4a932de18eeaf1 ;
        dcterms:title "FreestandingWork9 closing" ;
        cms:work ns43:freestandingwork9 .

    _:N449c0fde74df403aaf4a932de18eeaf1 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns151:Thumbnail600x600 {
    ns151:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns299:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:person3 .

    ns299:CmsImage1 foaf:thumbnail ns151:Thumbnail600x600 .
}

ns277:Thumbnail600x600 {
    ns277:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:71 .

    ns400:CmsImage0 foaf:thumbnail ns277:Thumbnail600x600 .
}

ns48:Thumbnail200x200 {
    ns48:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns52:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:90 .

    ns52:CmsImage1 foaf:thumbnail ns48:Thumbnail200x200 .
}

ns227:Thumbnail600x600 {
    ns227:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns202:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:95 .

    ns202:CmsImage1 foaf:thumbnail ns227:Thumbnail600x600 .
}

ns45:work2Creation {
    ns45:work2Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:organization4,
            ns43:person0 ;
        dcterms:date _:N3897aac7f5154f4e973b8c99537b758b ;
        dcterms:description _:Nfa29969d136d4fd59f0337a93f4cb686 ;
        dcterms:spatial ns45:work2Location ;
        dcterms:title "CmsCollection0CmsWork2 creation" ;
        cms:work ns45:work2 .

    _:N3897aac7f5154f4e973b8c99537b758b a cms:DateTimeDescription ;
        time:day "---30"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:Nfa29969d136d4fd59f0337a93f4cb686 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns272:Thumbnail600x600 {
    ns272:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns180:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:66 .

    ns180:CmsImage0 foaf:thumbnail ns272:Thumbnail600x600 .
}

ns25:11 {
    ns25:11 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 1" ;
        skos:prefLabel "CmsConcept 11" .
}

ns337:Thumbnail600x600 {
    ns337:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:101 .

    ns381:CmsImage1 foaf:thumbnail ns337:Thumbnail600x600 .
}

ns74:Thumbnail400x400 {
    ns74:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:102 .

    ns231:CmsImage0 foaf:thumbnail ns74:Thumbnail400x400 .
}

ns255:CmsImage0 {
    ns255:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:38 .
}

ns372:CmsImage0 {
    ns372:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:10 .
}

ns302:Thumbnail800x800 {
    ns302:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:1 .

    ns343:CmsImage1 foaf:thumbnail ns302:Thumbnail800x800 .
}

ns373:Thumbnail400x400 {
    ns373:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns154:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:27 .

    ns154:CmsImage1 foaf:thumbnail ns373:Thumbnail400x400 .
}

ns320:Thumbnail200x200 {
    ns320:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns310:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:organization3 .

    ns310:CmsImage0 foaf:thumbnail ns320:Thumbnail200x200 .
}

ns294:CmsImage1 {
    ns294:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:69 .
}

ns48:Thumbnail600x600 {
    ns48:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns52:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:90 .

    ns52:CmsImage1 foaf:thumbnail ns48:Thumbnail600x600 .
}

ns233:Thumbnail600x600 {
    ns233:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns62:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:60 .

    ns62:CmsImage0 foaf:thumbnail ns233:Thumbnail600x600 .
}

ns223:Thumbnail800x800 {
    ns223:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:44 .

    ns318:CmsImage0 foaf:thumbnail ns223:Thumbnail800x800 .
}

ns25:25 {
    ns25:25 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 5" ;
        skos:prefLabel "CmsConcept 25" .
}

ns25:47 {
    ns25:47 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 7" ;
        skos:prefLabel "CmsConcept 47" .
}

ns166:Thumbnail200x200 {
    ns166:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns357:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:18 .

    ns357:CmsImage1 foaf:thumbnail ns166:Thumbnail200x200 .
}

ns266:Thumbnail400x400 {
    ns266:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns230:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:97 .

    ns230:CmsImage0 foaf:thumbnail ns266:Thumbnail400x400 .
}

ns123:Thumbnail800x800 {
    ns123:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns41:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns45:work0 .

    ns41:CmsImage0 foaf:thumbnail ns123:Thumbnail800x800 .
}

ns205:Thumbnail800x800 {
    ns205:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:11 .

    ns204:CmsImage1 foaf:thumbnail ns205:Thumbnail800x800 .
}

dcterms:title {
    dcterms:title a cms:Property ;
        rdfs:label "Title" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Title> .
}

ns189:CmsImage0 {
    ns189:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:70 .
}

ns302:Thumbnail400x400 {
    ns302:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:1 .

    ns343:CmsImage1 foaf:thumbnail ns302:Thumbnail400x400 .
}

ns95:Thumbnail800x800 {
    ns95:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns249:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:48 .

    ns249:CmsImage0 foaf:thumbnail ns95:Thumbnail800x800 .
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

ns275:CmsImage1 {
    ns275:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:65 .
}

ns25:71 {
    ns25:71 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 1" ;
        skos:prefLabel "CmsConcept 71" .
}

ns166:Thumbnail400x400 {
    ns166:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns357:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:18 .

    ns357:CmsImage1 foaf:thumbnail ns166:Thumbnail400x400 .
}

ns174:Thumbnail600x600 {
    ns174:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns97:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns45:work3 .

    ns97:CmsImage0 foaf:thumbnail ns174:Thumbnail600x600 .
}

ns307:Thumbnail800x800 {
    ns307:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:4 .

    ns278:CmsImage0 foaf:thumbnail ns307:Thumbnail800x800 .
}

ns69:Thumbnail600x600 {
    ns69:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:74 .

    ns385:CmsImage1 foaf:thumbnail ns69:Thumbnail600x600 .
}

ns311:Thumbnail400x400 {
    ns311:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:37 .

    ns402:CmsImage0 foaf:thumbnail ns311:Thumbnail400x400 .
}

ns25:43 {
    ns25:43 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 3" ;
        skos:prefLabel "CmsConcept 43" .
}

ns368:Thumbnail200x200 {
    ns368:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:72 .

    ns186:CmsImage0 foaf:thumbnail ns368:Thumbnail200x200 .
}

ns268:Thumbnail600x600 {
    ns268:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns215:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:collection1 .

    ns215:CmsImage0 foaf:thumbnail ns268:Thumbnail600x600 .
}

ns109:Thumbnail400x400 {
    ns109:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:88 .

    ns396:CmsImage1 foaf:thumbnail ns109:Thumbnail400x400 .
}

ns374:CmsImage0 {
    ns374:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:59 .
}

ns79:Thumbnail800x800 {
    ns79:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:1 .

    ns343:CmsImage0 foaf:thumbnail ns79:Thumbnail800x800 .
}

ns358:Thumbnail600x600 {
    ns358:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns52:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:90 .

    ns52:CmsImage0 foaf:thumbnail ns358:Thumbnail600x600 .
}

ns176:Thumbnail200x200 {
    ns176:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns4:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:55 .

    ns4:CmsImage0 foaf:thumbnail ns176:Thumbnail200x200 .
}

ns234:CmsImage1 {
    ns234:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:47 .
}

ns283:Thumbnail600x600 {
    ns283:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:26 .

    ns257:CmsImage0 foaf:thumbnail ns283:Thumbnail600x600 .
}

ns375:CmsImage0 {
    ns375:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:64 .
}

ns292:Thumbnail400x400 {
    ns292:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns85:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:person1 .

    ns85:CmsImage0 foaf:thumbnail ns292:Thumbnail400x400 .
}

ns25:3 {
    ns25:3 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 3" ;
        skos:prefLabel "CmsConcept 3" .
}

ns6:CmsImage1 {
    ns6:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:91 .
}

ns319:Thumbnail800x800 {
    ns319:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns299:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:person3 .

    ns299:CmsImage0 foaf:thumbnail ns319:Thumbnail800x800 .
}

ns376:property_group {
    ns376:property_group a cms:PropertyGroup ;
        rdfs:label "Synthetic data properties" .
}

ns377:CmsImage0 {
    ns377:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:96 .
}

ns208:Thumbnail800x800 {
    ns208:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:8 .

    ns352:CmsImage1 foaf:thumbnail ns208:Thumbnail800x800 .
}

ns27:work5Location {
    ns27:work5Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns173:Thumbnail600x600 {
    ns173:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns58:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:7 .

    ns58:CmsImage0 foaf:thumbnail ns173:Thumbnail600x600 .
}

ns226:Thumbnail800x800 {
    ns226:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns234:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:47 .

    ns234:CmsImage0 foaf:thumbnail ns226:Thumbnail800x800 .
}

ns81:Thumbnail400x400 {
    ns81:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:84 .

    ns221:CmsImage1 foaf:thumbnail ns81:Thumbnail400x400 .
}

ns241:Thumbnail800x800 {
    ns241:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns41:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns45:work0 .

    ns41:CmsImage1 foaf:thumbnail ns241:Thumbnail800x800 .
}

ns222:Thumbnail400x400 {
    ns222:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns189:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:70 .

    ns189:CmsImage0 foaf:thumbnail ns222:Thumbnail400x400 .
}

ns280:CmsImage1 {
    ns280:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:106 .
}

ns311:Thumbnail200x200 {
    ns311:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:37 .

    ns402:CmsImage0 foaf:thumbnail ns311:Thumbnail200x200 .
}

ns378:Thumbnail800x800 {
    ns378:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns77:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:13 .

    ns77:CmsImage1 foaf:thumbnail ns378:Thumbnail800x800 .
}

ns153:Thumbnail400x400 {
    ns153:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:41 .

    ns380:CmsImage0 foaf:thumbnail ns153:Thumbnail400x400 .
}

ns379:Thumbnail200x200 {
    ns388:CmsImage1 foaf:thumbnail ns379:Thumbnail200x200 .

    ns379:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:15 .
}

ns115:Thumbnail200x200 {
    ns115:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:79 .

    ns84:CmsImage0 foaf:thumbnail ns115:Thumbnail200x200 .
}

ns380:CmsImage1 {
    ns380:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:41 .
}

ns309:CmsImage0 {
    ns309:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:52 .
}

ns1:Thumbnail200x200 {
    ns1:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns200:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:16 .

    ns200:CmsImage0 foaf:thumbnail ns1:Thumbnail200x200 .
}

ns43:freestandingwork8 {
    ns43:freestandingwork8 a cms:Work ;
        dcterms:alternative "FreestandingWork8 alternative title 0",
            "FreestandingWork8 alternative title 1" ;
        dcterms:contributor _:Nd3b9621fd8184e49b3021c705ee52e02,
            _:Ndf6220c260a241c697d5fe48ff36ec5c ;
        dcterms:creator ns43:organization0,
            ns43:organization1 ;
        dcterms:description _:N7db6d7f0bda84c3ea112b69989c3993c ;
        dcterms:extent ns25:18,
            ns25:19 ;
        dcterms:identifier "FreestandingWork8Id0",
            "FreestandingWork8Id1" ;
        dcterms:language ns25:28,
            ns25:29 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:48,
            ns25:49 ;
        dcterms:provenance "FreestandingWork8 provenance 0",
            "FreestandingWork8 provenance 1" ;
        dcterms:publisher ns25:58,
            ns25:59 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 rights holder" ;
        dcterms:source ns25:68,
            ns25:69 ;
        dcterms:spatial ns43:freestandingwork8Location ;
        dcterms:subject ns25:88,
            ns25:89 ;
        dcterms:title "FreestandingWork8" ;
        dcterms:type ns25:108,
            ns25:109 ;
        vra:culturalContext ns25:8,
            ns25:9 ;
        vra:material ns25:38,
            ns25:39 ;
        vra:technique ns25:98,
            ns25:99 ;
        foaf:page <http://example.com/work/8> .

    _:Nd3b9621fd8184e49b3021c705ee52e02 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 0" .

    _:Ndf6220c260a241c697d5fe48ff36ec5c a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 1" .

    _:N7db6d7f0bda84c3ea112b69989c3993c a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns90:Thumbnail600x600 {
    ns90:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:80 .

    ns386:CmsImage0 foaf:thumbnail ns90:Thumbnail600x600 .
}

ns108:Thumbnail400x400 {
    ns108:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns243:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:46 .

    ns243:CmsImage0 foaf:thumbnail ns108:Thumbnail400x400 .
}

ns319:Thumbnail200x200 {
    ns319:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns299:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:person3 .

    ns299:CmsImage0 foaf:thumbnail ns319:Thumbnail200x200 .
}

ns142:Thumbnail800x800 {
    ns142:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns154:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:27 .

    ns154:CmsImage0 foaf:thumbnail ns142:Thumbnail800x800 .
}

ns103:Thumbnail800x800 {
    ns103:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:92 .

    ns390:CmsImage0 foaf:thumbnail ns103:Thumbnail800x800 .
}

ns119:Thumbnail800x800 {
    ns119:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns171:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:36 .

    ns171:CmsImage1 foaf:thumbnail ns119:Thumbnail800x800 .
}

_:N4f0d65a5ac364f38b3456f2f91a9146c {
    _:N4f0d65a5ac364f38b3456f2f91a9146c a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N9d7629395a754994a79a19894d994109 ;
        dcterms:spatial _:N3da56120a0f940f68a23b81cc9338b76 ;
        dcterms:title "CmsCollection1CmsWork6 closing" ;
        cms:work ns27:work6 .

    _:N3da56120a0f940f68a23b81cc9338b76 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N9d7629395a754994a79a19894d994109 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns46:Thumbnail800x800 {
    ns46:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:86 .

    ns392:CmsImage0 foaf:thumbnail ns46:Thumbnail800x800 .
}

ns24:Thumbnail600x600 {
    ns24:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:69 .

    ns294:CmsImage0 foaf:thumbnail ns24:Thumbnail600x600 .
}

ns47:Thumbnail400x400 {
    ns47:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns4:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:55 .

    ns4:CmsImage1 foaf:thumbnail ns47:Thumbnail400x400 .
}

ns371:CmsImage0 {
    ns371:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:45 .
}

ns25:34 {
    ns25:34 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 4" ;
        skos:prefLabel "CmsConcept 34" .
}

ns213:Thumbnail400x400 {
    ns213:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:58 .

    ns146:CmsImage1 foaf:thumbnail ns213:Thumbnail400x400 .
}

ns133:Thumbnail200x200 {
    ns133:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns171:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:36 .

    ns171:CmsImage0 foaf:thumbnail ns133:Thumbnail200x200 .
}

ns104:Thumbnail800x800 {
    ns104:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns230:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:97 .

    ns230:CmsImage1 foaf:thumbnail ns104:Thumbnail800x800 .
}

ns25:39 {
    ns25:39 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 9" ;
        skos:prefLabel "CmsConcept 39" .
}

ns175:Thumbnail200x200 {
    ns175:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns206:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:3 .

    ns206:CmsImage1 foaf:thumbnail ns175:Thumbnail200x200 .
}

ns316:Thumbnail800x800 {
    ns316:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns85:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:person1 .

    ns85:CmsImage1 foaf:thumbnail ns316:Thumbnail800x800 .
}

ns334:Thumbnail200x200 {
    ns334:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:28 .

    ns326:CmsImage1 foaf:thumbnail ns334:Thumbnail200x200 .
}

ns336:Thumbnail200x200 {
    ns336:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:freestandingwork9 .

    ns356:CmsImage0 foaf:thumbnail ns336:Thumbnail200x200 .
}

ns150:Thumbnail600x600 {
    ns150:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:12 .

    ns335:CmsImage1 foaf:thumbnail ns150:Thumbnail600x600 .
}

ns120:CmsImage1 {
    ns120:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:35 .
}

ns86:Thumbnail200x200 {
    ns86:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns120:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:35 .

    ns120:CmsImage1 foaf:thumbnail ns86:Thumbnail200x200 .
}

ns381:CmsImage0 {
    ns381:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:101 .
}

ns209:Thumbnail600x600 {
    ns209:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:67 .

    ns89:CmsImage1 foaf:thumbnail ns209:Thumbnail600x600 .
}

ns382:CmsImage0 {
    ns382:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:organization0 .
}

ns263:Thumbnail200x200 {
    ns263:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:42 .

    ns207:CmsImage0 foaf:thumbnail ns263:Thumbnail200x200 .
}

ns277:Thumbnail400x400 {
    ns277:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:71 .

    ns400:CmsImage0 foaf:thumbnail ns277:Thumbnail400x400 .
}

ns322:Thumbnail800x800 {
    ns322:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:0 .

    ns279:CmsImage0 foaf:thumbnail ns322:Thumbnail800x800 .
}

ns161:Thumbnail400x400 {
    ns161:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns275:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:65 .

    ns275:CmsImage0 foaf:thumbnail ns161:Thumbnail400x400 .
}

ns188:Thumbnail400x400 {
    ns188:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns116:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:33 .

    ns116:CmsImage1 foaf:thumbnail ns188:Thumbnail400x400 .
}

ns25:88 {
    ns25:88 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 8" ;
        skos:prefLabel "CmsConcept 88" .
}

ns74:Thumbnail600x600 {
    ns74:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:102 .

    ns231:CmsImage0 foaf:thumbnail ns74:Thumbnail600x600 .
}

ns302:Thumbnail600x600 {
    ns302:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:1 .

    ns343:CmsImage1 foaf:thumbnail ns302:Thumbnail600x600 .
}

ns121:Thumbnail400x400 {
    ns121:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:109 .

    ns345:CmsImage1 foaf:thumbnail ns121:Thumbnail400x400 .
}

vra:technique {
    vra:technique a cms:Property ;
        rdfs:label "Technique" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> .
}

ns93:CmsImage0 {
    ns93:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:104 .
}

ns192:Thumbnail600x600 {
    ns192:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns267:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:68 .

    ns267:CmsImage0 foaf:thumbnail ns192:Thumbnail600x600 .
}

ns140:Thumbnail600x600 {
    ns140:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:83 .

    ns403:CmsImage0 foaf:thumbnail ns140:Thumbnail600x600 .
}

ns49:Thumbnail200x200 {
    ns49:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:52 .

    ns309:CmsImage1 foaf:thumbnail ns49:Thumbnail200x200 .
}

ns247:Thumbnail200x200 {
    ns247:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:102 .

    ns231:CmsImage1 foaf:thumbnail ns247:Thumbnail200x200 .
}

ns379:Thumbnail800x800 {
    ns379:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:15 .

    ns388:CmsImage1 foaf:thumbnail ns379:Thumbnail800x800 .
}

ns269:Thumbnail200x200 {
    ns269:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns116:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:33 .

    ns116:CmsImage0 foaf:thumbnail ns269:Thumbnail200x200 .
}

ns230:CmsImage1 {
    ns230:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:97 .
}

ns383:Thumbnail800x800 {
    ns98:CmsImage0 foaf:thumbnail ns383:Thumbnail800x800 .

    ns383:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns98:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:6 .
}

ns147:Thumbnail800x800 {
    ns147:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:42 .

    ns207:CmsImage1 foaf:thumbnail ns147:Thumbnail800x800 .
}

ns369:Thumbnail200x200 {
    ns369:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:64 .

    ns375:CmsImage1 foaf:thumbnail ns369:Thumbnail200x200 .
}

ns43:freestandingwork9 {
    ns43:freestandingwork9 a cms:Work ;
        dcterms:alternative "FreestandingWork9 alternative title 0",
            "FreestandingWork9 alternative title 1" ;
        dcterms:contributor _:N3adb37c9997a47e3879fe7fae0f8dc1c,
            _:Ncd1b8615bfea40b091f54d208c6090c1 ;
        dcterms:creator ns43:organization1,
            ns43:organization2 ;
        dcterms:extent ns25:10,
            ns25:19 ;
        dcterms:identifier "FreestandingWork9Id0",
            "FreestandingWork9Id1" ;
        dcterms:language ns25:20,
            ns25:29 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:40,
            ns25:49 ;
        dcterms:provenance "FreestandingWork9 provenance 0",
            "FreestandingWork9 provenance 1" ;
        dcterms:publisher ns25:50,
            ns25:59 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 rights holder" ;
        dcterms:source ns25:60,
            ns25:69 ;
        dcterms:spatial ns43:freestandingwork9Location ;
        dcterms:subject ns25:80,
            ns25:89 ;
        dcterms:title "FreestandingWork9" ;
        dcterms:type ns25:100,
            ns25:109 ;
        vra:culturalContext ns25:0,
            ns25:9 ;
        vra:material ns25:30,
            ns25:39 ;
        vra:technique ns25:90,
            ns25:99 .

    _:N3adb37c9997a47e3879fe7fae0f8dc1c a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 0" .

    _:Ncd1b8615bfea40b091f54d208c6090c1 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 1" .
}

ns45:work3Opening {
    ns45:work3Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-29"^^xsd:date ;
        dcterms:spatial _:N4dbf259d2ff342d493439c430b065372 ;
        dcterms:title "CmsCollection0CmsWork3 opening" ;
        cms:work ns45:work3 .

    _:N4dbf259d2ff342d493439c430b065372 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns245:Thumbnail800x800 {
    ns245:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns260:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:31 .

    ns260:CmsImage0 foaf:thumbnail ns245:Thumbnail800x800 .
}

ns363:Thumbnail800x800 {
    ns363:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns99:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:34 .

    ns99:CmsImage1 foaf:thumbnail ns363:Thumbnail800x800 .
}

ns384:Thumbnail200x200 {
    ns365:CmsImage1 foaf:thumbnail ns384:Thumbnail200x200 .

    ns384:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:32 .
}

ns281:Thumbnail800x800 {
    ns281:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns60:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:24 .

    ns60:CmsImage0 foaf:thumbnail ns281:Thumbnail800x800 .
}

ns332:Thumbnail600x600 {
    ns332:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:106 .

    ns280:CmsImage1 foaf:thumbnail ns332:Thumbnail600x600 .
}

ns32:Thumbnail800x800 {
    ns32:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns27:work5 .

    ns399:CmsImage0 foaf:thumbnail ns32:Thumbnail800x800 .
}

ns25:53 {
    ns25:53 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 3" ;
        skos:prefLabel "CmsConcept 53" .
}

ns364:Thumbnail200x200 {
    ns364:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:52 .

    ns309:CmsImage0 foaf:thumbnail ns364:Thumbnail200x200 .
}

ns150:Thumbnail400x400 {
    ns150:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:12 .

    ns335:CmsImage1 foaf:thumbnail ns150:Thumbnail400x400 .
}

ns325:Thumbnail400x400 {
    ns325:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns27:work7 .

    ns389:CmsImage1 foaf:thumbnail ns325:Thumbnail400x400 .
}

ns63:Thumbnail200x200 {
    ns63:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns344:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:25 .

    ns344:CmsImage1 foaf:thumbnail ns63:Thumbnail200x200 .
}

ns366:Thumbnail600x600 {
    ns366:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:96 .

    ns377:CmsImage0 foaf:thumbnail ns366:Thumbnail600x600 .
}

ns25:107 {
    ns25:107 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 7" ;
        skos:prefLabel "CmsConcept 107" .
}

ns281:Thumbnail400x400 {
    ns281:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns60:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:24 .

    ns60:CmsImage0 foaf:thumbnail ns281:Thumbnail400x400 .
}

ns222:Thumbnail800x800 {
    ns222:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns189:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:70 .

    ns189:CmsImage0 foaf:thumbnail ns222:Thumbnail800x800 .
}

ns69:Thumbnail200x200 {
    ns69:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:74 .

    ns385:CmsImage1 foaf:thumbnail ns69:Thumbnail200x200 .
}

ns118:Thumbnail200x200 {
    ns118:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:105 .

    ns288:CmsImage1 foaf:thumbnail ns118:Thumbnail200x200 .
}

ns304:Thumbnail600x600 {
    ns304:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:86 .

    ns392:CmsImage1 foaf:thumbnail ns304:Thumbnail600x600 .
}

ns25:83 {
    ns25:83 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 3" ;
        skos:prefLabel "CmsConcept 83" .
}

ns385:CmsImage1 {
    ns385:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:74 .
}

ns150:Thumbnail200x200 {
    ns150:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:12 .

    ns335:CmsImage1 foaf:thumbnail ns150:Thumbnail200x200 .
}

ns350:Thumbnail200x200 {
    ns350:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns382:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:organization0 .

    ns382:CmsImage1 foaf:thumbnail ns350:Thumbnail200x200 .
}

ns305:Thumbnail400x400 {
    ns305:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns301:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:organization2 .

    ns301:CmsImage1 foaf:thumbnail ns305:Thumbnail400x400 .
}

ns111:Thumbnail600x600 {
    ns111:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:37 .

    ns402:CmsImage1 foaf:thumbnail ns111:Thumbnail600x600 .
}

ns386:CmsImage1 {
    ns386:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:80 .
}

ns108:Thumbnail600x600 {
    ns108:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns243:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:46 .

    ns243:CmsImage0 foaf:thumbnail ns108:Thumbnail600x600 .
}

ns283:Thumbnail800x800 {
    ns283:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:26 .

    ns257:CmsImage0 foaf:thumbnail ns283:Thumbnail800x800 .
}

ns129:Thumbnail800x800 {
    ns129:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns27:work5 .

    ns399:CmsImage1 foaf:thumbnail ns129:Thumbnail800x800 .
}

ns287:Thumbnail200x200 {
    ns287:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns98:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:6 .

    ns98:CmsImage1 foaf:thumbnail ns287:Thumbnail200x200 .
}

ns13:Thumbnail800x800 {
    ns13:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns310:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:organization3 .

    ns310:CmsImage1 foaf:thumbnail ns13:Thumbnail800x800 .
}

ns375:CmsImage1 {
    ns375:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:64 .
}

ns373:Thumbnail200x200 {
    ns373:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns154:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:27 .

    ns154:CmsImage1 foaf:thumbnail ns373:Thumbnail200x200 .
}

ns366:Thumbnail400x400 {
    ns366:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:96 .

    ns377:CmsImage0 foaf:thumbnail ns366:Thumbnail400x400 .
}

ns21:Thumbnail600x600 {
    ns21:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:29 .

    ns333:CmsImage0 foaf:thumbnail ns21:Thumbnail600x600 .
}

ns191:Thumbnail600x600 {
    ns191:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns127:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:organization1 .

    ns127:CmsImage0 foaf:thumbnail ns191:Thumbnail600x600 .
}

ns387:CmsImage0 {
    ns387:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:freestandingwork11 .
}

ns364:Thumbnail400x400 {
    ns364:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:52 .

    ns309:CmsImage0 foaf:thumbnail ns364:Thumbnail400x400 .
}

ns346:CmsImage1 {
    ns346:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:103 .
}

ns353:Thumbnail200x200 {
    ns353:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns77:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:13 .

    ns77:CmsImage0 foaf:thumbnail ns353:Thumbnail200x200 .
}

ns240:Thumbnail200x200 {
    ns240:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:59 .

    ns374:CmsImage0 foaf:thumbnail ns240:Thumbnail200x200 .
}

ns388:CmsImage1 {
    ns388:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:15 .
}

ns25:46 {
    ns25:46 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 6" ;
        skos:prefLabel "CmsConcept 46" .
}

ns339:Thumbnail800x800 {
    ns339:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:15 .

    ns388:CmsImage0 foaf:thumbnail ns339:Thumbnail800x800 .
}

ns165:Thumbnail200x200 {
    ns165:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:64 .

    ns375:CmsImage0 foaf:thumbnail ns165:Thumbnail200x200 .
}

ns23:Thumbnail400x400 {
    ns23:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:85 .

    ns251:CmsImage0 foaf:thumbnail ns23:Thumbnail400x400 .
}

ns389:CmsImage0 {
    ns389:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns27:work7 .
}

ns3:Thumbnail200x200 {
    ns3:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:108 .

    ns128:CmsImage0 foaf:thumbnail ns3:Thumbnail200x200 .
}

ns283:Thumbnail200x200 {
    ns283:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:26 .

    ns257:CmsImage0 foaf:thumbnail ns283:Thumbnail200x200 .
}

ns60:CmsImage0 {
    ns60:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:24 .
}

ns369:Thumbnail800x800 {
    ns369:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:64 .

    ns375:CmsImage1 foaf:thumbnail ns369:Thumbnail800x800 .
}

ns143:Thumbnail400x400 {
    ns143:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns189:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:70 .

    ns189:CmsImage1 foaf:thumbnail ns143:Thumbnail400x400 .
}

ns25:18 {
    ns25:18 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 8" ;
        skos:prefLabel "CmsConcept 18" .
}

ns298:Thumbnail200x200 {
    ns298:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns163:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:49 .

    ns163:CmsImage0 foaf:thumbnail ns298:Thumbnail200x200 .
}

ns118:Thumbnail400x400 {
    ns118:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:105 .

    ns288:CmsImage1 foaf:thumbnail ns118:Thumbnail400x400 .
}

ns236:Thumbnail600x600 {
    ns236:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns35:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:76 .

    ns35:CmsImage1 foaf:thumbnail ns236:Thumbnail600x600 .
}

ns390:CmsImage0 {
    ns390:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:92 .
}

ns187:Thumbnail400x400 {
    ns187:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:9 .

    ns296:CmsImage0 foaf:thumbnail ns187:Thumbnail400x400 .
}

ns167:Thumbnail400x400 {
    ns167:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns163:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:49 .

    ns163:CmsImage1 foaf:thumbnail ns167:Thumbnail400x400 .
}

ns325:Thumbnail200x200 {
    ns325:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns27:work7 .

    ns389:CmsImage1 foaf:thumbnail ns325:Thumbnail200x200 .
}

ns136:Thumbnail600x600 {
    ns136:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns331:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:39 .

    ns331:CmsImage0 foaf:thumbnail ns136:Thumbnail600x600 .
}

ns185:CmsImage0 {
    ns185:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:62 .
}

ns83:Thumbnail200x200 {
    ns83:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns273:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:2 .

    ns273:CmsImage1 foaf:thumbnail ns83:Thumbnail200x200 .
}

ns125:Thumbnail400x400 {
    ns125:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns243:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:46 .

    ns243:CmsImage1 foaf:thumbnail ns125:Thumbnail400x400 .
}

ns327:CmsImage1 {
    ns327:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:61 .
}

ns138:Thumbnail800x800 {
    ns138:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:45 .

    ns371:CmsImage1 foaf:thumbnail ns138:Thumbnail800x800 .
}

ns391:Thumbnail400x400 {
    ns391:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns255:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:38 .

    ns255:CmsImage0 foaf:thumbnail ns391:Thumbnail400x400 .
}

ns134:Thumbnail600x600 {
    ns134:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:94 .

    ns261:CmsImage1 foaf:thumbnail ns134:Thumbnail600x600 .
}

ns76:Thumbnail800x800 {
    ns76:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:10 .

    ns372:CmsImage1 foaf:thumbnail ns76:Thumbnail800x800 .
}

ns14:Thumbnail800x800 {
    ns14:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns331:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:39 .

    ns331:CmsImage1 foaf:thumbnail ns14:Thumbnail800x800 .
}

ns70:Thumbnail200x200 {
    ns70:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns45:work1 .

    ns351:CmsImage1 foaf:thumbnail ns70:Thumbnail200x200 .
}

ns288:CmsImage0 {
    ns288:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:105 .
}

ns132:Thumbnail400x400 {
    ns132:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:105 .

    ns288:CmsImage0 foaf:thumbnail ns132:Thumbnail400x400 .
}

ns59:Thumbnail400x400 {
    ns59:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns232:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:98 .

    ns232:CmsImage1 foaf:thumbnail ns59:Thumbnail400x400 .
}

ns174:Thumbnail200x200 {
    ns174:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns97:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns45:work3 .

    ns97:CmsImage0 foaf:thumbnail ns174:Thumbnail200x200 .
}

ns221:CmsImage0 {
    ns221:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:84 .
}

ns25:51 {
    ns25:51 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 1" ;
        skos:prefLabel "CmsConcept 51" .
}

ns12:Thumbnail800x800 {
    ns12:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:8 .

    ns352:CmsImage0 foaf:thumbnail ns12:Thumbnail800x800 .
}

ns108:Thumbnail200x200 {
    ns108:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns243:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:46 .

    ns243:CmsImage0 foaf:thumbnail ns108:Thumbnail200x200 .
}

ns209:Thumbnail800x800 {
    ns209:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:67 .

    ns89:CmsImage1 foaf:thumbnail ns209:Thumbnail800x800 .
}

ns252:Thumbnail800x800 {
    ns252:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:84 .

    ns221:CmsImage0 foaf:thumbnail ns252:Thumbnail800x800 .
}

ns25:62 {
    ns25:62 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 2" ;
        skos:prefLabel "CmsConcept 62" .
}

ns94:Thumbnail200x200 {
    ns94:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns185:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:62 .

    ns185:CmsImage1 foaf:thumbnail ns94:Thumbnail200x200 .
}

ns45:work1 {
    ns45:work1 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork1 alternative title 0",
            "CmsCollection0CmsWork1 alternative title 1" ;
        dcterms:contributor _:N89edc6bde65d48b4862f47467f05500d,
            _:Nf4832893bfa94be6bbee3b2584b91046 ;
        dcterms:creator ns43:organization3,
            ns43:organization4 ;
        dcterms:extent ns25:11,
            ns25:12 ;
        dcterms:identifier "CmsCollection0CmsWork1Id0",
            "CmsCollection0CmsWork1Id1" ;
        dcterms:language ns25:21,
            ns25:22 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:41,
            ns25:42 ;
        dcterms:provenance "CmsCollection0CmsWork1 provenance 0",
            "CmsCollection0CmsWork1 provenance 1" ;
        dcterms:publisher ns25:51,
            ns25:52 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 rights holder" ;
        dcterms:source ns25:61,
            ns25:62 ;
        dcterms:spatial ns45:work1Location ;
        dcterms:subject ns25:81,
            ns25:82 ;
        dcterms:title "CmsCollection0CmsWork1" ;
        dcterms:type ns25:101,
            ns25:102 ;
        vra:culturalContext ns25:1,
            ns25:2 ;
        vra:material ns25:31,
            ns25:32 ;
        vra:technique ns25:91,
            ns25:92 ;
        cms:collection ns43:collection0 .

    _:N89edc6bde65d48b4862f47467f05500d a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 1" .

    _:Nf4832893bfa94be6bbee3b2584b91046 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 0" .
}

ns218:Thumbnail400x400 {
    ns218:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:organization4 .

    ns300:CmsImage1 foaf:thumbnail ns218:Thumbnail400x400 .
}

ns25:60 {
    ns25:60 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 0" ;
        skos:prefLabel "CmsConcept 60" .
}

ns264:Thumbnail800x800 {
    ns264:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns357:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:18 .

    ns357:CmsImage0 foaf:thumbnail ns264:Thumbnail800x800 .
}

ns363:Thumbnail200x200 {
    ns363:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns99:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:34 .

    ns99:CmsImage1 foaf:thumbnail ns363:Thumbnail200x200 .
}

ns323:Thumbnail800x800 {
    ns323:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns234:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:47 .

    ns234:CmsImage1 foaf:thumbnail ns323:Thumbnail800x800 .
}

ns130:Thumbnail400x400 {
    ns130:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:freestandingwork11 .

    ns387:CmsImage1 foaf:thumbnail ns130:Thumbnail400x400 .
}

ns14:Thumbnail200x200 {
    ns14:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns331:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:39 .

    ns331:CmsImage1 foaf:thumbnail ns14:Thumbnail200x200 .
}

ns172:Thumbnail400x400 {
    ns172:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:person4 .

    ns110:CmsImage0 foaf:thumbnail ns172:Thumbnail400x400 .
}

ns51:Thumbnail600x600 {
    ns51:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:23 .

    ns354:CmsImage0 foaf:thumbnail ns51:Thumbnail600x600 .
}

ns9:Thumbnail400x400 {
    ns9:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns202:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:95 .

    ns202:CmsImage0 foaf:thumbnail ns9:Thumbnail400x400 .
}

ns359:Thumbnail800x800 {
    ns359:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:74 .

    ns385:CmsImage0 foaf:thumbnail ns359:Thumbnail800x800 .
}

ns341:Thumbnail800x800 {
    ns341:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns50:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:100 .

    ns50:CmsImage1 foaf:thumbnail ns341:Thumbnail800x800 .
}

ns172:Thumbnail600x600 {
    ns172:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:person4 .

    ns110:CmsImage0 foaf:thumbnail ns172:Thumbnail600x600 .
}

ns320:Thumbnail800x800 {
    ns320:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns310:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:organization3 .

    ns310:CmsImage0 foaf:thumbnail ns320:Thumbnail800x800 .
}

ns162:Thumbnail400x400 {
    ns162:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:freestandingwork10 .

    ns342:CmsImage0 foaf:thumbnail ns162:Thumbnail400x400 .
}

ns286:Thumbnail400x400 {
    ns286:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:21 .

    ns393:CmsImage0 foaf:thumbnail ns286:Thumbnail400x400 .
}

ns198:Thumbnail400x400 {
    ns198:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:92 .

    ns390:CmsImage1 foaf:thumbnail ns198:Thumbnail400x400 .
}

ns311:Thumbnail800x800 {
    ns311:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:37 .

    ns402:CmsImage0 foaf:thumbnail ns311:Thumbnail800x800 .
}

ns184:Thumbnail800x800 {
    ns184:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns180:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:66 .

    ns180:CmsImage1 foaf:thumbnail ns184:Thumbnail800x800 .
}

ns142:Thumbnail600x600 {
    ns142:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns154:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:27 .

    ns154:CmsImage0 foaf:thumbnail ns142:Thumbnail600x600 .
}

ns229:Thumbnail800x800 {
    ns229:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:43 .

    ns404:CmsImage1 foaf:thumbnail ns229:Thumbnail800x800 .
}

ns134:Thumbnail800x800 {
    ns134:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:94 .

    ns261:CmsImage1 foaf:thumbnail ns134:Thumbnail800x800 .
}

ns363:Thumbnail600x600 {
    ns363:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns99:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:34 .

    ns99:CmsImage1 foaf:thumbnail ns363:Thumbnail600x600 .
}

ns64:Thumbnail200x200 {
    ns64:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:10 .

    ns372:CmsImage0 foaf:thumbnail ns64:Thumbnail200x200 .
}

ns370:Thumbnail600x600 {
    ns370:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns99:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:34 .

    ns99:CmsImage0 foaf:thumbnail ns370:Thumbnail600x600 .
}

ns167:Thumbnail200x200 {
    ns167:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns163:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:49 .

    ns163:CmsImage1 foaf:thumbnail ns167:Thumbnail200x200 .
}

ns24:Thumbnail200x200 {
    ns24:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:69 .

    ns294:CmsImage0 foaf:thumbnail ns24:Thumbnail200x200 .
}

ns300:CmsImage0 {
    ns300:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:organization4 .
}

ns341:Thumbnail200x200 {
    ns341:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns50:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:100 .

    ns50:CmsImage1 foaf:thumbnail ns341:Thumbnail200x200 .
}

ns43:freestandingwork8Location {
    ns43:freestandingwork8Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns229:Thumbnail600x600 {
    ns229:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:43 .

    ns404:CmsImage1 foaf:thumbnail ns229:Thumbnail600x600 .
}

ns392:CmsImage1 {
    ns392:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:86 .
}

ns132:Thumbnail600x600 {
    ns132:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:105 .

    ns288:CmsImage0 foaf:thumbnail ns132:Thumbnail600x600 .
}

ns292:Thumbnail200x200 {
    ns292:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns85:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:person1 .

    ns85:CmsImage0 foaf:thumbnail ns292:Thumbnail200x200 .
}

ns61:Thumbnail800x800 {
    ns61:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:82 .

    ns285:CmsImage0 foaf:thumbnail ns61:Thumbnail800x800 .
}

ns107:CmsImage0 {
    ns107:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:73 .
}

ns272:Thumbnail200x200 {
    ns272:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns180:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:66 .

    ns180:CmsImage0 foaf:thumbnail ns272:Thumbnail200x200 .
}

ns157:Thumbnail400x400 {
    ns157:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:43 .

    ns404:CmsImage0 foaf:thumbnail ns157:Thumbnail400x400 .
}

ns137:Thumbnail800x800 {
    ns137:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns330:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:19 .

    ns330:CmsImage1 foaf:thumbnail ns137:Thumbnail800x800 .
}

ns168:Thumbnail200x200 {
    ns168:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:person4 .

    ns110:CmsImage1 foaf:thumbnail ns168:Thumbnail200x200 .
}

ns195:Thumbnail600x600 {
    ns195:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:107 .

    ns197:CmsImage0 foaf:thumbnail ns195:Thumbnail600x600 .
}

ns129:Thumbnail400x400 {
    ns129:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns27:work5 .

    ns399:CmsImage1 foaf:thumbnail ns129:Thumbnail400x400 .
}

ns151:Thumbnail400x400 {
    ns151:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns299:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:person3 .

    ns299:CmsImage1 foaf:thumbnail ns151:Thumbnail400x400 .
}

ns25:52 {
    ns25:52 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 2" ;
        skos:prefLabel "CmsConcept 52" .
}

ns313:Thumbnail600x600 {
    ns313:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns216:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:89 .

    ns216:CmsImage0 foaf:thumbnail ns313:Thumbnail600x600 .
}

ns20:Thumbnail800x800 {
    ns20:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns127:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:organization1 .

    ns127:CmsImage1 foaf:thumbnail ns20:Thumbnail800x800 .
}

ns315:Thumbnail600x600 {
    ns315:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:67 .

    ns89:CmsImage0 foaf:thumbnail ns315:Thumbnail600x600 .
}

ns162:Thumbnail600x600 {
    ns162:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:freestandingwork10 .

    ns342:CmsImage0 foaf:thumbnail ns162:Thumbnail600x600 .
}

ns25:56 {
    ns25:56 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 6" ;
        skos:prefLabel "CmsConcept 56" .
}

ns238:Thumbnail800x800 {
    ns238:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns113:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:77 .

    ns113:CmsImage0 foaf:thumbnail ns238:Thumbnail800x800 .
}

ns242:Thumbnail600x600 {
    ns242:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns289:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns27:work6 .

    ns289:CmsImage1 foaf:thumbnail ns242:Thumbnail600x600 .
}

ns119:Thumbnail200x200 {
    ns119:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns171:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:36 .

    ns171:CmsImage1 foaf:thumbnail ns119:Thumbnail200x200 .
}

ns360:CmsImage1 {
    ns360:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:51 .
}

ns270:Thumbnail600x600 {
    ns270:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns7:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:20 .

    ns7:CmsImage1 foaf:thumbnail ns270:Thumbnail600x600 .
}

ns56:Thumbnail600x600 {
    ns56:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:108 .

    ns128:CmsImage1 foaf:thumbnail ns56:Thumbnail600x600 .
}

ns66:Thumbnail800x800 {
    ns66:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:14 .

    ns276:CmsImage0 foaf:thumbnail ns66:Thumbnail800x800 .
}

ns295:Thumbnail200x200 {
    ns295:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:87 .

    ns308:CmsImage1 foaf:thumbnail ns295:Thumbnail200x200 .
}

ns228:Thumbnail600x600 {
    ns228:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns62:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:60 .

    ns62:CmsImage1 foaf:thumbnail ns228:Thumbnail600x600 .
}

ns19:CmsImage1 {
    ns19:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:54 .
}

ns136:Thumbnail400x400 {
    ns136:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns331:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:39 .

    ns331:CmsImage0 foaf:thumbnail ns136:Thumbnail400x400 .
}

ns157:Thumbnail200x200 {
    ns157:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:43 .

    ns404:CmsImage0 foaf:thumbnail ns157:Thumbnail200x200 .
}

ns306:Thumbnail800x800 {
    ns306:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:69 .

    ns294:CmsImage1 foaf:thumbnail ns306:Thumbnail800x800 .
}

ns268:Thumbnail800x800 {
    ns268:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns215:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:collection1 .

    ns215:CmsImage0 foaf:thumbnail ns268:Thumbnail800x800 .
}

ns383:Thumbnail200x200 {
    ns383:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns98:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:6 .

    ns98:CmsImage0 foaf:thumbnail ns383:Thumbnail200x200 .
}

ns323:Thumbnail200x200 {
    ns323:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns234:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:47 .

    ns234:CmsImage1 foaf:thumbnail ns323:Thumbnail200x200 .
}

ns379:Thumbnail400x400 {
    ns379:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:15 .

    ns388:CmsImage1 foaf:thumbnail ns379:Thumbnail400x400 .
}

ns352:CmsImage1 {
    ns352:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:8 .
}

ns297:Thumbnail600x600 {
    ns297:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns93:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:104 .

    ns93:CmsImage0 foaf:thumbnail ns297:Thumbnail600x600 .
}

ns55:Thumbnail200x200 {
    ns55:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:72 .

    ns186:CmsImage1 foaf:thumbnail ns55:Thumbnail200x200 .
}

ns191:Thumbnail800x800 {
    ns191:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns127:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:organization1 .

    ns127:CmsImage0 foaf:thumbnail ns191:Thumbnail800x800 .
}

ns18:Thumbnail200x200 {
    ns18:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns239:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:30 .

    ns239:CmsImage0 foaf:thumbnail ns18:Thumbnail200x200 .
}

ns198:Thumbnail800x800 {
    ns198:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:92 .

    ns390:CmsImage1 foaf:thumbnail ns198:Thumbnail800x800 .
}

ns233:Thumbnail200x200 {
    ns233:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns62:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:60 .

    ns62:CmsImage0 foaf:thumbnail ns233:Thumbnail200x200 .
}

ns25:97 {
    ns25:97 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 7" ;
        skos:prefLabel "CmsConcept 97" .
}

ns268:Thumbnail200x200 {
    ns268:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns215:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:collection1 .

    ns215:CmsImage0 foaf:thumbnail ns268:Thumbnail200x200 .
}

ns345:CmsImage0 {
    ns345:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:109 .
}

ns5:Thumbnail400x400 {
    ns5:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:75 .

    ns348:CmsImage1 foaf:thumbnail ns5:Thumbnail400x400 .
}

ns393:CmsImage0 {
    ns393:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:21 .
}

ns26:Thumbnail200x200 {
    ns26:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns152:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:person2 .

    ns152:CmsImage0 foaf:thumbnail ns26:Thumbnail200x200 .
}

ns253:Thumbnail200x200 {
    ns253:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:freestandingwork8 .

    ns328:CmsImage0 foaf:thumbnail ns253:Thumbnail200x200 .
}

ns361:Thumbnail800x800 {
    ns361:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns301:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:organization2 .

    ns301:CmsImage0 foaf:thumbnail ns361:Thumbnail800x800 .
}

ns122:Thumbnail200x200 {
    ns122:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:51 .

    ns360:CmsImage0 foaf:thumbnail ns122:Thumbnail200x200 .
}

ns378:Thumbnail400x400 {
    ns378:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns77:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:13 .

    ns77:CmsImage1 foaf:thumbnail ns378:Thumbnail400x400 .
}

ns25:78 {
    ns25:78 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 8" ;
        skos:prefLabel "CmsConcept 78" .
}

ns333:CmsImage1 {
    ns333:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:29 .
}

ns314:CmsImage1 {
    ns314:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:78 .
}

ns46:Thumbnail600x600 {
    ns46:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:86 .

    ns392:CmsImage0 foaf:thumbnail ns46:Thumbnail600x600 .
}

ns303:Thumbnail800x800 {
    ns303:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:17 .

    ns401:CmsImage0 foaf:thumbnail ns303:Thumbnail800x800 .
}

ns366:Thumbnail800x800 {
    ns366:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:96 .

    ns377:CmsImage0 foaf:thumbnail ns366:Thumbnail800x800 .
}

ns338:Thumbnail800x800 {
    ns338:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns6:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:91 .

    ns6:CmsImage0 foaf:thumbnail ns338:Thumbnail800x800 .
}

ns267:CmsImage1 {
    ns267:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:68 .
}

ns378:Thumbnail600x600 {
    ns378:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns77:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:13 .

    ns77:CmsImage1 foaf:thumbnail ns378:Thumbnail600x600 .
}

ns325:Thumbnail600x600 {
    ns325:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns27:work7 .

    ns389:CmsImage1 foaf:thumbnail ns325:Thumbnail600x600 .
}

ns388:CmsImage0 {
    ns388:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:15 .
}

ns337:Thumbnail200x200 {
    ns337:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:101 .

    ns381:CmsImage1 foaf:thumbnail ns337:Thumbnail200x200 .
}

ns350:Thumbnail600x600 {
    ns350:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns382:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:organization0 .

    ns382:CmsImage1 foaf:thumbnail ns350:Thumbnail600x600 .
}

ns194:Thumbnail200x200 {
    ns194:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:12 .

    ns335:CmsImage0 foaf:thumbnail ns194:Thumbnail200x200 .
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
        foaf:depicts ns25:81 .
}

ns395:CmsImage0 {
    ns395:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns27:work4 .
}

ns203:Thumbnail200x200 {
    ns203:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns289:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns27:work6 .

    ns289:CmsImage0 foaf:thumbnail ns203:Thumbnail200x200 .
}

ns384:Thumbnail400x400 {
    ns384:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:32 .

    ns365:CmsImage1 foaf:thumbnail ns384:Thumbnail400x400 .
}

ns322:Thumbnail200x200 {
    ns322:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:0 .

    ns279:CmsImage0 foaf:thumbnail ns322:Thumbnail200x200 .
}

ns146:CmsImage0 {
    ns146:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:58 .
}

ns396:CmsImage1 {
    ns396:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:88 .
}

ns370:Thumbnail400x400 {
    ns370:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns99:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:34 .

    ns99:CmsImage0 foaf:thumbnail ns370:Thumbnail400x400 .
}

ns211:Thumbnail600x600 {
    ns211:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:51 .

    ns360:CmsImage1 foaf:thumbnail ns211:Thumbnail600x600 .
}

ns374:CmsImage1 {
    ns374:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:59 .
}

ns320:Thumbnail600x600 {
    ns320:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns310:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:organization3 .

    ns310:CmsImage0 foaf:thumbnail ns320:Thumbnail600x600 .
}

ns248:Thumbnail800x800 {
    ns248:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns239:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:30 .

    ns239:CmsImage1 foaf:thumbnail ns248:Thumbnail800x800 .
}

ns81:Thumbnail200x200 {
    ns81:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:84 .

    ns221:CmsImage1 foaf:thumbnail ns81:Thumbnail200x200 .
}

ns20:Thumbnail200x200 {
    ns20:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns127:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:organization1 .

    ns127:CmsImage1 foaf:thumbnail ns20:Thumbnail200x200 .
}

ns77:CmsImage0 {
    ns77:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:13 .
}

ns397:CmsImage0 {
    ns397:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns45:work2 .
}

ns391:Thumbnail200x200 {
    ns391:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns255:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:38 .

    ns255:CmsImage0 foaf:thumbnail ns391:Thumbnail200x200 .
}

ns169:Thumbnail800x800 {
    ns169:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns45:work1 .

    ns351:CmsImage0 foaf:thumbnail ns169:Thumbnail800x800 .
}

ns128:CmsImage1 {
    ns128:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:108 .
}

ns196:Thumbnail600x600 {
    ns196:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:87 .

    ns308:CmsImage0 foaf:thumbnail ns196:Thumbnail600x600 .
}

ns25:94 {
    ns25:94 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 4" ;
        skos:prefLabel "CmsConcept 94" .
}

ns43:freestandingwork10Location {
    ns43:freestandingwork10Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns384:Thumbnail600x600 {
    ns384:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:32 .

    ns365:CmsImage1 foaf:thumbnail ns384:Thumbnail600x600 .
}

ns25:58 {
    ns25:58 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 8" ;
        skos:prefLabel "CmsConcept 58" .
}

ns301:CmsImage1 {
    ns301:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:organization2 .
}

ns390:CmsImage1 {
    ns390:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:92 .
}

ns291:Thumbnail200x200 {
    ns291:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns7:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:20 .

    ns7:CmsImage0 foaf:thumbnail ns291:Thumbnail200x200 .
}

ns349:Thumbnail600x600 {
    ns349:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns260:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:31 .

    ns260:CmsImage1 foaf:thumbnail ns349:Thumbnail600x600 .
}

ns317:Thumbnail400x400 {
    ns317:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns27:work7 .

    ns389:CmsImage0 foaf:thumbnail ns317:Thumbnail400x400 .
}

ns25:38 {
    ns25:38 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 8" ;
        skos:prefLabel "CmsConcept 38" .
}

ns40:Thumbnail600x600 {
    ns40:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:41 .

    ns380:CmsImage1 foaf:thumbnail ns40:Thumbnail600x600 .
}

ns147:Thumbnail200x200 {
    ns147:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:42 .

    ns207:CmsImage1 foaf:thumbnail ns147:Thumbnail200x200 .
}

ns262:Thumbnail600x600 {
    ns262:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:80 .

    ns386:CmsImage1 foaf:thumbnail ns262:Thumbnail600x600 .
}

ns336:Thumbnail600x600 {
    ns336:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:freestandingwork9 .

    ns356:CmsImage0 foaf:thumbnail ns336:Thumbnail600x600 .
}

ns145:Thumbnail800x800 {
    ns145:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns267:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:68 .

    ns267:CmsImage1 foaf:thumbnail ns145:Thumbnail800x800 .
}

ns25:0 {
    ns25:0 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 0" ;
        skos:prefLabel "CmsConcept 0" .
}

ns43:organization0 {
    ns43:organization0 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 0" ;
        foaf:page ns43:organization0page .
}

ns362:Thumbnail400x400 {
    ns362:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:organization4 .

    ns300:CmsImage0 foaf:thumbnail ns362:Thumbnail400x400 .
}

ns310:CmsImage1 {
    ns310:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:organization3 .
}

ns250:Thumbnail200x200 {
    ns250:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns255:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:38 .

    ns255:CmsImage1 foaf:thumbnail ns250:Thumbnail200x200 .
}

ns313:Thumbnail400x400 {
    ns313:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns216:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:89 .

    ns216:CmsImage0 foaf:thumbnail ns313:Thumbnail400x400 .
}

ns25:102 {
    ns25:102 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 2" ;
        skos:prefLabel "CmsConcept 102" .
}

ns110:CmsImage0 {
    ns110:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:person4 .
}

ns18:Thumbnail800x800 {
    ns18:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns239:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:30 .

    ns239:CmsImage0 foaf:thumbnail ns18:Thumbnail800x800 .
}

ns398:CmsImage1 {
    ns398:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:93 .
}

ns13:Thumbnail400x400 {
    ns13:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns310:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:organization3 .

    ns310:CmsImage1 foaf:thumbnail ns13:Thumbnail400x400 .
}

ns92:Thumbnail800x800 {
    ns92:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:83 .

    ns403:CmsImage1 foaf:thumbnail ns92:Thumbnail800x800 .
}

ns25:81 {
    ns25:81 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 1" ;
        skos:prefLabel "CmsConcept 81" .
}

ns138:Thumbnail200x200 {
    ns138:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:45 .

    ns371:CmsImage1 foaf:thumbnail ns138:Thumbnail200x200 .
}

ns259:Thumbnail200x200 {
    ns259:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:99 .

    ns324:CmsImage1 foaf:thumbnail ns259:Thumbnail200x200 .
}

ns349:Thumbnail400x400 {
    ns349:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns260:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:31 .

    ns260:CmsImage1 foaf:thumbnail ns349:Thumbnail400x400 .
}

ns65:Thumbnail200x200 {
    ns65:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:17 .

    ns401:CmsImage1 foaf:thumbnail ns65:Thumbnail200x200 .
}

ns386:CmsImage0 {
    ns386:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:80 .
}

ns183:Thumbnail800x800 {
    ns183:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:56 .

    ns158:CmsImage1 foaf:thumbnail ns183:Thumbnail800x800 .
}

ns217:Thumbnail200x200 {
    ns217:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns152:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:person2 .

    ns152:CmsImage1 foaf:thumbnail ns217:Thumbnail200x200 .
}

ns115:Thumbnail800x800 {
    ns115:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:79 .

    ns84:CmsImage0 foaf:thumbnail ns115:Thumbnail800x800 .
}

ns232:CmsImage1 {
    ns232:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:98 .
}

ns369:Thumbnail600x600 {
    ns369:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:64 .

    ns375:CmsImage1 foaf:thumbnail ns369:Thumbnail600x600 .
}

ns331:CmsImage0 {
    ns331:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:39 .
}

ns304:Thumbnail400x400 {
    ns304:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:86 .

    ns392:CmsImage1 foaf:thumbnail ns304:Thumbnail400x400 .
}

ns15:Thumbnail400x400 {
    ns15:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns19:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:54 .

    ns19:CmsImage1 foaf:thumbnail ns15:Thumbnail400x400 .
}

ns27:work5 {
    ns27:work5 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork5 alternative title 0",
            "CmsCollection1CmsWork5 alternative title 1" ;
        dcterms:contributor _:N476b44ae086847b18a9681241a30ffeb,
            _:N780776c4572f474b9b86f74f4ec2184e ;
        dcterms:creator ns43:person2,
            ns43:person3 ;
        dcterms:extent ns25:15,
            ns25:16 ;
        dcterms:identifier "CmsCollection1CmsWork5Id0",
            "CmsCollection1CmsWork5Id1" ;
        dcterms:language ns25:25,
            ns25:26 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:45,
            ns25:46 ;
        dcterms:provenance "CmsCollection1CmsWork5 provenance 0",
            "CmsCollection1CmsWork5 provenance 1" ;
        dcterms:publisher ns25:55,
            ns25:56 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 rights holder" ;
        dcterms:source ns25:65,
            ns25:66 ;
        dcterms:spatial ns27:work5Location ;
        dcterms:subject ns25:85,
            ns25:86 ;
        dcterms:title "CmsCollection1CmsWork5" ;
        dcterms:type ns25:105,
            ns25:106 ;
        vra:culturalContext ns25:5,
            ns25:6 ;
        vra:material ns25:35,
            ns25:36 ;
        vra:technique ns25:95,
            ns25:96 ;
        cms:collection ns43:collection1 .

    _:N476b44ae086847b18a9681241a30ffeb a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 1" .

    _:N780776c4572f474b9b86f74f4ec2184e a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 0" .
}

ns358:Thumbnail200x200 {
    ns358:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns52:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:90 .

    ns52:CmsImage0 foaf:thumbnail ns358:Thumbnail200x200 .
}

ns242:Thumbnail200x200 {
    ns242:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns289:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns27:work6 .

    ns289:CmsImage1 foaf:thumbnail ns242:Thumbnail200x200 .
}

ns319:Thumbnail600x600 {
    ns319:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns299:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:person3 .

    ns299:CmsImage0 foaf:thumbnail ns319:Thumbnail600x600 .
}

ns65:Thumbnail400x400 {
    ns65:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:17 .

    ns401:CmsImage1 foaf:thumbnail ns65:Thumbnail400x400 .
}

ns312:Thumbnail200x200 {
    ns312:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:14 .

    ns276:CmsImage1 foaf:thumbnail ns312:Thumbnail200x200 .
}

ns171:CmsImage1 {
    ns171:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:36 .
}

ns169:Thumbnail200x200 {
    ns169:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns45:work1 .

    ns351:CmsImage0 foaf:thumbnail ns169:Thumbnail200x200 .
}

ns399:CmsImage1 {
    ns399:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns27:work5 .
}

ns329:Thumbnail400x400 {
    ns329:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns6:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:91 .

    ns6:CmsImage1 foaf:thumbnail ns329:Thumbnail400x400 .
}

ns329:Thumbnail600x600 {
    ns329:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns6:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:91 .

    ns6:CmsImage1 foaf:thumbnail ns329:Thumbnail600x600 .
}

ns298:Thumbnail600x600 {
    ns298:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns163:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:49 .

    ns163:CmsImage0 foaf:thumbnail ns298:Thumbnail600x600 .
}

ns365:CmsImage1 {
    ns365:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:32 .
}

ns279:CmsImage1 {
    ns279:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:0 .
}

ns29:Thumbnail800x800 {
    ns29:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns330:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:19 .

    ns330:CmsImage0 foaf:thumbnail ns29:Thumbnail800x800 .
}

ns25:85 {
    ns25:85 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 5" ;
        skos:prefLabel "CmsConcept 85" .
}

ns274:Thumbnail600x600 {
    ns274:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:101 .

    ns381:CmsImage0 foaf:thumbnail ns274:Thumbnail600x600 .
}

ns45:work0Creation {
    ns45:work0Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:organization2,
            ns43:organization3 ;
        dcterms:date _:Na06ac7a91764410d8866e1fd6b321a55 ;
        dcterms:description _:N890bcd392da14df0b30049adcabc17e2 ;
        dcterms:spatial ns45:work0Location ;
        dcterms:title "CmsCollection0CmsWork0 creation" ;
        cms:work ns45:work0 .

    _:Na06ac7a91764410d8866e1fd6b321a55 a cms:DateTimeDescription ;
        time:day "---01"^^xsd:gDay ;
        time:month "--01"^^xsd:gMonth ;
        time:year "2022"^^xsd:gYear .

    _:N890bcd392da14df0b30049adcabc17e2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns25:29 {
    ns25:29 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 9" ;
        skos:prefLabel "CmsConcept 29" .
}

ns100:Thumbnail200x200 {
    ns100:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:32 .

    ns365:CmsImage0 foaf:thumbnail ns100:Thumbnail200x200 .
}

ns391:Thumbnail800x800 {
    ns391:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns255:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:38 .

    ns255:CmsImage0 foaf:thumbnail ns391:Thumbnail800x800 .
}

ns198:Thumbnail600x600 {
    ns198:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:92 .

    ns390:CmsImage1 foaf:thumbnail ns198:Thumbnail600x600 .
}

ns380:CmsImage0 {
    ns380:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:41 .
}

ns205:Thumbnail600x600 {
    ns205:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:11 .

    ns204:CmsImage1 foaf:thumbnail ns205:Thumbnail600x600 .
}

ns41:CmsImage1 {
    ns41:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns45:work0 .
}

ns321:Thumbnail800x800 {
    ns321:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:freestandingwork8 .

    ns328:CmsImage1 foaf:thumbnail ns321:Thumbnail800x800 .
}

ns332:Thumbnail400x400 {
    ns332:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:106 .

    ns280:CmsImage1 foaf:thumbnail ns332:Thumbnail400x400 .
}

ns155:Thumbnail600x600 {
    ns155:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:82 .

    ns285:CmsImage1 foaf:thumbnail ns155:Thumbnail600x600 .
}

ns161:Thumbnail200x200 {
    ns161:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns275:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:65 .

    ns275:CmsImage0 foaf:thumbnail ns161:Thumbnail200x200 .
}

ns247:Thumbnail600x600 {
    ns247:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:102 .

    ns231:CmsImage1 foaf:thumbnail ns247:Thumbnail600x600 .
}

ns67:Thumbnail800x800 {
    ns67:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:107 .

    ns197:CmsImage1 foaf:thumbnail ns67:Thumbnail800x800 .
}

ns25:48 {
    ns25:48 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 8" ;
        skos:prefLabel "CmsConcept 48" .
}

ns290:Thumbnail400x400 {
    ns290:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns185:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:62 .

    ns185:CmsImage0 foaf:thumbnail ns290:Thumbnail400x400 .
}

ns209:Thumbnail400x400 {
    ns209:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:67 .

    ns89:CmsImage1 foaf:thumbnail ns209:Thumbnail400x400 .
}

ns27:work5Opening {
    ns27:work5Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-27"^^xsd:date ;
        dcterms:spatial _:N533edf655683426bb7e69d17cf9a437e ;
        dcterms:title "CmsCollection1CmsWork5 opening" ;
        cms:work ns27:work5 .

    _:N533edf655683426bb7e69d17cf9a437e a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns339:Thumbnail200x200 {
    ns339:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:15 .

    ns388:CmsImage0 foaf:thumbnail ns339:Thumbnail200x200 .
}

ns400:CmsImage1 {
    ns400:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:71 .
}

ns95:Thumbnail200x200 {
    ns95:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns249:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:48 .

    ns249:CmsImage0 foaf:thumbnail ns95:Thumbnail200x200 .
}

ns304:Thumbnail800x800 {
    ns304:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:86 .

    ns392:CmsImage1 foaf:thumbnail ns304:Thumbnail800x800 .
}

ns18:Thumbnail400x400 {
    ns18:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns239:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:30 .

    ns239:CmsImage0 foaf:thumbnail ns18:Thumbnail400x400 .
}

ns22:Thumbnail600x600 {
    ns22:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:78 .

    ns314:CmsImage1 foaf:thumbnail ns22:Thumbnail600x600 .
}

ns322:Thumbnail600x600 {
    ns322:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:0 .

    ns279:CmsImage0 foaf:thumbnail ns322:Thumbnail600x600 .
}

ns25:28 {
    ns25:28 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 8" ;
        skos:prefLabel "CmsConcept 28" .
}

ns88:Thumbnail600x600 {
    ns88:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:59 .

    ns374:CmsImage1 foaf:thumbnail ns88:Thumbnail600x600 .
}

ns393:CmsImage1 {
    ns393:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:21 .
}

ns30:Thumbnail600x600 {
    ns30:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:22 .

    ns220:CmsImage0 foaf:thumbnail ns30:Thumbnail600x600 .
}

ns385:CmsImage0 {
    ns385:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:74 .
}

ns339:Thumbnail400x400 {
    ns339:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:15 .

    ns388:CmsImage0 foaf:thumbnail ns339:Thumbnail400x400 .
}

ns33:Thumbnail800x800 {
    ns33:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:57 .

    ns179:CmsImage0 foaf:thumbnail ns33:Thumbnail800x800 .
}

ns274:Thumbnail800x800 {
    ns274:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:101 .

    ns381:CmsImage0 foaf:thumbnail ns274:Thumbnail800x800 .
}

ns71:Thumbnail800x800 {
    ns71:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:freestandingwork10 .

    ns342:CmsImage1 foaf:thumbnail ns71:Thumbnail800x800 .
}

ns170:CmsImage1 {
    ns170:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:person0 .
}

ns383:Thumbnail600x600 {
    ns383:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns98:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:6 .

    ns98:CmsImage0 foaf:thumbnail ns383:Thumbnail600x600 .
}

ns36:CmsImage0 {
    ns36:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:50 .
}

ns242:Thumbnail800x800 {
    ns242:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns289:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns27:work6 .

    ns289:CmsImage1 foaf:thumbnail ns242:Thumbnail800x800 .
}

ns291:Thumbnail400x400 {
    ns291:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns7:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:20 .

    ns7:CmsImage0 foaf:thumbnail ns291:Thumbnail400x400 .
}

ns137:Thumbnail600x600 {
    ns137:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns330:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:19 .

    ns330:CmsImage1 foaf:thumbnail ns137:Thumbnail600x600 .
}

ns164:Thumbnail800x800 {
    ns164:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:81 .

    ns394:CmsImage1 foaf:thumbnail ns164:Thumbnail800x800 .
}

ns401:CmsImage1 {
    ns401:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:17 .
}

ns7:CmsImage1 {
    ns7:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:20 .
}

ns250:Thumbnail600x600 {
    ns250:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns255:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:38 .

    ns255:CmsImage1 foaf:thumbnail ns250:Thumbnail600x600 .
}

dcterms:source {
    dcterms:source a cms:Property ;
        rdfs:label "Source" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> .
}

ns336:Thumbnail400x400 {
    ns336:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:freestandingwork9 .

    ns356:CmsImage0 foaf:thumbnail ns336:Thumbnail400x400 .
}

ns25:33 {
    ns25:33 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 3" ;
        skos:prefLabel "CmsConcept 33" .
}

ns402:CmsImage0 {
    ns402:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:37 .
}

ns106:Thumbnail400x400 {
    ns106:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:40 .

    ns256:CmsImage0 foaf:thumbnail ns106:Thumbnail400x400 .
}

ns95:Thumbnail600x600 {
    ns95:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns249:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:48 .

    ns249:CmsImage0 foaf:thumbnail ns95:Thumbnail600x600 .
}

ns237:Thumbnail800x800 {
    ns237:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:4 .

    ns278:CmsImage1 foaf:thumbnail ns237:Thumbnail800x800 .
}

ns391:Thumbnail600x600 {
    ns391:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns255:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:38 .

    ns255:CmsImage0 foaf:thumbnail ns391:Thumbnail600x600 .
}

ns347:Thumbnail400x400 {
    ns347:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns107:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:73 .

    ns107:CmsImage1 foaf:thumbnail ns347:Thumbnail400x400 .
}

ns157:Thumbnail800x800 {
    ns157:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:43 .

    ns404:CmsImage0 foaf:thumbnail ns157:Thumbnail800x800 .
}

ns45:work0Opening {
    ns45:work0Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N890bcd392da14df0b30049adcabc17e2 ;
        dcterms:spatial _:N6c006e2d41c3481b91395dd87265b5b6 ;
        dcterms:title "CmsCollection0CmsWork0 opening" ;
        cms:work ns45:work0 .

    _:N6c006e2d41c3481b91395dd87265b5b6 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N890bcd392da14df0b30049adcabc17e2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns243:CmsImage1 {
    ns243:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:46 .
}

ns237:Thumbnail200x200 {
    ns237:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:4 .

    ns278:CmsImage1 foaf:thumbnail ns237:Thumbnail200x200 .
}

ns354:CmsImage0 {
    ns354:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:23 .
}

ns25:7 {
    ns25:7 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 7" ;
        skos:prefLabel "CmsConcept 7" .
}

ns27:work4Opening {
    ns27:work4Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-28"^^xsd:date ;
        dcterms:description _:N940ba015246c4205852489fcba411af1 ;
        dcterms:spatial _:N61900804604d4f3a8153625a20d168fb ;
        dcterms:title "CmsCollection1CmsWork4 opening" ;
        cms:work ns27:work4 .

    _:N61900804604d4f3a8153625a20d168fb a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N940ba015246c4205852489fcba411af1 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns206:CmsImage1 {
    ns206:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:3 .
}

ns403:CmsImage1 {
    ns403:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:83 .
}

ns224:Thumbnail400x400 {
    ns224:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns45:work2 .

    ns397:CmsImage0 foaf:thumbnail ns224:Thumbnail400x400 .
}

ns26:Thumbnail400x400 {
    ns26:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns152:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:person2 .

    ns152:CmsImage0 foaf:thumbnail ns26:Thumbnail400x400 .
}

ns395:CmsImage1 {
    ns395:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns27:work4 .
}

ns261:CmsImage0 {
    ns261:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:94 .
}

ns25:55 {
    ns25:55 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 5" ;
        skos:prefLabel "CmsConcept 55" .
}

ns236:Thumbnail400x400 {
    ns236:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns35:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:76 .

    ns35:CmsImage1 foaf:thumbnail ns236:Thumbnail400x400 .
}

ns313:Thumbnail200x200 {
    ns313:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns216:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:89 .

    ns216:CmsImage0 foaf:thumbnail ns313:Thumbnail200x200 .
}

ns16:Thumbnail400x400 {
    ns16:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:freestandingwork9 .

    ns356:CmsImage1 foaf:thumbnail ns16:Thumbnail400x400 .
}

ns387:CmsImage1 {
    ns387:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:freestandingwork11 .
}

ns347:Thumbnail600x600 {
    ns347:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns107:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:73 .

    ns107:CmsImage1 foaf:thumbnail ns347:Thumbnail600x600 .
}

ns355:Thumbnail400x400 {
    ns355:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns170:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:person0 .

    ns170:CmsImage1 foaf:thumbnail ns355:Thumbnail400x400 .
}

_:Ncf61ac50eb8b471595d081c317a3d918 {
    _:Ncf61ac50eb8b471595d081c317a3d918 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N533edf655683426bb7e69d17cf9a437e ;
        dcterms:title "CmsCollection1CmsWork5 closing" ;
        cms:work ns27:work5 .

    _:N533edf655683426bb7e69d17cf9a437e a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns177:Thumbnail800x800 {
    ns177:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns249:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:48 .

    ns249:CmsImage1 foaf:thumbnail ns177:Thumbnail800x800 .
}

ns64:Thumbnail400x400 {
    ns64:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:10 .

    ns372:CmsImage0 foaf:thumbnail ns64:Thumbnail400x400 .
}

ns404:CmsImage0 {
    ns404:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:43 .
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

ns3:Thumbnail600x600 {
    ns3:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:108 .

    ns128:CmsImage0 foaf:thumbnail ns3:Thumbnail600x600 .
}

ns155:Thumbnail200x200 {
    ns155:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:82 .

    ns285:CmsImage1 foaf:thumbnail ns155:Thumbnail200x200 .
}

ns72:Thumbnail800x800 {
    ns72:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns200:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:16 .

    ns200:CmsImage1 foaf:thumbnail ns72:Thumbnail800x800 .
}

ns25:89 {
    ns25:89 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 9" ;
        skos:prefLabel "CmsConcept 89" .
}

ns141:Thumbnail200x200 {
    ns141:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns273:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:2 .

    ns273:CmsImage0 foaf:thumbnail ns141:Thumbnail200x200 .
}

ns43:organization3 {
    ns43:organization3 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 3" ;
        foaf:page ns43:organization3page .
}

ns25:66 {
    ns25:66 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 6" ;
        skos:prefLabel "CmsConcept 66" .
}

ns335:CmsImage1 {
    ns335:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:12 .
}

ns148:Thumbnail600x600 {
    ns148:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:45 .

    ns371:CmsImage0 foaf:thumbnail ns148:Thumbnail600x600 .
}

ns45:work2 {
    ns45:work2 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork2 alternative title 0",
            "CmsCollection0CmsWork2 alternative title 1" ;
        dcterms:contributor _:N13d6668576944b0a868cedf17844c861,
            _:N997418b4dcf0453d93b3513a0a642665 ;
        dcterms:creator ns43:organization4,
            ns43:person0 ;
        dcterms:description _:Nfa29969d136d4fd59f0337a93f4cb686 ;
        dcterms:extent ns25:12,
            ns25:13 ;
        dcterms:identifier "CmsCollection0CmsWork2Id0",
            "CmsCollection0CmsWork2Id1" ;
        dcterms:language ns25:22,
            ns25:23 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:42,
            ns25:43 ;
        dcterms:provenance "CmsCollection0CmsWork2 provenance 0",
            "CmsCollection0CmsWork2 provenance 1" ;
        dcterms:publisher ns25:52,
            ns25:53 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 rights holder" ;
        dcterms:source ns25:62,
            ns25:63 ;
        dcterms:spatial ns45:work2Location ;
        dcterms:subject ns25:82,
            ns25:83 ;
        dcterms:title "CmsCollection0CmsWork2" ;
        dcterms:type ns25:102,
            ns25:103 ;
        vra:culturalContext ns25:2,
            ns25:3 ;
        vra:material ns25:32,
            ns25:33 ;
        vra:technique ns25:92,
            ns25:93 ;
        cms:collection ns43:collection0 ;
        foaf:page <http://example.com/work/2> .

    _:N13d6668576944b0a868cedf17844c861 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 0" .

    _:N997418b4dcf0453d93b3513a0a642665 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 1" .

    _:Nfa29969d136d4fd59f0337a93f4cb686 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns285:CmsImage0 {
    ns285:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:82 .
}

ns151:Thumbnail200x200 {
    ns151:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns299:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:person3 .

    ns299:CmsImage1 foaf:thumbnail ns151:Thumbnail200x200 .
}

ns337:Thumbnail800x800 {
    ns337:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:101 .

    ns381:CmsImage1 foaf:thumbnail ns337:Thumbnail800x800 .
}

ns176:Thumbnail800x800 {
    ns176:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns4:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:55 .

    ns4:CmsImage0 foaf:thumbnail ns176:Thumbnail800x800 .
}

ns219:Thumbnail800x800 {
    ns219:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns97:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns45:work3 .

    ns97:CmsImage1 foaf:thumbnail ns219:Thumbnail800x800 .
}

ns383:Thumbnail400x400 {
    ns383:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns98:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:6 .

    ns98:CmsImage0 foaf:thumbnail ns383:Thumbnail400x400 .
}

ns39:Thumbnail200x200 {
    ns39:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns113:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:77 .

    ns113:CmsImage1 foaf:thumbnail ns39:Thumbnail200x200 .
}

ns367:Thumbnail200x200 {
    ns367:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns232:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:98 .

    ns232:CmsImage0 foaf:thumbnail ns367:Thumbnail200x200 .
}

ns351:CmsImage0 {
    ns351:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns45:work1 .
}

ns43:person1 {
    ns43:person1 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "1, CmsPerson" ;
        foaf:familyName "1" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 1" .
}

ns123:Thumbnail400x400 {
    ns123:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns41:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns45:work0 .

    ns41:CmsImage0 foaf:thumbnail ns123:Thumbnail400x400 .
}

ns94:Thumbnail800x800 {
    ns94:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns185:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:62 .

    ns185:CmsImage1 foaf:thumbnail ns94:Thumbnail800x800 .
}

ns31:Thumbnail400x400 {
    ns31:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:11 .

    ns204:CmsImage0 foaf:thumbnail ns31:Thumbnail400x400 .
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
        foaf:depicts ns25:81 .
}

ns303:Thumbnail600x600 {
    ns303:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:17 .

    ns401:CmsImage0 foaf:thumbnail ns303:Thumbnail600x600 .
}

ns401:CmsImage0 {
    ns401:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:17 .
}

ns245:Thumbnail600x600 {
    ns245:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns260:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:31 .

    ns260:CmsImage0 foaf:thumbnail ns245:Thumbnail600x600 .
}

ns57:Thumbnail200x200 {
    ns57:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:103 .

    ns346:CmsImage0 foaf:thumbnail ns57:Thumbnail200x200 .
}

ns400:CmsImage0 {
    ns400:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:71 .
}

ns97:CmsImage1 {
    ns97:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns45:work3 .
}

ns25:16 {
    ns25:16 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 6" ;
        skos:prefLabel "CmsConcept 16" .
}

ns297:Thumbnail400x400 {
    ns297:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns93:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:104 .

    ns93:CmsImage0 foaf:thumbnail ns297:Thumbnail400x400 .
}

ns396:CmsImage0 {
    ns396:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:88 .
}

ns25:73 {
    ns25:73 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 3" ;
        skos:prefLabel "CmsConcept 73" .
}

ns316:Thumbnail400x400 {
    ns316:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns85:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns43:person1 .

    ns85:CmsImage1 foaf:thumbnail ns316:Thumbnail400x400 .
}

ns187:Thumbnail600x600 {
    ns187:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:9 .

    ns296:CmsImage0 foaf:thumbnail ns187:Thumbnail600x600 .
}

ns114:Thumbnail600x600 {
    ns114:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns93:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:104 .

    ns93:CmsImage1 foaf:thumbnail ns114:Thumbnail600x600 .
}

ns264:Thumbnail200x200 {
    ns264:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns357:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:18 .

    ns357:CmsImage0 foaf:thumbnail ns264:Thumbnail200x200 .
}

ns381:CmsImage1 {
    ns381:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:101 .
}

ns281:Thumbnail200x200 {
    ns281:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns60:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:24 .

    ns60:CmsImage0 foaf:thumbnail ns281:Thumbnail200x200 .
}

ns378:Thumbnail200x200 {
    ns378:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns77:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:13 .

    ns77:CmsImage1 foaf:thumbnail ns378:Thumbnail200x200 .
}

ns87:Thumbnail400x400 {
    ns87:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:56 .

    ns158:CmsImage0 foaf:thumbnail ns87:Thumbnail400x400 .
}

ns45:work1Opening {
    ns45:work1Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-31"^^xsd:date ;
        dcterms:spatial _:N14c99a0ea2e44396a3b96abc42277f81 ;
        dcterms:title "CmsCollection0CmsWork1 opening" ;
        cms:work ns45:work1 .

    _:N14c99a0ea2e44396a3b96abc42277f81 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns25:68 {
    ns25:68 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 8" ;
        skos:prefLabel "CmsConcept 68" .
}

ns276:CmsImage1 {
    ns276:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:14 .
}

ns364:Thumbnail600x600 {
    ns364:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:52 .

    ns309:CmsImage0 foaf:thumbnail ns364:Thumbnail600x600 .
}

ns166:Thumbnail600x600 {
    ns166:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns357:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:18 .

    ns357:CmsImage1 foaf:thumbnail ns166:Thumbnail600x600 .
}

ns306:Thumbnail600x600 {
    ns306:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:69 .

    ns294:CmsImage1 foaf:thumbnail ns306:Thumbnail600x600 .
}

ns74:Thumbnail200x200 {
    ns74:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:102 .

    ns231:CmsImage0 foaf:thumbnail ns74:Thumbnail200x200 .
}

ns362:Thumbnail800x800 {
    ns362:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:organization4 .

    ns300:CmsImage0 foaf:thumbnail ns362:Thumbnail800x800 .
}

ns196:Thumbnail200x200 {
    ns196:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:87 .

    ns308:CmsImage0 foaf:thumbnail ns196:Thumbnail200x200 .
}

ns201:Thumbnail400x400 {
    ns201:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:58 .

    ns146:CmsImage0 foaf:thumbnail ns201:Thumbnail400x400 .
}

ns329:Thumbnail200x200 {
    ns329:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns6:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:91 .

    ns6:CmsImage1 foaf:thumbnail ns329:Thumbnail200x200 .
}

ns25:75 {
    ns25:75 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 5" ;
        skos:prefLabel "CmsConcept 75" .
}

ns25:67 {
    ns25:67 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 7" ;
        skos:prefLabel "CmsConcept 67" .
}

ns321:Thumbnail200x200 {
    ns321:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:freestandingwork8 .

    ns328:CmsImage1 foaf:thumbnail ns321:Thumbnail200x200 .
}

ns361:Thumbnail600x600 {
    ns361:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns301:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:organization2 .

    ns301:CmsImage0 foaf:thumbnail ns361:Thumbnail600x600 .
}

ns158:CmsImage1 {
    ns158:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:56 .
}

ns231:CmsImage1 {
    ns231:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:102 .
}

ns404:CmsImage1 {
    ns404:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:43 .
}

ns114:Thumbnail200x200 {
    ns114:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns93:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:104 .

    ns93:CmsImage1 foaf:thumbnail ns114:Thumbnail200x200 .
}

ns269:Thumbnail800x800 {
    ns269:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns116:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:33 .

    ns116:CmsImage0 foaf:thumbnail ns269:Thumbnail800x800 .
}

ns377:CmsImage1 {
    ns377:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:96 .
}

ns201:Thumbnail800x800 {
    ns201:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:58 .

    ns146:CmsImage0 foaf:thumbnail ns201:Thumbnail800x800 .
}

ns367:Thumbnail600x600 {
    ns367:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns232:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:98 .

    ns232:CmsImage0 foaf:thumbnail ns367:Thumbnail600x600 .
}

ns269:Thumbnail400x400 {
    ns269:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns116:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:33 .

    ns116:CmsImage0 foaf:thumbnail ns269:Thumbnail400x400 .
}

ns341:Thumbnail600x600 {
    ns341:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns50:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:100 .

    ns50:CmsImage1 foaf:thumbnail ns341:Thumbnail600x600 .
}

ns178:Thumbnail600x600 {
    ns178:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:0 .

    ns279:CmsImage1 foaf:thumbnail ns178:Thumbnail600x600 .
}

dcterms:description {
    dcterms:description a cms:Property ;
        rdfs:label "Description" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Description> .
}

ns287:Thumbnail400x400 {
    ns287:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns98:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:6 .

    ns98:CmsImage1 foaf:thumbnail ns287:Thumbnail400x400 .
}

ns92:Thumbnail200x200 {
    ns92:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:83 .

    ns403:CmsImage1 foaf:thumbnail ns92:Thumbnail200x200 .
}

ns330:CmsImage1 {
    ns330:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:19 .
}

ns241:Thumbnail600x600 {
    ns241:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns41:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns45:work0 .

    ns41:CmsImage1 foaf:thumbnail ns241:Thumbnail600x600 .
}

ns287:Thumbnail800x800 {
    ns287:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns98:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:6 .

    ns98:CmsImage1 foaf:thumbnail ns287:Thumbnail800x800 .
}

ns25:21 {
    ns25:21 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 1" ;
        skos:prefLabel "CmsConcept 21" .
}

ns403:CmsImage0 {
    ns403:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:83 .
}

ns54:Thumbnail800x800 {
    ns54:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:75 .

    ns348:CmsImage0 foaf:thumbnail ns54:Thumbnail800x800 .
}

ns214:Thumbnail600x600 {
    ns214:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:57 .

    ns179:CmsImage1 foaf:thumbnail ns214:Thumbnail600x600 .
}

ns49:Thumbnail800x800 {
    ns49:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:52 .

    ns309:CmsImage1 foaf:thumbnail ns49:Thumbnail800x800 .
}

ns96:Thumbnail600x600 {
    ns96:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns382:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:organization0 .

    ns382:CmsImage0 foaf:thumbnail ns96:Thumbnail600x600 .
}

dcterms:type {
    dcterms:type a cms:Property ;
        rdfs:label "Type" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns376:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> .
}

ns392:CmsImage0 {
    ns392:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:86 .
}

ns205:Thumbnail400x400 {
    ns205:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:11 .

    ns204:CmsImage1 foaf:thumbnail ns205:Thumbnail400x400 .
}

ns168:Thumbnail600x600 {
    ns168:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:person4 .

    ns110:CmsImage1 foaf:thumbnail ns168:Thumbnail600x600 .
}

ns397:CmsImage1 {
    ns397:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns45:work2 .
}

ns152:CmsImage1 {
    ns152:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:person2 .
}

ns254:Thumbnail600x600 {
    ns254:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:93 .

    ns398:CmsImage0 foaf:thumbnail ns254:Thumbnail600x600 .
}

ns373:Thumbnail800x800 {
    ns373:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns154:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:27 .

    ns154:CmsImage1 foaf:thumbnail ns373:Thumbnail800x800 .
}

ns307:Thumbnail600x600 {
    ns307:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:4 .

    ns278:CmsImage0 foaf:thumbnail ns307:Thumbnail600x600 .
}

ns43:freestandingwork9Creation {
    ns43:freestandingwork9Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns43:organization1,
            ns43:organization2 ;
        dcterms:date _:N910269b3113e4fe3ba21d52a37851593 ;
        dcterms:spatial ns43:freestandingwork9Location ;
        dcterms:title "FreestandingWork9 creation" ;
        cms:work ns43:freestandingwork9 .

    _:N910269b3113e4fe3ba21d52a37851593 a cms:DateTimeDescription ;
        time:day "---23"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns163:CmsImage1 {
    ns163:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:49 .
}

ns71:Thumbnail600x600 {
    ns71:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:freestandingwork10 .

    ns342:CmsImage1 foaf:thumbnail ns71:Thumbnail600x600 .
}

ns213:Thumbnail800x800 {
    ns213:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:58 .

    ns146:CmsImage1 foaf:thumbnail ns213:Thumbnail800x800 .
}

ns368:Thumbnail600x600 {
    ns368:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:72 .

    ns186:CmsImage0 foaf:thumbnail ns368:Thumbnail600x600 .
}

ns399:CmsImage0 {
    ns399:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns27:work5 .
}

ns102:Thumbnail600x600 {
    ns102:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns107:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:73 .

    ns107:CmsImage0 foaf:thumbnail ns102:Thumbnail600x600 .
}

ns308:CmsImage0 {
    ns308:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:87 .
}

ns347:Thumbnail800x800 {
    ns347:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns107:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:73 .

    ns107:CmsImage1 foaf:thumbnail ns347:Thumbnail800x800 .
}

ns203:Thumbnail600x600 {
    ns203:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns289:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns27:work6 .

    ns289:CmsImage0 foaf:thumbnail ns203:Thumbnail600x600 .
}

ns384:Thumbnail800x800 {
    ns384:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:32 .

    ns365:CmsImage1 foaf:thumbnail ns384:Thumbnail800x800 .
}

ns295:Thumbnail600x600 {
    ns295:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:87 .

    ns308:CmsImage1 foaf:thumbnail ns295:Thumbnail600x600 .
}

ns342:CmsImage0 {
    ns342:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:freestandingwork10 .
}

ns219:Thumbnail400x400 {
    ns219:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns97:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns45:work3 .

    ns97:CmsImage1 foaf:thumbnail ns219:Thumbnail400x400 .
}

ns373:Thumbnail600x600 {
    ns373:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns154:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:27 .

    ns154:CmsImage1 foaf:thumbnail ns373:Thumbnail600x600 .
}

ns139:Thumbnail800x800 {
    ns139:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns19:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:54 .

    ns19:CmsImage0 foaf:thumbnail ns139:Thumbnail800x800 .
}

ns358:Thumbnail800x800 {
    ns358:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns52:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:90 .

    ns52:CmsImage0 foaf:thumbnail ns358:Thumbnail800x800 .
}

ns271:Thumbnail200x200 {
    ns271:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns215:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:collection1 .

    ns215:CmsImage1 foaf:thumbnail ns271:Thumbnail200x200 .
}

ns389:CmsImage1 {
    ns389:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns27:work7 .
}

ns244:Thumbnail600x600 {
    ns244:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns45:work2 .

    ns397:CmsImage1 foaf:thumbnail ns244:Thumbnail600x600 .
}

ns212:Thumbnail400x400 {
    ns212:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:22 .

    ns220:CmsImage1 foaf:thumbnail ns212:Thumbnail400x400 .
}

ns43:freestandingwork8Opening {
    ns43:freestandingwork8Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-24"^^xsd:date ;
        dcterms:description _:N7db6d7f0bda84c3ea112b69989c3993c ;
        dcterms:spatial _:N97b6a69798744ed6b1375702dbbff815 ;
        dcterms:title "FreestandingWork8 opening" ;
        cms:work ns43:freestandingwork8 .

    _:N97b6a69798744ed6b1375702dbbff815 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N7db6d7f0bda84c3ea112b69989c3993c a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns228:Thumbnail400x400 {
    ns228:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns62:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:60 .

    ns62:CmsImage1 foaf:thumbnail ns228:Thumbnail400x400 .
}

ns271:Thumbnail600x600 {
    ns271:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns215:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:collection1 .

    ns215:CmsImage1 foaf:thumbnail ns271:Thumbnail600x600 .
}

ns20:Thumbnail600x600 {
    ns20:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns127:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:organization1 .

    ns127:CmsImage1 foaf:thumbnail ns20:Thumbnail600x600 .
}

ns323:Thumbnail600x600 {
    ns323:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns234:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:47 .

    ns234:CmsImage1 foaf:thumbnail ns323:Thumbnail600x600 .
}

ns382:CmsImage1 {
    ns382:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns43:organization0 .
}

ns274:Thumbnail200x200 {
    ns274:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:101 .

    ns381:CmsImage0 foaf:thumbnail ns274:Thumbnail200x200 .
}

ns88:Thumbnail200x200 {
    ns88:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:59 .

    ns374:CmsImage1 foaf:thumbnail ns88:Thumbnail200x200 .
}

ns175:Thumbnail800x800 {
    ns175:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns206:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:3 .

    ns206:CmsImage1 foaf:thumbnail ns175:Thumbnail800x800 .
}

ns25:106 {
    ns25:106 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 6" ;
        skos:prefLabel "CmsConcept 106" .
}

ns91:Thumbnail800x800 {
    ns91:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:44 .

    ns318:CmsImage1 foaf:thumbnail ns91:Thumbnail800x800 .
}

ns368:Thumbnail800x800 {
    ns368:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:72 .

    ns186:CmsImage0 foaf:thumbnail ns368:Thumbnail800x800 .
}

ns103:Thumbnail400x400 {
    ns103:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:92 .

    ns390:CmsImage0 foaf:thumbnail ns103:Thumbnail400x400 .
}

ns237:Thumbnail600x600 {
    ns237:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:4 .

    ns278:CmsImage1 foaf:thumbnail ns237:Thumbnail600x600 .
}

ns290:Thumbnail200x200 {
    ns290:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns185:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:62 .

    ns185:CmsImage0 foaf:thumbnail ns290:Thumbnail200x200 .
}

ns343:CmsImage0 {
    ns343:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:1 .
}

ns43:person0 {
    ns43:person0 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "0, CmsPerson" ;
        foaf:familyName "0" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 0" ;
        foaf:page ns43:person0page .
}

ns272:Thumbnail800x800 {
    ns272:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns180:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:66 .

    ns180:CmsImage0 foaf:thumbnail ns272:Thumbnail800x800 .
}

ns30:Thumbnail400x400 {
    ns30:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:22 .

    ns220:CmsImage0 foaf:thumbnail ns30:Thumbnail400x400 .
}

ns139:Thumbnail400x400 {
    ns139:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns19:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:54 .

    ns19:CmsImage0 foaf:thumbnail ns139:Thumbnail400x400 .
}

ns96:Thumbnail800x800 {
    ns96:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns382:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:organization0 .

    ns382:CmsImage0 foaf:thumbnail ns96:Thumbnail800x800 .
}

ns105:Thumbnail800x800 {
    ns105:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:106 .

    ns280:CmsImage0 foaf:thumbnail ns105:Thumbnail800x800 .
}

ns256:CmsImage1 {
    ns256:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:40 .
}

ns25:19 {
    ns25:19 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 9" ;
        skos:prefLabel "CmsConcept 19" .
}

ns58:CmsImage1 {
    ns58:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:7 .
}

ns218:Thumbnail200x200 {
    ns218:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns43:organization4 .

    ns300:CmsImage1 foaf:thumbnail ns218:Thumbnail200x200 .
}

ns282:Thumbnail200x200 {
    ns282:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:29 .

    ns333:CmsImage1 foaf:thumbnail ns282:Thumbnail200x200 .
}

ns379:Thumbnail600x600 {
    ns379:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:15 .

    ns388:CmsImage1 foaf:thumbnail ns379:Thumbnail600x600 .
}

ns181:Thumbnail600x600 {
    ns181:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:81 .

    ns394:CmsImage0 foaf:thumbnail ns181:Thumbnail600x600 .
}

ns367:Thumbnail400x400 {
    ns367:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns232:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:98 .

    ns232:CmsImage0 foaf:thumbnail ns367:Thumbnail400x400 .
}

ns398:CmsImage0 {
    ns398:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:93 .
}

ns263:Thumbnail600x600 {
    ns263:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:42 .

    ns207:CmsImage0 foaf:thumbnail ns263:Thumbnail600x600 .
}

ns1:Thumbnail800x800 {
    ns1:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns200:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:16 .

    ns200:CmsImage0 foaf:thumbnail ns1:Thumbnail800x800 .
}

ns43:freestandingwork10 {
    ns43:freestandingwork10 a cms:Work ;
        dcterms:alternative "FreestandingWork10 alternative title 0",
            "FreestandingWork10 alternative title 1" ;
        dcterms:contributor _:N22816272ec7047a8bd6be55bba6c1721,
            _:Naa0a2bade9ee4f35a675030060d13ef4 ;
        dcterms:creator ns43:organization2,
            ns43:organization3 ;
        dcterms:description _:N84697bd60dc24c469cf3b23b73cdfe5d ;
        dcterms:extent ns25:10,
            ns25:11 ;
        dcterms:identifier "FreestandingWork10Id0",
            "FreestandingWork10Id1" ;
        dcterms:language ns25:20,
            ns25:21 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns25:40,
            ns25:41 ;
        dcterms:provenance "FreestandingWork10 provenance 0",
            "FreestandingWork10 provenance 1" ;
        dcterms:publisher ns25:50,
            ns25:51 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 rights holder" ;
        dcterms:source ns25:60,
            ns25:61 ;
        dcterms:spatial ns43:freestandingwork10Location ;
        dcterms:subject ns25:80,
            ns25:81 ;
        dcterms:title "FreestandingWork10" ;
        dcterms:type ns25:100,
            ns25:101 ;
        vra:culturalContext ns25:0,
            ns25:1 ;
        vra:material ns25:30,
            ns25:31 ;
        vra:technique ns25:90,
            ns25:91 ;
        foaf:page <http://example.com/work/10> .

    _:N22816272ec7047a8bd6be55bba6c1721 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 1" .

    _:Naa0a2bade9ee4f35a675030060d13ef4 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 0" .

    _:N84697bd60dc24c469cf3b23b73cdfe5d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns63:Thumbnail400x400 {
    ns63:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns344:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:25 .

    ns344:CmsImage1 foaf:thumbnail ns63:Thumbnail400x400 .
}

ns168:Thumbnail800x800 {
    ns168:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:person4 .

    ns110:CmsImage1 foaf:thumbnail ns168:Thumbnail800x800 .
}

ns312:Thumbnail800x800 {
    ns312:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:14 .

    ns276:CmsImage1 foaf:thumbnail ns312:Thumbnail800x800 .
}

ns218:Thumbnail800x800 {
    ns218:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:organization4 .

    ns300:CmsImage1 foaf:thumbnail ns218:Thumbnail800x800 .
}

ns355:Thumbnail600x600 {
    ns355:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns170:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns43:person0 .

    ns170:CmsImage1 foaf:thumbnail ns355:Thumbnail600x600 .
}

ns98:CmsImage0 {
    ns98:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:6 .
}

ns297:Thumbnail800x800 {
    ns297:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns93:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:104 .

    ns93:CmsImage0 foaf:thumbnail ns297:Thumbnail800x800 .
}

ns25:77 {
    ns25:77 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 7" ;
        skos:prefLabel "CmsConcept 77" .
}

ns270:Thumbnail800x800 {
    ns270:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns7:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:20 .

    ns7:CmsImage1 foaf:thumbnail ns270:Thumbnail800x800 .
}

ns315:Thumbnail400x400 {
    ns315:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:67 .

    ns89:CmsImage0 foaf:thumbnail ns315:Thumbnail400x400 .
}

ns144:Thumbnail600x600 {
    ns144:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:23 .

    ns354:CmsImage1 foaf:thumbnail ns144:Thumbnail600x600 .
}

ns34:Thumbnail200x200 {
    ns34:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:26 .

    ns257:CmsImage1 foaf:thumbnail ns34:Thumbnail200x200 .
}

ns181:Thumbnail200x200 {
    ns181:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:81 .

    ns394:CmsImage0 foaf:thumbnail ns181:Thumbnail200x200 .
}

ns8:Thumbnail600x600 {
    ns8:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns265:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:63 .

    ns265:CmsImage0 foaf:thumbnail ns8:Thumbnail600x600 .
}

ns252:Thumbnail600x600 {
    ns252:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:84 .

    ns221:CmsImage0 foaf:thumbnail ns252:Thumbnail600x600 .
}

ns25:104 {
    ns25:104 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 4" ;
        skos:prefLabel "CmsConcept 104" .
}

ns66:Thumbnail200x200 {
    ns66:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:14 .

    ns276:CmsImage0 foaf:thumbnail ns66:Thumbnail200x200 .
}

ns259:Thumbnail800x800 {
    ns259:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:99 .

    ns324:CmsImage1 foaf:thumbnail ns259:Thumbnail800x800 .
}

ns43:organization2 {
    ns43:organization2 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 2" ;
        foaf:page ns43:organization2page .
}

ns372:CmsImage1 {
    ns372:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:10 .
}

ns148:Thumbnail200x200 {
    ns148:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:45 .

    ns371:CmsImage0 foaf:thumbnail ns148:Thumbnail200x200 .
}

ns81:Thumbnail600x600 {
    ns81:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:84 .

    ns221:CmsImage1 foaf:thumbnail ns81:Thumbnail600x600 .
}

ns50:CmsImage0 {
    ns50:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:100 .
}

ns68:Thumbnail800x800 {
    ns68:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns60:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:24 .

    ns60:CmsImage1 foaf:thumbnail ns68:Thumbnail800x800 .
}

ns25:101 {
    ns25:101 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 1" ;
        skos:prefLabel "CmsConcept 101" .
}

ns253:Thumbnail800x800 {
    ns253:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:freestandingwork8 .

    ns328:CmsImage0 foaf:thumbnail ns253:Thumbnail800x800 .
}

ns44:Thumbnail200x200 {
    ns44:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:9 .

    ns296:CmsImage1 foaf:thumbnail ns44:Thumbnail200x200 .
}

ns270:Thumbnail200x200 {
    ns270:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns7:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:20 .

    ns7:CmsImage1 foaf:thumbnail ns270:Thumbnail200x200 .
}

ns105:Thumbnail400x400 {
    ns105:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns25:106 .

    ns280:CmsImage0 foaf:thumbnail ns105:Thumbnail400x400 .
}

ns40:Thumbnail200x200 {
    ns40:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:41 .

    ns380:CmsImage1 foaf:thumbnail ns40:Thumbnail200x200 .
}

ns293:Thumbnail200x200 {
    ns293:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns25:88 .

    ns396:CmsImage0 foaf:thumbnail ns293:Thumbnail200x200 .
}

ns355:Thumbnail800x800 {
    ns355:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns170:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns43:person0 .

    ns170:CmsImage1 foaf:thumbnail ns355:Thumbnail800x800 .
}

ns402:CmsImage1 {
    ns402:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns25:37 .
}

ns25:86 {
    ns25:86 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 6" ;
        skos:prefLabel "CmsConcept 86" .
}

ns295:Thumbnail800x800 {
    ns295:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns25:87 .

    ns308:CmsImage1 foaf:thumbnail ns295:Thumbnail800x800 .
}

ns266:Thumbnail600x600 {
    ns266:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns230:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns25:97 .

    ns230:CmsImage0 foaf:thumbnail ns266:Thumbnail600x600 .
}
`);
