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
@prefix ns10: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:> .
@prefix ns100: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:> .
@prefix ns101: <http://example.com/collection0/work2:CmsImage0:> .
@prefix ns102: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage1:> .
@prefix ns103: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage0:> .
@prefix ns104: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage1:> .
@prefix ns105: <http://example.com/collection1/work5:CmsImage1:> .
@prefix ns106: <http://example.com/freestandingwork8:CmsImage1:> .
@prefix ns107: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:> .
@prefix ns108: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage0:> .
@prefix ns109: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:> .
@prefix ns11: <http://example.com/person1:> .
@prefix ns110: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage0:> .
@prefix ns111: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:> .
@prefix ns112: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage0:> .
@prefix ns113: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage1:> .
@prefix ns114: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage0:> .
@prefix ns115: <http://example.com/collection0/work0:> .
@prefix ns116: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:> .
@prefix ns117: <http://example.com/collection1/work5:> .
@prefix ns118: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage0:> .
@prefix ns119: <http://example.com/collection1:CmsImage1:> .
@prefix ns12: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage1:> .
@prefix ns120: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage1:> .
@prefix ns121: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:> .
@prefix ns122: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage1:> .
@prefix ns123: <http://example.com/person2:> .
@prefix ns124: <http://example.com/person3:CmsImage0:> .
@prefix ns125: <http://example.com/freestandingwork8:CmsImage0:> .
@prefix ns126: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:> .
@prefix ns127: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage0:> .
@prefix ns128: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:> .
@prefix ns129: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage0:> .
@prefix ns13: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage1:> .
@prefix ns130: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage1:> .
@prefix ns131: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage1:> .
@prefix ns132: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage1:> .
@prefix ns133: <http://example.com/collection0/work3:CmsImage1:> .
@prefix ns134: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage0:> .
@prefix ns135: <http://example.com/freestandingwork8:> .
@prefix ns136: <http://example.com/person2:CmsImage0:> .
@prefix ns137: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage1:> .
@prefix ns138: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage0:> .
@prefix ns139: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage0:> .
@prefix ns14: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage0:> .
@prefix ns140: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage1:> .
@prefix ns141: <http://example.com/freestandingwork9:CmsImage0:> .
@prefix ns142: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:> .
@prefix ns143: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:> .
@prefix ns144: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage1:> .
@prefix ns145: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:> .
@prefix ns146: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage1:> .
@prefix ns147: <http://example.com/collection1/work7:CmsImage0:> .
@prefix ns148: <http://example.com/organization2:> .
@prefix ns149: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:> .
@prefix ns15: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage1:> .
@prefix ns150: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage0:> .
@prefix ns151: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage1:> .
@prefix ns152: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage0:> .
@prefix ns153: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:> .
@prefix ns154: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage0:> .
@prefix ns155: <http://example.com/person0:CmsImage1:> .
@prefix ns156: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage0:> .
@prefix ns157: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage0:> .
@prefix ns158: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:> .
@prefix ns159: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:> .
@prefix ns16: <http://example.com/collection0/work0:CmsImage0:> .
@prefix ns160: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage0:> .
@prefix ns161: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage1:> .
@prefix ns162: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:> .
@prefix ns163: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage1:> .
@prefix ns164: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage1:> .
@prefix ns165: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage0:> .
@prefix ns166: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:> .
@prefix ns167: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:> .
@prefix ns168: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:> .
@prefix ns169: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage1:> .
@prefix ns17: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:> .
@prefix ns170: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage1:> .
@prefix ns171: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage1:> .
@prefix ns172: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage1:> .
@prefix ns173: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage0:> .
@prefix ns174: <http://example.com/person1:CmsImage1:> .
@prefix ns175: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage0:> .
@prefix ns176: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage1:> .
@prefix ns177: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage0:> .
@prefix ns178: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage1:> .
@prefix ns179: <http://example.com/collection0/work2:> .
@prefix ns18: <http://example.com/collection0/work0:CmsImage1:> .
@prefix ns180: <http://example.com/organization2:CmsImage1:> .
@prefix ns181: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage0:> .
@prefix ns182: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage1:> .
@prefix ns183: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage0:> .
@prefix ns184: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage1:> .
@prefix ns185: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage1:> .
@prefix ns186: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:> .
@prefix ns187: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage1:> .
@prefix ns188: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:> .
@prefix ns189: <http://example.com/collection1/work6:CmsImage0:> .
@prefix ns19: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage1:> .
@prefix ns190: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage1:> .
@prefix ns191: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage0:> .
@prefix ns192: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage1:> .
@prefix ns193: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage0:> .
@prefix ns194: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:> .
@prefix ns195: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage1:> .
@prefix ns196: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage1:> .
@prefix ns197: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage0:> .
@prefix ns198: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage1:> .
@prefix ns199: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:> .
@prefix ns2: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage1:> .
@prefix ns20: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage0:> .
@prefix ns200: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage0:> .
@prefix ns201: <http://example.com/organization0:CmsImage0:> .
@prefix ns202: <http://example.com/freestandingwork9:> .
@prefix ns203: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage1:> .
@prefix ns204: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:> .
@prefix ns205: <http://example.com/organization0:CmsImage1:> .
@prefix ns206: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage1:> .
@prefix ns207: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage1:> .
@prefix ns208: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage0:> .
@prefix ns209: <http://example.com/person4:> .
@prefix ns21: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage0:> .
@prefix ns210: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage0:> .
@prefix ns211: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage1:> .
@prefix ns212: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage0:> .
@prefix ns213: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage1:> .
@prefix ns214: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage1:> .
@prefix ns215: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage0:> .
@prefix ns216: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage0:> .
@prefix ns217: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage1:> .
@prefix ns218: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage1:> .
@prefix ns219: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage0:> .
@prefix ns22: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage0:> .
@prefix ns220: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:> .
@prefix ns221: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage0:> .
@prefix ns222: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage1:> .
@prefix ns223: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage1:> .
@prefix ns224: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:> .
@prefix ns225: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage1:> .
@prefix ns226: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage1:> .
@prefix ns227: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage1:> .
@prefix ns228: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:> .
@prefix ns229: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage0:> .
@prefix ns23: <http://example.com/person1:CmsImage0:> .
@prefix ns230: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:> .
@prefix ns231: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:> .
@prefix ns232: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:> .
@prefix ns233: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage1:> .
@prefix ns234: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage1:> .
@prefix ns235: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage0:> .
@prefix ns236: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage1:> .
@prefix ns237: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:> .
@prefix ns238: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:> .
@prefix ns239: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage0:> .
@prefix ns24: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage1:> .
@prefix ns240: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage1:> .
@prefix ns241: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:> .
@prefix ns242: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage1:> .
@prefix ns243: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage0:> .
@prefix ns244: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage1:> .
@prefix ns245: <http://example.com/person0:CmsImage0:> .
@prefix ns246: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage0:> .
@prefix ns247: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage1:> .
@prefix ns248: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage0:> .
@prefix ns249: <http://example.com/collection1:CmsImage0:> .
@prefix ns25: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage1:> .
@prefix ns250: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage1:> .
@prefix ns251: <http://example.com/collection1/work6:CmsImage1:> .
@prefix ns252: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage0:> .
@prefix ns253: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage1:> .
@prefix ns254: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage0:> .
@prefix ns255: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage1:> .
@prefix ns256: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage1:> .
@prefix ns257: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:> .
@prefix ns258: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:> .
@prefix ns259: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage0:> .
@prefix ns26: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage0:> .
@prefix ns260: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage1:> .
@prefix ns261: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:> .
@prefix ns262: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage0:> .
@prefix ns263: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage0:> .
@prefix ns264: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:> .
@prefix ns265: <http://example.com/collection1/work4:CmsImage1:> .
@prefix ns266: <http://example.com/person2:CmsImage1:> .
@prefix ns267: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage0:> .
@prefix ns268: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage0:> .
@prefix ns269: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:> .
@prefix ns27: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage0:> .
@prefix ns270: <http://example.com/collection1/work6:> .
@prefix ns271: <http://example.com/freestandingwork11:> .
@prefix ns272: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage0:> .
@prefix ns273: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage1:> .
@prefix ns274: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage0:> .
@prefix ns275: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage1:> .
@prefix ns276: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:> .
@prefix ns277: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage0:> .
@prefix ns278: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:> .
@prefix ns279: <http://example.com/organization4:> .
@prefix ns28: <http://example.com/freestandingwork10:CmsImage0:> .
@prefix ns280: <http://example.com/collection0/work1:> .
@prefix ns281: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:> .
@prefix ns282: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:> .
@prefix ns283: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage1:> .
@prefix ns284: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage0:> .
@prefix ns285: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage1:> .
@prefix ns286: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage1:> .
@prefix ns287: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage0:> .
@prefix ns288: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:> .
@prefix ns289: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage1:> .
@prefix ns29: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage0:> .
@prefix ns290: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage1:> .
@prefix ns291: <http://example.com/freestandingwork10:CmsImage1:> .
@prefix ns292: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage1:> .
@prefix ns293: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage0:> .
@prefix ns294: <http://example.com/person3:CmsImage1:> .
@prefix ns295: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage0:> .
@prefix ns296: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage1:> .
@prefix ns297: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage1:> .
@prefix ns298: <http://example.com/person4:CmsImage0:> .
@prefix ns299: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:> .
@prefix ns3: <http://example.com/collection0/> .
@prefix ns30: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage0:> .
@prefix ns300: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:> .
@prefix ns301: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage0:> .
@prefix ns302: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:> .
@prefix ns303: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:> .
@prefix ns304: <http://example.com/collection1/work7:> .
@prefix ns305: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage1:> .
@prefix ns306: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage0:> .
@prefix ns307: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage0:> .
@prefix ns308: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:> .
@prefix ns309: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:> .
@prefix ns31: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:> .
@prefix ns310: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage1:> .
@prefix ns311: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage1:> .
@prefix ns312: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage1:> .
@prefix ns313: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:> .
@prefix ns314: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:> .
@prefix ns315: <http://example.com/collection1:> .
@prefix ns316: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage0:> .
@prefix ns317: <http://example.com/collection0/work1:CmsImage0:> .
@prefix ns318: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage1:> .
@prefix ns319: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage0:> .
@prefix ns32: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:> .
@prefix ns320: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:> .
@prefix ns321: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:> .
@prefix ns322: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:> .
@prefix ns323: <http://example.com/person3:> .
@prefix ns324: <http://example.com/organization3:CmsImage1:> .
@prefix ns325: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage1:> .
@prefix ns326: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:> .
@prefix ns327: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage1:> .
@prefix ns328: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage0:> .
@prefix ns329: <http://example.com/collection1/work4:> .
@prefix ns33: <http://example.com/collection1/work7:CmsImage1:> .
@prefix ns330: <http://example.com/collection0/work1:CmsImage1:> .
@prefix ns331: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:> .
@prefix ns332: <http://example.com/collection0/work2:CmsImage1:> .
@prefix ns333: <http://example.com/collection1/work5:CmsImage0:> .
@prefix ns334: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:> .
@prefix ns335: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:> .
@prefix ns336: <http://example.com/freestandingwork9:CmsImage1:> .
@prefix ns337: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage0:> .
@prefix ns338: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage0:> .
@prefix ns339: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage0:> .
@prefix ns34: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage1:> .
@prefix ns340: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage1:> .
@prefix ns341: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:> .
@prefix ns342: <http://example.com/collection0/work3:> .
@prefix ns343: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage0:> .
@prefix ns344: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:> .
@prefix ns345: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage1:> .
@prefix ns346: <http://example.com/organization2:CmsImage0:> .
@prefix ns347: <http://example.com/organization3:CmsImage0:> .
@prefix ns348: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:> .
@prefix ns349: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:> .
@prefix ns35: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage1:> .
@prefix ns350: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage0:> .
@prefix ns351: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage1:> .
@prefix ns352: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:> .
@prefix ns353: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:> .
@prefix ns354: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage0:> .
@prefix ns355: <http://example.com/organization1:> .
@prefix ns356: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:> .
@prefix ns357: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage1:> .
@prefix ns358: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage1:> .
@prefix ns359: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage0:> .
@prefix ns36: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage0:> .
@prefix ns360: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage0:> .
@prefix ns361: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:> .
@prefix ns362: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage1:> .
@prefix ns363: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:> .
@prefix ns364: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage1:> .
@prefix ns365: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:> .
@prefix ns366: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:> .
@prefix ns367: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:> .
@prefix ns368: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:> .
@prefix ns369: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:> .
@prefix ns37: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage0:> .
@prefix ns370: <http://example.com/freestandingwork11:CmsImage1:> .
@prefix ns371: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:> .
@prefix ns372: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:> .
@prefix ns373: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:> .
@prefix ns374: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:> .
@prefix ns375: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage0:> .
@prefix ns376: <http://example.com/organization3:> .
@prefix ns377: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:> .
@prefix ns378: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:> .
@prefix ns379: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage0:> .
@prefix ns38: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:> .
@prefix ns380: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage0:> .
@prefix ns381: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:> .
@prefix ns382: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage0:> .
@prefix ns383: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:> .
@prefix ns384: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:> .
@prefix ns385: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:> .
@prefix ns386: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage0:> .
@prefix ns387: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:> .
@prefix ns388: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage1:> .
@prefix ns389: <http://example.com/organization1:CmsImage0:> .
@prefix ns39: <http://example.com/organization4:CmsImage0:> .
@prefix ns390: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:> .
@prefix ns391: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage0:> .
@prefix ns392: <http://example.com/freestandingwork10:> .
@prefix ns393: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:> .
@prefix ns394: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:> .
@prefix ns395: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:> .
@prefix ns396: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:> .
@prefix ns397: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:> .
@prefix ns398: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:> .
@prefix ns399: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:> .
@prefix ns4: <http://example.com/organization4:CmsImage1:> .
@prefix ns40: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage1:> .
@prefix ns400: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage0:> .
@prefix ns401: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:> .
@prefix ns402: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:> .
@prefix ns403: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:> .
@prefix ns404: <urn:paradicms_etl:pipeline:synthetic_data:> .
@prefix ns41: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage1:> .
@prefix ns42: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage1:> .
@prefix ns43: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage1:> .
@prefix ns44: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage0:> .
@prefix ns45: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage1:> .
@prefix ns46: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage0:> .
@prefix ns47: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:> .
@prefix ns48: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage0:> .
@prefix ns49: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage0:> .
@prefix ns5: <http://example.com/organization0:> .
@prefix ns50: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage0:> .
@prefix ns51: <http://example.com/collection1/work4:CmsImage0:> .
@prefix ns52: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage1:> .
@prefix ns53: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage0:> .
@prefix ns54: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage0:> .
@prefix ns55: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage0:> .
@prefix ns56: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage0:> .
@prefix ns57: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage0:> .
@prefix ns58: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage1:> .
@prefix ns59: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:> .
@prefix ns6: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage1:> .
@prefix ns60: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:> .
@prefix ns61: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage1:> .
@prefix ns62: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage1:> .
@prefix ns63: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage0:> .
@prefix ns64: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:> .
@prefix ns65: <http://example.com/> .
@prefix ns66: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage1:> .
@prefix ns67: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:> .
@prefix ns68: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage0:> .
@prefix ns69: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage0:> .
@prefix ns7: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage0:> .
@prefix ns70: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:> .
@prefix ns71: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage1:> .
@prefix ns72: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage0:> .
@prefix ns73: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage1:> .
@prefix ns74: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage1:> .
@prefix ns75: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:> .
@prefix ns76: <http://example.com/organization1:CmsImage1:> .
@prefix ns77: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage1:> .
@prefix ns78: <http://example.com/freestandingwork11:CmsImage0:> .
@prefix ns79: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage0:> .
@prefix ns8: <http://example.com/person4:CmsImage1:> .
@prefix ns80: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage1:> .
@prefix ns81: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:> .
@prefix ns82: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage1:> .
@prefix ns83: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage0:> .
@prefix ns84: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:> .
@prefix ns85: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage0:> .
@prefix ns86: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:> .
@prefix ns87: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage1:> .
@prefix ns88: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage0:> .
@prefix ns89: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage1:> .
@prefix ns9: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage0:> .
@prefix ns90: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage0:> .
@prefix ns91: <http://example.com/collection0/work3:CmsImage0:> .
@prefix ns92: <http://example.com/collection1/> .
@prefix ns93: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage1:> .
@prefix ns94: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage0:> .
@prefix ns95: <http://example.com/person0:> .
@prefix ns96: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage0:> .
@prefix ns97: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage0:> .
@prefix ns98: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:> .
@prefix ns99: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage0:> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix vra: <http://purl.org/vra/> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ns1:34 {
    ns1:34 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 4" ;
        skos:prefLabel "CmsConcept 34" .
}

ns2:Thumbnail600x600 {
    ns282:CmsImage1 foaf:thumbnail ns2:Thumbnail600x600 .

    ns2:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns282:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:4 .
}

ns3:work0Creation {
    ns3:work0Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:organization2,
            ns65:organization3 ;
        dcterms:date _:Nb10f91d590af43a790e9530b31ee8b23 ;
        dcterms:description _:N62501d60484d41a78ed357ee0f7cbb12 ;
        dcterms:spatial ns3:work0Location ;
        dcterms:title "CmsCollection0CmsWork0 creation" ;
        cms:work ns3:work0 .

    _:N62501d60484d41a78ed357ee0f7cbb12 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nb10f91d590af43a790e9530b31ee8b23 a cms:DateTimeDescription ;
        time:day "---01"^^xsd:gDay ;
        time:month "--01"^^xsd:gMonth ;
        time:year "2022"^^xsd:gYear .
}

ns4:Thumbnail200x200 {
    ns279:CmsImage1 foaf:thumbnail ns4:Thumbnail200x200 .

    ns4:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:organization4 .
}

ns5:CmsImage0 {
    ns5:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:organization0 .
}

ns6:Thumbnail800x800 {
    ns241:CmsImage1 foaf:thumbnail ns6:Thumbnail800x800 .

    ns6:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns241:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:62 .
}

ns7:Thumbnail800x800 {
    ns281:CmsImage0 foaf:thumbnail ns7:Thumbnail800x800 .

    ns7:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns281:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:30 .
}

ns8:Thumbnail400x400 {
    ns209:CmsImage1 foaf:thumbnail ns8:Thumbnail400x400 .

    ns8:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns209:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:person4 .
}

ns9:Thumbnail800x800 {
    ns363:CmsImage0 foaf:thumbnail ns9:Thumbnail800x800 .

    ns9:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns363:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:42 .
}

ns10:CmsImage1 {
    ns10:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:79 .
}

ns11:CmsImage1 {
    ns11:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:person1 .
}

ns12:Thumbnail600x600 {
    ns261:CmsImage1 foaf:thumbnail ns12:Thumbnail600x600 .

    ns12:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:3 .
}

ns13:Thumbnail400x400 {
    ns224:CmsImage1 foaf:thumbnail ns13:Thumbnail400x400 .

    ns13:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns224:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:89 .
}

ns14:Thumbnail600x600 {
    ns394:CmsImage0 foaf:thumbnail ns14:Thumbnail600x600 .

    ns14:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:91 .
}

ns15:Thumbnail800x800 {
    ns300:CmsImage1 foaf:thumbnail ns15:Thumbnail800x800 .

    ns15:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:22 .
}

ns9:Thumbnail200x200 {
    ns9:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns363:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:42 .

    ns363:CmsImage0 foaf:thumbnail ns9:Thumbnail200x200 .
}

ns16:Thumbnail800x800 {
    ns115:CmsImage0 foaf:thumbnail ns16:Thumbnail800x800 .

    ns16:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns115:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns3:work0 .
}

ns17:CmsImage1 {
    ns17:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:15 .
}

ns1:62 {
    ns1:62 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 2" ;
        skos:prefLabel "CmsConcept 62" .
}

ns18:Thumbnail200x200 {
    ns115:CmsImage1 foaf:thumbnail ns18:Thumbnail200x200 .

    ns18:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns115:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns3:work0 .
}

ns1:42 {
    ns1:42 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 2" ;
        skos:prefLabel "CmsConcept 42" .
}

ns19:Thumbnail600x600 {
    ns303:CmsImage1 foaf:thumbnail ns19:Thumbnail600x600 .

    ns19:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns303:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:69 .
}

ns20:Thumbnail400x400 {
    ns64:CmsImage0 foaf:thumbnail ns20:Thumbnail400x400 .

    ns20:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns64:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:54 .
}

ns21:Thumbnail600x600 {
    ns258:CmsImage0 foaf:thumbnail ns21:Thumbnail600x600 .

    ns21:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns258:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:12 .
}

ns22:Thumbnail200x200 {
    ns276:CmsImage0 foaf:thumbnail ns22:Thumbnail200x200 .

    ns22:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:16 .
}

ns23:Thumbnail400x400 {
    ns11:CmsImage0 foaf:thumbnail ns23:Thumbnail400x400 .

    ns23:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns11:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:person1 .
}

ns24:Thumbnail200x200 {
    ns166:CmsImage1 foaf:thumbnail ns24:Thumbnail200x200 .

    ns24:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns166:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:52 .
}

ns25:Thumbnail800x800 {
    ns299:CmsImage1 foaf:thumbnail ns25:Thumbnail800x800 .

    ns25:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns299:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:32 .
}

ns26:Thumbnail400x400 {
    ns356:CmsImage0 foaf:thumbnail ns26:Thumbnail400x400 .

    ns26:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:50 .
}

ns27:Thumbnail200x200 {
    ns393:CmsImage0 foaf:thumbnail ns27:Thumbnail200x200 .

    ns27:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:26 .
}

ns28:Thumbnail600x600 {
    ns392:CmsImage0 foaf:thumbnail ns28:Thumbnail600x600 .

    ns28:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:freestandingwork10 .
}

ns29:Thumbnail400x400 {
    ns399:CmsImage0 foaf:thumbnail ns29:Thumbnail400x400 .

    ns29:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:109 .
}

ns30:Thumbnail800x800 {
    ns81:CmsImage0 foaf:thumbnail ns30:Thumbnail800x800 .

    ns30:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:34 .
}

ns31:CmsImage0 {
    ns31:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:67 .
}

ns32:CmsImage0 {
    ns32:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:31 .
}

ns33:Thumbnail600x600 {
    ns304:CmsImage1 foaf:thumbnail ns33:Thumbnail600x600 .

    ns33:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns304:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns92:work7 .
}

ns34:Thumbnail400x400 {
    ns398:CmsImage1 foaf:thumbnail ns34:Thumbnail400x400 .

    ns34:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:21 .
}

ns35:Thumbnail400x400 {
    ns381:CmsImage1 foaf:thumbnail ns35:Thumbnail400x400 .

    ns35:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:92 .
}

ns36:Thumbnail600x600 {
    ns149:CmsImage0 foaf:thumbnail ns36:Thumbnail600x600 .

    ns36:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns149:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:33 .
}

ns37:Thumbnail600x600 {
    ns60:CmsImage0 foaf:thumbnail ns37:Thumbnail600x600 .

    ns37:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns60:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:82 .
}

ns38:CmsImage0 {
    ns38:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:77 .
}

ns39:Thumbnail400x400 {
    ns279:CmsImage0 foaf:thumbnail ns39:Thumbnail400x400 .

    ns39:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:organization4 .
}

ns40:Thumbnail200x200 {
    ns107:CmsImage1 foaf:thumbnail ns40:Thumbnail200x200 .

    ns40:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns107:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:36 .
}

ns41:Thumbnail800x800 {
    ns378:CmsImage1 foaf:thumbnail ns41:Thumbnail800x800 .

    ns41:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:66 .
}

ns42:Thumbnail600x600 {
    ns204:CmsImage1 foaf:thumbnail ns42:Thumbnail600x600 .

    ns42:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:65 .
}

ns8:Thumbnail600x600 {
    ns8:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns209:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:person4 .

    ns209:CmsImage1 foaf:thumbnail ns8:Thumbnail600x600 .
}

ns3:work1Opening {
    ns3:work1Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-31"^^xsd:date ;
        dcterms:spatial _:N3518a5aa06c14329a6e2d34033e9d5fb ;
        dcterms:title "CmsCollection0CmsWork1 opening" ;
        cms:work ns3:work1 .

    _:N3518a5aa06c14329a6e2d34033e9d5fb a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns43:Thumbnail400x400 {
    ns186:CmsImage1 foaf:thumbnail ns43:Thumbnail400x400 .

    ns43:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:7 .
}

ns44:Thumbnail600x600 {
    ns44:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns31:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:67 .

    ns31:CmsImage0 foaf:thumbnail ns44:Thumbnail600x600 .
}

ns1:32 {
    ns1:32 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 2" ;
        skos:prefLabel "CmsConcept 32" .
}

ns45:Thumbnail200x200 {
    ns64:CmsImage1 foaf:thumbnail ns45:Thumbnail200x200 .

    ns45:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns64:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:54 .
}

ns46:Thumbnail200x200 {
    ns17:CmsImage0 foaf:thumbnail ns46:Thumbnail200x200 .

    ns46:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns17:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:15 .
}

ns47:CmsImage0 {
    ns47:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:27 .
}

ns48:Thumbnail600x600 {
    ns303:CmsImage0 foaf:thumbnail ns48:Thumbnail600x600 .

    ns48:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns303:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:69 .
}

ns49:Thumbnail600x600 {
    ns159:CmsImage0 foaf:thumbnail ns49:Thumbnail600x600 .

    ns49:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns159:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:5 .
}

ns50:Thumbnail800x800 {
    ns321:CmsImage0 foaf:thumbnail ns50:Thumbnail800x800 .

    ns50:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns321:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:47 .
}

ns39:Thumbnail200x200 {
    ns39:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:organization4 .

    ns279:CmsImage0 foaf:thumbnail ns39:Thumbnail200x200 .
}

ns51:Thumbnail600x600 {
    ns329:CmsImage0 foaf:thumbnail ns51:Thumbnail600x600 .

    ns51:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns92:work4 .
}

ns52:Thumbnail400x400 {
    ns302:CmsImage1 foaf:thumbnail ns52:Thumbnail400x400 .

    ns52:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns302:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:38 .
}

ns53:Thumbnail400x400 {
    ns238:CmsImage0 foaf:thumbnail ns53:Thumbnail400x400 .

    ns53:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:74 .
}

ns54:Thumbnail200x200 {
    ns116:CmsImage0 foaf:thumbnail ns54:Thumbnail200x200 .

    ns54:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns116:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:63 .
}

ns55:Thumbnail400x400 {
    ns353:CmsImage0 foaf:thumbnail ns55:Thumbnail400x400 .

    ns55:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns353:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:83 .
}

ns40:Thumbnail600x600 {
    ns40:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns107:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:36 .

    ns107:CmsImage1 foaf:thumbnail ns40:Thumbnail600x600 .
}

ns56:Thumbnail200x200 {
    ns107:CmsImage0 foaf:thumbnail ns56:Thumbnail200x200 .

    ns56:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns107:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:36 .
}

ns57:Thumbnail400x400 {
    ns334:CmsImage0 foaf:thumbnail ns57:Thumbnail400x400 .

    ns57:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:71 .
}

ns1:69 {
    ns1:69 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 9" ;
        skos:prefLabel "CmsConcept 69" .
}

vra:technique {
    vra:technique a cms:Property ;
        rdfs:label "Technique" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> .
}

ns58:Thumbnail200x200 {
    ns395:CmsImage1 foaf:thumbnail ns58:Thumbnail200x200 .

    ns58:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:98 .
}

ns59:CmsImage0 {
    ns59:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:9 .
}

ns60:CmsImage0 {
    ns60:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:82 .
}

ns61:Thumbnail200x200 {
    ns59:CmsImage1 foaf:thumbnail ns61:Thumbnail200x200 .

    ns61:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns59:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:9 .
}

ns62:Thumbnail200x200 {
    ns84:CmsImage1 foaf:thumbnail ns62:Thumbnail200x200 .

    ns62:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:13 .
}

ns63:Thumbnail600x600 {
    ns67:CmsImage0 foaf:thumbnail ns63:Thumbnail600x600 .

    ns63:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns67:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:94 .
}

ns51:Thumbnail800x800 {
    ns51:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns92:work4 .

    ns329:CmsImage0 foaf:thumbnail ns51:Thumbnail800x800 .
}

ns64:CmsImage0 {
    ns64:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:54 .
}

ns65:person3 {
    ns65:person3 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "3, CmsPerson" ;
        foaf:familyName "3" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 3" .
}

ns66:Thumbnail600x600 {
    ns81:CmsImage1 foaf:thumbnail ns66:Thumbnail600x600 .

    ns66:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:34 .
}

ns67:CmsImage0 {
    ns67:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:94 .
}

ns63:Thumbnail400x400 {
    ns63:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns67:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:94 .

    ns67:CmsImage0 foaf:thumbnail ns63:Thumbnail400x400 .
}

ns68:Thumbnail400x400 {
    ns199:CmsImage0 foaf:thumbnail ns68:Thumbnail400x400 .

    ns68:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns199:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:55 .
}

ns69:Thumbnail800x800 {
    ns401:CmsImage0 foaf:thumbnail ns69:Thumbnail800x800 .

    ns69:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:28 .
}

ns70:CmsImage1 {
    ns70:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:14 .
}

ns71:Thumbnail600x600 {
    ns326:CmsImage1 foaf:thumbnail ns71:Thumbnail600x600 .

    ns71:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:104 .
}

ns72:Thumbnail400x400 {
    ns186:CmsImage0 foaf:thumbnail ns72:Thumbnail400x400 .

    ns72:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:7 .
}

ns1:2 {
    ns1:2 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 2" ;
        skos:prefLabel "CmsConcept 2" .
}

ns73:Thumbnail400x400 {
    ns377:CmsImage1 foaf:thumbnail ns73:Thumbnail400x400 .

    ns73:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:64 .
}

ns74:Thumbnail600x600 {
    ns237:CmsImage1 foaf:thumbnail ns74:Thumbnail600x600 .

    ns74:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns237:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:75 .
}

ns75:CmsImage0 {
    ns75:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:25 .
}

ns76:Thumbnail600x600 {
    ns355:CmsImage1 foaf:thumbnail ns76:Thumbnail600x600 .

    ns76:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:organization1 .
}

_:Ncbb50137935e457a90ae72ef766b1c89 {
    _:Ncbb50137935e457a90ae72ef766b1c89 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:Nbcd5efda845f46cea3df0d08454aa2bb ;
        dcterms:spatial _:N3dca3a4cff2343808a46b98fcc107f59 ;
        dcterms:title "CmsCollection1CmsWork6 closing" ;
        cms:work ns92:work6 .

    _:N3dca3a4cff2343808a46b98fcc107f59 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nbcd5efda845f46cea3df0d08454aa2bb a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns3:work2 {
    ns3:work2 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork2 alternative title 0",
            "CmsCollection0CmsWork2 alternative title 1" ;
        dcterms:contributor _:N65a62f13b07a4109a3ba6dca5877789c,
            _:N825c0b9c622442f09541f6058a443475 ;
        dcterms:creator ns65:organization4,
            ns65:person0 ;
        dcterms:description _:N717313eb610f4408a599409816b6f6a0 ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 rights holder" ;
        dcterms:source ns1:62,
            ns1:63 ;
        dcterms:spatial ns3:work2Location ;
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
        cms:collection ns65:collection0 ;
        foaf:page <http://example.com/work/2> .

    _:N65a62f13b07a4109a3ba6dca5877789c a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 0" .

    _:N717313eb610f4408a599409816b6f6a0 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N825c0b9c622442f09541f6058a443475 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 1" .
}

ns20:Thumbnail800x800 {
    ns20:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns64:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:54 .

    ns64:CmsImage0 foaf:thumbnail ns20:Thumbnail800x800 .
}

ns77:Thumbnail800x800 {
    ns393:CmsImage1 foaf:thumbnail ns77:Thumbnail800x800 .

    ns77:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:26 .
}

ns78:Thumbnail400x400 {
    ns271:CmsImage0 foaf:thumbnail ns78:Thumbnail400x400 .

    ns78:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns271:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:freestandingwork11 .
}

ns79:Thumbnail200x200 {
    ns335:CmsImage0 foaf:thumbnail ns79:Thumbnail200x200 .

    ns79:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:39 .
}

ns80:Thumbnail400x400 {
    ns344:CmsImage1 foaf:thumbnail ns80:Thumbnail400x400 .

    ns80:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns344:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:70 .
}

ns81:CmsImage0 {
    ns81:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:34 .
}

ns65:freestandingwork8 {
    ns65:freestandingwork8 a cms:Work ;
        dcterms:alternative "FreestandingWork8 alternative title 0",
            "FreestandingWork8 alternative title 1" ;
        dcterms:contributor _:Nbee69d085ded4998a0d987f6688a1ec2,
            _:Nf29d3f22b7894dbf8a0a2ea9bdec39e0 ;
        dcterms:creator ns65:organization0,
            ns65:organization1 ;
        dcterms:description _:Na357a585ddfd4f919cf197eac0ec6baa ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 rights holder" ;
        dcterms:source ns1:68,
            ns1:69 ;
        dcterms:spatial ns65:freestandingwork8Location ;
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
        foaf:page <http://example.com/work/8> .

    _:Na357a585ddfd4f919cf197eac0ec6baa a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nbee69d085ded4998a0d987f6688a1ec2 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 1" .

    _:Nf29d3f22b7894dbf8a0a2ea9bdec39e0 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 0" .
}

ns82:Thumbnail400x400 {
    ns98:CmsImage1 foaf:thumbnail ns82:Thumbnail400x400 .

    ns82:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns98:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:103 .
}

ns1:106 {
    ns1:106 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 6" ;
        skos:prefLabel "CmsConcept 106" .
}

ns83:Thumbnail400x400 {
    ns98:CmsImage0 foaf:thumbnail ns83:Thumbnail400x400 .

    ns83:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns98:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:103 .
}

ns84:CmsImage1 {
    ns84:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:13 .
}

ns1:86 {
    ns1:86 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 6" ;
        skos:prefLabel "CmsConcept 86" .
}

ns85:Thumbnail800x800 {
    ns86:CmsImage0 foaf:thumbnail ns85:Thumbnail800x800 .

    ns85:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns86:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:102 .
}

ns86:CmsImage1 {
    ns86:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:102 .
}

ns87:Thumbnail800x800 {
    ns257:CmsImage1 foaf:thumbnail ns87:Thumbnail800x800 .

    ns87:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:93 .
}

ns1:39 {
    ns1:39 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 9" ;
        skos:prefLabel "CmsConcept 39" .
}

ns88:Thumbnail200x200 {
    ns231:CmsImage0 foaf:thumbnail ns88:Thumbnail200x200 .

    ns88:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:18 .
}

ns89:Thumbnail600x600 {
    ns153:CmsImage1 foaf:thumbnail ns89:Thumbnail600x600 .

    ns89:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns153:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:44 .
}

ns21:Thumbnail800x800 {
    ns21:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns258:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:12 .

    ns258:CmsImage0 foaf:thumbnail ns21:Thumbnail800x800 .
}

ns90:Thumbnail400x400 {
    ns397:CmsImage0 foaf:thumbnail ns90:Thumbnail400x400 .

    ns90:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:59 .
}

ns91:Thumbnail400x400 {
    ns342:CmsImage0 foaf:thumbnail ns91:Thumbnail400x400 .

    ns91:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns3:work3 .
}

ns92:work6Creation {
    ns92:work6Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:person3,
            ns65:person4 ;
        dcterms:date _:N03de3306d9884c2eb15654a4a7e87518 ;
        dcterms:description _:Nbcd5efda845f46cea3df0d08454aa2bb ;
        dcterms:spatial ns92:work6Location ;
        dcterms:title "CmsCollection1CmsWork6 creation" ;
        cms:work ns92:work6 .

    _:N03de3306d9884c2eb15654a4a7e87518 a cms:DateTimeDescription ;
        time:day "---26"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:Nbcd5efda845f46cea3df0d08454aa2bb a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns93:Thumbnail600x600 {
    ns394:CmsImage1 foaf:thumbnail ns93:Thumbnail600x600 .

    ns93:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:91 .
}

ns62:Thumbnail800x800 {
    ns62:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:13 .

    ns84:CmsImage1 foaf:thumbnail ns62:Thumbnail800x800 .
}

ns94:Thumbnail800x800 {
    ns264:CmsImage0 foaf:thumbnail ns94:Thumbnail800x800 .

    ns94:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns264:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:78 .
}

ns95:CmsImage0 {
    ns95:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:person0 .
}

ns62:Thumbnail400x400 {
    ns62:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:13 .

    ns84:CmsImage1 foaf:thumbnail ns62:Thumbnail400x400 .
}

ns96:Thumbnail400x400 {
    ns204:CmsImage0 foaf:thumbnail ns96:Thumbnail400x400 .

    ns96:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:65 .
}

ns50:Thumbnail200x200 {
    ns50:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns321:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:47 .

    ns321:CmsImage0 foaf:thumbnail ns50:Thumbnail200x200 .
}

ns97:Thumbnail400x400 {
    ns278:CmsImage0 foaf:thumbnail ns97:Thumbnail400x400 .

    ns97:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:6 .
}

ns13:Thumbnail800x800 {
    ns13:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns224:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:89 .

    ns224:CmsImage1 foaf:thumbnail ns13:Thumbnail800x800 .
}

ns98:CmsImage0 {
    ns98:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:103 .
}

ns99:Thumbnail400x400 {
    ns385:CmsImage0 foaf:thumbnail ns99:Thumbnail400x400 .

    ns99:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:97 .
}

ns100:CmsImage1 {
    ns100:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:73 .
}

ns101:Thumbnail400x400 {
    ns179:CmsImage0 foaf:thumbnail ns101:Thumbnail400x400 .

    ns101:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns3:work2 .
}

ns102:Thumbnail200x200 {
    ns341:CmsImage1 foaf:thumbnail ns102:Thumbnail200x200 .

    ns102:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:37 .
}

ns103:Thumbnail400x400 {
    ns365:CmsImage0 foaf:thumbnail ns103:Thumbnail400x400 .

    ns103:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:105 .
}

ns104:Thumbnail600x600 {
    ns231:CmsImage1 foaf:thumbnail ns104:Thumbnail600x600 .

    ns104:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:18 .
}

ns65:freestandingwork10Opening {
    ns65:freestandingwork10Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-22"^^xsd:date ;
        dcterms:description _:Nb493bacb65c346c89af788f0e800cfae ;
        dcterms:spatial _:N243e12aaf3724127af963a3b898d5a56 ;
        dcterms:title "FreestandingWork10 opening" ;
        cms:work ns65:freestandingwork10 .

    _:N243e12aaf3724127af963a3b898d5a56 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nb493bacb65c346c89af788f0e800cfae a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns105:Thumbnail400x400 {
    ns117:CmsImage1 foaf:thumbnail ns105:Thumbnail400x400 .

    ns105:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns92:work5 .
}

ns106:Thumbnail200x200 {
    ns135:CmsImage1 foaf:thumbnail ns106:Thumbnail200x200 .

    ns106:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns135:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:freestandingwork8 .
}

ns85:Thumbnail400x400 {
    ns85:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns86:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:102 .

    ns86:CmsImage0 foaf:thumbnail ns85:Thumbnail400x400 .
}

ns92:work4 {
    ns92:work4 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork4 alternative title 0",
            "CmsCollection1CmsWork4 alternative title 1" ;
        dcterms:contributor _:Nbbe02e469d7d4713845bfc27d277b38a,
            _:Nee878e815cb9414097b896f556fc6ff1 ;
        dcterms:creator ns65:person1,
            ns65:person2 ;
        dcterms:description _:N7417b908102e4da6a9ca52076ee5be7a ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 rights holder" ;
        dcterms:source ns1:64,
            ns1:65 ;
        dcterms:spatial ns92:work4Location ;
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
        cms:collection ns65:collection1 ;
        foaf:page <http://example.com/work/4> .

    _:N7417b908102e4da6a9ca52076ee5be7a a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nbbe02e469d7d4713845bfc27d277b38a a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 0" .

    _:Nee878e815cb9414097b896f556fc6ff1 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 1" .
}

ns1:65 {
    ns1:65 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 5" ;
        skos:prefLabel "CmsConcept 65" .
}

ns107:CmsImage1 {
    ns107:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:36 .
}

ns2:Thumbnail800x800 {
    ns2:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns282:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:4 .

    ns282:CmsImage1 foaf:thumbnail ns2:Thumbnail800x800 .
}

ns108:Thumbnail800x800 {
    ns372:CmsImage0 foaf:thumbnail ns108:Thumbnail800x800 .

    ns108:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:1 .
}

ns97:Thumbnail200x200 {
    ns97:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:6 .

    ns278:CmsImage0 foaf:thumbnail ns97:Thumbnail200x200 .
}

ns109:CmsImage0 {
    ns109:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:108 .
}

ns110:Thumbnail800x800 {
    ns361:CmsImage0 foaf:thumbnail ns110:Thumbnail800x800 .

    ns110:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns361:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:68 .
}

ns111:CmsImage0 {
    ns111:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:23 .
}

ns112:Thumbnail400x400 {
    ns288:CmsImage0 foaf:thumbnail ns112:Thumbnail400x400 .

    ns112:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:90 .
}

ns113:Thumbnail400x400 {
    ns401:CmsImage1 foaf:thumbnail ns113:Thumbnail400x400 .

    ns113:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:28 .
}

ns114:Thumbnail200x200 {
    ns390:CmsImage0 foaf:thumbnail ns114:Thumbnail200x200 .

    ns114:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:81 .
}

ns106:Thumbnail800x800 {
    ns106:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns135:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:freestandingwork8 .

    ns135:CmsImage1 foaf:thumbnail ns106:Thumbnail800x800 .
}

ns22:Thumbnail600x600 {
    ns22:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:16 .

    ns276:CmsImage0 foaf:thumbnail ns22:Thumbnail600x600 .
}

ns66:Thumbnail400x400 {
    ns66:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:34 .

    ns81:CmsImage1 foaf:thumbnail ns66:Thumbnail400x400 .
}

ns37:Thumbnail800x800 {
    ns37:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns60:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:82 .

    ns60:CmsImage0 foaf:thumbnail ns37:Thumbnail800x800 .
}

ns69:Thumbnail600x600 {
    ns69:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:28 .

    ns401:CmsImage0 foaf:thumbnail ns69:Thumbnail600x600 .
}

ns115:CmsImage0 {
    ns115:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns3:work0 .
}

ns116:CmsImage0 {
    ns116:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:63 .
}

ns4:Thumbnail400x400 {
    ns4:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:organization4 .

    ns279:CmsImage1 foaf:thumbnail ns4:Thumbnail400x400 .
}

ns117:CmsImage0 {
    ns117:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns92:work5 .
}

ns118:Thumbnail200x200 {
    ns403:CmsImage0 foaf:thumbnail ns118:Thumbnail200x200 .

    ns118:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:53 .
}

ns119:Thumbnail200x200 {
    ns315:CmsImage1 foaf:thumbnail ns119:Thumbnail200x200 .

    ns119:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:collection1 .
}

ns120:Thumbnail800x800 {
    ns384:CmsImage1 foaf:thumbnail ns120:Thumbnail800x800 .

    ns120:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:60 .
}

ns1:79 {
    ns1:79 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 9" ;
        skos:prefLabel "CmsConcept 79" .
}

ns121:CmsImage0 {
    ns121:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:80 .
}

ns122:Thumbnail200x200 {
    ns149:CmsImage1 foaf:thumbnail ns122:Thumbnail200x200 .

    ns122:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns149:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:33 .
}

ns93:Thumbnail200x200 {
    ns93:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:91 .

    ns394:CmsImage1 foaf:thumbnail ns93:Thumbnail200x200 .
}

ns123:CmsImage0 {
    ns123:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:person2 .
}

ns124:Thumbnail400x400 {
    ns323:CmsImage0 foaf:thumbnail ns124:Thumbnail400x400 .

    ns124:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:person3 .
}

ns125:Thumbnail800x800 {
    ns135:CmsImage0 foaf:thumbnail ns125:Thumbnail800x800 .

    ns125:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns135:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:freestandingwork8 .
}

ns126:CmsImage1 {
    ns126:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:2 .
}

ns1:89 {
    ns1:89 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 9" ;
        skos:prefLabel "CmsConcept 89" .
}

ns127:Thumbnail600x600 {
    ns220:CmsImage0 foaf:thumbnail ns127:Thumbnail600x600 .

    ns127:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:86 .
}

ns128:CmsImage0 {
    ns128:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:106 .
}

ns129:Thumbnail800x800 {
    ns352:CmsImage0 foaf:thumbnail ns129:Thumbnail800x800 .

    ns129:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:10 .
}

ns130:Thumbnail400x400 {
    ns288:CmsImage1 foaf:thumbnail ns130:Thumbnail400x400 .

    ns130:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:90 .
}

ns131:Thumbnail800x800 {
    ns131:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns100:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:73 .

    ns100:CmsImage1 foaf:thumbnail ns131:Thumbnail800x800 .
}

ns132:Thumbnail200x200 {
    ns264:CmsImage1 foaf:thumbnail ns132:Thumbnail200x200 .

    ns132:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns264:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:78 .
}

ns12:Thumbnail200x200 {
    ns12:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:3 .

    ns261:CmsImage1 foaf:thumbnail ns12:Thumbnail200x200 .
}

ns133:Thumbnail400x400 {
    ns342:CmsImage1 foaf:thumbnail ns133:Thumbnail400x400 .

    ns133:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns3:work3 .
}

ns134:Thumbnail600x600 {
    ns384:CmsImage0 foaf:thumbnail ns134:Thumbnail600x600 .

    ns134:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:60 .
}

ns105:Thumbnail200x200 {
    ns105:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns92:work5 .

    ns117:CmsImage1 foaf:thumbnail ns105:Thumbnail200x200 .
}

ns135:CmsImage1 {
    ns135:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:freestandingwork8 .
}

ns136:Thumbnail200x200 {
    ns136:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:person2 .

    ns123:CmsImage0 foaf:thumbnail ns136:Thumbnail200x200 .
}

ns3:work1 {
    ns3:work1 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork1 alternative title 0",
            "CmsCollection0CmsWork1 alternative title 1" ;
        dcterms:contributor _:N815cf5b7181349c69345e01b534b2ded,
            _:Nc3f0b0c19f3c41d8b46ffd71c37aa205 ;
        dcterms:creator ns65:organization3,
            ns65:organization4 ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 rights holder" ;
        dcterms:source ns1:61,
            ns1:62 ;
        dcterms:spatial ns3:work1Location ;
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
        cms:collection ns65:collection0 .

    _:N815cf5b7181349c69345e01b534b2ded a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 1" .

    _:Nc3f0b0c19f3c41d8b46ffd71c37aa205 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 0" .
}

ns137:Thumbnail800x800 {
    ns322:CmsImage1 foaf:thumbnail ns137:Thumbnail800x800 .

    ns137:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns322:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:8 .
}

ns138:Thumbnail600x600 {
    ns308:CmsImage0 foaf:thumbnail ns138:Thumbnail600x600 .

    ns138:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:40 .
}

ns85:Thumbnail600x600 {
    ns85:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns86:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:102 .

    ns86:CmsImage0 foaf:thumbnail ns85:Thumbnail600x600 .
}

ns1:17 {
    ns1:17 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 7" ;
        skos:prefLabel "CmsConcept 17" .
}

ns139:Thumbnail800x800 {
    ns194:CmsImage0 foaf:thumbnail ns139:Thumbnail800x800 .

    ns139:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:17 .
}

ns51:Thumbnail200x200 {
    ns51:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns92:work4 .

    ns329:CmsImage0 foaf:thumbnail ns51:Thumbnail200x200 .
}

ns92:work6Location {
    ns92:work6Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns140:Thumbnail800x800 {
    ns334:CmsImage1 foaf:thumbnail ns140:Thumbnail800x800 .

    ns140:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:71 .
}

ns141:Thumbnail800x800 {
    ns202:CmsImage0 foaf:thumbnail ns141:Thumbnail800x800 .

    ns141:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns202:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:freestandingwork9 .
}

ns11:CmsImage0 {
    ns11:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:person1 .
}

ns142:CmsImage0 {
    ns142:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:20 .
}

ns1:13 {
    ns1:13 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 3" ;
        skos:prefLabel "CmsConcept 13" .
}

ns143:CmsImage0 {
    ns143:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:49 .
}

ns130:Thumbnail200x200 {
    ns130:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:90 .

    ns288:CmsImage1 foaf:thumbnail ns130:Thumbnail200x200 .
}

ns144:Thumbnail200x200 {
    ns383:CmsImage1 foaf:thumbnail ns144:Thumbnail200x200 .

    ns144:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:35 .
}

ns140:Thumbnail600x600 {
    ns140:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:71 .

    ns334:CmsImage1 foaf:thumbnail ns140:Thumbnail600x600 .
}

ns54:Thumbnail600x600 {
    ns54:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns116:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:63 .

    ns116:CmsImage0 foaf:thumbnail ns54:Thumbnail600x600 .
}

ns145:CmsImage1 {
    ns145:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:88 .
}

ns146:Thumbnail200x200 {
    ns363:CmsImage1 foaf:thumbnail ns146:Thumbnail200x200 .

    ns146:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns363:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:42 .
}

ns147:Thumbnail400x400 {
    ns304:CmsImage0 foaf:thumbnail ns147:Thumbnail400x400 .

    ns147:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns304:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns92:work7 .
}

ns148:CmsImage1 {
    ns148:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:organization2 .
}

ns149:CmsImage0 {
    ns149:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:33 .
}

ns150:Thumbnail600x600 {
    ns282:CmsImage0 foaf:thumbnail ns150:Thumbnail600x600 .

    ns150:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns282:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:4 .
}

ns151:Thumbnail400x400 {
    ns32:CmsImage1 foaf:thumbnail ns151:Thumbnail400x400 .

    ns151:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns32:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:31 .
}

ns48:Thumbnail200x200 {
    ns48:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns303:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:69 .

    ns303:CmsImage0 foaf:thumbnail ns48:Thumbnail200x200 .
}

ns152:Thumbnail200x200 {
    ns368:CmsImage0 foaf:thumbnail ns152:Thumbnail200x200 .

    ns152:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns368:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:85 .
}

ns153:CmsImage1 {
    ns153:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:44 .
}

ns154:Thumbnail200x200 {
    ns188:CmsImage0 foaf:thumbnail ns154:Thumbnail200x200 .

    ns154:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:87 .
}

ns155:Thumbnail800x800 {
    ns95:CmsImage1 foaf:thumbnail ns155:Thumbnail800x800 .

    ns155:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns95:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:person0 .
}

ns156:Thumbnail400x400 {
    ns257:CmsImage0 foaf:thumbnail ns156:Thumbnail400x400 .

    ns156:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:93 .
}

ns157:Thumbnail200x200 {
    ns299:CmsImage0 foaf:thumbnail ns157:Thumbnail200x200 .

    ns157:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns299:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:32 .
}

ns158:CmsImage1 {
    ns158:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:24 .
}

ns151:Thumbnail600x600 {
    ns151:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns32:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:31 .

    ns32:CmsImage1 foaf:thumbnail ns151:Thumbnail600x600 .
}

ns10:CmsImage0 {
    ns10:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:79 .
}

ns159:CmsImage1 {
    ns159:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:5 .
}

ns160:Thumbnail200x200 {
    ns160:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns142:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:20 .

    ns142:CmsImage0 foaf:thumbnail ns160:Thumbnail200x200 .
}

ns161:Thumbnail800x800 {
    ns349:CmsImage1 foaf:thumbnail ns161:Thumbnail800x800 .

    ns161:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:56 .
}

ns154:Thumbnail400x400 {
    ns154:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:87 .

    ns188:CmsImage0 foaf:thumbnail ns154:Thumbnail400x400 .
}

ns162:CmsImage1 {
    ns162:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:58 .
}

ns163:Thumbnail800x800 {
    ns321:CmsImage1 foaf:thumbnail ns163:Thumbnail800x800 .

    ns163:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns321:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:47 .
}

ns164:Thumbnail200x200 {
    ns278:CmsImage1 foaf:thumbnail ns164:Thumbnail200x200 .

    ns164:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:6 .
}

ns165:Thumbnail200x200 {
    ns366:CmsImage0 foaf:thumbnail ns165:Thumbnail200x200 .

    ns165:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:96 .
}

_:N78a10a9c853744288da1eebdbbc8d2ba {
    _:N78a10a9c853744288da1eebdbbc8d2ba a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:Na357a585ddfd4f919cf197eac0ec6baa ;
        dcterms:spatial _:N44403130ef8d426babe9c07ffdf494ea ;
        dcterms:title "FreestandingWork8 closing" ;
        cms:work ns65:freestandingwork8 .

    _:N44403130ef8d426babe9c07ffdf494ea a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Na357a585ddfd4f919cf197eac0ec6baa a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns166:CmsImage0 {
    ns166:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:52 .
}

ns65:person4 {
    ns65:person4 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "4, CmsPerson" ;
        foaf:familyName "4" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 4" ;
        foaf:page ns65:person4page .
}

ns1:38 {
    ns1:38 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 8" ;
        skos:prefLabel "CmsConcept 38" .
}

ns167:CmsImage1 {
    ns167:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:51 .
}

ns36:Thumbnail200x200 {
    ns36:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns149:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:33 .

    ns149:CmsImage0 foaf:thumbnail ns36:Thumbnail200x200 .
}

ns168:CmsImage1 {
    ns168:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:48 .
}

ns116:CmsImage1 {
    ns116:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:63 .
}

ns155:Thumbnail200x200 {
    ns155:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns95:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:person0 .

    ns95:CmsImage1 foaf:thumbnail ns155:Thumbnail200x200 .
}

dcterms:source {
    dcterms:source a cms:Property ;
        rdfs:label "Source" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> .
}

ns83:Thumbnail800x800 {
    ns83:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns98:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:103 .

    ns98:CmsImage0 foaf:thumbnail ns83:Thumbnail800x800 .
}

ns169:Thumbnail800x800 {
    ns374:CmsImage1 foaf:thumbnail ns169:Thumbnail800x800 .

    ns169:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:43 .
}

ns170:Thumbnail400x400 {
    ns170:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns116:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:63 .

    ns116:CmsImage1 foaf:thumbnail ns170:Thumbnail400x400 .
}

ns171:Thumbnail200x200 {
    ns47:CmsImage1 foaf:thumbnail ns171:Thumbnail200x200 .

    ns171:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns47:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:27 .
}

ns172:Thumbnail800x800 {
    ns230:CmsImage1 foaf:thumbnail ns172:Thumbnail800x800 .

    ns172:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns230:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:46 .
}

ns171:Thumbnail800x800 {
    ns171:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns47:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:27 .

    ns47:CmsImage1 foaf:thumbnail ns171:Thumbnail800x800 .
}

ns173:Thumbnail400x400 {
    ns241:CmsImage0 foaf:thumbnail ns173:Thumbnail400x400 .

    ns173:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns241:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:62 .
}

ns174:Thumbnail600x600 {
    ns174:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns11:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:person1 .

    ns11:CmsImage1 foaf:thumbnail ns174:Thumbnail600x600 .
}

ns58:Thumbnail400x400 {
    ns58:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:98 .

    ns395:CmsImage1 foaf:thumbnail ns58:Thumbnail400x400 .
}

ns129:Thumbnail400x400 {
    ns129:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:10 .

    ns352:CmsImage0 foaf:thumbnail ns129:Thumbnail400x400 .
}

ns175:Thumbnail800x800 {
    ns175:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:79 .

    ns10:CmsImage0 foaf:thumbnail ns175:Thumbnail800x800 .
}

ns176:Thumbnail400x400 {
    ns390:CmsImage1 foaf:thumbnail ns176:Thumbnail400x400 .

    ns176:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:81 .
}

ns177:Thumbnail600x600 {
    ns177:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns47:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:27 .

    ns47:CmsImage0 foaf:thumbnail ns177:Thumbnail600x600 .
}

ns178:Thumbnail600x600 {
    ns258:CmsImage1 foaf:thumbnail ns178:Thumbnail600x600 .

    ns178:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns258:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:12 .
}

ns179:CmsImage0 {
    ns179:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns3:work2 .
}

ns180:Thumbnail400x400 {
    ns180:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns148:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:organization2 .

    ns148:CmsImage1 foaf:thumbnail ns180:Thumbnail400x400 .
}

ns170:Thumbnail600x600 {
    ns170:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns116:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:63 .

    ns116:CmsImage1 foaf:thumbnail ns170:Thumbnail600x600 .
}

ns178:Thumbnail200x200 {
    ns178:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns258:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:12 .

    ns258:CmsImage1 foaf:thumbnail ns178:Thumbnail200x200 .
}

ns175:Thumbnail200x200 {
    ns175:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:79 .

    ns10:CmsImage0 foaf:thumbnail ns175:Thumbnail200x200 .
}

ns181:Thumbnail600x600 {
    ns181:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns32:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:31 .

    ns32:CmsImage0 foaf:thumbnail ns181:Thumbnail600x600 .
}

ns20:Thumbnail600x600 {
    ns20:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns64:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:54 .

    ns64:CmsImage0 foaf:thumbnail ns20:Thumbnail600x600 .
}

ns114:Thumbnail800x800 {
    ns114:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:81 .

    ns390:CmsImage0 foaf:thumbnail ns114:Thumbnail800x800 .
}

ns29:Thumbnail600x600 {
    ns29:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:109 .

    ns399:CmsImage0 foaf:thumbnail ns29:Thumbnail600x600 .
}

ns182:Thumbnail400x400 {
    ns194:CmsImage1 foaf:thumbnail ns182:Thumbnail400x400 .

    ns182:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:17 .
}

ns70:CmsImage0 {
    ns70:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:14 .
}

ns183:Thumbnail600x600 {
    ns326:CmsImage0 foaf:thumbnail ns183:Thumbnail600x600 .

    ns183:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:104 .
}

ns3:work1Creation {
    ns3:work1Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:organization3,
            ns65:organization4 ;
        dcterms:date _:N176bb509b9ea44a59736c98ce7eaeb6b ;
        dcterms:spatial ns3:work1Location ;
        dcterms:title "CmsCollection0CmsWork1 creation" ;
        cms:work ns3:work1 .

    _:N176bb509b9ea44a59736c98ce7eaeb6b a cms:DateTimeDescription ;
        time:day "---31"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns184:Thumbnail400x400 {
    ns399:CmsImage1 foaf:thumbnail ns184:Thumbnail400x400 .

    ns184:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:109 .
}

ns185:Thumbnail200x200 {
    ns75:CmsImage1 foaf:thumbnail ns185:Thumbnail200x200 .

    ns185:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns75:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:25 .
}

ns65:person0 {
    ns65:person0 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "0, CmsPerson" ;
        foaf:familyName "0" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 0" ;
        foaf:page ns65:person0page .
}

ns186:CmsImage0 {
    ns186:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:7 .
}

ns44:Thumbnail200x200 {
    ns44:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns31:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:67 .

    ns31:CmsImage0 foaf:thumbnail ns44:Thumbnail200x200 .
}

dcterms:type {
    dcterms:type a cms:Property ;
        rdfs:label "Type" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> .
}

ns187:Thumbnail800x800 {
    ns188:CmsImage1 foaf:thumbnail ns187:Thumbnail800x800 .

    ns187:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:87 .
}

ns174:Thumbnail200x200 {
    ns174:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns11:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:person1 .

    ns11:CmsImage1 foaf:thumbnail ns174:Thumbnail200x200 .
}

ns4:Thumbnail800x800 {
    ns4:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:organization4 .

    ns279:CmsImage1 foaf:thumbnail ns4:Thumbnail800x800 .
}

ns155:Thumbnail600x600 {
    ns155:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns95:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:person0 .

    ns95:CmsImage1 foaf:thumbnail ns155:Thumbnail600x600 .
}

ns159:CmsImage0 {
    ns159:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:5 .
}

ns188:CmsImage1 {
    ns188:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:87 .
}

ns106:Thumbnail600x600 {
    ns106:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns135:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:freestandingwork8 .

    ns135:CmsImage1 foaf:thumbnail ns106:Thumbnail600x600 .
}

ns101:Thumbnail800x800 {
    ns101:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns3:work2 .

    ns179:CmsImage0 foaf:thumbnail ns101:Thumbnail800x800 .
}

ns189:Thumbnail600x600 {
    ns270:CmsImage0 foaf:thumbnail ns189:Thumbnail600x600 .

    ns189:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns92:work6 .
}

ns30:Thumbnail200x200 {
    ns30:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:34 .

    ns81:CmsImage0 foaf:thumbnail ns30:Thumbnail200x200 .
}

ns190:Thumbnail600x600 {
    ns190:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns70:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:14 .

    ns70:CmsImage1 foaf:thumbnail ns190:Thumbnail600x600 .
}

ns69:Thumbnail200x200 {
    ns69:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:28 .

    ns401:CmsImage0 foaf:thumbnail ns69:Thumbnail200x200 .
}

ns191:Thumbnail800x800 {
    ns191:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns143:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:49 .

    ns143:CmsImage0 foaf:thumbnail ns191:Thumbnail800x800 .
}

ns192:Thumbnail400x400 {
    ns192:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:24 .

    ns158:CmsImage1 foaf:thumbnail ns192:Thumbnail400x400 .
}

ns193:Thumbnail400x400 {
    ns309:CmsImage0 foaf:thumbnail ns193:Thumbnail400x400 .

    ns193:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:0 .
}

ns142:CmsImage1 {
    ns142:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:20 .
}

ns194:CmsImage1 {
    ns194:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:17 .
}

ns195:Thumbnail800x800 {
    ns195:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:79 .

    ns10:CmsImage1 foaf:thumbnail ns195:Thumbnail800x800 .
}

ns196:Thumbnail600x600 {
    ns199:CmsImage1 foaf:thumbnail ns196:Thumbnail600x600 .

    ns196:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns199:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:55 .
}

ns16:Thumbnail200x200 {
    ns16:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns115:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns3:work0 .

    ns115:CmsImage0 foaf:thumbnail ns16:Thumbnail200x200 .
}

ns169:Thumbnail400x400 {
    ns169:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:43 .

    ns374:CmsImage1 foaf:thumbnail ns169:Thumbnail400x400 .
}

ns1:66 {
    ns1:66 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 6" ;
        skos:prefLabel "CmsConcept 66" .
}

ns1:1 {
    ns1:1 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 1" ;
        skos:prefLabel "CmsConcept 1" .
}

ns197:Thumbnail800x800 {
    ns348:CmsImage0 foaf:thumbnail ns197:Thumbnail800x800 .

    ns197:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:95 .
}

ns84:CmsImage0 {
    ns84:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:13 .
}

ns198:Thumbnail800x800 {
    ns232:CmsImage1 foaf:thumbnail ns198:Thumbnail800x800 .

    ns198:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns232:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:84 .
}

ns199:CmsImage0 {
    ns199:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:55 .
}

ns200:Thumbnail800x800 {
    ns369:CmsImage0 foaf:thumbnail ns200:Thumbnail800x800 .

    ns200:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns369:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:45 .
}

ns201:Thumbnail600x600 {
    ns201:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:organization0 .

    ns5:CmsImage0 foaf:thumbnail ns201:Thumbnail600x600 .
}

ns202:CmsImage0 {
    ns202:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:freestandingwork9 .
}

ns191:Thumbnail200x200 {
    ns191:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns143:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:49 .

    ns143:CmsImage0 foaf:thumbnail ns191:Thumbnail200x200 .
}

ns203:Thumbnail400x400 {
    ns385:CmsImage1 foaf:thumbnail ns203:Thumbnail400x400 .

    ns203:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:97 .
}

ns124:Thumbnail800x800 {
    ns124:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:person3 .

    ns323:CmsImage0 foaf:thumbnail ns124:Thumbnail800x800 .
}

ns204:CmsImage0 {
    ns204:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:65 .
}

ns65:freestandingwork10Location {
    ns65:freestandingwork10Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns205:Thumbnail200x200 {
    ns5:CmsImage1 foaf:thumbnail ns205:Thumbnail200x200 .

    ns205:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:organization0 .
}

ns206:Thumbnail800x800 {
    ns371:CmsImage1 foaf:thumbnail ns206:Thumbnail800x800 .

    ns206:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:29 .
}

ns207:Thumbnail200x200 {
    ns335:CmsImage1 foaf:thumbnail ns207:Thumbnail200x200 .

    ns207:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:39 .
}

ns131:Thumbnail200x200 {
    ns131:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns100:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:73 .

    ns100:CmsImage1 foaf:thumbnail ns131:Thumbnail200x200 .
}

ns208:Thumbnail800x800 {
    ns314:CmsImage0 foaf:thumbnail ns208:Thumbnail800x800 .

    ns208:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:41 .
}

ns209:CmsImage0 {
    ns209:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:person4 .
}

ns210:Thumbnail800x800 {
    ns162:CmsImage0 foaf:thumbnail ns210:Thumbnail800x800 .

    ns210:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns162:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:58 .
}

ns211:Thumbnail200x200 {
    ns366:CmsImage1 foaf:thumbnail ns211:Thumbnail200x200 .

    ns211:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:96 .
}

ns136:Thumbnail800x800 {
    ns136:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:person2 .

    ns123:CmsImage0 foaf:thumbnail ns136:Thumbnail800x800 .
}

ns212:Thumbnail200x200 {
    ns344:CmsImage0 foaf:thumbnail ns212:Thumbnail200x200 .

    ns212:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns344:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:70 .
}

ns1:37 {
    ns1:37 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 7" ;
        skos:prefLabel "CmsConcept 37" .
}

ns201:Thumbnail800x800 {
    ns201:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:organization0 .

    ns5:CmsImage0 foaf:thumbnail ns201:Thumbnail800x800 .
}

ns76:Thumbnail200x200 {
    ns76:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:organization1 .

    ns355:CmsImage1 foaf:thumbnail ns76:Thumbnail200x200 .
}

ns213:Thumbnail800x800 {
    ns213:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns86:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:102 .

    ns86:CmsImage1 foaf:thumbnail ns213:Thumbnail800x800 .
}

ns214:Thumbnail600x600 {
    ns331:CmsImage1 foaf:thumbnail ns214:Thumbnail600x600 .

    ns214:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns331:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:11 .
}

_:N46be61fedb7545bb84814d471c6b2a9b {
    _:N46be61fedb7545bb84814d471c6b2a9b a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N7417b908102e4da6a9ca52076ee5be7a ;
        dcterms:spatial _:N6fd3c01faf5942a1ac416f34d82db786 ;
        dcterms:title "CmsCollection1CmsWork4 closing" ;
        cms:work ns92:work4 .

    _:N6fd3c01faf5942a1ac416f34d82db786 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N7417b908102e4da6a9ca52076ee5be7a a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns19:Thumbnail800x800 {
    ns19:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns303:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:69 .

    ns303:CmsImage1 foaf:thumbnail ns19:Thumbnail800x800 .
}

ns79:Thumbnail400x400 {
    ns79:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:39 .

    ns335:CmsImage0 foaf:thumbnail ns79:Thumbnail400x400 .
}

ns215:Thumbnail200x200 {
    ns349:CmsImage0 foaf:thumbnail ns215:Thumbnail200x200 .

    ns215:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:56 .
}

ns14:Thumbnail200x200 {
    ns14:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:91 .

    ns394:CmsImage0 foaf:thumbnail ns14:Thumbnail200x200 .
}

ns195:Thumbnail200x200 {
    ns195:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:79 .

    ns10:CmsImage1 foaf:thumbnail ns195:Thumbnail200x200 .
}

ns216:Thumbnail600x600 {
    ns216:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns111:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:23 .

    ns111:CmsImage0 foaf:thumbnail ns216:Thumbnail600x600 .
}

ns175:Thumbnail600x600 {
    ns175:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:79 .

    ns10:CmsImage0 foaf:thumbnail ns175:Thumbnail600x600 .
}

ns141:Thumbnail400x400 {
    ns141:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns202:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:freestandingwork9 .

    ns202:CmsImage0 foaf:thumbnail ns141:Thumbnail400x400 .
}

ns187:Thumbnail200x200 {
    ns187:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:87 .

    ns188:CmsImage1 foaf:thumbnail ns187:Thumbnail200x200 .
}

ns1:26 {
    ns1:26 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 6" ;
        skos:prefLabel "CmsConcept 26" .
}

ns217:Thumbnail600x600 {
    ns368:CmsImage1 foaf:thumbnail ns217:Thumbnail600x600 .

    ns217:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns368:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:85 .
}

ns133:Thumbnail800x800 {
    ns133:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns3:work3 .

    ns342:CmsImage1 foaf:thumbnail ns133:Thumbnail800x800 .
}

ns218:Thumbnail200x200 {
    ns60:CmsImage1 foaf:thumbnail ns218:Thumbnail200x200 .

    ns218:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns60:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:82 .
}

ns108:Thumbnail600x600 {
    ns108:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:1 .

    ns372:CmsImage0 foaf:thumbnail ns108:Thumbnail600x600 .
}

ns219:Thumbnail600x600 {
    ns377:CmsImage0 foaf:thumbnail ns219:Thumbnail600x600 .

    ns219:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:64 .
}

ns220:CmsImage1 {
    ns220:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:86 .
}

ns221:Thumbnail800x800 {
    ns302:CmsImage0 foaf:thumbnail ns221:Thumbnail800x800 .

    ns221:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns302:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:38 .
}

ns1:85 {
    ns1:85 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 5" ;
        skos:prefLabel "CmsConcept 85" .
}

ns185:Thumbnail800x800 {
    ns185:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns75:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:25 .

    ns75:CmsImage1 foaf:thumbnail ns185:Thumbnail800x800 .
}

ns222:Thumbnail400x400 {
    ns403:CmsImage1 foaf:thumbnail ns222:Thumbnail400x400 .

    ns222:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:53 .
}

ns189:Thumbnail200x200 {
    ns189:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns92:work6 .

    ns270:CmsImage0 foaf:thumbnail ns189:Thumbnail200x200 .
}

ns23:Thumbnail200x200 {
    ns23:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns11:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:person1 .

    ns11:CmsImage0 foaf:thumbnail ns23:Thumbnail200x200 .
}

ns92:work5Location {
    ns92:work5Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns223:Thumbnail800x800 {
    ns276:CmsImage1 foaf:thumbnail ns223:Thumbnail800x800 .

    ns223:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:16 .
}

ns1:56 {
    ns1:56 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 6" ;
        skos:prefLabel "CmsConcept 56" .
}

ns224:CmsImage0 {
    ns224:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:89 .
}

ns225:Thumbnail400x400 {
    ns372:CmsImage1 foaf:thumbnail ns225:Thumbnail400x400 .

    ns225:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:1 .
}

ns226:Thumbnail200x200 {
    ns269:CmsImage1 foaf:thumbnail ns226:Thumbnail200x200 .

    ns226:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns269:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:61 .
}

ns227:Thumbnail200x200 {
    ns121:CmsImage1 foaf:thumbnail ns227:Thumbnail200x200 .

    ns227:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns121:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:80 .
}

ns156:Thumbnail600x600 {
    ns156:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:93 .

    ns257:CmsImage0 foaf:thumbnail ns156:Thumbnail600x600 .
}

ns228:CmsImage0 {
    ns228:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:99 .
}

ns119:Thumbnail800x800 {
    ns119:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:collection1 .

    ns315:CmsImage1 foaf:thumbnail ns119:Thumbnail800x800 .
}

ns229:Thumbnail200x200 {
    ns371:CmsImage0 foaf:thumbnail ns229:Thumbnail200x200 .

    ns229:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:29 .
}

ns230:CmsImage1 {
    ns230:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:46 .
}

ns231:CmsImage0 {
    ns231:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:18 .
}

ns232:CmsImage1 {
    ns232:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:84 .
}

ns1:78 {
    ns1:78 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 8" ;
        skos:prefLabel "CmsConcept 78" .
}

ns233:Thumbnail200x200 {
    ns387:CmsImage1 foaf:thumbnail ns233:Thumbnail200x200 .

    ns233:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:107 .
}

ns234:Thumbnail200x200 {
    ns234:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns126:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:2 .

    ns126:CmsImage1 foaf:thumbnail ns234:Thumbnail200x200 .
}

ns226:Thumbnail600x600 {
    ns226:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns269:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:61 .

    ns269:CmsImage1 foaf:thumbnail ns226:Thumbnail600x600 .
}

ns117:CmsImage1 {
    ns117:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns92:work5 .
}

ns65:organization4 {
    ns65:organization4 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 4" ;
        foaf:page ns65:organization4page .
}

ns235:Thumbnail200x200 {
    ns378:CmsImage0 foaf:thumbnail ns235:Thumbnail200x200 .

    ns235:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:66 .
}

ns236:Thumbnail200x200 {
    ns236:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns145:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:88 .

    ns145:CmsImage1 foaf:thumbnail ns236:Thumbnail200x200 .
}

ns237:CmsImage0 {
    ns237:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:75 .
}

ns238:CmsImage1 {
    ns238:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:74 .
}

ns222:Thumbnail600x600 {
    ns222:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:53 .

    ns403:CmsImage1 foaf:thumbnail ns222:Thumbnail600x600 .
}

ns239:Thumbnail800x800 {
    ns269:CmsImage0 foaf:thumbnail ns239:Thumbnail800x800 .

    ns239:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns269:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:61 .
}

ns240:Thumbnail200x200 {
    ns228:CmsImage1 foaf:thumbnail ns240:Thumbnail200x200 .

    ns240:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:99 .
}

ns241:CmsImage1 {
    ns241:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:62 .
}

ns242:Thumbnail200x200 {
    ns242:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns17:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:15 .

    ns17:CmsImage1 foaf:thumbnail ns242:Thumbnail200x200 .
}

ns243:Thumbnail600x600 {
    ns402:CmsImage0 foaf:thumbnail ns243:Thumbnail600x600 .

    ns243:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:19 .
}

ns244:Thumbnail800x800 {
    ns38:CmsImage1 foaf:thumbnail ns244:Thumbnail800x800 .

    ns244:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns38:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:77 .
}

ns158:CmsImage0 {
    ns158:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:24 .
}

ns221:Thumbnail400x400 {
    ns221:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns302:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:38 .

    ns302:CmsImage0 foaf:thumbnail ns221:Thumbnail400x400 .
}

ns155:Thumbnail400x400 {
    ns155:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns95:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:person0 .

    ns95:CmsImage1 foaf:thumbnail ns155:Thumbnail400x400 .
}

ns41:Thumbnail200x200 {
    ns41:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:66 .

    ns378:CmsImage1 foaf:thumbnail ns41:Thumbnail200x200 .
}

ns245:Thumbnail200x200 {
    ns245:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns95:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:person0 .

    ns95:CmsImage0 foaf:thumbnail ns245:Thumbnail200x200 .
}

ns246:Thumbnail600x600 {
    ns341:CmsImage0 foaf:thumbnail ns246:Thumbnail600x600 .

    ns246:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:37 .
}

ns247:Thumbnail200x200 {
    ns353:CmsImage1 foaf:thumbnail ns247:Thumbnail200x200 .

    ns247:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns353:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:83 .
}

ns248:Thumbnail400x400 {
    ns248:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns121:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:80 .

    ns121:CmsImage0 foaf:thumbnail ns248:Thumbnail400x400 .
}

ns249:Thumbnail400x400 {
    ns315:CmsImage0 foaf:thumbnail ns249:Thumbnail400x400 .

    ns249:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:collection1 .
}

ns250:Thumbnail800x800 {
    ns313:CmsImage1 foaf:thumbnail ns250:Thumbnail800x800 .

    ns250:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:57 .
}

ns201:Thumbnail200x200 {
    ns201:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:organization0 .

    ns5:CmsImage0 foaf:thumbnail ns201:Thumbnail200x200 .
}

ns177:Thumbnail800x800 {
    ns177:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns47:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:27 .

    ns47:CmsImage0 foaf:thumbnail ns177:Thumbnail800x800 .
}

ns1:80 {
    ns1:80 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 0" ;
        skos:prefLabel "CmsConcept 80" .
}

ns156:Thumbnail800x800 {
    ns156:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:93 .

    ns257:CmsImage0 foaf:thumbnail ns156:Thumbnail800x800 .
}

ns207:Thumbnail400x400 {
    ns207:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:39 .

    ns335:CmsImage1 foaf:thumbnail ns207:Thumbnail400x400 .
}

ns251:Thumbnail200x200 {
    ns270:CmsImage1 foaf:thumbnail ns251:Thumbnail200x200 .

    ns251:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns92:work6 .
}

ns65:freestandingwork8Opening {
    ns65:freestandingwork8Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-24"^^xsd:date ;
        dcterms:description _:Na357a585ddfd4f919cf197eac0ec6baa ;
        dcterms:spatial _:N44403130ef8d426babe9c07ffdf494ea ;
        dcterms:title "FreestandingWork8 opening" ;
        cms:work ns65:freestandingwork8 .

    _:N44403130ef8d426babe9c07ffdf494ea a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Na357a585ddfd4f919cf197eac0ec6baa a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns252:Thumbnail400x400 {
    ns374:CmsImage0 foaf:thumbnail ns252:Thumbnail400x400 .

    ns252:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:43 .
}

ns65:organization3 {
    ns65:organization3 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 3" ;
        foaf:page ns65:organization3page .
}

ns1:88 {
    ns1:88 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 8" ;
        skos:prefLabel "CmsConcept 88" .
}

ns210:Thumbnail600x600 {
    ns210:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns162:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:58 .

    ns162:CmsImage0 foaf:thumbnail ns210:Thumbnail600x600 .
}

ns1:108 {
    ns1:108 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 8" ;
        skos:prefLabel "CmsConcept 108" .
}

ns1:12 {
    ns1:12 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 2" ;
        skos:prefLabel "CmsConcept 12" .
}

ns1:94 {
    ns1:94 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 4" ;
        skos:prefLabel "CmsConcept 94" .
}

ns253:Thumbnail400x400 {
    ns253:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns168:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:48 .

    ns168:CmsImage1 foaf:thumbnail ns253:Thumbnail400x400 .
}

dcterms:medium {
    dcterms:medium a cms:Property ;
        rdfs:label "Medium" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> .
}

ns254:Thumbnail400x400 {
    ns232:CmsImage0 foaf:thumbnail ns254:Thumbnail400x400 .

    ns254:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns232:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:84 .
}

ns72:Thumbnail800x800 {
    ns72:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:7 .

    ns186:CmsImage0 foaf:thumbnail ns72:Thumbnail800x800 .
}

ns255:Thumbnail800x800 {
    ns320:CmsImage1 foaf:thumbnail ns255:Thumbnail800x800 .

    ns255:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns320:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:72 .
}

ns256:Thumbnail800x800 {
    ns256:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:86 .

    ns220:CmsImage1 foaf:thumbnail ns256:Thumbnail800x800 .
}

ns257:CmsImage0 {
    ns257:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:93 .
}

ns22:Thumbnail800x800 {
    ns22:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:16 .

    ns276:CmsImage0 foaf:thumbnail ns22:Thumbnail800x800 .
}

ns258:CmsImage0 {
    ns258:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:12 .
}

ns246:Thumbnail400x400 {
    ns246:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:37 .

    ns341:CmsImage0 foaf:thumbnail ns246:Thumbnail400x400 .
}

ns58:Thumbnail800x800 {
    ns58:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:98 .

    ns395:CmsImage1 foaf:thumbnail ns58:Thumbnail800x800 .
}

ns259:Thumbnail400x400 {
    ns145:CmsImage0 foaf:thumbnail ns259:Thumbnail400x400 .

    ns259:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns145:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:88 .
}

ns260:Thumbnail200x200 {
    ns128:CmsImage1 foaf:thumbnail ns260:Thumbnail200x200 .

    ns260:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:106 .
}

ns99:Thumbnail600x600 {
    ns99:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:97 .

    ns385:CmsImage0 foaf:thumbnail ns99:Thumbnail600x600 .
}

ns52:Thumbnail800x800 {
    ns52:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns302:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:38 .

    ns302:CmsImage1 foaf:thumbnail ns52:Thumbnail800x800 .
}

ns261:CmsImage1 {
    ns261:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:3 .
}

ns180:Thumbnail200x200 {
    ns180:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns148:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:organization2 .

    ns148:CmsImage1 foaf:thumbnail ns180:Thumbnail200x200 .
}

ns14:Thumbnail800x800 {
    ns14:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:91 .

    ns394:CmsImage0 foaf:thumbnail ns14:Thumbnail800x800 .
}

ns262:Thumbnail200x200 {
    ns320:CmsImage0 foaf:thumbnail ns262:Thumbnail200x200 .

    ns262:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns320:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:72 .
}

ns198:Thumbnail200x200 {
    ns198:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns232:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:84 .

    ns232:CmsImage1 foaf:thumbnail ns198:Thumbnail200x200 .
}

ns263:Thumbnail200x200 {
    ns153:CmsImage0 foaf:thumbnail ns263:Thumbnail200x200 .

    ns263:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns153:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:44 .
}

ns30:Thumbnail600x600 {
    ns30:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:34 .

    ns81:CmsImage0 foaf:thumbnail ns30:Thumbnail600x600 .
}

ns264:CmsImage0 {
    ns264:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:78 .
}

ns42:Thumbnail800x800 {
    ns42:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:65 .

    ns204:CmsImage1 foaf:thumbnail ns42:Thumbnail800x800 .
}

ns265:Thumbnail400x400 {
    ns329:CmsImage1 foaf:thumbnail ns265:Thumbnail400x400 .

    ns265:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns92:work4 .
}

ns115:CmsImage1 {
    ns115:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns3:work0 .
}

ns266:Thumbnail400x400 {
    ns123:CmsImage1 foaf:thumbnail ns266:Thumbnail400x400 .

    ns266:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:person2 .
}

ns267:Thumbnail600x600 {
    ns267:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns166:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:52 .

    ns166:CmsImage0 foaf:thumbnail ns267:Thumbnail600x600 .
}

ns98:CmsImage1 {
    ns98:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:103 .
}

ns268:Thumbnail400x400 {
    ns322:CmsImage0 foaf:thumbnail ns268:Thumbnail400x400 .

    ns268:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns322:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:8 .
}

ns269:CmsImage0 {
    ns269:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:61 .
}

ns270:CmsImage0 {
    ns270:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns92:work6 .
}

ns2:Thumbnail200x200 {
    ns2:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns282:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:4 .

    ns282:CmsImage1 foaf:thumbnail ns2:Thumbnail200x200 .
}

ns253:Thumbnail600x600 {
    ns253:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns168:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:48 .

    ns168:CmsImage1 foaf:thumbnail ns253:Thumbnail600x600 .
}

ns271:CmsImage0 {
    ns271:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:freestandingwork11 .
}

ns2:Thumbnail400x400 {
    ns2:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns282:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:4 .

    ns282:CmsImage1 foaf:thumbnail ns2:Thumbnail400x400 .
}

ns1:87 {
    ns1:87 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 7" ;
        skos:prefLabel "CmsConcept 87" .
}

ns272:Thumbnail400x400 {
    ns387:CmsImage0 foaf:thumbnail ns272:Thumbnail400x400 .

    ns272:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:107 .
}

ns66:Thumbnail200x200 {
    ns66:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:34 .

    ns81:CmsImage1 foaf:thumbnail ns66:Thumbnail200x200 .
}

ns219:Thumbnail800x800 {
    ns219:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:64 .

    ns377:CmsImage0 foaf:thumbnail ns219:Thumbnail800x800 .
}

ns233:Thumbnail800x800 {
    ns233:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:107 .

    ns387:CmsImage1 foaf:thumbnail ns233:Thumbnail800x800 .
}

ns273:Thumbnail400x400 {
    ns369:CmsImage1 foaf:thumbnail ns273:Thumbnail400x400 .

    ns273:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns369:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:45 .
}

ns274:Thumbnail800x800 {
    ns274:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns38:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:77 .

    ns38:CmsImage0 foaf:thumbnail ns274:Thumbnail800x800 .
}

ns101:Thumbnail600x600 {
    ns101:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns3:work2 .

    ns179:CmsImage0 foaf:thumbnail ns101:Thumbnail600x600 .
}

ns94:Thumbnail400x400 {
    ns94:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns264:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:78 .

    ns264:CmsImage0 foaf:thumbnail ns94:Thumbnail400x400 .
}

ns275:Thumbnail400x400 {
    ns397:CmsImage1 foaf:thumbnail ns275:Thumbnail400x400 .

    ns275:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:59 .
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
        foaf:depicts ns1:16 .
}

ns217:Thumbnail200x200 {
    ns217:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns368:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:85 .

    ns368:CmsImage1 foaf:thumbnail ns217:Thumbnail200x200 .
}

ns30:Thumbnail400x400 {
    ns30:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:34 .

    ns81:CmsImage0 foaf:thumbnail ns30:Thumbnail400x400 .
}

ns277:Thumbnail600x600 {
    ns381:CmsImage0 foaf:thumbnail ns277:Thumbnail600x600 .

    ns277:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:92 .
}

ns278:CmsImage0 {
    ns278:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:6 .
}

ns90:Thumbnail200x200 {
    ns90:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:59 .

    ns397:CmsImage0 foaf:thumbnail ns90:Thumbnail200x200 .
}

ns279:CmsImage0 {
    ns279:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:organization4 .
}

ns39:Thumbnail800x800 {
    ns39:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:organization4 .

    ns279:CmsImage0 foaf:thumbnail ns39:Thumbnail800x800 .
}

ns280:CmsImage0 {
    ns280:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns3:work1 .
}

ns164:Thumbnail800x800 {
    ns164:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:6 .

    ns278:CmsImage1 foaf:thumbnail ns164:Thumbnail800x800 .
}

ns200:Thumbnail600x600 {
    ns200:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns369:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:45 .

    ns369:CmsImage0 foaf:thumbnail ns200:Thumbnail600x600 .
}

ns277:Thumbnail200x200 {
    ns277:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:92 .

    ns381:CmsImage0 foaf:thumbnail ns277:Thumbnail200x200 .
}

ns6:Thumbnail600x600 {
    ns6:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns241:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:62 .

    ns241:CmsImage1 foaf:thumbnail ns6:Thumbnail600x600 .
}

ns37:Thumbnail200x200 {
    ns37:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns60:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:82 .

    ns60:CmsImage0 foaf:thumbnail ns37:Thumbnail200x200 .
}

ns123:CmsImage1 {
    ns123:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:person2 .
}

ns224:CmsImage1 {
    ns224:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:89 .
}

ns39:Thumbnail600x600 {
    ns39:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:organization4 .

    ns279:CmsImage0 foaf:thumbnail ns39:Thumbnail600x600 .
}

ns124:Thumbnail200x200 {
    ns124:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:person3 .

    ns323:CmsImage0 foaf:thumbnail ns124:Thumbnail200x200 .
}

ns263:Thumbnail400x400 {
    ns263:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns153:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:44 .

    ns153:CmsImage0 foaf:thumbnail ns263:Thumbnail400x400 .
}

ns281:CmsImage0 {
    ns281:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:30 .
}

ns1:91 {
    ns1:91 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 1" ;
        skos:prefLabel "CmsConcept 91" .
}

ns172:Thumbnail400x400 {
    ns172:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns230:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:46 .

    ns230:CmsImage1 foaf:thumbnail ns172:Thumbnail400x400 .
}

ns282:CmsImage1 {
    ns282:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:4 .
}

ns1:29 {
    ns1:29 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 9" ;
        skos:prefLabel "CmsConcept 29" .
}

ns152:Thumbnail600x600 {
    ns152:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns368:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:85 .

    ns368:CmsImage0 foaf:thumbnail ns152:Thumbnail600x600 .
}

ns283:Thumbnail800x800 {
    ns309:CmsImage1 foaf:thumbnail ns283:Thumbnail800x800 .

    ns283:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:0 .
}

ns284:Thumbnail600x600 {
    ns383:CmsImage0 foaf:thumbnail ns284:Thumbnail600x600 .

    ns284:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:35 .
}

ns285:Thumbnail600x600 {
    ns67:CmsImage1 foaf:thumbnail ns285:Thumbnail600x600 .

    ns285:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns67:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:94 .
}

ns65:person1 {
    ns65:person1 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "1, CmsPerson" ;
        foaf:familyName "1" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 1" .
}

ns286:Thumbnail200x200 {
    ns281:CmsImage1 foaf:thumbnail ns286:Thumbnail200x200 .

    ns286:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns281:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:30 .
}

ns89:Thumbnail400x400 {
    ns89:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns153:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:44 .

    ns153:CmsImage1 foaf:thumbnail ns89:Thumbnail400x400 .
}

ns287:Thumbnail400x400 {
    ns313:CmsImage0 foaf:thumbnail ns287:Thumbnail400x400 .

    ns287:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:57 .
}

ns1:75 {
    ns1:75 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 5" ;
        skos:prefLabel "CmsConcept 75" .
}

ns1:21 {
    ns1:21 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 1" ;
        skos:prefLabel "CmsConcept 21" .
}

ns288:CmsImage0 {
    ns288:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:90 .
}

ns6:Thumbnail400x400 {
    ns6:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns241:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:62 .

    ns241:CmsImage1 foaf:thumbnail ns6:Thumbnail400x400 .
}

ns23:Thumbnail600x600 {
    ns23:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns11:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:person1 .

    ns11:CmsImage0 foaf:thumbnail ns23:Thumbnail600x600 .
}

ns176:Thumbnail200x200 {
    ns176:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:81 .

    ns390:CmsImage1 foaf:thumbnail ns176:Thumbnail200x200 .
}

ns289:Thumbnail600x600 {
    ns348:CmsImage1 foaf:thumbnail ns289:Thumbnail600x600 .

    ns289:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:95 .
}

ns290:Thumbnail200x200 {
    ns308:CmsImage1 foaf:thumbnail ns290:Thumbnail200x200 .

    ns290:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:40 .
}

ns265:Thumbnail600x600 {
    ns265:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns92:work4 .

    ns329:CmsImage1 foaf:thumbnail ns265:Thumbnail600x600 .
}

ns164:Thumbnail600x600 {
    ns164:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:6 .

    ns278:CmsImage1 foaf:thumbnail ns164:Thumbnail600x600 .
}

ns291:Thumbnail800x800 {
    ns392:CmsImage1 foaf:thumbnail ns291:Thumbnail800x800 .

    ns291:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:freestandingwork10 .
}

ns292:Thumbnail200x200 {
    ns373:CmsImage1 foaf:thumbnail ns292:Thumbnail200x200 .

    ns292:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:76 .
}

ns293:Thumbnail600x600 {
    ns398:CmsImage0 foaf:thumbnail ns293:Thumbnail600x600 .

    ns293:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:21 .
}

ns15:Thumbnail400x400 {
    ns15:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:22 .

    ns300:CmsImage1 foaf:thumbnail ns15:Thumbnail400x400 .
}

ns198:Thumbnail400x400 {
    ns198:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns232:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:84 .

    ns232:CmsImage1 foaf:thumbnail ns198:Thumbnail400x400 .
}

ns221:Thumbnail200x200 {
    ns221:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns302:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:38 .

    ns302:CmsImage0 foaf:thumbnail ns221:Thumbnail200x200 .
}

ns1:77 {
    ns1:77 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 7" ;
        skos:prefLabel "CmsConcept 77" .
}

ns294:Thumbnail200x200 {
    ns323:CmsImage1 foaf:thumbnail ns294:Thumbnail200x200 .

    ns294:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:person3 .
}

ns295:Thumbnail800x800 {
    ns167:CmsImage0 foaf:thumbnail ns295:Thumbnail800x800 .

    ns295:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns167:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:51 .
}

_:N1b3113cec0ff44b791e4ac1d0afa7822 {
    _:N1b3113cec0ff44b791e4ac1d0afa7822 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N1c33f3a933cb433fa12449bc2f407a3d ;
        dcterms:title "CmsCollection0CmsWork3 closing" ;
        cms:work ns3:work3 .

    _:N1c33f3a933cb433fa12449bc2f407a3d a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns296:Thumbnail800x800 {
    ns367:CmsImage1 foaf:thumbnail ns296:Thumbnail800x800 .

    ns296:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns367:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:100 .
}

ns297:Thumbnail400x400 {
    ns109:CmsImage1 foaf:thumbnail ns297:Thumbnail400x400 .

    ns297:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns109:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:108 .
}

ns298:Thumbnail600x600 {
    ns298:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns209:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:person4 .

    ns209:CmsImage0 foaf:thumbnail ns298:Thumbnail600x600 .
}

ns173:Thumbnail800x800 {
    ns173:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns241:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:62 .

    ns241:CmsImage0 foaf:thumbnail ns173:Thumbnail800x800 .
}

ns120:Thumbnail600x600 {
    ns120:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:60 .

    ns384:CmsImage1 foaf:thumbnail ns120:Thumbnail600x600 .
}

ns1:64 {
    ns1:64 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 4" ;
        skos:prefLabel "CmsConcept 64" .
}

ns299:CmsImage1 {
    ns299:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:32 .
}

ns293:Thumbnail200x200 {
    ns293:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:21 .

    ns398:CmsImage0 foaf:thumbnail ns293:Thumbnail200x200 .
}

ns64:CmsImage1 {
    ns64:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:54 .
}

ns300:CmsImage0 {
    ns300:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:22 .
}

ns301:Thumbnail600x600 {
    ns367:CmsImage0 foaf:thumbnail ns301:Thumbnail600x600 .

    ns301:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns367:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:100 .
}

ns275:Thumbnail200x200 {
    ns275:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:59 .

    ns397:CmsImage1 foaf:thumbnail ns275:Thumbnail200x200 .
}

ns302:CmsImage1 {
    ns302:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:38 .
}

ns227:Thumbnail800x800 {
    ns227:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns121:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:80 .

    ns121:CmsImage1 foaf:thumbnail ns227:Thumbnail800x800 .
}

ns9:Thumbnail400x400 {
    ns9:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns363:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:42 .

    ns363:CmsImage0 foaf:thumbnail ns9:Thumbnail400x400 .
}

ns42:Thumbnail400x400 {
    ns42:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:65 .

    ns204:CmsImage1 foaf:thumbnail ns42:Thumbnail400x400 .
}

ns303:CmsImage0 {
    ns303:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:69 .
}

ns304:CmsImage0 {
    ns304:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns92:work7 .
}

ns305:Thumbnail400x400 {
    ns305:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns142:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:20 .

    ns142:CmsImage1 foaf:thumbnail ns305:Thumbnail400x400 .
}

ns1:45 {
    ns1:45 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 5" ;
        skos:prefLabel "CmsConcept 45" .
}

ns53:Thumbnail200x200 {
    ns53:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:74 .

    ns238:CmsImage0 foaf:thumbnail ns53:Thumbnail200x200 .
}

ns69:Thumbnail400x400 {
    ns69:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:28 .

    ns401:CmsImage0 foaf:thumbnail ns69:Thumbnail400x400 .
}

ns306:Thumbnail600x600 {
    ns331:CmsImage0 foaf:thumbnail ns306:Thumbnail600x600 .

    ns306:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns331:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:11 .
}

ns307:Thumbnail400x400 {
    ns307:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:24 .

    ns158:CmsImage0 foaf:thumbnail ns307:Thumbnail400x400 .
}

ns12:Thumbnail800x800 {
    ns12:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:3 .

    ns261:CmsImage1 foaf:thumbnail ns12:Thumbnail800x800 .
}

ns308:CmsImage1 {
    ns308:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:40 .
}

ns194:CmsImage0 {
    ns194:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:17 .
}

ns309:CmsImage1 {
    ns309:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:0 .
}

ns256:Thumbnail200x200 {
    ns256:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:86 .

    ns220:CmsImage1 foaf:thumbnail ns256:Thumbnail200x200 .
}

ns251:Thumbnail600x600 {
    ns251:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns92:work6 .

    ns270:CmsImage1 foaf:thumbnail ns251:Thumbnail600x600 .
}

ns27:Thumbnail600x600 {
    ns27:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:26 .

    ns393:CmsImage0 foaf:thumbnail ns27:Thumbnail600x600 .
}

ns166:CmsImage1 {
    ns166:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:52 .
}

ns218:Thumbnail600x600 {
    ns218:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns60:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:82 .

    ns60:CmsImage1 foaf:thumbnail ns218:Thumbnail600x600 .
}

ns310:Thumbnail200x200 {
    ns31:CmsImage1 foaf:thumbnail ns310:Thumbnail200x200 .

    ns310:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns31:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:67 .
}

ns268:Thumbnail200x200 {
    ns268:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns322:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:8 .

    ns322:CmsImage0 foaf:thumbnail ns268:Thumbnail200x200 .
}

ns311:Thumbnail400x400 {
    ns356:CmsImage1 foaf:thumbnail ns311:Thumbnail400x400 .

    ns311:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:50 .
}

ns268:Thumbnail800x800 {
    ns268:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns322:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:8 .

    ns322:CmsImage0 foaf:thumbnail ns268:Thumbnail800x800 .
}

ns148:CmsImage0 {
    ns148:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:organization2 .
}

ns65:organization1 {
    ns65:organization1 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 1" ;
        foaf:page ns65:organization1page .
}

ns207:Thumbnail600x600 {
    ns207:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:39 .

    ns335:CmsImage1 foaf:thumbnail ns207:Thumbnail600x600 .
}

ns169:Thumbnail200x200 {
    ns169:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:43 .

    ns374:CmsImage1 foaf:thumbnail ns169:Thumbnail200x200 .
}

ns312:Thumbnail600x600 {
    ns314:CmsImage1 foaf:thumbnail ns312:Thumbnail600x600 .

    ns312:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:41 .
}

ns305:Thumbnail800x800 {
    ns305:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns142:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:20 .

    ns142:CmsImage1 foaf:thumbnail ns305:Thumbnail800x800 .
}

ns289:Thumbnail800x800 {
    ns289:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:95 .

    ns348:CmsImage1 foaf:thumbnail ns289:Thumbnail800x800 .
}

ns1:74 {
    ns1:74 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 4" ;
        skos:prefLabel "CmsConcept 74" .
}

ns313:CmsImage0 {
    ns313:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:57 .
}

ns78:Thumbnail200x200 {
    ns78:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns271:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:freestandingwork11 .

    ns271:CmsImage0 foaf:thumbnail ns78:Thumbnail200x200 .
}

ns314:CmsImage1 {
    ns314:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:41 .
}

ns65:collection0 {
    ns65:collection0 a cms:Collection ;
        dcterms:description _:N5bd62593ca2141459aa16091964e6c50 ;
        dcterms:title "CmsCollection0" .

    _:N5bd62593ca2141459aa16091964e6c50 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns96:Thumbnail600x600 {
    ns96:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:65 .

    ns204:CmsImage0 foaf:thumbnail ns96:Thumbnail600x600 .
}

ns315:CmsImage0 {
    ns315:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:collection1 .
}

ns217:Thumbnail400x400 {
    ns217:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns368:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:85 .

    ns368:CmsImage1 foaf:thumbnail ns217:Thumbnail400x400 .
}

ns1:53 {
    ns1:53 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 3" ;
        skos:prefLabel "CmsConcept 53" .
}

ns176:Thumbnail600x600 {
    ns176:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:81 .

    ns390:CmsImage1 foaf:thumbnail ns176:Thumbnail600x600 .
}

ns102:Thumbnail400x400 {
    ns102:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:37 .

    ns341:CmsImage1 foaf:thumbnail ns102:Thumbnail400x400 .
}

ns316:Thumbnail600x600 {
    ns373:CmsImage0 foaf:thumbnail ns316:Thumbnail600x600 .

    ns316:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:76 .
}

ns124:Thumbnail600x600 {
    ns124:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:person3 .

    ns323:CmsImage0 foaf:thumbnail ns124:Thumbnail600x600 .
}

ns242:Thumbnail800x800 {
    ns242:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns17:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:15 .

    ns17:CmsImage1 foaf:thumbnail ns242:Thumbnail800x800 .
}

ns221:Thumbnail600x600 {
    ns221:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns302:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:38 .

    ns302:CmsImage0 foaf:thumbnail ns221:Thumbnail600x600 .
}

ns85:Thumbnail200x200 {
    ns85:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns86:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:102 .

    ns86:CmsImage0 foaf:thumbnail ns85:Thumbnail200x200 .
}

ns17:CmsImage0 {
    ns17:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:15 .
}

ns317:Thumbnail800x800 {
    ns317:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns3:work1 .

    ns280:CmsImage0 foaf:thumbnail ns317:Thumbnail800x800 .
}

ns1:70 {
    ns1:70 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 0" ;
        skos:prefLabel "CmsConcept 70" .
}

ns318:Thumbnail400x400 {
    ns318:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns159:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:5 .

    ns159:CmsImage1 foaf:thumbnail ns318:Thumbnail400x400 .
}

ns255:Thumbnail400x400 {
    ns255:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns320:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:72 .

    ns320:CmsImage1 foaf:thumbnail ns255:Thumbnail400x400 .
}

ns92:work4Opening {
    ns92:work4Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-28"^^xsd:date ;
        dcterms:description _:N7417b908102e4da6a9ca52076ee5be7a ;
        dcterms:spatial _:N6fd3c01faf5942a1ac416f34d82db786 ;
        dcterms:title "CmsCollection1CmsWork4 opening" ;
        cms:work ns92:work4 .

    _:N6fd3c01faf5942a1ac416f34d82db786 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N7417b908102e4da6a9ca52076ee5be7a a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns18:Thumbnail400x400 {
    ns18:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns115:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns3:work0 .

    ns115:CmsImage1 foaf:thumbnail ns18:Thumbnail400x400 .
}

ns239:Thumbnail400x400 {
    ns239:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns269:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:61 .

    ns269:CmsImage0 foaf:thumbnail ns239:Thumbnail400x400 .
}

ns319:Thumbnail400x400 {
    ns319:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns59:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:9 .

    ns59:CmsImage0 foaf:thumbnail ns319:Thumbnail400x400 .
}

ns114:Thumbnail600x600 {
    ns114:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:81 .

    ns390:CmsImage0 foaf:thumbnail ns114:Thumbnail600x600 .
}

ns74:Thumbnail200x200 {
    ns74:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns237:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:75 .

    ns237:CmsImage1 foaf:thumbnail ns74:Thumbnail200x200 .
}

ns184:Thumbnail200x200 {
    ns184:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:109 .

    ns399:CmsImage1 foaf:thumbnail ns184:Thumbnail200x200 .
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

ns8:Thumbnail200x200 {
    ns8:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns209:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:person4 .

    ns209:CmsImage1 foaf:thumbnail ns8:Thumbnail200x200 .
}

ns267:Thumbnail400x400 {
    ns267:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns166:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:52 .

    ns166:CmsImage0 foaf:thumbnail ns267:Thumbnail400x400 .
}

ns320:CmsImage0 {
    ns320:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:72 .
}

ns1:76 {
    ns1:76 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 6" ;
        skos:prefLabel "CmsConcept 76" .
}

ns267:Thumbnail800x800 {
    ns267:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns166:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:52 .

    ns166:CmsImage0 foaf:thumbnail ns267:Thumbnail800x800 .
}

ns151:Thumbnail800x800 {
    ns151:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns32:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:31 .

    ns32:CmsImage1 foaf:thumbnail ns151:Thumbnail800x800 .
}

ns107:CmsImage0 {
    ns107:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:36 .
}

ns321:CmsImage1 {
    ns321:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:47 .
}

ns94:Thumbnail600x600 {
    ns94:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns264:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:78 .

    ns264:CmsImage0 foaf:thumbnail ns94:Thumbnail600x600 .
}

ns187:Thumbnail400x400 {
    ns187:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:87 .

    ns188:CmsImage1 foaf:thumbnail ns187:Thumbnail400x400 .
}

ns275:Thumbnail800x800 {
    ns275:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:59 .

    ns397:CmsImage1 foaf:thumbnail ns275:Thumbnail800x800 .
}

ns322:CmsImage0 {
    ns322:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:8 .
}

ns262:Thumbnail800x800 {
    ns262:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns320:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:72 .

    ns320:CmsImage0 foaf:thumbnail ns262:Thumbnail800x800 .
}

ns323:CmsImage1 {
    ns323:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:person3 .
}

ns258:CmsImage1 {
    ns258:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:12 .
}

ns324:Thumbnail200x200 {
    ns376:CmsImage1 foaf:thumbnail ns324:Thumbnail200x200 .

    ns324:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:organization3 .
}

ns325:Thumbnail400x400 {
    ns361:CmsImage1 foaf:thumbnail ns325:Thumbnail400x400 .

    ns325:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns361:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:68 .
}

ns294:Thumbnail600x600 {
    ns294:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:person3 .

    ns323:CmsImage1 foaf:thumbnail ns294:Thumbnail600x600 .
}

ns326:CmsImage0 {
    ns326:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:104 .
}

ns236:Thumbnail400x400 {
    ns236:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns145:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:88 .

    ns145:CmsImage1 foaf:thumbnail ns236:Thumbnail400x400 .
}

ns156:Thumbnail200x200 {
    ns156:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:93 .

    ns257:CmsImage0 foaf:thumbnail ns156:Thumbnail200x200 .
}

ns80:Thumbnail600x600 {
    ns80:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns344:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:70 .

    ns344:CmsImage1 foaf:thumbnail ns80:Thumbnail600x600 .
}

ns327:Thumbnail600x600 {
    ns352:CmsImage1 foaf:thumbnail ns327:Thumbnail600x600 .

    ns327:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:10 .
}

ns328:Thumbnail800x800 {
    ns100:CmsImage0 foaf:thumbnail ns328:Thumbnail800x800 .

    ns328:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns100:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:73 .
}

ns329:CmsImage0 {
    ns329:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns92:work4 .
}

ns118:Thumbnail600x600 {
    ns118:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:53 .

    ns403:CmsImage0 foaf:thumbnail ns118:Thumbnail600x600 .
}

ns330:Thumbnail200x200 {
    ns280:CmsImage1 foaf:thumbnail ns330:Thumbnail200x200 .

    ns330:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns3:work1 .
}

ns331:CmsImage1 {
    ns331:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:11 .
}

ns33:Thumbnail800x800 {
    ns33:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns304:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns92:work7 .

    ns304:CmsImage1 foaf:thumbnail ns33:Thumbnail800x800 .
}

ns1:31 {
    ns1:31 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 1" ;
        skos:prefLabel "CmsConcept 31" .
}

ns97:Thumbnail600x600 {
    ns97:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:6 .

    ns278:CmsImage0 foaf:thumbnail ns97:Thumbnail600x600 .
}

ns157:Thumbnail600x600 {
    ns157:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns299:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:32 .

    ns299:CmsImage0 foaf:thumbnail ns157:Thumbnail600x600 .
}

ns332:Thumbnail800x800 {
    ns179:CmsImage1 foaf:thumbnail ns332:Thumbnail800x800 .

    ns332:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns3:work2 .
}

ns185:Thumbnail600x600 {
    ns185:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns75:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:25 .

    ns75:CmsImage1 foaf:thumbnail ns185:Thumbnail600x600 .
}

ns333:Thumbnail800x800 {
    ns333:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns92:work5 .

    ns117:CmsImage0 foaf:thumbnail ns333:Thumbnail800x800 .
}

ns1:8 {
    ns1:8 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 8" ;
        skos:prefLabel "CmsConcept 8" .
}

ns255:Thumbnail200x200 {
    ns255:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns320:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:72 .

    ns320:CmsImage1 foaf:thumbnail ns255:Thumbnail200x200 .
}

ns96:Thumbnail800x800 {
    ns96:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:65 .

    ns204:CmsImage0 foaf:thumbnail ns96:Thumbnail800x800 .
}

ns132:Thumbnail600x600 {
    ns132:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns264:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:78 .

    ns264:CmsImage1 foaf:thumbnail ns132:Thumbnail600x600 .
}

ns50:Thumbnail400x400 {
    ns50:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns321:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:47 .

    ns321:CmsImage0 foaf:thumbnail ns50:Thumbnail400x400 .
}

ns71:Thumbnail800x800 {
    ns71:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:104 .

    ns326:CmsImage1 foaf:thumbnail ns71:Thumbnail800x800 .
}

ns45:Thumbnail800x800 {
    ns45:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns64:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:54 .

    ns64:CmsImage1 foaf:thumbnail ns45:Thumbnail800x800 .
}

ns240:Thumbnail600x600 {
    ns240:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:99 .

    ns228:CmsImage1 foaf:thumbnail ns240:Thumbnail600x600 .
}

ns334:CmsImage0 {
    ns334:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:71 .
}

ns46:Thumbnail600x600 {
    ns46:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns17:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:15 .

    ns17:CmsImage0 foaf:thumbnail ns46:Thumbnail600x600 .
}

ns229:Thumbnail400x400 {
    ns229:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:29 .

    ns371:CmsImage0 foaf:thumbnail ns229:Thumbnail400x400 .
}

ns193:Thumbnail800x800 {
    ns193:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:0 .

    ns309:CmsImage0 foaf:thumbnail ns193:Thumbnail800x800 .
}

ns186:CmsImage1 {
    ns186:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:7 .
}

ns79:Thumbnail800x800 {
    ns79:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:39 .

    ns335:CmsImage0 foaf:thumbnail ns79:Thumbnail800x800 .
}

ns335:CmsImage0 {
    ns335:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:39 .
}

ns254:Thumbnail800x800 {
    ns254:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns232:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:84 .

    ns232:CmsImage0 foaf:thumbnail ns254:Thumbnail800x800 .
}

ns132:Thumbnail800x800 {
    ns132:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns264:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:78 .

    ns264:CmsImage1 foaf:thumbnail ns132:Thumbnail800x800 .
}

ns65:organization0 {
    ns65:organization0 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 0" ;
        foaf:page ns65:organization0page .
}

ns214:Thumbnail800x800 {
    ns214:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns331:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:11 .

    ns331:CmsImage1 foaf:thumbnail ns214:Thumbnail800x800 .
}

ns324:Thumbnail400x400 {
    ns324:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:organization3 .

    ns376:CmsImage1 foaf:thumbnail ns324:Thumbnail400x400 .
}

ns6:Thumbnail200x200 {
    ns6:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns241:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:62 .

    ns241:CmsImage1 foaf:thumbnail ns6:Thumbnail200x200 .
}

ns336:Thumbnail400x400 {
    ns202:CmsImage1 foaf:thumbnail ns336:Thumbnail400x400 .

    ns336:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns202:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:freestandingwork9 .
}

ns86:CmsImage0 {
    ns86:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:102 .
}

ns303:CmsImage1 {
    ns303:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:69 .
}

ns329:CmsImage1 {
    ns329:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns92:work4 .
}

ns312:Thumbnail400x400 {
    ns312:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:41 .

    ns314:CmsImage1 foaf:thumbnail ns312:Thumbnail400x400 .
}

ns337:Thumbnail400x400 {
    ns337:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:22 .

    ns300:CmsImage0 foaf:thumbnail ns337:Thumbnail400x400 .
}

ns1:98 {
    ns1:98 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 8" ;
        skos:prefLabel "CmsConcept 98" .
}

ns54:Thumbnail800x800 {
    ns54:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns116:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:63 .

    ns116:CmsImage0 foaf:thumbnail ns54:Thumbnail800x800 .
}

ns106:Thumbnail400x400 {
    ns106:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns135:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:freestandingwork8 .

    ns135:CmsImage1 foaf:thumbnail ns106:Thumbnail400x400 .
}

ns338:Thumbnail600x600 {
    ns395:CmsImage0 foaf:thumbnail ns338:Thumbnail600x600 .

    ns338:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:98 .
}

ns44:Thumbnail800x800 {
    ns44:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns31:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:67 .

    ns31:CmsImage0 foaf:thumbnail ns44:Thumbnail800x800 .
}

ns337:Thumbnail800x800 {
    ns337:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:22 .

    ns300:CmsImage0 foaf:thumbnail ns337:Thumbnail800x800 .
}

ns1:55 {
    ns1:55 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 5" ;
        skos:prefLabel "CmsConcept 55" .
}

ns137:Thumbnail200x200 {
    ns137:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns322:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:8 .

    ns322:CmsImage1 foaf:thumbnail ns137:Thumbnail200x200 .
}

ns339:Thumbnail800x800 {
    ns168:CmsImage0 foaf:thumbnail ns339:Thumbnail800x800 .

    ns339:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns168:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:48 .
}

ns340:Thumbnail600x600 {
    ns143:CmsImage1 foaf:thumbnail ns340:Thumbnail600x600 .

    ns340:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns143:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:49 .
}

ns54:Thumbnail400x400 {
    ns54:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns116:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:63 .

    ns116:CmsImage0 foaf:thumbnail ns54:Thumbnail400x400 .
}

ns315:CmsImage1 {
    ns315:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:collection1 .
}

ns341:CmsImage1 {
    ns341:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:37 .
}

ns171:Thumbnail400x400 {
    ns171:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns47:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:27 .

    ns47:CmsImage1 foaf:thumbnail ns171:Thumbnail400x400 .
}

ns56:Thumbnail600x600 {
    ns56:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns107:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:36 .

    ns107:CmsImage0 foaf:thumbnail ns56:Thumbnail600x600 .
}

ns28:Thumbnail200x200 {
    ns28:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:freestandingwork10 .

    ns392:CmsImage0 foaf:thumbnail ns28:Thumbnail200x200 .
}

ns181:Thumbnail800x800 {
    ns181:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns32:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:31 .

    ns32:CmsImage0 foaf:thumbnail ns181:Thumbnail800x800 .
}

ns342:CmsImage0 {
    ns342:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns3:work3 .
}

ns193:Thumbnail200x200 {
    ns193:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:0 .

    ns309:CmsImage0 foaf:thumbnail ns193:Thumbnail200x200 .
}

ns104:Thumbnail400x400 {
    ns104:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:18 .

    ns231:CmsImage1 foaf:thumbnail ns104:Thumbnail400x400 .
}

ns105:Thumbnail800x800 {
    ns105:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns92:work5 .

    ns117:CmsImage1 foaf:thumbnail ns105:Thumbnail800x800 .
}

ns339:Thumbnail600x600 {
    ns339:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns168:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:48 .

    ns168:CmsImage0 foaf:thumbnail ns339:Thumbnail600x600 .
}

ns240:Thumbnail400x400 {
    ns240:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:99 .

    ns228:CmsImage1 foaf:thumbnail ns240:Thumbnail400x400 .
}

ns343:Thumbnail800x800 {
    ns343:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns75:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:25 .

    ns75:CmsImage0 foaf:thumbnail ns343:Thumbnail800x800 .
}

ns1:4 {
    ns1:4 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 4" ;
        skos:prefLabel "CmsConcept 4" .
}

ns140:Thumbnail400x400 {
    ns140:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:71 .

    ns334:CmsImage1 foaf:thumbnail ns140:Thumbnail400x400 .
}

ns272:Thumbnail800x800 {
    ns272:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:107 .

    ns387:CmsImage0 foaf:thumbnail ns272:Thumbnail800x800 .
}

ns49:Thumbnail200x200 {
    ns49:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns159:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:5 .

    ns159:CmsImage0 foaf:thumbnail ns49:Thumbnail200x200 .
}

ns344:CmsImage1 {
    ns344:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:70 .
}

ns165:Thumbnail600x600 {
    ns165:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:96 .

    ns366:CmsImage0 foaf:thumbnail ns165:Thumbnail600x600 .
}

ns345:Thumbnail200x200 {
    ns345:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:74 .

    ns238:CmsImage1 foaf:thumbnail ns345:Thumbnail200x200 .
}

ns339:Thumbnail200x200 {
    ns339:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns168:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:48 .

    ns168:CmsImage0 foaf:thumbnail ns339:Thumbnail200x200 .
}

ns112:Thumbnail200x200 {
    ns112:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:90 .

    ns288:CmsImage0 foaf:thumbnail ns112:Thumbnail200x200 .
}

ns346:Thumbnail600x600 {
    ns346:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns148:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:organization2 .

    ns148:CmsImage0 foaf:thumbnail ns346:Thumbnail600x600 .
}

ns68:Thumbnail200x200 {
    ns68:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns199:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:55 .

    ns199:CmsImage0 foaf:thumbnail ns68:Thumbnail200x200 .
}

ns91:Thumbnail600x600 {
    ns91:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns3:work3 .

    ns342:CmsImage0 foaf:thumbnail ns91:Thumbnail600x600 .
}

ns108:Thumbnail200x200 {
    ns108:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:1 .

    ns372:CmsImage0 foaf:thumbnail ns108:Thumbnail200x200 .
}

ns273:Thumbnail200x200 {
    ns273:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns369:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:45 .

    ns369:CmsImage1 foaf:thumbnail ns273:Thumbnail200x200 .
}

ns336:Thumbnail200x200 {
    ns336:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns202:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:freestandingwork9 .

    ns202:CmsImage1 foaf:thumbnail ns336:Thumbnail200x200 .
}

ns218:Thumbnail800x800 {
    ns218:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns60:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:82 .

    ns60:CmsImage1 foaf:thumbnail ns218:Thumbnail800x800 .
}

ns21:Thumbnail400x400 {
    ns21:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns258:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:12 .

    ns258:CmsImage0 foaf:thumbnail ns21:Thumbnail400x400 .
}

ns170:Thumbnail200x200 {
    ns170:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns116:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:63 .

    ns116:CmsImage1 foaf:thumbnail ns170:Thumbnail200x200 .
}

ns189:Thumbnail800x800 {
    ns189:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns92:work6 .

    ns270:CmsImage0 foaf:thumbnail ns189:Thumbnail800x800 .
}

ns3:work3Location {
    ns3:work3Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns307:Thumbnail200x200 {
    ns307:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:24 .

    ns158:CmsImage0 foaf:thumbnail ns307:Thumbnail200x200 .
}

ns301:Thumbnail200x200 {
    ns301:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns367:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:100 .

    ns367:CmsImage0 foaf:thumbnail ns301:Thumbnail200x200 .
}

ns40:Thumbnail400x400 {
    ns40:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns107:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:36 .

    ns107:CmsImage1 foaf:thumbnail ns40:Thumbnail400x400 .
}

ns15:Thumbnail600x600 {
    ns15:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:22 .

    ns300:CmsImage1 foaf:thumbnail ns15:Thumbnail600x600 .
}

ns122:Thumbnail400x400 {
    ns122:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns149:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:33 .

    ns149:CmsImage1 foaf:thumbnail ns122:Thumbnail400x400 .
}

ns102:Thumbnail600x600 {
    ns102:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:37 .

    ns341:CmsImage1 foaf:thumbnail ns102:Thumbnail600x600 .
}

ns292:Thumbnail800x800 {
    ns292:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:76 .

    ns373:CmsImage1 foaf:thumbnail ns292:Thumbnail800x800 .
}

ns1:97 {
    ns1:97 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 7" ;
        skos:prefLabel "CmsConcept 97" .
}

ns92:work7Opening {
    ns92:work7Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-25"^^xsd:date ;
        dcterms:spatial _:N24c50b5366394fe3a8b3d1d3030a8f32 ;
        dcterms:title "CmsCollection1CmsWork7 opening" ;
        cms:work ns92:work7 .

    _:N24c50b5366394fe3a8b3d1d3030a8f32 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns347:Thumbnail600x600 {
    ns376:CmsImage0 foaf:thumbnail ns347:Thumbnail600x600 .

    ns347:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:organization3 .
}

ns234:Thumbnail800x800 {
    ns234:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns126:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:2 .

    ns126:CmsImage1 foaf:thumbnail ns234:Thumbnail800x800 .
}

ns125:Thumbnail400x400 {
    ns125:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns135:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:freestandingwork8 .

    ns135:CmsImage0 foaf:thumbnail ns125:Thumbnail400x400 .
}

ns161:Thumbnail600x600 {
    ns161:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:56 .

    ns349:CmsImage1 foaf:thumbnail ns161:Thumbnail600x600 .
}

ns297:Thumbnail800x800 {
    ns297:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns109:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:108 .

    ns109:CmsImage1 foaf:thumbnail ns297:Thumbnail800x800 .
}

ns348:CmsImage1 {
    ns348:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:95 .
}

ns337:Thumbnail600x600 {
    ns337:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:22 .

    ns300:CmsImage0 foaf:thumbnail ns337:Thumbnail600x600 .
}

ns317:Thumbnail600x600 {
    ns317:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns3:work1 .

    ns280:CmsImage0 foaf:thumbnail ns317:Thumbnail600x600 .
}

ns349:CmsImage0 {
    ns349:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:56 .
}

ns61:Thumbnail800x800 {
    ns61:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns59:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:9 .

    ns59:CmsImage1 foaf:thumbnail ns61:Thumbnail800x800 .
}

ns311:Thumbnail200x200 {
    ns311:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:50 .

    ns356:CmsImage1 foaf:thumbnail ns311:Thumbnail200x200 .
}

ns292:Thumbnail600x600 {
    ns292:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:76 .

    ns373:CmsImage1 foaf:thumbnail ns292:Thumbnail600x600 .
}

ns350:Thumbnail200x200 {
    ns230:CmsImage0 foaf:thumbnail ns350:Thumbnail200x200 .

    ns350:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns230:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:46 .
}

ns65:freestandingwork11Creation {
    ns65:freestandingwork11Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:organization3,
            ns65:organization4 ;
        dcterms:date _:Ne0f3439096634a45a1245412924fece4 ;
        dcterms:spatial ns65:freestandingwork11Location ;
        dcterms:title "FreestandingWork11 creation" ;
        cms:work ns65:freestandingwork11 .

    _:Ne0f3439096634a45a1245412924fece4 a cms:DateTimeDescription ;
        time:day "---21"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns88:Thumbnail400x400 {
    ns88:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:18 .

    ns231:CmsImage0 foaf:thumbnail ns88:Thumbnail400x400 .
}

ns351:Thumbnail600x600 {
    ns111:CmsImage1 foaf:thumbnail ns351:Thumbnail600x600 .

    ns351:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns111:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:23 .
}

ns65:freestandingwork8Creation {
    ns65:freestandingwork8Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:organization0,
            ns65:organization1 ;
        dcterms:date _:Ne0e835036890421282ee06f1e08d9fe5 ;
        dcterms:description _:Na357a585ddfd4f919cf197eac0ec6baa ;
        dcterms:spatial ns65:freestandingwork8Location ;
        dcterms:title "FreestandingWork8 creation" ;
        cms:work ns65:freestandingwork8 .

    _:Ne0e835036890421282ee06f1e08d9fe5 a cms:DateTimeDescription ;
        time:day "---24"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:Na357a585ddfd4f919cf197eac0ec6baa a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns138:Thumbnail800x800 {
    ns138:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:40 .

    ns308:CmsImage0 foaf:thumbnail ns138:Thumbnail800x800 .
}

ns306:Thumbnail200x200 {
    ns306:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns331:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:11 .

    ns331:CmsImage0 foaf:thumbnail ns306:Thumbnail200x200 .
}

ns65:freestandingwork11Location {
    ns65:freestandingwork11Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns352:CmsImage0 {
    ns352:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:10 .
}

ns197:Thumbnail400x400 {
    ns197:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:95 .

    ns348:CmsImage0 foaf:thumbnail ns197:Thumbnail400x400 .
}

ns253:Thumbnail800x800 {
    ns253:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns168:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:48 .

    ns168:CmsImage1 foaf:thumbnail ns253:Thumbnail800x800 .
}

ns57:Thumbnail200x200 {
    ns57:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:71 .

    ns334:CmsImage0 foaf:thumbnail ns57:Thumbnail200x200 .
}

ns211:Thumbnail800x800 {
    ns211:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:96 .

    ns366:CmsImage1 foaf:thumbnail ns211:Thumbnail800x800 .
}

ns310:Thumbnail400x400 {
    ns310:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns31:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:67 .

    ns31:CmsImage1 foaf:thumbnail ns310:Thumbnail400x400 .
}

ns110:Thumbnail200x200 {
    ns110:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns361:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:68 .

    ns361:CmsImage0 foaf:thumbnail ns110:Thumbnail200x200 .
}

ns31:CmsImage1 {
    ns31:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:67 .
}

ns145:CmsImage0 {
    ns145:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:88 .
}

ns80:Thumbnail800x800 {
    ns80:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns344:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:70 .

    ns344:CmsImage1 foaf:thumbnail ns80:Thumbnail800x800 .
}

ns343:Thumbnail600x600 {
    ns343:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns75:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:25 .

    ns75:CmsImage0 foaf:thumbnail ns343:Thumbnail600x600 .
}

ns353:CmsImage1 {
    ns353:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:83 .
}

ns354:Thumbnail400x400 {
    ns354:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns237:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:75 .

    ns237:CmsImage0 foaf:thumbnail ns354:Thumbnail400x400 .
}

ns56:Thumbnail400x400 {
    ns56:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns107:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:36 .

    ns107:CmsImage0 foaf:thumbnail ns56:Thumbnail400x400 .
}

ns317:Thumbnail400x400 {
    ns317:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns3:work1 .

    ns280:CmsImage0 foaf:thumbnail ns317:Thumbnail400x400 .
}

ns355:CmsImage0 {
    ns355:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:organization1 .
}

ns200:Thumbnail200x200 {
    ns200:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns369:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:45 .

    ns369:CmsImage0 foaf:thumbnail ns200:Thumbnail200x200 .
}

ns243:Thumbnail200x200 {
    ns243:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:19 .

    ns402:CmsImage0 foaf:thumbnail ns243:Thumbnail200x200 .
}

ns178:Thumbnail400x400 {
    ns178:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns258:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:12 .

    ns258:CmsImage1 foaf:thumbnail ns178:Thumbnail400x400 .
}

ns235:Thumbnail400x400 {
    ns235:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:66 .

    ns378:CmsImage0 foaf:thumbnail ns235:Thumbnail400x400 .
}

ns89:Thumbnail200x200 {
    ns89:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns153:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:44 .

    ns153:CmsImage1 foaf:thumbnail ns89:Thumbnail200x200 .
}

ns1:72 {
    ns1:72 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 2" ;
        skos:prefLabel "CmsConcept 72" .
}

ns308:CmsImage0 {
    ns308:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:40 .
}

ns356:CmsImage1 {
    ns356:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:50 .
}

ns302:CmsImage0 {
    ns302:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:38 .
}

ns212:Thumbnail400x400 {
    ns212:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns344:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:70 .

    ns344:CmsImage0 foaf:thumbnail ns212:Thumbnail400x400 .
}

ns146:Thumbnail800x800 {
    ns146:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns363:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:42 .

    ns363:CmsImage1 foaf:thumbnail ns146:Thumbnail800x800 .
}

ns82:Thumbnail200x200 {
    ns82:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns98:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:103 .

    ns98:CmsImage1 foaf:thumbnail ns82:Thumbnail200x200 .
}

ns24:Thumbnail800x800 {
    ns24:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns166:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:52 .

    ns166:CmsImage1 foaf:thumbnail ns24:Thumbnail800x800 .
}

ns120:Thumbnail400x400 {
    ns120:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:60 .

    ns384:CmsImage1 foaf:thumbnail ns120:Thumbnail400x400 .
}

ns331:CmsImage0 {
    ns331:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:11 .
}

ns357:Thumbnail600x600 {
    ns365:CmsImage1 foaf:thumbnail ns357:Thumbnail600x600 .

    ns357:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:105 .
}

ns38:CmsImage1 {
    ns38:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:77 .
}

ns247:Thumbnail400x400 {
    ns247:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns353:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:83 .

    ns353:CmsImage1 foaf:thumbnail ns247:Thumbnail400x400 .
}

ns110:Thumbnail600x600 {
    ns110:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns361:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:68 .

    ns361:CmsImage0 foaf:thumbnail ns110:Thumbnail600x600 .
}

ns272:Thumbnail200x200 {
    ns272:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:107 .

    ns387:CmsImage0 foaf:thumbnail ns272:Thumbnail200x200 .
}

ns65:freestandingwork9Opening {
    ns65:freestandingwork9Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-23"^^xsd:date ;
        dcterms:spatial _:N03451bf7a4a54476b6954241ceffeec7 ;
        dcterms:title "FreestandingWork9 opening" ;
        cms:work ns65:freestandingwork9 .

    _:N03451bf7a4a54476b6954241ceffeec7 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns301:Thumbnail800x800 {
    ns301:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns367:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:100 .

    ns367:CmsImage0 foaf:thumbnail ns301:Thumbnail800x800 .
}

ns358:Thumbnail600x600 {
    ns358:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns167:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:51 .

    ns167:CmsImage1 foaf:thumbnail ns358:Thumbnail600x600 .
}

ns336:Thumbnail600x600 {
    ns336:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns202:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:freestandingwork9 .

    ns202:CmsImage1 foaf:thumbnail ns336:Thumbnail600x600 .
}

ns182:Thumbnail800x800 {
    ns182:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:17 .

    ns194:CmsImage1 foaf:thumbnail ns182:Thumbnail800x800 .
}

ns192:Thumbnail200x200 {
    ns192:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:24 .

    ns158:CmsImage1 foaf:thumbnail ns192:Thumbnail200x200 .
}

ns65:freestandingwork11 {
    ns65:freestandingwork11 a cms:Work ;
        dcterms:alternative "FreestandingWork11 alternative title 0",
            "FreestandingWork11 alternative title 1" ;
        dcterms:contributor _:Ndbcc21e4ed9d4a8f8a4b69ef042b64b9,
            _:Ne386671673e14838b72a76904f95b5d4 ;
        dcterms:creator ns65:organization3,
            ns65:organization4 ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 rights holder" ;
        dcterms:source ns1:61,
            ns1:62 ;
        dcterms:spatial ns65:freestandingwork11Location ;
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
            ns1:92 .

    _:Ndbcc21e4ed9d4a8f8a4b69ef042b64b9 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 0" .

    _:Ne386671673e14838b72a76904f95b5d4 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 1" .
}

ns1:27 {
    ns1:27 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 7" ;
        skos:prefLabel "CmsConcept 27" .
}

ns113:Thumbnail600x600 {
    ns113:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:28 .

    ns401:CmsImage1 foaf:thumbnail ns113:Thumbnail600x600 .
}

ns253:Thumbnail200x200 {
    ns253:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns168:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:48 .

    ns168:CmsImage1 foaf:thumbnail ns253:Thumbnail200x200 .
}

ns359:Thumbnail800x800 {
    ns126:CmsImage0 foaf:thumbnail ns359:Thumbnail800x800 .

    ns359:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns126:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:2 .
}

ns360:Thumbnail200x200 {
    ns360:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:13 .

    ns84:CmsImage0 foaf:thumbnail ns360:Thumbnail200x200 .
}

ns316:Thumbnail800x800 {
    ns316:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:76 .

    ns373:CmsImage0 foaf:thumbnail ns316:Thumbnail800x800 .
}

ns289:Thumbnail200x200 {
    ns289:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:95 .

    ns348:CmsImage1 foaf:thumbnail ns289:Thumbnail200x200 .
}

ns361:CmsImage1 {
    ns361:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:68 .
}

ns283:Thumbnail400x400 {
    ns283:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:0 .

    ns309:CmsImage1 foaf:thumbnail ns283:Thumbnail400x400 .
}

ns362:Thumbnail200x200 {
    ns362:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns162:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:58 .

    ns162:CmsImage1 foaf:thumbnail ns362:Thumbnail200x200 .
}

ns93:Thumbnail400x400 {
    ns93:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:91 .

    ns394:CmsImage1 foaf:thumbnail ns93:Thumbnail400x400 .
}

ns338:Thumbnail800x800 {
    ns338:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:98 .

    ns395:CmsImage0 foaf:thumbnail ns338:Thumbnail800x800 .
}

ns363:CmsImage1 {
    ns363:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:42 .
}

ns1:102 {
    ns1:102 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 2" ;
        skos:prefLabel "CmsConcept 102" .
}

ns174:Thumbnail400x400 {
    ns174:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns11:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:person1 .

    ns11:CmsImage1 foaf:thumbnail ns174:Thumbnail400x400 .
}

ns19:Thumbnail200x200 {
    ns19:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns303:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:69 .

    ns303:CmsImage1 foaf:thumbnail ns19:Thumbnail200x200 .
}

ns104:Thumbnail800x800 {
    ns104:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:18 .

    ns231:CmsImage1 foaf:thumbnail ns104:Thumbnail800x800 .
}

ns1:61 {
    ns1:61 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 1" ;
        skos:prefLabel "CmsConcept 61" .
}

ns316:Thumbnail200x200 {
    ns316:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:76 .

    ns373:CmsImage0 foaf:thumbnail ns316:Thumbnail200x200 .
}

ns147:Thumbnail800x800 {
    ns147:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns304:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns92:work7 .

    ns304:CmsImage0 foaf:thumbnail ns147:Thumbnail800x800 .
}

ns160:Thumbnail600x600 {
    ns160:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns142:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:20 .

    ns142:CmsImage0 foaf:thumbnail ns160:Thumbnail600x600 .
}

dcterms:spatial {
    dcterms:spatial a cms:Property ;
        rdfs:label "Spatial" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> .
}

ns1:28 {
    ns1:28 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 8" ;
        skos:prefLabel "CmsConcept 28" .
}

ns252:Thumbnail200x200 {
    ns252:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:43 .

    ns374:CmsImage0 foaf:thumbnail ns252:Thumbnail200x200 .
}

ns357:Thumbnail800x800 {
    ns357:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:105 .

    ns365:CmsImage1 foaf:thumbnail ns357:Thumbnail800x800 .
}

ns94:Thumbnail200x200 {
    ns94:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns264:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:78 .

    ns264:CmsImage0 foaf:thumbnail ns94:Thumbnail200x200 .
}

ns277:Thumbnail800x800 {
    ns277:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:92 .

    ns381:CmsImage0 foaf:thumbnail ns277:Thumbnail800x800 .
}

ns203:Thumbnail600x600 {
    ns203:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:97 .

    ns385:CmsImage1 foaf:thumbnail ns203:Thumbnail600x600 .
}

ns1:99 {
    ns1:99 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 9" ;
        skos:prefLabel "CmsConcept 99" .
}

ns333:Thumbnail200x200 {
    ns333:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns92:work5 .

    ns117:CmsImage0 foaf:thumbnail ns333:Thumbnail200x200 .
}

ns341:CmsImage0 {
    ns341:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:37 .
}

ns163:Thumbnail400x400 {
    ns163:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns321:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:47 .

    ns321:CmsImage1 foaf:thumbnail ns163:Thumbnail400x400 .
}

ns212:Thumbnail800x800 {
    ns212:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns344:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:70 .

    ns344:CmsImage0 foaf:thumbnail ns212:Thumbnail800x800 .
}

ns146:Thumbnail400x400 {
    ns146:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns363:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:42 .

    ns363:CmsImage1 foaf:thumbnail ns146:Thumbnail400x400 .
}

ns259:Thumbnail200x200 {
    ns259:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns145:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:88 .

    ns145:CmsImage0 foaf:thumbnail ns259:Thumbnail200x200 .
}

ns251:Thumbnail800x800 {
    ns251:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns92:work6 .

    ns270:CmsImage1 foaf:thumbnail ns251:Thumbnail800x800 .
}

ns34:Thumbnail600x600 {
    ns34:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:21 .

    ns398:CmsImage1 foaf:thumbnail ns34:Thumbnail600x600 .
}

ns3:work3 {
    ns3:work3 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork3 alternative title 0",
            "CmsCollection0CmsWork3 alternative title 1" ;
        dcterms:contributor _:N4db9527a20184bef979e62ca3d08cc28,
            _:Ncbafa6ce0e3b4112a34d6b1b1a090239 ;
        dcterms:creator ns65:person0,
            ns65:person1 ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 rights holder" ;
        dcterms:source ns1:63,
            ns1:64 ;
        dcterms:spatial ns3:work3Location ;
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
        cms:collection ns65:collection0 .

    _:N4db9527a20184bef979e62ca3d08cc28 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 1" .

    _:Ncbafa6ce0e3b4112a34d6b1b1a090239 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 0" .
}

ns88:Thumbnail600x600 {
    ns88:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:18 .

    ns231:CmsImage0 foaf:thumbnail ns88:Thumbnail600x600 .
}

ns223:Thumbnail600x600 {
    ns223:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:16 .

    ns276:CmsImage1 foaf:thumbnail ns223:Thumbnail600x600 .
}

ns1:36 {
    ns1:36 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 6" ;
        skos:prefLabel "CmsConcept 36" .
}

ns18:Thumbnail600x600 {
    ns18:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns115:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns3:work0 .

    ns115:CmsImage1 foaf:thumbnail ns18:Thumbnail600x600 .
}

ns364:Thumbnail800x800 {
    ns396:CmsImage1 foaf:thumbnail ns364:Thumbnail800x800 .

    ns364:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:101 .
}

ns102:Thumbnail800x800 {
    ns102:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:37 .

    ns341:CmsImage1 foaf:thumbnail ns102:Thumbnail800x800 .
}

ns327:Thumbnail800x800 {
    ns327:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:10 .

    ns352:CmsImage1 foaf:thumbnail ns327:Thumbnail800x800 .
}

ns259:Thumbnail800x800 {
    ns259:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns145:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:88 .

    ns145:CmsImage0 foaf:thumbnail ns259:Thumbnail800x800 .
}

ns346:Thumbnail800x800 {
    ns346:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns148:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:organization2 .

    ns148:CmsImage0 foaf:thumbnail ns346:Thumbnail800x800 .
}

ns255:Thumbnail600x600 {
    ns255:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns320:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:72 .

    ns320:CmsImage1 foaf:thumbnail ns255:Thumbnail600x600 .
}

ns190:Thumbnail400x400 {
    ns190:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns70:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:14 .

    ns70:CmsImage1 foaf:thumbnail ns190:Thumbnail400x400 .
}

ns215:Thumbnail600x600 {
    ns215:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:56 .

    ns349:CmsImage0 foaf:thumbnail ns215:Thumbnail600x600 .
}

ns319:Thumbnail600x600 {
    ns319:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns59:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:9 .

    ns59:CmsImage0 foaf:thumbnail ns319:Thumbnail600x600 .
}

ns101:Thumbnail200x200 {
    ns101:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns3:work2 .

    ns179:CmsImage0 foaf:thumbnail ns101:Thumbnail200x200 .
}

ns236:Thumbnail600x600 {
    ns236:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns145:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:88 .

    ns145:CmsImage1 foaf:thumbnail ns236:Thumbnail600x600 .
}

ns191:Thumbnail600x600 {
    ns191:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns143:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:49 .

    ns143:CmsImage0 foaf:thumbnail ns191:Thumbnail600x600 .
}

ns365:CmsImage1 {
    ns365:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:105 .
}

ns1:68 {
    ns1:68 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 8" ;
        skos:prefLabel "CmsConcept 68" .
}

ns274:Thumbnail600x600 {
    ns274:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns38:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:77 .

    ns38:CmsImage0 foaf:thumbnail ns274:Thumbnail600x600 .
}

ns286:Thumbnail400x400 {
    ns286:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns281:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:30 .

    ns281:CmsImage1 foaf:thumbnail ns286:Thumbnail400x400 .
}

ns354:Thumbnail800x800 {
    ns354:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns237:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:75 .

    ns237:CmsImage0 foaf:thumbnail ns354:Thumbnail800x800 .
}

ns55:Thumbnail800x800 {
    ns55:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns353:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:83 .

    ns353:CmsImage0 foaf:thumbnail ns55:Thumbnail800x800 .
}

ns141:Thumbnail600x600 {
    ns141:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns202:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:freestandingwork9 .

    ns202:CmsImage0 foaf:thumbnail ns141:Thumbnail600x600 .
}

ns213:Thumbnail200x200 {
    ns213:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns86:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:102 .

    ns86:CmsImage1 foaf:thumbnail ns213:Thumbnail200x200 .
}

ns92:work7Location {
    ns92:work7Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns171:Thumbnail600x600 {
    ns171:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns47:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:27 .

    ns47:CmsImage1 foaf:thumbnail ns171:Thumbnail600x600 .
}

ns55:Thumbnail200x200 {
    ns55:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns353:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:83 .

    ns353:CmsImage0 foaf:thumbnail ns55:Thumbnail200x200 .
}

ns223:Thumbnail400x400 {
    ns223:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:16 .

    ns276:CmsImage1 foaf:thumbnail ns223:Thumbnail400x400 .
}

ns366:CmsImage1 {
    ns366:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:96 .
}

ns1:47 {
    ns1:47 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 7" ;
        skos:prefLabel "CmsConcept 47" .
}

ns28:Thumbnail400x400 {
    ns28:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:freestandingwork10 .

    ns392:CmsImage0 foaf:thumbnail ns28:Thumbnail400x400 .
}

ns97:Thumbnail800x800 {
    ns97:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:6 .

    ns278:CmsImage0 foaf:thumbnail ns97:Thumbnail800x800 .
}

ns358:Thumbnail800x800 {
    ns358:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns167:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:51 .

    ns167:CmsImage1 foaf:thumbnail ns358:Thumbnail800x800 .
}

ns333:Thumbnail600x600 {
    ns333:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns92:work5 .

    ns117:CmsImage0 foaf:thumbnail ns333:Thumbnail600x600 .
}

ns51:Thumbnail400x400 {
    ns51:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns92:work4 .

    ns329:CmsImage0 foaf:thumbnail ns51:Thumbnail400x400 .
}

ns132:Thumbnail400x400 {
    ns132:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns264:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:78 .

    ns264:CmsImage1 foaf:thumbnail ns132:Thumbnail400x400 .
}

ns367:CmsImage1 {
    ns367:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:100 .
}

ns12:Thumbnail400x400 {
    ns12:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:3 .

    ns261:CmsImage1 foaf:thumbnail ns12:Thumbnail400x400 .
}

ns157:Thumbnail400x400 {
    ns157:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns299:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:32 .

    ns299:CmsImage0 foaf:thumbnail ns157:Thumbnail400x400 .
}

ns205:Thumbnail800x800 {
    ns205:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:organization0 .

    ns5:CmsImage1 foaf:thumbnail ns205:Thumbnail800x800 .
}

ns316:Thumbnail400x400 {
    ns316:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:76 .

    ns373:CmsImage0 foaf:thumbnail ns316:Thumbnail400x400 .
}

ns368:CmsImage0 {
    ns368:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:85 .
}

ns182:Thumbnail200x200 {
    ns182:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:17 .

    ns194:CmsImage1 foaf:thumbnail ns182:Thumbnail200x200 .
}

ns211:Thumbnail400x400 {
    ns211:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:96 .

    ns366:CmsImage1 foaf:thumbnail ns211:Thumbnail400x400 .
}

ns216:Thumbnail800x800 {
    ns216:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns111:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:23 .

    ns111:CmsImage0 foaf:thumbnail ns216:Thumbnail800x800 .
}

ns345:Thumbnail400x400 {
    ns345:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:74 .

    ns238:CmsImage1 foaf:thumbnail ns345:Thumbnail400x400 .
}

ns136:Thumbnail400x400 {
    ns136:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:person2 .

    ns123:CmsImage0 foaf:thumbnail ns136:Thumbnail400x400 .
}

vra:culturalContext {
    vra:culturalContext a cms:Property ;
        rdfs:label "Cultural context" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> .
}

ns256:Thumbnail600x600 {
    ns256:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:86 .

    ns220:CmsImage1 foaf:thumbnail ns256:Thumbnail600x600 .
}

ns260:Thumbnail400x400 {
    ns260:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:106 .

    ns128:CmsImage1 foaf:thumbnail ns260:Thumbnail400x400 .
}

ns264:CmsImage1 {
    ns264:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:78 .
}

ns369:CmsImage0 {
    ns369:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:45 .
}

_:N13512a6367c1414780d34c92f0626747 {
    _:N13512a6367c1414780d34c92f0626747 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N03451bf7a4a54476b6954241ceffeec7 ;
        dcterms:title "FreestandingWork9 closing" ;
        cms:work ns65:freestandingwork9 .

    _:N03451bf7a4a54476b6954241ceffeec7 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns127:Thumbnail200x200 {
    ns127:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:86 .

    ns220:CmsImage0 foaf:thumbnail ns127:Thumbnail200x200 .
}

ns312:Thumbnail800x800 {
    ns312:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:41 .

    ns314:CmsImage1 foaf:thumbnail ns312:Thumbnail800x800 .
}

ns93:Thumbnail800x800 {
    ns93:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:91 .

    ns394:CmsImage1 foaf:thumbnail ns93:Thumbnail800x800 .
}

ns319:Thumbnail800x800 {
    ns319:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns59:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:9 .

    ns59:CmsImage0 foaf:thumbnail ns319:Thumbnail800x800 .
}

ns346:Thumbnail200x200 {
    ns346:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns148:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:organization2 .

    ns148:CmsImage0 foaf:thumbnail ns346:Thumbnail200x200 .
}

ns1:60 {
    ns1:60 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 0" ;
        skos:prefLabel "CmsConcept 60" .
}

ns225:Thumbnail600x600 {
    ns225:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:1 .

    ns372:CmsImage1 foaf:thumbnail ns225:Thumbnail600x600 .
}

ns283:Thumbnail200x200 {
    ns283:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:0 .

    ns309:CmsImage1 foaf:thumbnail ns283:Thumbnail200x200 .
}

ns3:work1Location {
    ns3:work1Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns370:Thumbnail200x200 {
    ns271:CmsImage1 foaf:thumbnail ns370:Thumbnail200x200 .

    ns370:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns271:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:freestandingwork11 .
}

ns67:CmsImage1 {
    ns67:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:94 .
}

ns48:Thumbnail800x800 {
    ns48:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns303:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:69 .

    ns303:CmsImage0 foaf:thumbnail ns48:Thumbnail800x800 .
}

ns99:Thumbnail800x800 {
    ns99:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:97 .

    ns385:CmsImage0 foaf:thumbnail ns99:Thumbnail800x800 .
}

ns65:freestandingwork11Opening {
    ns65:freestandingwork11Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-21"^^xsd:date ;
        dcterms:spatial _:N743263c1e5ef441797a7dbdc69ffbea3 ;
        dcterms:title "FreestandingWork11 opening" ;
        cms:work ns65:freestandingwork11 .

    _:N743263c1e5ef441797a7dbdc69ffbea3 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns371:CmsImage1 {
    ns371:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:29 .
}

ns330:Thumbnail400x400 {
    ns330:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns3:work1 .

    ns280:CmsImage1 foaf:thumbnail ns330:Thumbnail400x400 .
}

ns297:Thumbnail600x600 {
    ns297:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns109:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:108 .

    ns109:CmsImage1 foaf:thumbnail ns297:Thumbnail600x600 .
}

ns20:Thumbnail200x200 {
    ns20:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns64:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:54 .

    ns64:CmsImage0 foaf:thumbnail ns20:Thumbnail200x200 .
}

ns355:CmsImage1 {
    ns355:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:organization1 .
}

ns372:CmsImage0 {
    ns372:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:1 .
}

ns7:Thumbnail600x600 {
    ns7:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns281:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:30 .

    ns281:CmsImage0 foaf:thumbnail ns7:Thumbnail600x600 .
}

ns79:Thumbnail600x600 {
    ns79:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:39 .

    ns335:CmsImage0 foaf:thumbnail ns79:Thumbnail600x600 .
}

ns249:Thumbnail600x600 {
    ns249:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:collection1 .

    ns315:CmsImage0 foaf:thumbnail ns249:Thumbnail600x600 .
}

ns65:freestandingwork10Creation {
    ns65:freestandingwork10Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:organization2,
            ns65:organization3 ;
        dcterms:date _:Nf9c7219cc2d944ac9984fd4f938b21d2 ;
        dcterms:description _:Nb493bacb65c346c89af788f0e800cfae ;
        dcterms:spatial ns65:freestandingwork10Location ;
        dcterms:title "FreestandingWork10 creation" ;
        cms:work ns65:freestandingwork10 .

    _:Nf9c7219cc2d944ac9984fd4f938b21d2 a cms:DateTimeDescription ;
        time:day "---22"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:Nb493bacb65c346c89af788f0e800cfae a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns162:CmsImage0 {
    ns162:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:58 .
}

ns275:Thumbnail600x600 {
    ns275:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:59 .

    ns397:CmsImage1 foaf:thumbnail ns275:Thumbnail600x600 .
}

ns296:Thumbnail400x400 {
    ns296:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns367:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:100 .

    ns367:CmsImage1 foaf:thumbnail ns296:Thumbnail400x400 .
}

ns290:Thumbnail600x600 {
    ns290:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:40 .

    ns308:CmsImage1 foaf:thumbnail ns290:Thumbnail600x600 .
}

ns25:Thumbnail200x200 {
    ns25:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns299:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:32 .

    ns299:CmsImage1 foaf:thumbnail ns25:Thumbnail200x200 .
}

ns135:CmsImage0 {
    ns135:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:freestandingwork8 .
}

ns345:Thumbnail600x600 {
    ns345:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:74 .

    ns238:CmsImage1 foaf:thumbnail ns345:Thumbnail600x600 .
}

ns161:Thumbnail400x400 {
    ns161:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:56 .

    ns349:CmsImage1 foaf:thumbnail ns161:Thumbnail400x400 .
}

ns45:Thumbnail600x600 {
    ns45:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns64:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:54 .

    ns64:CmsImage1 foaf:thumbnail ns45:Thumbnail600x600 .
}

ns25:Thumbnail600x600 {
    ns25:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns299:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:32 .

    ns299:CmsImage1 foaf:thumbnail ns25:Thumbnail600x600 .
}

ns373:CmsImage1 {
    ns373:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:76 .
}

_:N4a274b7ef8454664b1e3a84cb741f530 {
    _:N4a274b7ef8454664b1e3a84cb741f530 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N743263c1e5ef441797a7dbdc69ffbea3 ;
        dcterms:title "FreestandingWork11 closing" ;
        cms:work ns65:freestandingwork11 .

    _:N743263c1e5ef441797a7dbdc69ffbea3 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns243:Thumbnail800x800 {
    ns243:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:19 .

    ns402:CmsImage0 foaf:thumbnail ns243:Thumbnail800x800 .
}

ns197:Thumbnail200x200 {
    ns197:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:95 .

    ns348:CmsImage0 foaf:thumbnail ns197:Thumbnail200x200 .
}

ns240:Thumbnail800x800 {
    ns240:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:99 .

    ns228:CmsImage1 foaf:thumbnail ns240:Thumbnail800x800 .
}

ns289:Thumbnail400x400 {
    ns289:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:95 .

    ns348:CmsImage1 foaf:thumbnail ns289:Thumbnail400x400 .
}

ns244:Thumbnail200x200 {
    ns244:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns38:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:77 .

    ns38:CmsImage1 foaf:thumbnail ns244:Thumbnail200x200 .
}

ns141:Thumbnail200x200 {
    ns141:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns202:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:freestandingwork9 .

    ns202:CmsImage0 foaf:thumbnail ns141:Thumbnail200x200 .
}

ns364:Thumbnail200x200 {
    ns364:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:101 .

    ns396:CmsImage1 foaf:thumbnail ns364:Thumbnail200x200 .
}

ns139:Thumbnail200x200 {
    ns139:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:17 .

    ns194:CmsImage0 foaf:thumbnail ns139:Thumbnail200x200 .
}

ns288:CmsImage1 {
    ns288:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:90 .
}

ns319:Thumbnail200x200 {
    ns319:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns59:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:9 .

    ns59:CmsImage0 foaf:thumbnail ns319:Thumbnail200x200 .
}

ns354:Thumbnail600x600 {
    ns354:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns237:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:75 .

    ns237:CmsImage0 foaf:thumbnail ns354:Thumbnail600x600 .
}

ns42:Thumbnail200x200 {
    ns42:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:65 .

    ns204:CmsImage1 foaf:thumbnail ns42:Thumbnail200x200 .
}

ns363:CmsImage0 {
    ns363:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:42 .
}

ns310:Thumbnail600x600 {
    ns310:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns31:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:67 .

    ns31:CmsImage1 foaf:thumbnail ns310:Thumbnail600x600 .
}

ns232:CmsImage0 {
    ns232:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:84 .
}

ns202:CmsImage1 {
    ns202:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:freestandingwork9 .
}

ns137:Thumbnail600x600 {
    ns137:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns322:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:8 .

    ns322:CmsImage1 foaf:thumbnail ns137:Thumbnail600x600 .
}

ns1:95 {
    ns1:95 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 5" ;
        skos:prefLabel "CmsConcept 95" .
}

ns73:Thumbnail200x200 {
    ns73:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:64 .

    ns377:CmsImage1 foaf:thumbnail ns73:Thumbnail200x200 .
}

ns183:Thumbnail400x400 {
    ns183:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:104 .

    ns326:CmsImage0 foaf:thumbnail ns183:Thumbnail400x400 .
}

ns178:Thumbnail800x800 {
    ns178:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns258:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:12 .

    ns258:CmsImage1 foaf:thumbnail ns178:Thumbnail800x800 .
}

ns374:CmsImage1 {
    ns374:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:43 .
}

_:N9648d4bf90dd4eeb82de3ab89db4bea9 {
    _:N9648d4bf90dd4eeb82de3ab89db4bea9 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:Nb493bacb65c346c89af788f0e800cfae ;
        dcterms:spatial _:N243e12aaf3724127af963a3b898d5a56 ;
        dcterms:title "FreestandingWork10 closing" ;
        cms:work ns65:freestandingwork10 .

    _:N243e12aaf3724127af963a3b898d5a56 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nb493bacb65c346c89af788f0e800cfae a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns161:Thumbnail200x200 {
    ns161:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:56 .

    ns349:CmsImage1 foaf:thumbnail ns161:Thumbnail200x200 .
}

ns36:Thumbnail800x800 {
    ns36:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns149:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:33 .

    ns149:CmsImage0 foaf:thumbnail ns36:Thumbnail800x800 .
}

ns320:CmsImage1 {
    ns320:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:72 .
}

ns1:101 {
    ns1:101 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 1" ;
        skos:prefLabel "CmsConcept 101" .
}

ns104:Thumbnail200x200 {
    ns104:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:18 .

    ns231:CmsImage1 foaf:thumbnail ns104:Thumbnail200x200 .
}

ns206:Thumbnail600x600 {
    ns206:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:29 .

    ns371:CmsImage1 foaf:thumbnail ns206:Thumbnail600x600 .
}

ns1:83 {
    ns1:83 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 3" ;
        skos:prefLabel "CmsConcept 83" .
}

ns1:50 {
    ns1:50 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 0" ;
        skos:prefLabel "CmsConcept 50" .
}

ns375:Thumbnail800x800 {
    ns261:CmsImage0 foaf:thumbnail ns375:Thumbnail800x800 .

    ns375:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:3 .
}

ns291:Thumbnail400x400 {
    ns291:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:freestandingwork10 .

    ns392:CmsImage1 foaf:thumbnail ns291:Thumbnail400x400 .
}

ns3:work2Opening {
    ns3:work2Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-30"^^xsd:date ;
        dcterms:description _:N717313eb610f4408a599409816b6f6a0 ;
        dcterms:spatial _:N2dc74ace0df642fb9abf2f6b923ad4d2 ;
        dcterms:title "CmsCollection0CmsWork2 opening" ;
        cms:work ns3:work2 .

    _:N2dc74ace0df642fb9abf2f6b923ad4d2 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N717313eb610f4408a599409816b6f6a0 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns325:Thumbnail200x200 {
    ns325:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns361:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:68 .

    ns361:CmsImage1 foaf:thumbnail ns325:Thumbnail200x200 .
}

ns359:Thumbnail200x200 {
    ns359:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns126:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:2 .

    ns126:CmsImage0 foaf:thumbnail ns359:Thumbnail200x200 .
}

ns113:Thumbnail200x200 {
    ns113:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:28 .

    ns401:CmsImage1 foaf:thumbnail ns113:Thumbnail200x200 .
}

ns312:Thumbnail200x200 {
    ns312:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:41 .

    ns314:CmsImage1 foaf:thumbnail ns312:Thumbnail200x200 .
}

ns52:Thumbnail600x600 {
    ns52:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns302:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:38 .

    ns302:CmsImage1 foaf:thumbnail ns52:Thumbnail600x600 .
}

ns357:Thumbnail400x400 {
    ns357:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:105 .

    ns365:CmsImage1 foaf:thumbnail ns357:Thumbnail400x400 .
}

ns83:Thumbnail200x200 {
    ns83:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns98:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:103 .

    ns98:CmsImage0 foaf:thumbnail ns83:Thumbnail200x200 .
}

ns13:Thumbnail200x200 {
    ns13:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns224:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:89 .

    ns224:CmsImage1 foaf:thumbnail ns13:Thumbnail200x200 .
}

ns352:CmsImage1 {
    ns352:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:10 .
}

ns235:Thumbnail800x800 {
    ns235:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:66 .

    ns378:CmsImage0 foaf:thumbnail ns235:Thumbnail800x800 .
}

ns201:Thumbnail400x400 {
    ns201:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:organization0 .

    ns5:CmsImage0 foaf:thumbnail ns201:Thumbnail400x400 .
}

ns1:22 {
    ns1:22 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 2" ;
        skos:prefLabel "CmsConcept 22" .
}

ns295:Thumbnail200x200 {
    ns295:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns167:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:51 .

    ns167:CmsImage0 foaf:thumbnail ns295:Thumbnail200x200 .
}

ns208:Thumbnail600x600 {
    ns208:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:41 .

    ns314:CmsImage0 foaf:thumbnail ns208:Thumbnail600x600 .
}

ns134:Thumbnail400x400 {
    ns134:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:60 .

    ns384:CmsImage0 foaf:thumbnail ns134:Thumbnail400x400 .
}

ns43:Thumbnail600x600 {
    ns43:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:7 .

    ns186:CmsImage1 foaf:thumbnail ns43:Thumbnail600x600 .
}

ns342:CmsImage1 {
    ns342:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns3:work3 .
}

ns310:Thumbnail800x800 {
    ns310:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns31:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:67 .

    ns31:CmsImage1 foaf:thumbnail ns310:Thumbnail800x800 .
}

ns212:Thumbnail600x600 {
    ns212:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns344:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:70 .

    ns344:CmsImage0 foaf:thumbnail ns212:Thumbnail600x600 .
}

ns376:CmsImage1 {
    ns376:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:organization3 .
}

ns377:CmsImage1 {
    ns377:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:64 .
}

ns360:Thumbnail400x400 {
    ns360:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:13 .

    ns84:CmsImage0 foaf:thumbnail ns360:Thumbnail400x400 .
}

ns111:CmsImage1 {
    ns111:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:23 .
}

ns110:Thumbnail400x400 {
    ns110:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns361:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:68 .

    ns361:CmsImage0 foaf:thumbnail ns110:Thumbnail400x400 .
}

ns262:Thumbnail400x400 {
    ns262:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns320:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:72 .

    ns320:CmsImage0 foaf:thumbnail ns262:Thumbnail400x400 .
}

ns1:15 {
    ns1:15 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 5" ;
        skos:prefLabel "CmsConcept 15" .
}

ns147:Thumbnail600x600 {
    ns147:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns304:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns92:work7 .

    ns304:CmsImage0 foaf:thumbnail ns147:Thumbnail600x600 .
}

ns71:Thumbnail200x200 {
    ns71:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:104 .

    ns326:CmsImage1 foaf:thumbnail ns71:Thumbnail200x200 .
}

ns301:Thumbnail400x400 {
    ns301:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns367:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:100 .

    ns367:CmsImage0 foaf:thumbnail ns301:Thumbnail400x400 .
}

ns196:Thumbnail200x200 {
    ns196:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns199:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:55 .

    ns199:CmsImage1 foaf:thumbnail ns196:Thumbnail200x200 .
}

ns119:Thumbnail600x600 {
    ns119:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:collection1 .

    ns315:CmsImage1 foaf:thumbnail ns119:Thumbnail600x600 .
}

ns298:Thumbnail800x800 {
    ns298:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns209:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:person4 .

    ns209:CmsImage0 foaf:thumbnail ns298:Thumbnail800x800 .
}

ns208:Thumbnail200x200 {
    ns208:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:41 .

    ns314:CmsImage0 foaf:thumbnail ns208:Thumbnail200x200 .
}

ns239:Thumbnail600x600 {
    ns239:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns269:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:61 .

    ns269:CmsImage0 foaf:thumbnail ns239:Thumbnail600x600 .
}

ns378:CmsImage1 {
    ns378:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:66 .
}

ns137:Thumbnail400x400 {
    ns137:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns322:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:8 .

    ns322:CmsImage1 foaf:thumbnail ns137:Thumbnail400x400 .
}

ns379:Thumbnail400x400 {
    ns379:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:99 .

    ns228:CmsImage0 foaf:thumbnail ns379:Thumbnail400x400 .
}

ns114:Thumbnail400x400 {
    ns114:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:81 .

    ns390:CmsImage0 foaf:thumbnail ns114:Thumbnail400x400 .
}

ns103:Thumbnail800x800 {
    ns103:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:105 .

    ns365:CmsImage0 foaf:thumbnail ns103:Thumbnail800x800 .
}

ns144:Thumbnail400x400 {
    ns144:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:35 .

    ns383:CmsImage1 foaf:thumbnail ns144:Thumbnail400x400 .
}

ns45:Thumbnail400x400 {
    ns45:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns64:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:54 .

    ns64:CmsImage1 foaf:thumbnail ns45:Thumbnail400x400 .
}

ns277:Thumbnail400x400 {
    ns277:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:92 .

    ns381:CmsImage0 foaf:thumbnail ns277:Thumbnail400x400 .
}

ns350:Thumbnail600x600 {
    ns350:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns230:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:46 .

    ns230:CmsImage0 foaf:thumbnail ns350:Thumbnail600x600 .
}

ns131:Thumbnail600x600 {
    ns131:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns100:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:73 .

    ns100:CmsImage1 foaf:thumbnail ns131:Thumbnail600x600 .
}

ns294:Thumbnail400x400 {
    ns294:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:person3 .

    ns323:CmsImage1 foaf:thumbnail ns294:Thumbnail400x400 .
}

ns150:Thumbnail400x400 {
    ns150:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns282:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:4 .

    ns282:CmsImage0 foaf:thumbnail ns150:Thumbnail400x400 .
}

ns46:Thumbnail800x800 {
    ns46:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns17:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:15 .

    ns17:CmsImage0 foaf:thumbnail ns46:Thumbnail800x800 .
}

ns265:Thumbnail200x200 {
    ns265:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns92:work4 .

    ns329:CmsImage1 foaf:thumbnail ns265:Thumbnail200x200 .
}

ns223:Thumbnail200x200 {
    ns223:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:16 .

    ns276:CmsImage1 foaf:thumbnail ns223:Thumbnail200x200 .
}

ns340:Thumbnail800x800 {
    ns340:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns143:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:49 .

    ns143:CmsImage1 foaf:thumbnail ns340:Thumbnail800x800 .
}

ns380:Thumbnail600x600 {
    ns396:CmsImage0 foaf:thumbnail ns380:Thumbnail600x600 .

    ns380:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:101 .
}

ns306:Thumbnail800x800 {
    ns306:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns331:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:11 .

    ns331:CmsImage0 foaf:thumbnail ns306:Thumbnail800x800 .
}

ns46:Thumbnail400x400 {
    ns46:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns17:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:15 .

    ns17:CmsImage0 foaf:thumbnail ns46:Thumbnail400x400 .
}

ns380:Thumbnail200x200 {
    ns380:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:101 .

    ns396:CmsImage0 foaf:thumbnail ns380:Thumbnail200x200 .
}

ns167:CmsImage0 {
    ns167:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:51 .
}

ns32:CmsImage1 {
    ns32:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:31 .
}

ns112:Thumbnail600x600 {
    ns112:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:90 .

    ns288:CmsImage0 foaf:thumbnail ns112:Thumbnail600x600 .
}

ns285:Thumbnail800x800 {
    ns285:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns67:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:94 .

    ns67:CmsImage1 foaf:thumbnail ns285:Thumbnail800x800 .
}

ns336:Thumbnail800x800 {
    ns336:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns202:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:freestandingwork9 .

    ns202:CmsImage1 foaf:thumbnail ns336:Thumbnail800x800 .
}

ns24:Thumbnail600x600 {
    ns24:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns166:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:52 .

    ns166:CmsImage1 foaf:thumbnail ns24:Thumbnail600x600 .
}

ns381:CmsImage0 {
    ns381:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:92 .
}

ns282:CmsImage0 {
    ns282:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:4 .
}

ns87:Thumbnail600x600 {
    ns87:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:93 .

    ns257:CmsImage1 foaf:thumbnail ns87:Thumbnail600x600 .
}

ns377:CmsImage0 {
    ns377:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:64 .
}

ns163:Thumbnail200x200 {
    ns163:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns321:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:47 .

    ns321:CmsImage1 foaf:thumbnail ns163:Thumbnail200x200 .
}

ns1:16 {
    ns1:16 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 6" ;
        skos:prefLabel "CmsConcept 16" .
}

ns181:Thumbnail200x200 {
    ns181:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns32:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:31 .

    ns32:CmsImage0 foaf:thumbnail ns181:Thumbnail200x200 .
}

ns216:Thumbnail400x400 {
    ns216:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns111:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:23 .

    ns111:CmsImage0 foaf:thumbnail ns216:Thumbnail400x400 .
}

ns179:CmsImage1 {
    ns179:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns3:work2 .
}

ns291:Thumbnail600x600 {
    ns291:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:freestandingwork10 .

    ns392:CmsImage1 foaf:thumbnail ns291:Thumbnail600x600 .
}

ns347:Thumbnail800x800 {
    ns347:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:organization3 .

    ns376:CmsImage0 foaf:thumbnail ns347:Thumbnail800x800 .
}

ns382:Thumbnail800x800 {
    ns382:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:106 .

    ns128:CmsImage0 foaf:thumbnail ns382:Thumbnail800x800 .
}

ns65:freestandingwork9Location {
    ns65:freestandingwork9Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:9 {
    ns1:9 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 9" ;
        skos:prefLabel "CmsConcept 9" .
}

ns252:Thumbnail600x600 {
    ns252:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:43 .

    ns374:CmsImage0 foaf:thumbnail ns252:Thumbnail600x600 .
}

ns78:Thumbnail800x800 {
    ns78:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns271:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:freestandingwork11 .

    ns271:CmsImage0 foaf:thumbnail ns78:Thumbnail800x800 .
}

ns191:Thumbnail400x400 {
    ns191:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns143:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:49 .

    ns143:CmsImage0 foaf:thumbnail ns191:Thumbnail400x400 .
}

ns154:Thumbnail600x600 {
    ns154:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:87 .

    ns188:CmsImage0 foaf:thumbnail ns154:Thumbnail600x600 .
}

ns229:Thumbnail600x600 {
    ns229:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:29 .

    ns371:CmsImage0 foaf:thumbnail ns229:Thumbnail600x600 .
}

ns1:54 {
    ns1:54 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 4" ;
        skos:prefLabel "CmsConcept 54" .
}

ns378:CmsImage0 {
    ns378:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:66 .
}

ns196:Thumbnail400x400 {
    ns196:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns199:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:55 .

    ns199:CmsImage1 foaf:thumbnail ns196:Thumbnail400x400 .
}

ns357:Thumbnail200x200 {
    ns357:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:105 .

    ns365:CmsImage1 foaf:thumbnail ns357:Thumbnail200x200 .
}

ns14:Thumbnail400x400 {
    ns14:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:91 .

    ns394:CmsImage0 foaf:thumbnail ns14:Thumbnail400x400 .
}

ns43:Thumbnail800x800 {
    ns43:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:7 .

    ns186:CmsImage1 foaf:thumbnail ns43:Thumbnail800x800 .
}

ns345:Thumbnail800x800 {
    ns345:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:74 .

    ns238:CmsImage1 foaf:thumbnail ns345:Thumbnail800x800 .
}

ns243:Thumbnail400x400 {
    ns243:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:19 .

    ns402:CmsImage0 foaf:thumbnail ns243:Thumbnail400x400 .
}

ns383:CmsImage1 {
    ns383:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:35 .
}

ns172:Thumbnail200x200 {
    ns172:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns230:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:46 .

    ns230:CmsImage1 foaf:thumbnail ns172:Thumbnail200x200 .
}

ns250:Thumbnail600x600 {
    ns250:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:57 .

    ns313:CmsImage1 foaf:thumbnail ns250:Thumbnail600x600 .
}

ns34:Thumbnail800x800 {
    ns34:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:21 .

    ns398:CmsImage1 foaf:thumbnail ns34:Thumbnail800x800 .
}

ns138:Thumbnail400x400 {
    ns138:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:40 .

    ns308:CmsImage0 foaf:thumbnail ns138:Thumbnail400x400 .
}

ns183:Thumbnail800x800 {
    ns183:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:104 .

    ns326:CmsImage0 foaf:thumbnail ns183:Thumbnail800x800 .
}

ns204:CmsImage1 {
    ns204:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:65 .
}

ns219:Thumbnail200x200 {
    ns219:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:64 .

    ns377:CmsImage0 foaf:thumbnail ns219:Thumbnail200x200 .
}

ns83:Thumbnail600x600 {
    ns83:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns98:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:103 .

    ns98:CmsImage0 foaf:thumbnail ns83:Thumbnail600x600 .
}

ns33:Thumbnail400x400 {
    ns33:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns304:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns92:work7 .

    ns304:CmsImage1 foaf:thumbnail ns33:Thumbnail400x400 .
}

ns379:Thumbnail600x600 {
    ns379:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:99 .

    ns228:CmsImage0 foaf:thumbnail ns379:Thumbnail600x600 .
}

ns226:Thumbnail800x800 {
    ns226:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns269:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:61 .

    ns269:CmsImage1 foaf:thumbnail ns226:Thumbnail800x800 .
}

ns172:Thumbnail600x600 {
    ns172:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns230:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:46 .

    ns230:CmsImage1 foaf:thumbnail ns172:Thumbnail600x600 .
}

ns1:100 {
    ns1:100 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 0" ;
        skos:prefLabel "CmsConcept 100" .
}

ns266:Thumbnail200x200 {
    ns266:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:person2 .

    ns123:CmsImage1 foaf:thumbnail ns266:Thumbnail200x200 .
}

ns49:Thumbnail800x800 {
    ns49:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns159:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:5 .

    ns159:CmsImage0 foaf:thumbnail ns49:Thumbnail800x800 .
}

ns15:Thumbnail200x200 {
    ns15:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:22 .

    ns300:CmsImage1 foaf:thumbnail ns15:Thumbnail200x200 .
}

ns362:Thumbnail800x800 {
    ns362:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns162:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:58 .

    ns162:CmsImage1 foaf:thumbnail ns362:Thumbnail800x800 .
}

ns220:CmsImage0 {
    ns220:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:86 .
}

ns66:Thumbnail800x800 {
    ns66:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:34 .

    ns81:CmsImage1 foaf:thumbnail ns66:Thumbnail800x800 .
}

ns384:CmsImage1 {
    ns384:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:60 .
}

ns385:CmsImage0 {
    ns385:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:97 .
}

ns22:Thumbnail400x400 {
    ns22:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:16 .

    ns276:CmsImage0 foaf:thumbnail ns22:Thumbnail400x400 .
}

ns354:Thumbnail200x200 {
    ns354:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns237:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:75 .

    ns237:CmsImage0 foaf:thumbnail ns354:Thumbnail200x200 .
}

ns189:Thumbnail400x400 {
    ns189:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns92:work6 .

    ns270:CmsImage0 foaf:thumbnail ns189:Thumbnail400x400 .
}

ns3:work0 {
    ns3:work0 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork0 alternative title 0",
            "CmsCollection0CmsWork0 alternative title 1" ;
        dcterms:contributor _:N4dd6057aacab486bad2904ec4a82525f,
            _:Nde3c03038b434ae99c051a9cdb09d75f ;
        dcterms:creator ns65:organization2,
            ns65:organization3 ;
        dcterms:description _:N62501d60484d41a78ed357ee0f7cbb12 ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 rights holder" ;
        dcterms:source ns1:60,
            ns1:61 ;
        dcterms:spatial ns3:work0Location ;
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
        cms:collection ns65:collection0 ;
        foaf:page <http://example.com/work/0> .

    _:N4dd6057aacab486bad2904ec4a82525f a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 1" .

    _:Nde3c03038b434ae99c051a9cdb09d75f a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 0" .

    _:N62501d60484d41a78ed357ee0f7cbb12 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns65:freestandingwork8Location {
    ns65:freestandingwork8Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns62:Thumbnail600x600 {
    ns62:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:13 .

    ns84:CmsImage1 foaf:thumbnail ns62:Thumbnail600x600 .
}

ns103:Thumbnail600x600 {
    ns103:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:105 .

    ns365:CmsImage0 foaf:thumbnail ns103:Thumbnail600x600 .
}

ns92:work4Location {
    ns92:work4Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns27:Thumbnail400x400 {
    ns27:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:26 .

    ns393:CmsImage0 foaf:thumbnail ns27:Thumbnail400x400 .
}

ns183:Thumbnail200x200 {
    ns183:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:104 .

    ns326:CmsImage0 foaf:thumbnail ns183:Thumbnail200x200 .
}

ns87:Thumbnail200x200 {
    ns87:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:93 .

    ns257:CmsImage1 foaf:thumbnail ns87:Thumbnail200x200 .
}

ns386:Thumbnail600x600 {
    ns386:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns70:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:14 .

    ns70:CmsImage0 foaf:thumbnail ns386:Thumbnail600x600 .
}

ns387:CmsImage1 {
    ns387:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:107 .
}

ns41:Thumbnail600x600 {
    ns41:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:66 .

    ns378:CmsImage1 foaf:thumbnail ns41:Thumbnail600x600 .
}

ns385:CmsImage1 {
    ns385:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:97 .
}

ns332:Thumbnail400x400 {
    ns332:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns3:work2 .

    ns179:CmsImage1 foaf:thumbnail ns332:Thumbnail400x400 .
}

ns1:35 {
    ns1:35 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 5" ;
        skos:prefLabel "CmsConcept 35" .
}

ns383:CmsImage0 {
    ns383:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:35 .
}

ns96:Thumbnail200x200 {
    ns96:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:65 .

    ns204:CmsImage0 foaf:thumbnail ns96:Thumbnail200x200 .
}

ns346:Thumbnail400x400 {
    ns346:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns148:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:organization2 .

    ns148:CmsImage0 foaf:thumbnail ns346:Thumbnail400x400 .
}

ns170:Thumbnail800x800 {
    ns170:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns116:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:63 .

    ns116:CmsImage1 foaf:thumbnail ns170:Thumbnail800x800 .
}

ns152:Thumbnail400x400 {
    ns152:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns368:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:85 .

    ns368:CmsImage0 foaf:thumbnail ns152:Thumbnail400x400 .
}

ns290:Thumbnail800x800 {
    ns290:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:40 .

    ns308:CmsImage1 foaf:thumbnail ns290:Thumbnail800x800 .
}

ns328:Thumbnail400x400 {
    ns328:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns100:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:73 .

    ns100:CmsImage0 foaf:thumbnail ns328:Thumbnail400x400 .
}

ns1:59 {
    ns1:59 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 9" ;
        skos:prefLabel "CmsConcept 59" .
}

ns190:Thumbnail800x800 {
    ns190:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns70:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:14 .

    ns70:CmsImage1 foaf:thumbnail ns190:Thumbnail800x800 .
}

ns374:CmsImage0 {
    ns374:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:43 .
}

ns1:103 {
    ns1:103 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 3" ;
        skos:prefLabel "CmsConcept 103" .
}

ns388:Thumbnail600x600 {
    ns402:CmsImage1 foaf:thumbnail ns388:Thumbnail600x600 .

    ns388:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:19 .
}

ns150:Thumbnail800x800 {
    ns150:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns282:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:4 .

    ns282:CmsImage0 foaf:thumbnail ns150:Thumbnail800x800 .
}

ns29:Thumbnail800x800 {
    ns29:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:109 .

    ns399:CmsImage0 foaf:thumbnail ns29:Thumbnail800x800 .
}

ns291:Thumbnail200x200 {
    ns291:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:freestandingwork10 .

    ns392:CmsImage1 foaf:thumbnail ns291:Thumbnail200x200 .
}

ns263:Thumbnail800x800 {
    ns263:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns153:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:44 .

    ns153:CmsImage0 foaf:thumbnail ns263:Thumbnail800x800 .
}

ns182:Thumbnail600x600 {
    ns182:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:17 .

    ns194:CmsImage1 foaf:thumbnail ns182:Thumbnail600x600 .
}

ns139:Thumbnail600x600 {
    ns139:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:17 .

    ns194:CmsImage0 foaf:thumbnail ns139:Thumbnail600x600 .
}

ns250:Thumbnail400x400 {
    ns250:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:57 .

    ns313:CmsImage1 foaf:thumbnail ns250:Thumbnail400x400 .
}

ns296:Thumbnail200x200 {
    ns296:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns367:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:100 .

    ns367:CmsImage1 foaf:thumbnail ns296:Thumbnail200x200 .
}

ns286:Thumbnail600x600 {
    ns286:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns281:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:30 .

    ns281:CmsImage1 foaf:thumbnail ns286:Thumbnail600x600 .
}

ns389:Thumbnail200x200 {
    ns389:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:organization1 .

    ns355:CmsImage0 foaf:thumbnail ns389:Thumbnail200x200 .
}

ns77:Thumbnail200x200 {
    ns77:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:26 .

    ns393:CmsImage1 foaf:thumbnail ns77:Thumbnail200x200 .
}

ns227:Thumbnail400x400 {
    ns227:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns121:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:80 .

    ns121:CmsImage1 foaf:thumbnail ns227:Thumbnail400x400 .
}

ns338:Thumbnail200x200 {
    ns338:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:98 .

    ns395:CmsImage0 foaf:thumbnail ns338:Thumbnail200x200 .
}

ns265:Thumbnail800x800 {
    ns265:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns92:work4 .

    ns329:CmsImage1 foaf:thumbnail ns265:Thumbnail800x800 .
}

ns49:Thumbnail400x400 {
    ns49:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns159:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:5 .

    ns159:CmsImage0 foaf:thumbnail ns49:Thumbnail400x400 .
}

ns225:Thumbnail200x200 {
    ns225:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:1 .

    ns372:CmsImage1 foaf:thumbnail ns225:Thumbnail200x200 .
}

ns260:Thumbnail600x600 {
    ns260:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:106 .

    ns128:CmsImage1 foaf:thumbnail ns260:Thumbnail600x600 .
}

ns228:CmsImage1 {
    ns228:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:99 .
}

ns328:Thumbnail200x200 {
    ns328:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns100:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:73 .

    ns100:CmsImage0 foaf:thumbnail ns328:Thumbnail200x200 .
}

ns1:46 {
    ns1:46 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 6" ;
        skos:prefLabel "CmsConcept 46" .
}

ns127:Thumbnail400x400 {
    ns127:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:86 .

    ns220:CmsImage0 foaf:thumbnail ns127:Thumbnail400x400 .
}

ns390:CmsImage0 {
    ns390:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:81 .
}

ns256:Thumbnail400x400 {
    ns256:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:86 .

    ns220:CmsImage1 foaf:thumbnail ns256:Thumbnail400x400 .
}

ns372:CmsImage1 {
    ns372:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:1 .
}

ns284:Thumbnail400x400 {
    ns284:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:35 .

    ns383:CmsImage0 foaf:thumbnail ns284:Thumbnail400x400 .
}

ns343:Thumbnail200x200 {
    ns343:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns75:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:25 .

    ns75:CmsImage0 foaf:thumbnail ns343:Thumbnail200x200 .
}

ns305:Thumbnail200x200 {
    ns305:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns142:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:20 .

    ns142:CmsImage1 foaf:thumbnail ns305:Thumbnail200x200 .
}

ns318:Thumbnail600x600 {
    ns318:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns159:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:5 .

    ns159:CmsImage1 foaf:thumbnail ns318:Thumbnail600x600 .
}

ns270:CmsImage1 {
    ns270:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns92:work6 .
}

ns351:Thumbnail400x400 {
    ns351:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns111:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:23 .

    ns111:CmsImage1 foaf:thumbnail ns351:Thumbnail400x400 .
}

ns248:Thumbnail200x200 {
    ns248:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns121:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:80 .

    ns121:CmsImage0 foaf:thumbnail ns248:Thumbnail200x200 .
}

ns3:work0Location {
    ns3:work0Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns391:Thumbnail600x600 {
    ns391:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns224:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:89 .

    ns224:CmsImage0 foaf:thumbnail ns391:Thumbnail600x600 .
}

ns1:20 {
    ns1:20 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 0" ;
        skos:prefLabel "CmsConcept 20" .
}

ns188:CmsImage0 {
    ns188:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:87 .
}

ns92:work5Opening {
    ns92:work5Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-27"^^xsd:date ;
        dcterms:spatial _:N81b7bc4573ca48359753d65f8bb8a085 ;
        dcterms:title "CmsCollection1CmsWork5 opening" ;
        cms:work ns92:work5 .

    _:N81b7bc4573ca48359753d65f8bb8a085 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns252:Thumbnail800x800 {
    ns252:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:43 .

    ns374:CmsImage0 foaf:thumbnail ns252:Thumbnail800x800 .
}

ns392:CmsImage0 {
    ns392:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:freestandingwork10 .
}

ns92:work5 {
    ns92:work5 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork5 alternative title 0",
            "CmsCollection1CmsWork5 alternative title 1" ;
        dcterms:contributor _:N351f9616d951420dba73eac42c137ea5,
            _:N9b69412fc4194bb69195565052642bed ;
        dcterms:creator ns65:person2,
            ns65:person3 ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 rights holder" ;
        dcterms:source ns1:65,
            ns1:66 ;
        dcterms:spatial ns92:work5Location ;
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
        cms:collection ns65:collection1 .

    _:N351f9616d951420dba73eac42c137ea5 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 0" .

    _:N9b69412fc4194bb69195565052642bed a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 1" .
}

ns1:19 {
    ns1:19 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 9" ;
        skos:prefLabel "CmsConcept 19" .
}

ns58:Thumbnail600x600 {
    ns58:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:98 .

    ns395:CmsImage1 foaf:thumbnail ns58:Thumbnail600x600 .
}

ns274:Thumbnail200x200 {
    ns274:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns38:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:77 .

    ns38:CmsImage0 foaf:thumbnail ns274:Thumbnail200x200 .
}

ns60:CmsImage1 {
    ns60:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:82 .
}

ns216:Thumbnail200x200 {
    ns216:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns111:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:23 .

    ns111:CmsImage0 foaf:thumbnail ns216:Thumbnail200x200 .
}

ns278:CmsImage1 {
    ns278:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:6 .
}

_:N15cec220d81945089237964fa2f1660c {
    _:N15cec220d81945089237964fa2f1660c a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N717313eb610f4408a599409816b6f6a0 ;
        dcterms:spatial _:N2dc74ace0df642fb9abf2f6b923ad4d2 ;
        dcterms:title "CmsCollection0CmsWork2 closing" ;
        cms:work ns3:work2 .

    _:N2dc74ace0df642fb9abf2f6b923ad4d2 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N717313eb610f4408a599409816b6f6a0 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns196:Thumbnail800x800 {
    ns196:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns199:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:55 .

    ns199:CmsImage1 foaf:thumbnail ns196:Thumbnail800x800 .
}

ns130:Thumbnail600x600 {
    ns130:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:90 .

    ns288:CmsImage1 foaf:thumbnail ns130:Thumbnail600x600 .
}

ns229:Thumbnail800x800 {
    ns229:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:29 .

    ns371:CmsImage0 foaf:thumbnail ns229:Thumbnail800x800 .
}

ns304:CmsImage1 {
    ns304:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns92:work7 .
}

ns88:Thumbnail800x800 {
    ns88:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:18 .

    ns231:CmsImage0 foaf:thumbnail ns88:Thumbnail800x800 .
}

ns208:Thumbnail400x400 {
    ns208:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:41 .

    ns314:CmsImage0 foaf:thumbnail ns208:Thumbnail400x400 .
}

ns359:Thumbnail400x400 {
    ns359:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns126:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:2 .

    ns126:CmsImage0 foaf:thumbnail ns359:Thumbnail400x400 .
}

ns318:Thumbnail800x800 {
    ns318:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns159:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:5 .

    ns159:CmsImage1 foaf:thumbnail ns318:Thumbnail800x800 .
}

ns307:Thumbnail600x600 {
    ns307:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:24 .

    ns158:CmsImage0 foaf:thumbnail ns307:Thumbnail600x600 .
}

ns307:Thumbnail800x800 {
    ns307:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:24 .

    ns158:CmsImage0 foaf:thumbnail ns307:Thumbnail800x800 .
}

ns16:Thumbnail400x400 {
    ns16:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns115:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns3:work0 .

    ns115:CmsImage0 foaf:thumbnail ns16:Thumbnail400x400 .
}

ns28:Thumbnail800x800 {
    ns28:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:freestandingwork10 .

    ns392:CmsImage0 foaf:thumbnail ns28:Thumbnail800x800 .
}

ns199:CmsImage1 {
    ns199:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:55 .
}

ns109:CmsImage1 {
    ns109:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:108 .
}

ns332:Thumbnail600x600 {
    ns332:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns3:work2 .

    ns179:CmsImage1 foaf:thumbnail ns332:Thumbnail600x600 .
}

ns41:Thumbnail400x400 {
    ns41:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:66 .

    ns378:CmsImage1 foaf:thumbnail ns41:Thumbnail400x400 .
}

ns168:CmsImage0 {
    ns168:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:48 .
}

ns292:Thumbnail400x400 {
    ns292:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:76 .

    ns373:CmsImage1 foaf:thumbnail ns292:Thumbnail400x400 .
}

ns393:CmsImage1 {
    ns393:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:26 .
}

ns266:Thumbnail800x800 {
    ns266:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:person2 .

    ns123:CmsImage1 foaf:thumbnail ns266:Thumbnail800x800 .
}

ns92:work4Creation {
    ns92:work4Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:person1,
            ns65:person2 ;
        dcterms:date _:N4ffdb064ea134714b1730f5d433e8105 ;
        dcterms:description _:N7417b908102e4da6a9ca52076ee5be7a ;
        dcterms:spatial ns92:work4Location ;
        dcterms:title "CmsCollection1CmsWork4 creation" ;
        cms:work ns92:work4 .

    _:N4ffdb064ea134714b1730f5d433e8105 a cms:DateTimeDescription ;
        time:day "---28"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N7417b908102e4da6a9ca52076ee5be7a a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns394:CmsImage0 {
    ns394:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:91 .
}

ns160:Thumbnail800x800 {
    ns160:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns142:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:20 .

    ns142:CmsImage0 foaf:thumbnail ns160:Thumbnail800x800 .
}

dcterms:language {
    dcterms:language a cms:Property ;
        rdfs:label "Language" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> .
}

ns43:Thumbnail200x200 {
    ns43:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:7 .

    ns186:CmsImage1 foaf:thumbnail ns43:Thumbnail200x200 .
}

ns40:Thumbnail800x800 {
    ns40:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns107:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:36 .

    ns107:CmsImage1 foaf:thumbnail ns40:Thumbnail800x800 .
}

ns231:CmsImage1 {
    ns231:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:18 .
}

ns340:Thumbnail400x400 {
    ns340:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns143:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:49 .

    ns143:CmsImage1 foaf:thumbnail ns340:Thumbnail400x400 .
}

ns298:Thumbnail200x200 {
    ns298:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns209:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:person4 .

    ns209:CmsImage0 foaf:thumbnail ns298:Thumbnail200x200 .
}

ns1:14 {
    ns1:14 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 4" ;
        skos:prefLabel "CmsConcept 14" .
}

ns318:Thumbnail200x200 {
    ns318:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns159:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:5 .

    ns159:CmsImage1 foaf:thumbnail ns318:Thumbnail200x200 .
}

ns133:Thumbnail600x600 {
    ns133:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns3:work3 .

    ns342:CmsImage1 foaf:thumbnail ns133:Thumbnail600x600 .
}

ns184:Thumbnail600x600 {
    ns184:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:109 .

    ns399:CmsImage1 foaf:thumbnail ns184:Thumbnail600x600 .
}

ns279:CmsImage1 {
    ns279:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:organization4 .
}

ns325:Thumbnail800x800 {
    ns325:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns361:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:68 .

    ns361:CmsImage1 foaf:thumbnail ns325:Thumbnail800x800 .
}

_:N673deaa4323d450ab184a53a7b99fbaf {
    _:N673deaa4323d450ab184a53a7b99fbaf a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N3518a5aa06c14329a6e2d34033e9d5fb ;
        dcterms:title "CmsCollection0CmsWork1 closing" ;
        cms:work ns3:work1 .

    _:N3518a5aa06c14329a6e2d34033e9d5fb a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:93 {
    ns1:93 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 3" ;
        skos:prefLabel "CmsConcept 93" .
}

ns1:40 {
    ns1:40 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 0" ;
        skos:prefLabel "CmsConcept 40" .
}

ns92:work5Creation {
    ns92:work5Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:person2,
            ns65:person3 ;
        dcterms:date _:N99674a44f2c747099997950f4783ff9f ;
        dcterms:spatial ns92:work5Location ;
        dcterms:title "CmsCollection1CmsWork5 creation" ;
        cms:work ns92:work5 .

    _:N99674a44f2c747099997950f4783ff9f a cms:DateTimeDescription ;
        time:day "---27"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns370:Thumbnail400x400 {
    ns370:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns271:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:freestandingwork11 .

    ns271:CmsImage1 foaf:thumbnail ns370:Thumbnail400x400 .
}

ns1:24 {
    ns1:24 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 4" ;
        skos:prefLabel "CmsConcept 24" .
}

ns268:Thumbnail600x600 {
    ns268:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns322:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:8 .

    ns322:CmsImage0 foaf:thumbnail ns268:Thumbnail600x600 .
}

ns324:Thumbnail600x600 {
    ns324:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:organization3 .

    ns376:CmsImage1 foaf:thumbnail ns324:Thumbnail600x600 .
}

ns262:Thumbnail600x600 {
    ns262:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns320:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:72 .

    ns320:CmsImage0 foaf:thumbnail ns262:Thumbnail600x600 .
}

ns3:work2Location {
    ns3:work2Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

_:N54abfcc72d5f4439a6a941e5f0d526d3 {
    _:N54abfcc72d5f4439a6a941e5f0d526d3 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N81b7bc4573ca48359753d65f8bb8a085 ;
        dcterms:title "CmsCollection1CmsWork5 closing" ;
        cms:work ns92:work5 .

    _:N81b7bc4573ca48359753d65f8bb8a085 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns360:Thumbnail600x600 {
    ns360:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:13 .

    ns84:CmsImage0 foaf:thumbnail ns360:Thumbnail600x600 .
}

ns210:Thumbnail200x200 {
    ns210:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns162:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:58 .

    ns162:CmsImage0 foaf:thumbnail ns210:Thumbnail200x200 .
}

ns233:Thumbnail600x600 {
    ns233:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:107 .

    ns387:CmsImage1 foaf:thumbnail ns233:Thumbnail600x600 .
}

ns77:Thumbnail600x600 {
    ns77:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:26 .

    ns393:CmsImage1 foaf:thumbnail ns77:Thumbnail600x600 .
}

ns245:Thumbnail600x600 {
    ns245:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns95:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:person0 .

    ns95:CmsImage0 foaf:thumbnail ns245:Thumbnail600x600 .
}

ns263:Thumbnail600x600 {
    ns263:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns153:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:44 .

    ns153:CmsImage0 foaf:thumbnail ns263:Thumbnail600x600 .
}

ns72:Thumbnail200x200 {
    ns72:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:7 .

    ns186:CmsImage0 foaf:thumbnail ns72:Thumbnail200x200 .
}

ns321:CmsImage0 {
    ns321:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:47 .
}

ns1:0 {
    ns1:0 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 0" ;
        skos:prefLabel "CmsConcept 0" .
}

ns143:CmsImage1 {
    ns143:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:49 .
}

ns391:Thumbnail200x200 {
    ns391:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns224:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:89 .

    ns224:CmsImage0 foaf:thumbnail ns391:Thumbnail200x200 .
}

ns185:Thumbnail400x400 {
    ns185:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns75:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:25 .

    ns75:CmsImage1 foaf:thumbnail ns185:Thumbnail400x400 .
}

ns214:Thumbnail400x400 {
    ns214:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns331:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:11 .

    ns331:CmsImage1 foaf:thumbnail ns214:Thumbnail400x400 .
}

ns347:Thumbnail200x200 {
    ns347:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:organization3 .

    ns376:CmsImage0 foaf:thumbnail ns347:Thumbnail200x200 .
}

ns365:CmsImage0 {
    ns365:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:105 .
}

ns286:Thumbnail800x800 {
    ns286:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns281:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:30 .

    ns281:CmsImage1 foaf:thumbnail ns286:Thumbnail800x800 .
}

ns1:105 {
    ns1:105 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 5" ;
        skos:prefLabel "CmsConcept 105" .
}

ns391:Thumbnail800x800 {
    ns391:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns224:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:89 .

    ns224:CmsImage0 foaf:thumbnail ns391:Thumbnail800x800 .
}

ns130:Thumbnail800x800 {
    ns130:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:90 .

    ns288:CmsImage1 foaf:thumbnail ns130:Thumbnail800x800 .
}

ns362:Thumbnail400x400 {
    ns362:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns162:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:58 .

    ns162:CmsImage1 foaf:thumbnail ns362:Thumbnail400x400 .
}

ns206:Thumbnail400x400 {
    ns206:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:29 .

    ns371:CmsImage1 foaf:thumbnail ns206:Thumbnail400x400 .
}

ns92:work7Creation {
    ns92:work7Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:organization0,
            ns65:person4 ;
        dcterms:date _:N9fa01d8047384ca897d3852671ee7eae ;
        dcterms:spatial ns92:work7Location ;
        dcterms:title "CmsCollection1CmsWork7 creation" ;
        cms:work ns92:work7 .

    _:N9fa01d8047384ca897d3852671ee7eae a cms:DateTimeDescription ;
        time:day "---25"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns1:82 {
    ns1:82 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 2" ;
        skos:prefLabel "CmsConcept 82" .
}

ns144:Thumbnail800x800 {
    ns144:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:35 .

    ns383:CmsImage1 foaf:thumbnail ns144:Thumbnail800x800 .
}

ns164:Thumbnail400x400 {
    ns164:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:6 .

    ns278:CmsImage1 foaf:thumbnail ns164:Thumbnail400x400 .
}

ns387:CmsImage0 {
    ns387:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:107 .
}

ns254:Thumbnail600x600 {
    ns254:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns232:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:84 .

    ns232:CmsImage0 foaf:thumbnail ns254:Thumbnail600x600 .
}

ns206:Thumbnail200x200 {
    ns206:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:29 .

    ns371:CmsImage1 foaf:thumbnail ns206:Thumbnail200x200 .
}

ns52:Thumbnail200x200 {
    ns52:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns302:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:38 .

    ns302:CmsImage1 foaf:thumbnail ns52:Thumbnail200x200 .
}

ns233:Thumbnail400x400 {
    ns233:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:107 .

    ns387:CmsImage1 foaf:thumbnail ns233:Thumbnail400x400 .
}

ns92:work7 {
    ns92:work7 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork7 alternative title 0",
            "CmsCollection1CmsWork7 alternative title 1" ;
        dcterms:contributor _:N15829622ede64136aaaf39c80a90a313,
            _:N978a5a4f1b6749ef9058e0e1a8c3eb76 ;
        dcterms:creator ns65:organization0,
            ns65:person4 ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 rights holder" ;
        dcterms:source ns1:67,
            ns1:68 ;
        dcterms:spatial ns92:work7Location ;
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
        cms:collection ns65:collection1 .

    _:N15829622ede64136aaaf39c80a90a313 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 0" .

    _:N978a5a4f1b6749ef9058e0e1a8c3eb76 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 1" .
}

ns337:Thumbnail200x200 {
    ns337:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:22 .

    ns300:CmsImage0 foaf:thumbnail ns337:Thumbnail200x200 .
}

ns65:organization2 {
    ns65:organization2 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 2" ;
        foaf:page ns65:organization2page .
}

ns284:Thumbnail200x200 {
    ns284:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:35 .

    ns383:CmsImage0 foaf:thumbnail ns284:Thumbnail200x200 .
}

ns108:Thumbnail400x400 {
    ns108:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:1 .

    ns372:CmsImage0 foaf:thumbnail ns108:Thumbnail400x400 .
}

ns238:CmsImage0 {
    ns238:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:74 .
}

ns65:freestandingwork9 {
    ns65:freestandingwork9 a cms:Work ;
        dcterms:alternative "FreestandingWork9 alternative title 0",
            "FreestandingWork9 alternative title 1" ;
        dcterms:contributor _:N2c509219a1334b8c914753524be43896,
            _:N4cda60b6b113488b9e7614b83c331f2d ;
        dcterms:creator ns65:organization1,
            ns65:organization2 ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 rights holder" ;
        dcterms:source ns1:60,
            ns1:69 ;
        dcterms:spatial ns65:freestandingwork9Location ;
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
            ns1:99 .

    _:N2c509219a1334b8c914753524be43896 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 1" .

    _:N4cda60b6b113488b9e7614b83c331f2d a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 0" .
}

ns375:Thumbnail400x400 {
    ns375:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:3 .

    ns261:CmsImage0 foaf:thumbnail ns375:Thumbnail400x400 .
}

ns358:Thumbnail200x200 {
    ns358:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns167:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:51 .

    ns167:CmsImage1 foaf:thumbnail ns358:Thumbnail200x200 .
}

ns395:CmsImage1 {
    ns395:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:98 .
}

ns78:Thumbnail600x600 {
    ns78:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns271:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:freestandingwork11 .

    ns271:CmsImage0 foaf:thumbnail ns78:Thumbnail600x600 .
}

ns59:CmsImage1 {
    ns59:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:9 .
}

ns211:Thumbnail600x600 {
    ns211:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:96 .

    ns366:CmsImage1 foaf:thumbnail ns211:Thumbnail600x600 .
}

ns122:Thumbnail600x600 {
    ns122:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns149:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:33 .

    ns149:CmsImage1 foaf:thumbnail ns122:Thumbnail600x600 .
}

ns192:Thumbnail800x800 {
    ns192:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:24 .

    ns158:CmsImage1 foaf:thumbnail ns192:Thumbnail800x800 .
}

ns92:work6 {
    ns92:work6 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork6 alternative title 0",
            "CmsCollection1CmsWork6 alternative title 1" ;
        dcterms:contributor _:N8ac91650fe6d41c6a0c496146e3dbff5,
            _:Ncbfaac8495cf495e90137101489a605a ;
        dcterms:creator ns65:person3,
            ns65:person4 ;
        dcterms:description _:Nbcd5efda845f46cea3df0d08454aa2bb ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 rights holder" ;
        dcterms:source ns1:66,
            ns1:67 ;
        dcterms:spatial ns92:work6Location ;
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
        cms:collection ns65:collection1 ;
        foaf:page <http://example.com/work/6> .

    _:N8ac91650fe6d41c6a0c496146e3dbff5 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 0" .

    _:Ncbfaac8495cf495e90137101489a605a a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 1" .

    _:Nbcd5efda845f46cea3df0d08454aa2bb a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns68:Thumbnail600x600 {
    ns68:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns199:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:55 .

    ns199:CmsImage0 foaf:thumbnail ns68:Thumbnail600x600 .
}

ns234:Thumbnail600x600 {
    ns234:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns126:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:2 .

    ns126:CmsImage1 foaf:thumbnail ns234:Thumbnail600x600 .
}

ns226:Thumbnail400x400 {
    ns226:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns269:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:61 .

    ns269:CmsImage1 foaf:thumbnail ns226:Thumbnail400x400 .
}

ns294:Thumbnail800x800 {
    ns294:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:person3 .

    ns323:CmsImage1 foaf:thumbnail ns294:Thumbnail800x800 .
}

ns376:CmsImage0 {
    ns376:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:organization3 .
}

ns7:Thumbnail200x200 {
    ns7:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns281:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:30 .

    ns281:CmsImage0 foaf:thumbnail ns7:Thumbnail200x200 .
}

ns222:Thumbnail800x800 {
    ns222:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:53 .

    ns403:CmsImage1 foaf:thumbnail ns222:Thumbnail800x800 .
}

ns227:Thumbnail600x600 {
    ns227:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns121:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:80 .

    ns121:CmsImage1 foaf:thumbnail ns227:Thumbnail600x600 .
}

ns245:Thumbnail400x400 {
    ns245:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns95:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:person0 .

    ns95:CmsImage0 foaf:thumbnail ns245:Thumbnail400x400 .
}

ns309:CmsImage0 {
    ns309:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:0 .
}

ns100:CmsImage0 {
    ns100:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:73 .
}

ns370:Thumbnail800x800 {
    ns370:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns271:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:freestandingwork11 .

    ns271:CmsImage1 foaf:thumbnail ns370:Thumbnail800x800 .
}

ns1:71 {
    ns1:71 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 1" ;
        skos:prefLabel "CmsConcept 71" .
}

ns150:Thumbnail200x200 {
    ns150:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns282:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:4 .

    ns282:CmsImage0 foaf:thumbnail ns150:Thumbnail200x200 .
}

ns129:Thumbnail200x200 {
    ns129:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:10 .

    ns352:CmsImage0 foaf:thumbnail ns129:Thumbnail200x200 .
}

ns327:Thumbnail400x400 {
    ns327:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:10 .

    ns352:CmsImage1 foaf:thumbnail ns327:Thumbnail400x400 .
}

ns128:CmsImage1 {
    ns128:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:106 .
}

ns149:CmsImage1 {
    ns149:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:33 .
}

ns1:52 {
    ns1:52 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 2" ;
        skos:prefLabel "CmsConcept 52" .
}

ns1:44 {
    ns1:44 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 4" ;
        skos:prefLabel "CmsConcept 44" .
}

ns127:Thumbnail800x800 {
    ns127:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:86 .

    ns220:CmsImage0 foaf:thumbnail ns127:Thumbnail800x800 .
}

ns338:Thumbnail400x400 {
    ns338:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:98 .

    ns395:CmsImage0 foaf:thumbnail ns338:Thumbnail400x400 .
}

ns297:Thumbnail200x200 {
    ns297:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns109:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:108 .

    ns109:CmsImage1 foaf:thumbnail ns297:Thumbnail200x200 .
}

ns177:Thumbnail400x400 {
    ns177:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns47:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:27 .

    ns47:CmsImage0 foaf:thumbnail ns177:Thumbnail400x400 .
}

ns82:Thumbnail800x800 {
    ns82:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns98:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:103 .

    ns98:CmsImage1 foaf:thumbnail ns82:Thumbnail800x800 .
}

ns396:CmsImage0 {
    ns396:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:101 .
}

ns373:CmsImage0 {
    ns373:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:76 .
}

ns68:Thumbnail800x800 {
    ns68:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns199:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:55 .

    ns199:CmsImage0 foaf:thumbnail ns68:Thumbnail800x800 .
}

ns1:63 {
    ns1:63 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 3" ;
        skos:prefLabel "CmsConcept 63" .
}

ns245:Thumbnail800x800 {
    ns245:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns95:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:person0 .

    ns95:CmsImage0 foaf:thumbnail ns245:Thumbnail800x800 .
}

ns293:Thumbnail400x400 {
    ns293:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:21 .

    ns398:CmsImage0 foaf:thumbnail ns293:Thumbnail400x400 .
}

ns306:Thumbnail400x400 {
    ns306:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns331:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:11 .

    ns331:CmsImage0 foaf:thumbnail ns306:Thumbnail400x400 .
}

ns153:CmsImage0 {
    ns153:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:44 .
}

ns384:CmsImage0 {
    ns384:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:60 .
}

ns364:Thumbnail400x400 {
    ns364:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:101 .

    ns396:CmsImage1 foaf:thumbnail ns364:Thumbnail400x400 .
}

ns280:CmsImage1 {
    ns280:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns3:work1 .
}

ns244:Thumbnail400x400 {
    ns244:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns38:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:77 .

    ns38:CmsImage1 foaf:thumbnail ns244:Thumbnail400x400 .
}

ns391:Thumbnail400x400 {
    ns391:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns224:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:89 .

    ns224:CmsImage0 foaf:thumbnail ns391:Thumbnail400x400 .
}

ns23:Thumbnail800x800 {
    ns23:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns11:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:person1 .

    ns11:CmsImage0 foaf:thumbnail ns23:Thumbnail800x800 .
}

ns358:Thumbnail400x400 {
    ns358:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns167:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:51 .

    ns167:CmsImage1 foaf:thumbnail ns358:Thumbnail400x400 .
}

ns125:Thumbnail200x200 {
    ns125:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns135:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:freestandingwork8 .

    ns135:CmsImage0 foaf:thumbnail ns125:Thumbnail200x200 .
}

ns213:Thumbnail600x600 {
    ns213:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns86:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:102 .

    ns86:CmsImage1 foaf:thumbnail ns213:Thumbnail600x600 .
}

ns126:CmsImage0 {
    ns126:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:2 .
}

ns76:Thumbnail400x400 {
    ns76:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:organization1 .

    ns355:CmsImage1 foaf:thumbnail ns76:Thumbnail400x400 .
}

ns397:CmsImage0 {
    ns397:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:59 .
}

ns287:Thumbnail200x200 {
    ns287:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:57 .

    ns313:CmsImage0 foaf:thumbnail ns287:Thumbnail200x200 .
}

ns138:Thumbnail200x200 {
    ns138:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:40 .

    ns308:CmsImage0 foaf:thumbnail ns138:Thumbnail200x200 .
}

dcterms:title {
    dcterms:title a cms:Property ;
        rdfs:label "Title" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Title> .
}

ns298:Thumbnail400x400 {
    ns298:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns209:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:person4 .

    ns209:CmsImage0 foaf:thumbnail ns298:Thumbnail400x400 .
}

ns103:Thumbnail200x200 {
    ns103:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:105 .

    ns365:CmsImage0 foaf:thumbnail ns103:Thumbnail200x200 .
}

ns398:CmsImage1 {
    ns398:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:21 .
}

ns218:Thumbnail400x400 {
    ns218:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns60:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:82 .

    ns60:CmsImage1 foaf:thumbnail ns218:Thumbnail400x400 .
}

ns87:Thumbnail400x400 {
    ns87:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:93 .

    ns257:CmsImage1 foaf:thumbnail ns87:Thumbnail400x400 .
}

ns209:CmsImage1 {
    ns209:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:person4 .
}

ns24:Thumbnail400x400 {
    ns24:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns166:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:52 .

    ns166:CmsImage1 foaf:thumbnail ns24:Thumbnail400x400 .
}

ns63:Thumbnail200x200 {
    ns63:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns67:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:94 .

    ns67:CmsImage0 foaf:thumbnail ns63:Thumbnail200x200 .
}

ns1:81 {
    ns1:81 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 1" ;
        skos:prefLabel "CmsConcept 81" .
}

ns195:Thumbnail400x400 {
    ns195:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:79 .

    ns10:CmsImage1 foaf:thumbnail ns195:Thumbnail400x400 .
}

ns375:Thumbnail600x600 {
    ns375:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:3 .

    ns261:CmsImage0 foaf:thumbnail ns375:Thumbnail600x600 .
}

ns16:Thumbnail600x600 {
    ns16:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns115:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns3:work0 .

    ns115:CmsImage0 foaf:thumbnail ns16:Thumbnail600x600 .
}

ns386:Thumbnail800x800 {
    ns386:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns70:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:14 .

    ns70:CmsImage0 foaf:thumbnail ns386:Thumbnail800x800 .
}

ns215:Thumbnail800x800 {
    ns215:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:56 .

    ns349:CmsImage0 foaf:thumbnail ns215:Thumbnail800x800 .
}

ns63:Thumbnail800x800 {
    ns63:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns67:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:94 .

    ns67:CmsImage0 foaf:thumbnail ns63:Thumbnail800x800 .
}

ns26:Thumbnail200x200 {
    ns26:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:50 .

    ns356:CmsImage0 foaf:thumbnail ns26:Thumbnail200x200 .
}

ns350:Thumbnail400x400 {
    ns350:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns230:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:46 .

    ns230:CmsImage0 foaf:thumbnail ns350:Thumbnail400x400 .
}

ns217:Thumbnail800x800 {
    ns217:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns368:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:85 .

    ns368:CmsImage1 foaf:thumbnail ns217:Thumbnail800x800 .
}

ns340:Thumbnail200x200 {
    ns340:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns143:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:49 .

    ns143:CmsImage1 foaf:thumbnail ns340:Thumbnail200x200 .
}

ns1:48 {
    ns1:48 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 8" ;
        skos:prefLabel "CmsConcept 48" .
}

ns246:Thumbnail200x200 {
    ns246:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:37 .

    ns341:CmsImage0 foaf:thumbnail ns246:Thumbnail200x200 .
}

ns105:Thumbnail600x600 {
    ns105:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns92:work5 .

    ns117:CmsImage1 foaf:thumbnail ns105:Thumbnail600x600 .
}

ns152:Thumbnail800x800 {
    ns152:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns368:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:85 .

    ns368:CmsImage0 foaf:thumbnail ns152:Thumbnail800x800 .
}

ns3:work3Opening {
    ns3:work3Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-29"^^xsd:date ;
        dcterms:spatial _:N1c33f3a933cb433fa12449bc2f407a3d ;
        dcterms:title "CmsCollection0CmsWork3 opening" ;
        cms:work ns3:work3 .

    _:N1c33f3a933cb433fa12449bc2f407a3d a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns37:Thumbnail400x400 {
    ns37:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns60:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:82 .

    ns60:CmsImage0 foaf:thumbnail ns37:Thumbnail400x400 .
}

ns174:Thumbnail800x800 {
    ns174:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns11:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:person1 .

    ns11:CmsImage1 foaf:thumbnail ns174:Thumbnail800x800 .
}

ns359:Thumbnail600x600 {
    ns359:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns126:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:2 .

    ns126:CmsImage0 foaf:thumbnail ns359:Thumbnail600x600 .
}

ns1:5 {
    ns1:5 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 5" ;
        skos:prefLabel "CmsConcept 5" .
}

_:N3e369e06b2e449c0a8aa780eb01c3a58 {
    _:N3e369e06b2e449c0a8aa780eb01c3a58 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N62501d60484d41a78ed357ee0f7cbb12 ;
        dcterms:spatial _:Nd79acee3737645e4aef1295f05b137c8 ;
        dcterms:title "CmsCollection0CmsWork0 closing" ;
        cms:work ns3:work0 .

    _:Nd79acee3737645e4aef1295f05b137c8 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N62501d60484d41a78ed357ee0f7cbb12 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:96 {
    ns1:96 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 6" ;
        skos:prefLabel "CmsConcept 96" .
}

ns181:Thumbnail400x400 {
    ns181:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns32:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:31 .

    ns32:CmsImage0 foaf:thumbnail ns181:Thumbnail400x400 .
}

ns388:Thumbnail200x200 {
    ns388:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:19 .

    ns402:CmsImage1 foaf:thumbnail ns388:Thumbnail200x200 .
}

ns26:Thumbnail800x800 {
    ns26:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:50 .

    ns356:CmsImage0 foaf:thumbnail ns26:Thumbnail800x800 .
}

ns283:Thumbnail600x600 {
    ns283:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:0 .

    ns309:CmsImage1 foaf:thumbnail ns283:Thumbnail600x600 .
}

ns90:Thumbnail800x800 {
    ns90:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:59 .

    ns397:CmsImage0 foaf:thumbnail ns90:Thumbnail800x800 .
}

ns73:Thumbnail600x600 {
    ns73:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:64 .

    ns377:CmsImage1 foaf:thumbnail ns73:Thumbnail600x600 .
}

ns399:CmsImage0 {
    ns399:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:109 .
}

ns133:Thumbnail200x200 {
    ns133:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns3:work3 .

    ns342:CmsImage1 foaf:thumbnail ns133:Thumbnail200x200 .
}

ns382:Thumbnail200x200 {
    ns382:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:106 .

    ns128:CmsImage0 foaf:thumbnail ns382:Thumbnail200x200 .
}

ns400:Thumbnail200x200 {
    ns400:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns109:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:108 .

    ns109:CmsImage0 foaf:thumbnail ns400:Thumbnail200x200 .
}

ns274:Thumbnail400x400 {
    ns274:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns38:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:77 .

    ns38:CmsImage0 foaf:thumbnail ns274:Thumbnail400x400 .
}

ns82:Thumbnail600x600 {
    ns82:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns98:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:103 .

    ns98:CmsImage1 foaf:thumbnail ns82:Thumbnail600x600 .
}

ns176:Thumbnail800x800 {
    ns176:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:81 .

    ns390:CmsImage1 foaf:thumbnail ns176:Thumbnail800x800 .
}

ns339:Thumbnail400x400 {
    ns339:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns168:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:48 .

    ns168:CmsImage0 foaf:thumbnail ns339:Thumbnail400x400 .
}

ns57:Thumbnail600x600 {
    ns57:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:71 .

    ns334:CmsImage0 foaf:thumbnail ns57:Thumbnail600x600 .
}

ns205:Thumbnail600x600 {
    ns205:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:organization0 .

    ns5:CmsImage1 foaf:thumbnail ns205:Thumbnail600x600 .
}

vra:material {
    vra:material a cms:Property ;
        rdfs:label "Material" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> .
}

ns144:Thumbnail600x600 {
    ns144:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:35 .

    ns383:CmsImage1 foaf:thumbnail ns144:Thumbnail600x600 .
}

ns247:Thumbnail600x600 {
    ns247:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns353:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:83 .

    ns353:CmsImage1 foaf:thumbnail ns247:Thumbnail600x600 .
}

ns293:Thumbnail800x800 {
    ns293:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:21 .

    ns398:CmsImage0 foaf:thumbnail ns293:Thumbnail800x800 .
}

_:N027ab3e1e97a48049ac4007a4b41344f {
    _:N027ab3e1e97a48049ac4007a4b41344f a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N24c50b5366394fe3a8b3d1d3030a8f32 ;
        dcterms:title "CmsCollection1CmsWork7 closing" ;
        cms:work ns92:work7 .

    _:N24c50b5366394fe3a8b3d1d3030a8f32 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:11 {
    ns1:11 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 1" ;
        skos:prefLabel "CmsConcept 11" .
}

ns225:Thumbnail800x800 {
    ns225:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:1 .

    ns372:CmsImage1 foaf:thumbnail ns225:Thumbnail800x800 .
}

ns290:Thumbnail400x400 {
    ns290:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:40 .

    ns308:CmsImage1 foaf:thumbnail ns290:Thumbnail400x400 .
}

ns295:Thumbnail600x600 {
    ns295:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns167:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:51 .

    ns167:CmsImage0 foaf:thumbnail ns295:Thumbnail600x600 .
}

ns3:work2Creation {
    ns3:work2Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:organization4,
            ns65:person0 ;
        dcterms:date _:N3eba0b59e51449779b04a842d1e17e13 ;
        dcterms:description _:N717313eb610f4408a599409816b6f6a0 ;
        dcterms:spatial ns3:work2Location ;
        dcterms:title "CmsCollection0CmsWork2 creation" ;
        cms:work ns3:work2 .

    _:N3eba0b59e51449779b04a842d1e17e13 a cms:DateTimeDescription ;
        time:day "---30"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N717313eb610f4408a599409816b6f6a0 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:49 {
    ns1:49 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 9" ;
        skos:prefLabel "CmsConcept 49" .
}

ns53:Thumbnail600x600 {
    ns53:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:74 .

    ns238:CmsImage0 foaf:thumbnail ns53:Thumbnail600x600 .
}

ns65:collection1 {
    ns65:collection1 a cms:Collection ;
        dcterms:title "CmsCollection1" .
}

ns260:Thumbnail800x800 {
    ns260:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:106 .

    ns128:CmsImage1 foaf:thumbnail ns260:Thumbnail800x800 .
}

ns112:Thumbnail800x800 {
    ns112:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:90 .

    ns288:CmsImage0 foaf:thumbnail ns112:Thumbnail800x800 .
}

ns136:Thumbnail600x600 {
    ns136:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:person2 .

    ns123:CmsImage0 foaf:thumbnail ns136:Thumbnail600x600 .
}

ns1:109 {
    ns1:109 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 9" ;
        skos:prefLabel "CmsConcept 109" .
}

ns366:CmsImage0 {
    ns366:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:96 .
}

ns129:Thumbnail600x600 {
    ns129:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:10 .

    ns352:CmsImage0 foaf:thumbnail ns129:Thumbnail600x600 .
}

ns390:CmsImage1 {
    ns390:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:81 .
}

ns401:CmsImage0 {
    ns401:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:28 .
}

ns330:Thumbnail800x800 {
    ns330:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns3:work1 .

    ns280:CmsImage1 foaf:thumbnail ns330:Thumbnail800x800 .
}

ns219:Thumbnail400x400 {
    ns219:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:64 .

    ns377:CmsImage0 foaf:thumbnail ns219:Thumbnail400x400 .
}

ns1:33 {
    ns1:33 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 3" ;
        skos:prefLabel "CmsConcept 33" .
}

ns386:Thumbnail400x400 {
    ns386:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns70:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:14 .

    ns70:CmsImage0 foaf:thumbnail ns386:Thumbnail400x400 .
}

ns198:Thumbnail600x600 {
    ns198:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns232:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:84 .

    ns232:CmsImage1 foaf:thumbnail ns198:Thumbnail600x600 .
}

ns35:Thumbnail200x200 {
    ns35:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:92 .

    ns381:CmsImage1 foaf:thumbnail ns35:Thumbnail200x200 .
}

ns65:person2 {
    ns65:person2 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "2, CmsPerson" ;
        foaf:familyName "2" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 2" ;
        foaf:page ns65:person2page .
}

ns91:Thumbnail200x200 {
    ns91:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns3:work3 .

    ns342:CmsImage0 foaf:thumbnail ns91:Thumbnail200x200 .
}

ns1:51 {
    ns1:51 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 1" ;
        skos:prefLabel "CmsConcept 51" .
}

ns1:3 {
    ns1:3 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 3" ;
        skos:prefLabel "CmsConcept 3" .
}

ns134:Thumbnail200x200 {
    ns134:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:60 .

    ns384:CmsImage0 foaf:thumbnail ns134:Thumbnail200x200 .
}

ns125:Thumbnail600x600 {
    ns125:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns135:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:freestandingwork8 .

    ns135:CmsImage0 foaf:thumbnail ns125:Thumbnail600x600 .
}

ns1:92 {
    ns1:92 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 2" ;
        skos:prefLabel "CmsConcept 92" .
}

ns1:25 {
    ns1:25 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 5" ;
        skos:prefLabel "CmsConcept 25" .
}

ns173:Thumbnail200x200 {
    ns173:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns241:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:62 .

    ns241:CmsImage0 foaf:thumbnail ns173:Thumbnail200x200 .
}

ns299:CmsImage0 {
    ns299:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:32 .
}

ns254:Thumbnail200x200 {
    ns254:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns232:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:84 .

    ns232:CmsImage0 foaf:thumbnail ns254:Thumbnail200x200 .
}

ns35:Thumbnail800x800 {
    ns35:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:92 .

    ns381:CmsImage1 foaf:thumbnail ns35:Thumbnail800x800 .
}

ns285:Thumbnail200x200 {
    ns285:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns67:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:94 .

    ns67:CmsImage1 foaf:thumbnail ns285:Thumbnail200x200 .
}

ns392:CmsImage1 {
    ns392:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:freestandingwork10 .
}

ns1:90 {
    ns1:90 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 0" ;
        skos:prefLabel "CmsConcept 90" .
}

ns190:Thumbnail200x200 {
    ns190:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns70:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:14 .

    ns70:CmsImage1 foaf:thumbnail ns190:Thumbnail200x200 .
}

ns165:Thumbnail400x400 {
    ns165:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:96 .

    ns366:CmsImage0 foaf:thumbnail ns165:Thumbnail400x400 .
}

ns402:CmsImage0 {
    ns402:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:19 .
}

ns197:Thumbnail600x600 {
    ns197:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:95 .

    ns348:CmsImage0 foaf:thumbnail ns197:Thumbnail600x600 .
}

ns242:Thumbnail600x600 {
    ns242:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns17:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:15 .

    ns17:CmsImage1 foaf:thumbnail ns242:Thumbnail600x600 .
}

ns273:Thumbnail600x600 {
    ns273:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns369:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:45 .

    ns369:CmsImage1 foaf:thumbnail ns273:Thumbnail600x600 .
}

ns313:CmsImage1 {
    ns313:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:57 .
}

dcterms:publisher {
    dcterms:publisher a cms:Property ;
        rdfs:label "Publisher" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> .
}

ns244:Thumbnail600x600 {
    ns244:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns38:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:77 .

    ns38:CmsImage1 foaf:thumbnail ns244:Thumbnail600x600 .
}

ns285:Thumbnail400x400 {
    ns285:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns67:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:94 .

    ns67:CmsImage1 foaf:thumbnail ns285:Thumbnail400x400 .
}

ns71:Thumbnail400x400 {
    ns71:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:104 .

    ns326:CmsImage1 foaf:thumbnail ns71:Thumbnail400x400 .
}

ns388:Thumbnail400x400 {
    ns388:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:19 .

    ns402:CmsImage1 foaf:thumbnail ns388:Thumbnail400x400 .
}

ns7:Thumbnail400x400 {
    ns7:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns281:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:30 .

    ns281:CmsImage0 foaf:thumbnail ns7:Thumbnail400x400 .
}

ns61:Thumbnail400x400 {
    ns61:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns59:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:9 .

    ns59:CmsImage1 foaf:thumbnail ns61:Thumbnail400x400 .
}

ns1:41 {
    ns1:41 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 1" ;
        skos:prefLabel "CmsConcept 41" .
}

ns18:Thumbnail800x800 {
    ns18:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns115:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns3:work0 .

    ns115:CmsImage1 foaf:thumbnail ns18:Thumbnail800x800 .
}

ns235:Thumbnail600x600 {
    ns235:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:66 .

    ns378:CmsImage0 foaf:thumbnail ns235:Thumbnail600x600 .
}

ns57:Thumbnail800x800 {
    ns57:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:71 .

    ns334:CmsImage0 foaf:thumbnail ns57:Thumbnail800x800 .
}

ns364:Thumbnail600x600 {
    ns364:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:101 .

    ns396:CmsImage1 foaf:thumbnail ns364:Thumbnail600x600 .
}

ns402:CmsImage1 {
    ns402:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:19 .
}

ns1:18 {
    ns1:18 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 8" ;
        skos:prefLabel "CmsConcept 18" .
}

ns273:Thumbnail800x800 {
    ns273:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns369:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:45 .

    ns369:CmsImage1 foaf:thumbnail ns273:Thumbnail800x800 .
}

ns317:Thumbnail200x200 {
    ns317:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns3:work1 .

    ns280:CmsImage0 foaf:thumbnail ns317:Thumbnail200x200 .
}

ns333:Thumbnail400x400 {
    ns333:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns92:work5 .

    ns117:CmsImage0 foaf:thumbnail ns333:Thumbnail400x400 .
}

ns13:Thumbnail600x600 {
    ns13:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns224:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:89 .

    ns224:CmsImage1 foaf:thumbnail ns13:Thumbnail600x600 .
}

ns400:Thumbnail400x400 {
    ns400:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns109:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:108 .

    ns109:CmsImage0 foaf:thumbnail ns400:Thumbnail400x400 .
}

ns74:Thumbnail800x800 {
    ns74:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns237:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:75 .

    ns237:CmsImage1 foaf:thumbnail ns74:Thumbnail800x800 .
}

ns90:Thumbnail600x600 {
    ns90:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:59 .

    ns397:CmsImage0 foaf:thumbnail ns90:Thumbnail600x600 .
}

ns160:Thumbnail400x400 {
    ns160:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns142:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:20 .

    ns142:CmsImage0 foaf:thumbnail ns160:Thumbnail400x400 .
}

ns210:Thumbnail400x400 {
    ns210:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns162:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:58 .

    ns162:CmsImage0 foaf:thumbnail ns210:Thumbnail400x400 .
}

ns395:CmsImage0 {
    ns395:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:98 .
}

ns241:CmsImage0 {
    ns241:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:62 .
}

ns215:Thumbnail400x400 {
    ns215:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:56 .

    ns349:CmsImage0 foaf:thumbnail ns215:Thumbnail400x400 .
}

ns163:Thumbnail600x600 {
    ns163:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns321:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:47 .

    ns321:CmsImage1 foaf:thumbnail ns163:Thumbnail600x600 .
}

ns5:CmsImage1 {
    ns5:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:organization0 .
}

ns382:Thumbnail600x600 {
    ns382:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:106 .

    ns128:CmsImage0 foaf:thumbnail ns382:Thumbnail600x600 .
}

ns48:Thumbnail400x400 {
    ns48:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns303:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:69 .

    ns303:CmsImage0 foaf:thumbnail ns48:Thumbnail400x400 .
}

ns3:work3Creation {
    ns3:work3Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:person0,
            ns65:person1 ;
        dcterms:date _:Nc2d8262009494aadbe1b38586ab689e6 ;
        dcterms:spatial ns3:work3Location ;
        dcterms:title "CmsCollection0CmsWork3 creation" ;
        cms:work ns3:work3 .

    _:Nc2d8262009494aadbe1b38586ab689e6 a cms:DateTimeDescription ;
        time:day "---29"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns207:Thumbnail800x800 {
    ns207:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:39 .

    ns335:CmsImage1 foaf:thumbnail ns207:Thumbnail800x800 .
}

ns27:Thumbnail800x800 {
    ns27:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:26 .

    ns393:CmsImage0 foaf:thumbnail ns27:Thumbnail800x800 .
}

ns76:Thumbnail800x800 {
    ns76:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:organization1 .

    ns355:CmsImage1 foaf:thumbnail ns76:Thumbnail800x800 .
}

ns147:Thumbnail200x200 {
    ns147:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns304:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns92:work7 .

    ns304:CmsImage0 foaf:thumbnail ns147:Thumbnail200x200 .
}

ns193:Thumbnail600x600 {
    ns193:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:0 .

    ns309:CmsImage0 foaf:thumbnail ns193:Thumbnail600x600 .
}

ns36:Thumbnail400x400 {
    ns36:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns149:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:33 .

    ns149:CmsImage0 foaf:thumbnail ns36:Thumbnail400x400 .
}

ns396:CmsImage1 {
    ns396:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:101 .
}

ns259:Thumbnail600x600 {
    ns259:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns145:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:88 .

    ns145:CmsImage0 foaf:thumbnail ns259:Thumbnail600x600 .
}

ns157:Thumbnail800x800 {
    ns157:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns299:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:32 .

    ns299:CmsImage0 foaf:thumbnail ns157:Thumbnail800x800 .
}

ns1:107 {
    ns1:107 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 7" ;
        skos:prefLabel "CmsConcept 107" .
}

ns370:Thumbnail600x600 {
    ns370:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns271:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:freestandingwork11 .

    ns271:CmsImage1 foaf:thumbnail ns370:Thumbnail600x600 .
}

ns284:Thumbnail800x800 {
    ns284:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:35 .

    ns383:CmsImage0 foaf:thumbnail ns284:Thumbnail800x800 .
}

ns1:10 {
    ns1:10 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 0" ;
        skos:prefLabel "CmsConcept 10" .
}

ns1:67 {
    ns1:67 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 7" ;
        skos:prefLabel "CmsConcept 67" .
}

ns120:Thumbnail200x200 {
    ns120:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:60 .

    ns384:CmsImage1 foaf:thumbnail ns120:Thumbnail200x200 .
}

ns343:Thumbnail400x400 {
    ns343:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns75:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:25 .

    ns75:CmsImage0 foaf:thumbnail ns343:Thumbnail400x400 .
}

ns29:Thumbnail200x200 {
    ns29:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:109 .

    ns399:CmsImage0 foaf:thumbnail ns29:Thumbnail200x200 .
}

ns389:Thumbnail800x800 {
    ns389:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:organization1 .

    ns355:CmsImage0 foaf:thumbnail ns389:Thumbnail800x800 .
}

ns369:CmsImage1 {
    ns369:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:45 .
}

ns236:Thumbnail800x800 {
    ns236:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns145:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:88 .

    ns145:CmsImage1 foaf:thumbnail ns236:Thumbnail800x800 .
}

ns44:Thumbnail400x400 {
    ns44:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns31:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:67 .

    ns31:CmsImage0 foaf:thumbnail ns44:Thumbnail400x400 .
}

ns230:CmsImage0 {
    ns230:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:46 .
}

ns175:Thumbnail400x400 {
    ns175:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:79 .

    ns10:CmsImage0 foaf:thumbnail ns175:Thumbnail400x400 .
}

ns348:CmsImage0 {
    ns348:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:95 .
}

ns234:Thumbnail400x400 {
    ns234:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns126:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:2 .

    ns126:CmsImage1 foaf:thumbnail ns234:Thumbnail400x400 .
}

ns389:Thumbnail600x600 {
    ns389:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:organization1 .

    ns355:CmsImage0 foaf:thumbnail ns389:Thumbnail600x600 .
}

ns239:Thumbnail200x200 {
    ns239:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns269:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:61 .

    ns269:CmsImage0 foaf:thumbnail ns239:Thumbnail200x200 .
}

ns95:CmsImage1 {
    ns95:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:person0 .
}

ns1:57 {
    ns1:57 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 7" ;
        skos:prefLabel "CmsConcept 57" .
}

ns332:Thumbnail200x200 {
    ns332:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns3:work2 .

    ns179:CmsImage1 foaf:thumbnail ns332:Thumbnail200x200 .
}

ns403:CmsImage1 {
    ns403:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:53 .
}

ns214:Thumbnail200x200 {
    ns214:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns331:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:11 .

    ns331:CmsImage1 foaf:thumbnail ns214:Thumbnail200x200 .
}

ns267:Thumbnail200x200 {
    ns267:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns166:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:52 .

    ns166:CmsImage0 foaf:thumbnail ns267:Thumbnail200x200 .
}

ns266:Thumbnail600x600 {
    ns266:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:person2 .

    ns123:CmsImage1 foaf:thumbnail ns266:Thumbnail600x600 .
}

ns121:CmsImage1 {
    ns121:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:80 .
}

ns250:Thumbnail200x200 {
    ns250:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:57 .

    ns313:CmsImage1 foaf:thumbnail ns250:Thumbnail200x200 .
}

ns1:58 {
    ns1:58 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 8" ;
        skos:prefLabel "CmsConcept 58" .
}

ns4:Thumbnail600x600 {
    ns4:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:organization4 .

    ns279:CmsImage1 foaf:thumbnail ns4:Thumbnail600x600 .
}

ns154:Thumbnail800x800 {
    ns154:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:87 .

    ns188:CmsImage0 foaf:thumbnail ns154:Thumbnail800x800 .
}

ns327:Thumbnail200x200 {
    ns327:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:10 .

    ns352:CmsImage1 foaf:thumbnail ns327:Thumbnail200x200 .
}

ns335:CmsImage1 {
    ns335:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:39 .
}

ns134:Thumbnail800x800 {
    ns134:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:60 .

    ns384:CmsImage0 foaf:thumbnail ns134:Thumbnail800x800 .
}

ns61:Thumbnail600x600 {
    ns61:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns59:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:9 .

    ns59:CmsImage1 foaf:thumbnail ns61:Thumbnail600x600 .
}

ns192:Thumbnail600x600 {
    ns192:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:24 .

    ns158:CmsImage1 foaf:thumbnail ns192:Thumbnail600x600 .
}

ns53:Thumbnail800x800 {
    ns53:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:74 .

    ns238:CmsImage0 foaf:thumbnail ns53:Thumbnail800x800 .
}

ns379:Thumbnail800x800 {
    ns379:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:99 .

    ns228:CmsImage0 foaf:thumbnail ns379:Thumbnail800x800 .
}

ns379:Thumbnail200x200 {
    ns379:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:99 .

    ns228:CmsImage0 foaf:thumbnail ns379:Thumbnail200x200 .
}

ns271:CmsImage1 {
    ns271:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:freestandingwork11 .
}

ns386:Thumbnail200x200 {
    ns386:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns70:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:14 .

    ns70:CmsImage0 foaf:thumbnail ns386:Thumbnail200x200 .
}

ns91:Thumbnail800x800 {
    ns91:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns3:work3 .

    ns342:CmsImage0 foaf:thumbnail ns91:Thumbnail800x800 .
}

ns237:CmsImage1 {
    ns237:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:75 .
}

ns347:Thumbnail400x400 {
    ns347:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:organization3 .

    ns376:CmsImage0 foaf:thumbnail ns347:Thumbnail400x400 .
}

ns89:Thumbnail800x800 {
    ns89:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns153:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:44 .

    ns153:CmsImage1 foaf:thumbnail ns89:Thumbnail800x800 .
}

ns165:Thumbnail800x800 {
    ns165:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:96 .

    ns366:CmsImage0 foaf:thumbnail ns165:Thumbnail800x800 .
}

ns9:Thumbnail600x600 {
    ns9:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns363:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:42 .

    ns363:CmsImage0 foaf:thumbnail ns9:Thumbnail600x600 .
}

ns356:CmsImage0 {
    ns356:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:50 .
}

ns242:Thumbnail400x400 {
    ns242:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns17:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:15 .

    ns17:CmsImage1 foaf:thumbnail ns242:Thumbnail400x400 .
}

ns119:Thumbnail400x400 {
    ns119:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:collection1 .

    ns315:CmsImage1 foaf:thumbnail ns119:Thumbnail400x400 .
}

ns323:CmsImage0 {
    ns323:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns65:person3 .
}

ns389:Thumbnail400x400 {
    ns389:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:organization1 .

    ns355:CmsImage0 foaf:thumbnail ns389:Thumbnail400x400 .
}

ns180:Thumbnail600x600 {
    ns180:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns148:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns65:organization2 .

    ns148:CmsImage1 foaf:thumbnail ns180:Thumbnail600x600 .
}

ns180:Thumbnail800x800 {
    ns180:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns148:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:organization2 .

    ns148:CmsImage1 foaf:thumbnail ns180:Thumbnail800x800 .
}

ns248:Thumbnail800x800 {
    ns248:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns121:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:80 .

    ns121:CmsImage0 foaf:thumbnail ns248:Thumbnail800x800 .
}

ns249:Thumbnail200x200 {
    ns249:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns65:collection1 .

    ns315:CmsImage0 foaf:thumbnail ns249:Thumbnail200x200 .
}

ns380:Thumbnail400x400 {
    ns380:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:101 .

    ns396:CmsImage0 foaf:thumbnail ns380:Thumbnail400x400 .
}

ns177:Thumbnail200x200 {
    ns177:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns47:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:27 .

    ns47:CmsImage0 foaf:thumbnail ns177:Thumbnail200x200 .
}

ns360:Thumbnail800x800 {
    ns360:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:13 .

    ns84:CmsImage0 foaf:thumbnail ns360:Thumbnail800x800 .
}

ns65:freestandingwork10 {
    ns65:freestandingwork10 a cms:Work ;
        dcterms:alternative "FreestandingWork10 alternative title 0",
            "FreestandingWork10 alternative title 1" ;
        dcterms:contributor _:N7729ebc5f676401faeadc27ebb864bcd,
            _:N8049d325e36e4aec89aaa8dc38ab1fda ;
        dcterms:creator ns65:organization2,
            ns65:organization3 ;
        dcterms:description _:Nb493bacb65c346c89af788f0e800cfae ;
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
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 rights holder" ;
        dcterms:source ns1:60,
            ns1:61 ;
        dcterms:spatial ns65:freestandingwork10Location ;
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
        foaf:page <http://example.com/work/10> .

    _:N7729ebc5f676401faeadc27ebb864bcd a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 1" .

    _:N8049d325e36e4aec89aaa8dc38ab1fda a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 0" .

    _:Nb493bacb65c346c89af788f0e800cfae a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns81:CmsImage1 {
    ns81:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:34 .
}

ns251:Thumbnail400x400 {
    ns251:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns92:work6 .

    ns270:CmsImage1 foaf:thumbnail ns251:Thumbnail400x400 .
}

ns25:Thumbnail400x400 {
    ns25:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns299:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:32 .

    ns299:CmsImage1 foaf:thumbnail ns25:Thumbnail400x400 .
}

ns287:Thumbnail600x600 {
    ns287:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:57 .

    ns313:CmsImage0 foaf:thumbnail ns287:Thumbnail600x600 .
}

ns34:Thumbnail200x200 {
    ns34:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:21 .

    ns398:CmsImage1 foaf:thumbnail ns34:Thumbnail200x200 .
}

ns344:CmsImage0 {
    ns344:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:70 .
}

ns326:CmsImage1 {
    ns326:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:104 .
}

ns77:Thumbnail400x400 {
    ns77:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:26 .

    ns393:CmsImage1 foaf:thumbnail ns77:Thumbnail400x400 .
}

ns139:Thumbnail400x400 {
    ns139:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:17 .

    ns194:CmsImage0 foaf:thumbnail ns139:Thumbnail400x400 .
}

ns50:Thumbnail600x600 {
    ns50:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns321:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:47 .

    ns321:CmsImage0 foaf:thumbnail ns50:Thumbnail600x600 .
}

ns296:Thumbnail600x600 {
    ns296:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns367:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:100 .

    ns367:CmsImage1 foaf:thumbnail ns296:Thumbnail600x600 .
}

ns1:43 {
    ns1:43 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 3" ;
        skos:prefLabel "CmsConcept 43" .
}

dcterms:subject {
    dcterms:subject a cms:Property ;
        rdfs:label "Subject" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> .
}

ns399:CmsImage1 {
    ns399:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:109 .
}

ns19:Thumbnail400x400 {
    ns19:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns303:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:69 .

    ns303:CmsImage1 foaf:thumbnail ns19:Thumbnail400x400 .
}

ns56:Thumbnail800x800 {
    ns56:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns107:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:36 .

    ns107:CmsImage0 foaf:thumbnail ns56:Thumbnail800x800 .
}

ns131:Thumbnail400x400 {
    ns131:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns100:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:73 .

    ns100:CmsImage1 foaf:thumbnail ns131:Thumbnail400x400 .
}

ns203:Thumbnail800x800 {
    ns203:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:97 .

    ns385:CmsImage1 foaf:thumbnail ns203:Thumbnail800x800 .
}

ns247:Thumbnail800x800 {
    ns247:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns353:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:83 .

    ns353:CmsImage1 foaf:thumbnail ns247:Thumbnail800x800 .
}

ns21:Thumbnail200x200 {
    ns21:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns258:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:12 .

    ns258:CmsImage0 foaf:thumbnail ns21:Thumbnail200x200 .
}

ns382:Thumbnail400x400 {
    ns382:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:106 .

    ns128:CmsImage0 foaf:thumbnail ns382:Thumbnail400x400 .
}

ns375:Thumbnail200x200 {
    ns375:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:3 .

    ns261:CmsImage0 foaf:thumbnail ns375:Thumbnail200x200 .
}

ns311:Thumbnail600x600 {
    ns311:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:50 .

    ns356:CmsImage1 foaf:thumbnail ns311:Thumbnail600x600 .
}

ns287:Thumbnail800x800 {
    ns287:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:57 .

    ns313:CmsImage0 foaf:thumbnail ns287:Thumbnail800x800 .
}

ns269:CmsImage1 {
    ns269:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:61 .
}

ns393:CmsImage0 {
    ns393:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:26 .
}

ns371:CmsImage0 {
    ns371:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:29 .
}

ns1:73 {
    ns1:73 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 3" ;
        skos:prefLabel "CmsConcept 73" .
}

ns195:Thumbnail600x600 {
    ns195:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:79 .

    ns10:CmsImage1 foaf:thumbnail ns195:Thumbnail600x600 .
}

ns3:work0Opening {
    ns3:work0Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N62501d60484d41a78ed357ee0f7cbb12 ;
        dcterms:spatial _:Nd79acee3737645e4aef1295f05b137c8 ;
        dcterms:title "CmsCollection0CmsWork0 opening" ;
        cms:work ns3:work0 .

    _:Nd79acee3737645e4aef1295f05b137c8 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N62501d60484d41a78ed357ee0f7cbb12 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns328:Thumbnail600x600 {
    ns328:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns100:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:73 .

    ns100:CmsImage0 foaf:thumbnail ns328:Thumbnail600x600 .
}

ns305:Thumbnail600x600 {
    ns305:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns142:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:20 .

    ns142:CmsImage1 foaf:thumbnail ns305:Thumbnail600x600 .
}

dcterms:extent {
    dcterms:extent a cms:Property ;
        rdfs:label "Extent" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> .
}

ns203:Thumbnail200x200 {
    ns203:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:97 .

    ns385:CmsImage1 foaf:thumbnail ns203:Thumbnail200x200 .
}

ns1:7 {
    ns1:7 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 7" ;
        skos:prefLabel "CmsConcept 7" .
}

ns398:CmsImage0 {
    ns398:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:21 .
}

ns325:Thumbnail600x600 {
    ns325:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns361:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:68 .

    ns361:CmsImage1 foaf:thumbnail ns325:Thumbnail600x600 .
}

ns362:Thumbnail600x600 {
    ns362:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns162:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:58 .

    ns162:CmsImage1 foaf:thumbnail ns362:Thumbnail600x600 .
}

ns314:CmsImage0 {
    ns314:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:41 .
}

ns281:CmsImage1 {
    ns281:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:30 .
}

ns351:Thumbnail800x800 {
    ns351:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns111:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:23 .

    ns111:CmsImage1 foaf:thumbnail ns351:Thumbnail800x800 .
}

ns187:Thumbnail600x600 {
    ns187:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:87 .

    ns188:CmsImage1 foaf:thumbnail ns187:Thumbnail600x600 .
}

ns184:Thumbnail800x800 {
    ns184:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:109 .

    ns399:CmsImage1 foaf:thumbnail ns184:Thumbnail800x800 .
}

ns400:Thumbnail800x800 {
    ns400:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns109:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:108 .

    ns109:CmsImage0 foaf:thumbnail ns400:Thumbnail800x800 .
}

ns311:Thumbnail800x800 {
    ns311:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:50 .

    ns356:CmsImage1 foaf:thumbnail ns311:Thumbnail800x800 .
}

ns351:Thumbnail200x200 {
    ns351:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns111:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:23 .

    ns111:CmsImage1 foaf:thumbnail ns351:Thumbnail200x200 .
}

ns200:Thumbnail400x400 {
    ns200:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns369:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:45 .

    ns369:CmsImage0 foaf:thumbnail ns200:Thumbnail400x400 .
}

ns353:CmsImage0 {
    ns353:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:83 .
}

ns397:CmsImage1 {
    ns397:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:59 .
}

ns173:Thumbnail600x600 {
    ns173:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns241:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:62 .

    ns241:CmsImage0 foaf:thumbnail ns173:Thumbnail600x600 .
}

ns35:Thumbnail600x600 {
    ns35:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:92 .

    ns381:CmsImage1 foaf:thumbnail ns35:Thumbnail600x600 .
}

ns295:Thumbnail400x400 {
    ns295:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns167:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:51 .

    ns167:CmsImage0 foaf:thumbnail ns295:Thumbnail400x400 .
}

ns80:Thumbnail200x200 {
    ns80:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns344:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:70 .

    ns344:CmsImage1 foaf:thumbnail ns80:Thumbnail200x200 .
}

ns1:104 {
    ns1:104 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 4" ;
        skos:prefLabel "CmsConcept 104" .
}

ns381:CmsImage1 {
    ns381:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:92 .
}

ns222:Thumbnail200x200 {
    ns222:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:53 .

    ns403:CmsImage1 foaf:thumbnail ns222:Thumbnail200x200 .
}

ns249:Thumbnail800x800 {
    ns249:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:collection1 .

    ns315:CmsImage0 foaf:thumbnail ns249:Thumbnail800x800 .
}

ns65:freestandingwork9Creation {
    ns65:freestandingwork9Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns65:organization1,
            ns65:organization2 ;
        dcterms:date _:N864342b8d1834b36a042331644ccf471 ;
        dcterms:spatial ns65:freestandingwork9Location ;
        dcterms:title "FreestandingWork9 creation" ;
        cms:work ns65:freestandingwork9 .

    _:N864342b8d1834b36a042331644ccf471 a cms:DateTimeDescription ;
        time:day "---23"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns334:CmsImage1 {
    ns334:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:71 .
}

ns118:Thumbnail800x800 {
    ns118:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:53 .

    ns403:CmsImage0 foaf:thumbnail ns118:Thumbnail800x800 .
}

ns74:Thumbnail400x400 {
    ns74:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns237:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:75 .

    ns237:CmsImage1 foaf:thumbnail ns74:Thumbnail400x400 .
}

ns300:CmsImage1 {
    ns300:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:22 .
}

ns113:Thumbnail800x800 {
    ns113:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:28 .

    ns401:CmsImage1 foaf:thumbnail ns113:Thumbnail800x800 .
}

ns361:CmsImage0 {
    ns361:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:68 .
}

ns394:CmsImage1 {
    ns394:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:91 .
}

ns72:Thumbnail600x600 {
    ns72:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:7 .

    ns186:CmsImage0 foaf:thumbnail ns72:Thumbnail600x600 .
}

ns146:Thumbnail600x600 {
    ns146:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns363:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:42 .

    ns363:CmsImage1 foaf:thumbnail ns146:Thumbnail600x600 .
}

ns47:CmsImage1 {
    ns47:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:27 .
}

ns118:Thumbnail400x400 {
    ns118:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:53 .

    ns403:CmsImage0 foaf:thumbnail ns118:Thumbnail400x400 .
}

dcterms:description {
    dcterms:description a cms:Property ;
        rdfs:label "Description" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns404:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Description> .
}

ns75:CmsImage1 {
    ns75:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:25 .
}

ns1:6 {
    ns1:6 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 6" ;
        skos:prefLabel "CmsConcept 6" .
}

ns33:Thumbnail200x200 {
    ns33:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns304:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns92:work7 .

    ns304:CmsImage1 foaf:thumbnail ns33:Thumbnail200x200 .
}

ns169:Thumbnail600x600 {
    ns169:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:43 .

    ns374:CmsImage1 foaf:thumbnail ns169:Thumbnail600x600 .
}

ns213:Thumbnail400x400 {
    ns213:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns86:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:102 .

    ns86:CmsImage1 foaf:thumbnail ns213:Thumbnail400x400 .
}

ns272:Thumbnail600x600 {
    ns272:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:107 .

    ns387:CmsImage0 foaf:thumbnail ns272:Thumbnail600x600 .
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

ns99:Thumbnail200x200 {
    ns99:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:97 .

    ns385:CmsImage0 foaf:thumbnail ns99:Thumbnail200x200 .
}

ns324:Thumbnail800x800 {
    ns324:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:organization3 .

    ns376:CmsImage1 foaf:thumbnail ns324:Thumbnail800x800 .
}

ns122:Thumbnail800x800 {
    ns122:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns149:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:33 .

    ns149:CmsImage1 foaf:thumbnail ns122:Thumbnail800x800 .
}

ns368:CmsImage1 {
    ns368:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:85 .
}

ns205:Thumbnail400x400 {
    ns205:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns65:organization0 .

    ns5:CmsImage1 foaf:thumbnail ns205:Thumbnail400x400 .
}

ns246:Thumbnail800x800 {
    ns246:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:37 .

    ns341:CmsImage0 foaf:thumbnail ns246:Thumbnail800x800 .
}

ns92:work6Opening {
    ns92:work6Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-26"^^xsd:date ;
        dcterms:description _:Nbcd5efda845f46cea3df0d08454aa2bb ;
        dcterms:spatial _:N3dca3a4cff2343808a46b98fcc107f59 ;
        dcterms:title "CmsCollection1CmsWork6 opening" ;
        cms:work ns92:work6 .

    _:N3dca3a4cff2343808a46b98fcc107f59 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nbcd5efda845f46cea3df0d08454aa2bb a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns380:Thumbnail800x800 {
    ns380:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:101 .

    ns396:CmsImage0 foaf:thumbnail ns380:Thumbnail800x800 .
}

ns8:Thumbnail800x800 {
    ns8:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns209:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns65:person4 .

    ns209:CmsImage1 foaf:thumbnail ns8:Thumbnail800x800 .
}

ns73:Thumbnail800x800 {
    ns73:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:64 .

    ns377:CmsImage1 foaf:thumbnail ns73:Thumbnail800x800 .
}

ns350:Thumbnail800x800 {
    ns350:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns230:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:46 .

    ns230:CmsImage0 foaf:thumbnail ns350:Thumbnail800x800 .
}

ns330:Thumbnail600x600 {
    ns330:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns3:work1 .

    ns280:CmsImage1 foaf:thumbnail ns330:Thumbnail600x600 .
}

ns388:Thumbnail800x800 {
    ns388:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:19 .

    ns402:CmsImage1 foaf:thumbnail ns388:Thumbnail800x800 .
}

ns55:Thumbnail600x600 {
    ns55:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns353:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:83 .

    ns353:CmsImage0 foaf:thumbnail ns55:Thumbnail600x600 .
}

ns404:property_group {
    ns404:property_group a cms:PropertyGroup ;
        rdfs:label "Synthetic data properties" .
}

ns403:CmsImage0 {
    ns403:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:53 .
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
        foaf:depicts ns1:16 .
}

ns151:Thumbnail200x200 {
    ns151:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns32:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:31 .

    ns32:CmsImage1 foaf:thumbnail ns151:Thumbnail200x200 .
}

ns26:Thumbnail600x600 {
    ns26:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:50 .

    ns356:CmsImage0 foaf:thumbnail ns26:Thumbnail600x600 .
}

ns1:84 {
    ns1:84 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 4" ;
        skos:prefLabel "CmsConcept 84" .
}

ns140:Thumbnail200x200 {
    ns140:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:71 .

    ns334:CmsImage1 foaf:thumbnail ns140:Thumbnail200x200 .
}

ns1:30 {
    ns1:30 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 0" ;
        skos:prefLabel "CmsConcept 30" .
}

ns367:CmsImage0 {
    ns367:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:100 .
}

ns322:CmsImage1 {
    ns322:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:8 .
}

ns400:Thumbnail600x600 {
    ns400:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns109:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:108 .

    ns109:CmsImage0 foaf:thumbnail ns400:Thumbnail600x600 .
}

ns349:CmsImage1 {
    ns349:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:56 .
}

ns401:CmsImage1 {
    ns401:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:28 .
}

ns248:Thumbnail600x600 {
    ns248:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns121:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:80 .

    ns121:CmsImage0 foaf:thumbnail ns248:Thumbnail600x600 .
}

ns1:23 {
    ns1:23 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 3" ;
        skos:prefLabel "CmsConcept 23" .
}

ns261:CmsImage0 {
    ns261:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:3 .
}

ns257:CmsImage1 {
    ns257:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:93 .
}
`);
