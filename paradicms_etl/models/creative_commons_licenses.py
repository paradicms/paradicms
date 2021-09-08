# -*- coding: utf-8 -*-

from typing import Tuple

from rdflib import Graph, URIRef
from paradicms_etl.models.license import License
from paradicms_etl.models._model_singletons import _ModelSingletons


class CreativeCommonsLicenses(_ModelSingletons):
    _MODEL_CLASS = License

    BSD = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@zh .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@sq .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@bg .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@fi .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@nso .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@fr-lu .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@bn .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ar .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@en-us .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@en-ca .
<http://creativecommons.org/licenses/BSD/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/BSD/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@eu .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@tr .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@gl .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@sr-latn .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@sl .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@lt .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@vi .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@mk .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ast-es .
<http://creativecommons.org/licenses/BSD/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/software> .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@fa .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@es-pe .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@nl .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@zu .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@he .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@te .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@es-ec .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD License" .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ta .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@sr .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@x-i18n .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@uk .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@es-es .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@et .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@de-at .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@fr-ch .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@hr .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@no .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@en-hk .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@kk .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@hu .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@pt-br .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@da .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@en-gb .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@be .
<http://creativecommons.org/licenses/BSD/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@es-pr .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@es-gt .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@lv .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@az .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@es-ar .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ml .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@cs .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ko .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@pt-pt .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ms .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@es-cl .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@id .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@as .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@mn .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@st .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ja .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@is .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@pt .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@oci-es .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@si-lk .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/identifier> "BSD" .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@pl .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@eo .
<http://creativecommons.org/licenses/BSD/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ast .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ca .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@it-ch .
<http://creativecommons.org/licenses/BSD/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@es-co .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@fr .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ur .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@zh-tw .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@fr-ca .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@hy .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@af .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ro .
<http://creativecommons.org/licenses/BSD/> <http://creativecommons.org/ns#legalcode> <http://opensource.org/licenses/bsd-license.php> .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@el .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ga .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@th .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@en .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ru .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@es .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@sv .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@it .
<http://creativecommons.org/licenses/BSD/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@es-mx .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@de .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@en-sg .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@hi .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@zh-hk .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@de-ch .
<http://creativecommons.org/licenses/BSD/> <http://purl.org/dc/elements/1.1/title> "BSD"@ka .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/BSD/')))
    GPL_2_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@az .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General de GNU"@es .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "<abbr title=\"Gnu is not Unix\" lang=\"en\">Gnu</abbr>-<span lang=\"en\">General public license</span>"@it-ch .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@pt-pt .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General de GNU"@es-pr .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General de GNU"@es-cl .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Gi\u1EA5y ph\u00E9p GNU General Public "@vi .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licenza P\u00FAblica Xeral de GNU"@gl .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General de GNU"@es-mx .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@hi .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@ga .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@ur .
<http://creativecommons.org/licenses/GPL/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU \u011Cenerala Publika Permesilo (GPL)"@eo .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU Genel Kamu Lisans\u0131"@tr .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0631\u062E\u0635\u0629 \u062C\u0646\u0648 \u0639\u0627\u0645\u0629 \u0627\u0644\u062C\u0645\u0647\u0648\u0631"@ar .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General de GNU"@es-co .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@oci-es .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@fa .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@cs .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNUren Baimen Publiko Orokorra"@eu .
<http://creativecommons.org/licenses/GPL/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General de GNU"@es-gt .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@bn .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@id .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU GPL"@zh .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@no .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General de GNU"@es-ar .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU \uC77C\uBC18 \uACF5\uC911 \uC0AC\uC6A9 \uD5C8\uAC00\uC11C"@ko .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU Licen\u0163a Public\u0103 General\u0103"@ro .
<http://creativecommons.org/licenses/GPL/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@sv .
<http://creativecommons.org/licenses/GPL/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@fi .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@st .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License (Lizenzvertrag)"@de-ch .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@te .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@hu .
<http://creativecommons.org/licenses/GPL/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU Laesense ya Bohle ya Kakaret\u0161o"@nso .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Llic\u00E8ncia P\u00FAblica General de GNU"@ca .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License (Lizenzvertrag)"@de .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licence publique g\u00E9n\u00E9rale GNU"@fr .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/terms/hasVersion> "2.0" .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@pt .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0433\u0440\u0430\u043C\u0430\u0434\u0441\u043A\u0430\u044F \u043B\u0456\u0446\u044D\u043D\u0437\u0456\u044F GNU (<i>GNU General Public License</i>)"@be .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "<abbr title=\"Gnu is not Unix\" lang=\"en\">Gnu</abbr>-<span lang=\"en\">General public license</span>"@it .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Powszechna Licencja Publiczna GNU"@pl .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8 \u10E1\u10D0\u10EF\u10D0\u10E0\u10DD \u10DA\u10D8\u10EA\u10D4\u10DC\u10D6\u10D8\u10D0"@ka .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@ast .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@pt-br .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Ilayisensi Evamile Yomphakathi ye-GNU"@zu .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU \u0393\u03B5\u03BD\u03B9\u03BA\u03AE \u0394\u03B7\u03BC\u03CC\u03C3\u03B9\u03B1 \u0386\u03B4\u03B5\u03B9\u03B1"@el .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public Licence"@en-gb .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU Lesen Awam Am"@ms .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@en-ca .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@as .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@mn .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public licenca"@sr-latn .
<http://creativecommons.org/licenses/GPL/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/GPL/2.0/88x62.png> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@fr-lu .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/creator> <http://fsf.org> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public Licence"@en-sg .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/identifier> "GPL" .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@kk .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU Op\u0107a javna licenca"@hr .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@fr-ca .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU sa\u012Bsin\u0101t\u0101 visp\u0101r\u012Bg\u0101 publisk\u0101 licence (LGPL)"@lv .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General de GNU"@es-pe .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public Licence"@en-hk .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@bg .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General de GNU"@es-es .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@fr-ch .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU \u901A\u7528\u516C\u5171\u6388\u6B0A\u689D\u6B3E"@zh-tw .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Splo\u0161na javna licenca GNU"@sl .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0D17\u0D4D\u0D28\u0D42 \u0D38\u0D3E\u0D7C\u0D35\u0D4D\u0D35\u0D1C\u0D28\u0D3F\u0D15 \u0D05\u0D28\u0D41\u0D35\u0D3E\u0D26\u0D2A\u0D24\u0D4D\u0D30\u0D02"@ml .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@en-us .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License (Lizenzvertrag)"@de-at .
<http://creativecommons.org/licenses/GPL/2.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/GPL/2.0/legalcode> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/software> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@ta .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@uk .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@en .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "${GNU General Public License}"@x-i18n .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@is .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@ru .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@et .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "\u05D4\u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05D4\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05D4\u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D2\u05E0\u05D5"@he .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU \u901A\u7528\u516C\u5171\u6388\u6B0A\u689D\u6B3E"@zh-hk .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@nl .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU Algemene Publieke Lisensie"@af .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General de GNU"@es-ec .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@hy .
<http://creativecommons.org/licenses/GPL/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0413\u041D\u0423 \u043E\u043F\u0448\u0442\u0430 \u0458\u0430\u0432\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "Leja e P\u00EBrgjithshme Publike GNU"@sq .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU Visuotin\u0117 vie\u0161a licencija"@lt .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@da .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@si-lk .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU \u4E00\u822C\u516C\u8846\u5229\u7528\u8A31\u8AFE\u5951\u7D04\u66F8"@ja .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "GNU General Public License"@ast-es .
<http://creativecommons.org/licenses/GPL/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#SourceCode> .
<http://creativecommons.org/licenses/GPL/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B\u0E02\u0E2D\u0E07\u0E01\u0E19\u0E39 "@th .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/GPL/2.0/')))
    LGPL_2_1 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@hy .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@fr-ch .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@pt-pt .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@ur .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@hu .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@oci-es .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License (Lizenzvertrag)"@de .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "<abbr title=\"Gnu is not Unix\" lang=\"en\">Gnu</abbr>-<span lang=\"en\">Lesser general public license</span>"@it .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Llic\u00E8ncia P\u00FAblica General Menor de GNU"@ca .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License (Lizenzvertrag)"@de-at .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@ast .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@da .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General Menor de GNU"@es-cl .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU \u52A3\u7B49\u4E00\u822C\u516C\u8846\u5229\u7528\u8A31\u8AFE\u5951\u7D04\u66F8"@ja .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU \u8F03\u5BEC\u9B06\u901A\u7528\u516C\u5171\u6388\u6B0A\u689D\u6B3E"@zh-hk .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@mn .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@en-us .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public Licence"@en-hk .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@ga .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@ast-es .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@fi .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@ta .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "${GNU Lesser General Public License}"@x-i18n .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General Menor de GNU"@es-pr .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@no .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@st .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@hi .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "\u05D4\u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05D4\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05D4\u05DB\u05DC\u05DC\u05D9 \u05D4\u05E0\u05D7\u05D5\u05EA \u05E9\u05DC \u05D2\u05E0\u05D5"@he .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@fr-ca .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General Menor de GNU"@es-es .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0433\u0440\u0430\u043C\u0430\u0434\u0441\u043A\u0430\u044F \u043B\u0456\u0446\u044D\u043D\u0437\u0456\u044F \u0430\u0431\u043C\u0435\u0436\u0430\u0432\u0430\u043D\u0430\u0433\u0430 \u045E\u0436\u044B\u0432\u0430\u043D\u043D\u044F GNU (<i>GNU Lesser General Public License</i>)"@be .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Manja op\u0107a javna licenca"@hr .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@sq .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public Licence"@en-sg .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesen Awam Am yang Lebih Kecil"@ms .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU \u8F03\u5BEC\u9B06\u901A\u7528\u516C\u5171\u6388\u6B0A\u689D\u6B3E"@zh-tw .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/identifier> "LGPL" .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License (Lizenzvertrag)"@de-ch .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@si-lk .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@bg .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Laesense ya Kakaret\u0161o e Nyenyane ya Bohle"@nso .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "moindre licence publique g\u00E9n\u00E9rale GNU (LGPL)"@fr .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@en-ca .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "<abbr title=\"Gnu is not Unix\" lang=\"en\">Gnu</abbr>-<span lang=\"en\">Lesser general public license</span>"@it-ch .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@fa .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "\u0413\u041D\u0423 \u043F\u043E\u043A\u0440\u0430\u0442\u043A\u0430 \u043E\u043F\u0448\u0442\u0430 \u0458\u0430\u0432\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNUren Baimen Publiko Orokor Txikia"@eu .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/creator> <http://fsf.org> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public Licence"@en-gb .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@pt-br .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License (GNU Licenta Publica Generala)"@ro .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Ilayisensi Evamile Yomphakathi Engaphansi Ye-GNU"@zu .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@bn .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@uk .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/software> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU sa\u012Bsin\u0101t\u0101 visp\u0101r\u012Bg\u0101 publisk\u0101 licence (LGPL)"@lv .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General Menor de GNU"@es-gt .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@sl .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@el .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@cs .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@az .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/LGPL/2.1/legalcode> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General Menor de GNU"@es .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@ml .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@et .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/terms/hasVersion> "2.1" .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@id .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@af .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@te .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU \uC77C\uBC18 \uACF5\uC911 \uC0AC\uC6A9 \uD5C8\uAC00\uC11C"@ko .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licenza P\u00FAblica Xeral Menor de GNU"@gl .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General Menor de GNU"@es-ar .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B \u0E02\u0E2D\u0E07\u0E01\u0E19\u0E39\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E41\u0E1A\u0E1A\u0E0A\u0E38\u0E14\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E17\u0E35\u0E48\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E44\u0E27\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49\u0E1A\u0E48\u0E2D\u0E22 \u0E46"@th .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Gi\u1EA5y ph\u00E9p GNU r\u00FAt g\u1ECDn"@vi .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU \u10DB\u10EA\u10D8\u10E0\u10D4 \u10D6\u10DD\u10D2\u10D0\u10E0\u10D8 \u10E1\u10D0\u10EF\u10D0\u10E0\u10DD \u10DA\u10D8\u10EA\u10D4\u10DC\u10D6\u10D8\u10D0"@ka .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F GNU (<i>GNU Lesser General Public License</i>)"@ru .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public licenca"@sr-Latn .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@is .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@fr-lu .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU LGPL"@zh .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@pl .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@lt .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@en .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General Menor de GNU"@es-pe .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "\u0631\u062E\u0635\u0629 \u062C\u0646\u0648 \u0627\u0644\u0639\u0645\u0648\u0645\u064A\u0629 \u0627\u0644\u0635\u063A\u0631\u0649"@ar .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General Menor de GNU"@es-co .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Malgranda \u011Cenerala Publika Permesilo (LGPL)"@eo .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@nl .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@as .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General Menor de GNU"@es-ec .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@kk .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#SourceCode> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU K\u0131s\u0131tl\u0131 Genel Kamu Lisans\u0131"@tr .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/LGPL/2.1/88x62.png> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "Licencia P\u00FAblica General Menor de GNU"@es-mx .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@sv .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/LGPL/2.1/> <http://purl.org/dc/elements/1.1/title> "GNU Lesser General Public License"@pt .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/LGPL/2.1/')))
    MIT = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@fr-ca .
<http://creativecommons.org/licenses/MIT/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@as .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@th .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ru .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@x-i18n .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@id .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@zh .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@es-gt .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@es .
<http://creativecommons.org/licenses/MIT/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@he .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@sr .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ja .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@el .
<http://creativecommons.org/licenses/MIT/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ka .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@zu .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ast .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@oci-es .
<http://creativecommons.org/licenses/MIT/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT License" .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@lv .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@is .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@it-ch .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@sq .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/identifier> "MIT" .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@hi .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@nl .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@da .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@de .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@es-ar .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@es-cl .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@eu .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@pl .
<http://creativecommons.org/licenses/MIT/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/software> .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ro .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@hy .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@tr .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@zh-tw .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@sr-Latn .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@sv .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@be .
<http://creativecommons.org/licenses/MIT/> <http://creativecommons.org/ns#legalcode> <http://opensource.org/licenses/mit-license.php> .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@kk .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@es-ec .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@es-mx .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@bn .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@it .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@az .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@hu .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@nso .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@es-pr .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@zh-hk .
<http://creativecommons.org/licenses/MIT/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@bg .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ca .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@cs .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@en-gb .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ta .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@en-ca .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@fr .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@sl .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@mn .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@fr-lu .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@fa .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ast-es .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@es-co .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@en-hk .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@hr .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ar .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@es-es .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@en-sg .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ga .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@fi .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@pt-br .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@uk .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@de-ch .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@pt-pt .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ml .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@no .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@et .
<http://creativecommons.org/licenses/MIT/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@gl .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@si-lk .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@st .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@te .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@es-pe .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@en .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ms .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@pt .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@en-us .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@vi .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@fr-ch .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ur .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@de-at .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@mk .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@af .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@eo .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@lt .
<http://creativecommons.org/licenses/MIT/> <http://purl.org/dc/elements/1.1/title> "MIT"@ko .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/MIT/')))
    BY_NC_ND_2_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial-TiadaTerbitan 2.0 Umum"@ms .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 2.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@st .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@az .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 2.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1\u2013\u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4 2.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9-\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA 2.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno-Bez prerada 2.0 Generi\u010Dka licenca"@sr-Latn .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u7981\u6B62\u6539\u4F5C 2.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 2.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@te .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@ga .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 2.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@en .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101ls-Nemain\u012Bts 2.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc-nd" .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@as .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObrasDerivadas 2.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! - Ne v\u00E1ltoztasd! 2.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 2.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o-E sego ya Kgwebo-T\u0161e sa fetolwego 2.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell-IngenBearbeidelse 2.0 Generisk"@no .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano-Ungasuseli lutho kulokhu 2.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-Ickekommersiell-IngaBearbetningar 2.0 Generisk"@sv .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial-SenseObraDerivada 2.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@bn .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-Gayriticari-NoDerivs 2.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc-nd/2.0/legalcode> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 2.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-NonKomersial-TanpaTurunan 2.0 Generik"@id .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Neu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B-Nezasahujte do d\u00EDla 2.0 Generic"@cs .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@mn .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial-NoDerivs} 2.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E-\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438 2.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ei muutoksia-Ep\u00E4kaupallinen 2.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno-Bez prerada 2.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@ast .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala-LanEratorririkGabe 2.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 2.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial-No Derivadas 2.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 2.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@en-us .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial-Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas 2.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial-SenObraDerivada 2.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 2.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@fa .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 2.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial-Vedada a cria\u00E7\u00E3o de obras derivadas 2.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno-Brez predelav 2.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 2.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u7981\u6B62\u6F14\u7ECE 2.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel-GeenAfgeleideWerken 2.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel-IngenBearbejdelse 2.0 Generisk"@da .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439) 2.0 Generic"@ru .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32-\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07 2.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u7981\u6B62\u6539\u4F5C 2.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@kk .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-nd/2.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@ml .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@lt .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 - \u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B 2.0 Generic"@hy .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7-\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 2.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk + Tuletatud teoste keeld 2.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@ur .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-Necomercial-F\u0103r\u0103Modific\u0103ri 2.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@ta .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas d\u2019Utilisation Commerciale - Pas de Modification 2.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@be .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 2.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@hi .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@uk .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430 2.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628- \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A - \u0644\u0627 \u0627\u0634\u062A\u0642\u0627\u0642 2.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nc-nd/2.5/> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-NieKommersieel-GeenAfleidings 2.0 Generies"@af .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial - SemDerivados 2.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne-Bez utwor\u00F3w zale\u017Cnych 2.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 2.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Phi th\u01B0\u01A1ng m\u1EA1i - Kh\u00F4ng ph\u00E1i sinh  2.0 Chung"@vi .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-nd/2.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 - \u6539\u5909\u7981\u6B62 2.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Non opere derivate 2.0 Generico"@it .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC-\uBCC0\uACBD\uAE08\uC9C0 2.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.0 Generic"@is .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0411\u0435\u0437\u0410\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D\u0438\u0414\u0435\u043B\u0430 2.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce-Nemodifite 2.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 2.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Non opere derivate 2.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc-nd/2.0/> <http://purl.org/dc/terms/hasVersion> "2.0" .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc-nd/2.0/')))
    BY_NC_ND_2_5 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@st .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ei muutoksia-Ep\u00E4kaupallinen 2.5 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@uk .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@en .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObrasDerivadas 2.5 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano-Ungasuseli lutho kulokhu 2.5 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628- \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A - \u0644\u0627 \u0627\u0634\u062A\u0642\u0627\u0642 2.5 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 2.5 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk + Tuletatud teoste keeld 2.5 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel-IngenBearbejdelse 2.5 Generisk"@da .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Erkenning-NieKommersieel-GeenAfleidings 2.5 Generies"@af .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Neu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B-Nezasahujte do d\u00EDla 2.5 Generic"@cs .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 2.5 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-nd/2.5/88x31.png> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala-LanEratorririkGabe 2.5 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u7981\u6B62\u6539\u4F5C 2.5 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Non opere derivate 2.5 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7-\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 2.5 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/terms/hasVersion> "2.5" .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 - \u6539\u5909\u7981\u6B62 2.5 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0411\u0435\u0437\u0410\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D\u0438\u0414\u0435\u043B\u0430 2.5 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell-IngenBearbeidelse 2.5 Generisk"@no .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@bn .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! - Ne v\u00E1ltoztasd! 2.5 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel-GeenAfgeleideWerken 2.5 Unported"@nl .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 2.5 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32-\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07 2.5 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@mn .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E-\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438 2.5 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@ta .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nc-nd/3.0/> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial - SemDerivados 2.5 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1\u2013\u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4 2.5 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 2.5 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Phi th\u01B0\u01A1ng m\u1EA1i - Kh\u00F4ng ph\u00E1i sinh  2.5 Chung"@vi .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuire-Necomercial-F\u0103r\u0103Modific\u0103ri 2.5 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc-nd/2.5/legalcode> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@ga .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribusi-NonKomersial-TanpaTurunan 2.5 Generik"@id .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial-SenseObraDerivada 2.5 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 2.5 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@as .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@kk .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101ls-Nemain\u012Bts 2.5 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-Gayriticari-NoDerivs 2.5 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 2.5 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@hi .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 2.5 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 2.5 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@fa .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial-No Derivadas 2.5 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@az .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-nd/2.5/80x15.png> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas d\u2019Utilisation Commerciale - Pas de Modification 2.5 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o-E sego ya Kgwebo-T\u0161e sa fetolwego 2.5 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 - \u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B 2.5 Generic"@hy .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno-Bez prerada 2.5 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 2.5 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9-\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA 2.5 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u7981\u6B62\u6F14\u7ECE 2.5 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439) 2.5 Generic"@ru .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial-SenObraDerivada 2.5 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@be .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@en-us .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u7981\u6B62\u6539\u4F5C 2.5 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 2.5 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@is .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 2.5 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC-\uBCC0\uACBD\uAE08\uC9C0 2.5 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno-Brez predelav 2.5 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/identifier> "by-nc-nd" .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 2.5 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@ast .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno-Bez prerada 2.5 Generi\u010Dka licenca"@sr-Latn .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 2.5 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial-NoDerivs} 2.5 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial-Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas 2.5 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial-TiadaTerbitan 2.5 Umum"@ms .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial-Vedada a cria\u00E7\u00E3o de obras derivadas 2.5 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-Ickekommersiell-IngaBearbetningar 2.5 Generisk"@sv .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@lt .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@ur .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne-Bez utwor\u00F3w zale\u017Cnych 2.5 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce-Nemodifite 2.5 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 2.5 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430 2.5 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Non opere derivate 2.5 Generico"@it .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@te .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@ml .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 2.5 Generic"@en-sg .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc-nd/2.5/')))
    BY_NC_ND_3_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 3.0 Unported"@es .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial-SenseObraDerivada 3.0 No adaptada"@ca .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce-Nemodifite 3.0 Neadaptita"@eo .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@ml .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas d\u2019Utilisation Commerciale - Pas de Modification 3.0 non transpos\u00E9"@fr .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc-nd/3.0/legalcode> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@en-ca .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@hi .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk + Tuletatud teoste keeld 3.0 Jurisdiktsiooniga sidumata"@et .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@ta .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC-\uBCC0\uACBD\uAE08\uC9C0 3.0 Unported"@ko .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial - SemDerivados 3.0 N\u00E3o Adaptada"@pt .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc-nd" .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 3.0 Unported"@de-at .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430 3.0 Unported"@sr .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel-IngenBearbejdelse 3.0 Unported"@da .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@bn .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 3.0 Unported"@es-co .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@st .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1\u2013\u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4 3.0 \u10D0\u10E0\u10D0\u10DE\u10DD\u10E0\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 3.0 Unported"@es-cl .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Phi th\u01B0\u01A1ng m\u1EA1i - Kh\u00F4ng ph\u00E1i sinh  3.0 Unported"@vi .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ei muutoksia-Ep\u00E4kaupallinen 3.0 Muokkaamaton"@fi .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 3.0 Unported"@fr-ca .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-NieKommersieel-GeenAfleidings 3.0 Unported"@af .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-Necomercial-F\u0103r\u0103Modific\u0103ri 3.0 Ne-adaptat\u0103"@ro .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@as .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@en .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-nd/3.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u7981\u6B62\u6539\u4F5C 3.0 Unported"@zh-tw .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Non opere derivate 3.0 Unported"@it .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial-Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas 3.0 Unported"@pt-pt .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@be .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u7981\u6B62\u6539\u4F5C 3.0 Unported"@zh-hk .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano-Ungasuseli lutho kulokhu 3.0 Unported"@zu .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@fa .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial-NoDerivs} 3.0 ${Unported}"@x-i18n .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 3.0 Unported"@de-ch .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@ast-es .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Neu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B-Nezasahujte do d\u00EDla 3.0 Unported"@cs .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial-TiadaTerbitan 3.0 Unported"@ms .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@ast .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@mn .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 3.0 Unported"@es-ec .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@en-us .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 3.0 Unported"@es-ar .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439) 3.0 \u041D\u0435\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F"@ru .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-NonKomersial-TanpaTurunan 3.0 Unported"@id .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@ga .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@kk .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E-\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438 3.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial-Vedada a cria\u00E7\u00E3o de obras derivadas 3.0 Unported"@pt-br .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32-\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07 3.0 \u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A"@th .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u7981\u6B62\u6F14\u7ECE 3.0 Unported"@zh .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial-No Derivadas 3.0 Unported"@es-mx .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0411\u0435\u0437\u0410\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D\u0438\u0414\u0435\u043B\u0430 3.0 Unported"@mk .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 3.0 Unported"@es-pe .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@en-gb .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno-Bez prerada 3.0 Unported"@sr-latn .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObrasDerivadas 3.0 Unported"@es-pr .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell-IngenBearbeidelse 3.0 Unported"@no .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101ls-Nemain\u012Bts 3.0 Nep\u0101rnesta"@lv .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o-E sego ya Kgwebo-T\u0161e sa fetolwego 3.0 Unported"@nso .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@uk .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/terms/hasVersion> "3.0" .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne-Bez utwor\u00F3w zale\u017Cnych 3.0 Unported"@pl .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 - \u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B 3.0 \u0549\u057F\u0565\u0572\u0561\u0575\u0576\u0561\u0581\u057E\u0561\u056E"@hy .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 3.0 Unported"@es-es .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@si-lk .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala-LanEratorririkGabe 3.0 Unported"@eu .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7-\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 3.0 \u039C\u03B7 \u03B5\u03B9\u03C3\u03B1\u03B3\u03CC\u03BC\u03B5\u03BD\u03BF"@el .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 3.0 Unported"@de .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 3.0 Unported"@fr-ch .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@te .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 3.0 Unported"@es-gt .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno-Bez prerada 3.0 neloklizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@en-hk .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-Gayriticari-NoDerivs 3.0 Unported"@tr .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Non opere derivate 3.0 Unported"@it-ch .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@oci-es .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@sq .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@en-sg .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628- \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A - \u0644\u0627 \u0627\u0634\u062A\u0642\u0627\u0642 3.0 \u0627\u0644\u0627\u0635\u0644\u064A\u0629"@ar .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 3.0 Unported"@fr-lu .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@lt .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno-Brez predelav 3.0 Nedolo\u010Dena"@sl .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel-GeenAfgeleideWerken 3.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! - Ne v\u00E1ltoztasd! 3.0 Unported"@hu .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@is .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9-\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA 3.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial-SenObraDerivada 3.0 Unported"@gl .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-Ickekommersiell-IngaBearbetningar 3.0 Unported"@sv .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@az .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 - \u6539\u5909\u7981\u6B62 3.0 \u975E\u79FB\u690D"@ja .
<http://creativecommons.org/licenses/by-nc-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivs 3.0 Unported"@ur .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc-nd/3.0/')))
    BY_NC_ND_4_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ei muutoksia-Ep\u00E4kaupallinen 4.0 Kansainv\u00E4linen"@fi .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell-IngenBearbeidelse 4.0 Internasjonal"@no .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 - \u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B 4.0 International"@hy .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 4.0 International"@de-ch .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala-LanEratorririkGabe 4.0 International"@eu .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno-Bez prerada 4.0 me\u0111unarodni sporazumi"@hr .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 Nd\u00EBrkomb\u00EBtar"@sq .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 4.0 Internacional"@es .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel-GeenAfgeleideWerken 4.0 Internationaal"@nl .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ch .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 - \u6539\u5909\u7981\u6B62 4.0 \u56FD\u969B"@ja .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-NonKomersial-TanpaTurunan 4.0 Internasional"@id .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@az .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc-nd" .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! - Ne v\u00E1ltoztasd! 4.0 Nemzetk\u00F6zi"@hu .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Non opere derivate 4.0 Internazionale"@it-ch .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce-Nemodifite 4.0 Internacia"@eo .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u7981\u6B62\u6539\u4F5C 4.0 \u570B\u969B"@zh-tw .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0406\u0437 \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C \u0430\u0432\u0442\u043E\u0440\u0441\u0442\u0432\u0430 - \u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0430 - \u0411\u0435\u0437 \u043F\u043E\u0445\u0456\u0434\u043D\u0438\u0445 \u0442\u0432\u043E\u0440\u0456\u0432 4.0 \u041C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u0430"@uk .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@bn .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Phi th\u01B0\u01A1ng m\u1EA1i - Kh\u00F4ng ph\u00E1i sinh  4.0 Qu\u1ED1c t\u1EBF"@vi .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u7981\u6B62\u6539\u4F5C 4.0 \u570B\u969B"@zh-hk .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E-\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438 4.0 International"@bg .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-Necomercial-F\u0103r\u0103Modific\u0103ri 4.0 Interna\u021Bional"@ro .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0411\u0435\u0437\u0410\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D\u0438\u0414\u0435\u043B\u0430 4.0 \u041C\u0435\u0453\u0443\u043D\u0430\u0440\u043E\u0434\u0435\u043D"@mk .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 \u0C05\u0C02\u0C24\u0C30\u0C4D\u0C1C\u0C3E\u0C24\u0C40\u0C2F\u0C02"@te .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@oci-es .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno-Brez predelav 4.0 International"@sl .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano-Ungasuseli lutho kulokhu 4.0 International"@zu .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9-\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA 4.0 \u05D1\u05D9\u05DF\u05BE\u05DC\u05D0\u05D5\u05DE\u05D9"@he .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@hi .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas d\u2019Utilisation Commerciale - Pas de Modification 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-N\u00E3oComercial-SemDerivados 4.0 Internacional"@pt .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial-Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas 4.0 Internacional"@pt-pt .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@as .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@ast .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-Ickekommersiell-IngaBearbetningar 4.0 Internationell"@sv .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/terms/hasVersion> "4.0" .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7-\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 4.0 \u0394\u03B9\u03B5\u03B8\u03BD\u03AD\u03C2"@el .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@en .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc-nd/4.0/legalcode> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial-NoDerivatives} 4.0 ${International}"@x-i18n .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@en-ca .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno-Bez prerada 4.0 International"@sr-latn .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC-\uBCC0\uACBD\uAE08\uC9C0 4.0 \uAD6D\uC81C"@ko .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@fa .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@ast-es .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 \u0D05\u0D28\u0D4D\u0D24\u0D7C\u0D26\u0D47\u0D36\u0D40\u0D2F\u0D02"@ml .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32-\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07 4.0 International"@th .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 \u0DA2\u0DCF\u0DAD\u0DCA\u200D\u0DBA\u0DB1\u0DCA\u0DAD\u0DBB"@si-lk .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Priskyrimas - Nekomercinis platinimas - Joki\u0173 i\u0161vestini\u0173 darb\u0173 4.0 Tarptautin\u0117"@lt .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@kk .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@en-us .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-SinDerivadas 4.0 Internacional"@es-ar .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial-TiadaTerbitan 4.0 International"@ms .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 4.0 Internacional"@es-es .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 4.0 International"@de-at .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@en-gb .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-Gayriticari-NoDerivatives 4.0 Uluslararas\u0131"@tr .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@be .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@sr-Latn .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@ta .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-lu .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-N\u00E3oComercial-SemDerivados 4.0 Internacional"@pt-br .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@mn .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel-IngenBearbejdelse 4.0 International"@da .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101ls-Nemain\u012Bts 4.0 International"@lv .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o-E sego ya Kgwebo-T\u0161e sa fetolwego 4.0 International"@nso .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@en-hk .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk + Tuletatud teoste keeld 4.0 Rahvusvaheline"@et .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@ga .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Neu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B-Nezasahujte do d\u00EDla 4.0 International"@cs .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u00ABAttribution-NonCommercial-NoDerivatives\u00BB (\u00AB\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439\u00BB) 4.0 \u0412\u0435\u0441\u044C \u043C\u0438\u0440 (\u0432 \u0442.\u0447. \u0420\u043E\u0441\u0441\u0438\u044F \u0438 \u0434\u0440.)"@ru .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1\u2013\u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4 4.0 International"@ka .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-NieKommersieel-GeenAfleidings 4.0 International"@af .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-SinObraDerivada 4.0 Internacional"@es-pe .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-KeineBearbeitung 4.0 International"@de .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628- \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A - \u0644\u0627 \u0627\u0634\u062A\u0642\u0627\u0642 4.0 \u062F\u0648\u0644\u064A"@ar .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Pas de Modification 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ca .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u7981\u6B62\u6F14\u7ECE 4.0 \u56FD\u9645"@zh .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne-Bez utwor\u00F3w zale\u017Cnych 4.0 Mi\u0119dzynarodowe"@pl .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@en-sg .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430 4.0 International"@sr .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-NoDerivatives 4.0 International"@ur .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Non opere derivate 4.0 Internazionale"@it .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial-SenObraDerivada 4.0 Internacional"@gl .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Tilv\u00EDsun-Ekki\u00C1g\u00F3\u00F0askyni-EnginAfleidd 4.0 Al\u00FEj\u00F3\u00F0legt"@is .
<http://creativecommons.org/licenses/by-nc-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial-SenseObraDerivada 4.0 Internacional"@ca .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc-nd/4.0/')))
    BY_NC_SA_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@ta .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-LicenciarIgual 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@te .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IckeKommersiell-DelaLika 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Condividi allo stesso modo 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Condividi allo stesso modo 1.0 Generico"@it .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@az .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel-GelijkDelen 1.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-Niekommersieel-InsgelyksDeel 1.0 Generies"@af .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@lt .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@ast .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel\u2013DelP\u00E5SammeVilk\u00E5r 1.0 Generisk"@da .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@ml .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! - \u00CDgy add tov\u00E1bb! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-sa/1.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-CompartirDerivadasIgual 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas d'Utilisation Commerciale - Partage \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@is .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala-PartekatuBerdin 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce-Samkondi\u0109e 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-NonKomersial-BerbagiSerupa 1.0 Generik"@id .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@en .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial-CompartirIgual 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-Gayriticari-ShareAlike 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc-sa" .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 - \u7D99\u627F 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell-DelP\u00E5SammeVilk\u00E5r 1.0 Generisk"@no .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o - E sego ya Kgwebo - Mohlakanelwa 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD - \u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial-PerkongsianSerupa 1.0 Umum"@ms .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0578\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 1.0 Generic"@hy .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@hi .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano-Yihlanganyeleni 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno-Deliti pod istim uslovima 1.0 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@be .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-Necomercial-F\u0103r\u0103Modific\u0103ri 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@bn .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101ls-Nemainot licenci 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@uk .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc-sa/1.0/legalcode> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@ur .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno-Deljenje pod enakimi pogoji 1.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nc-sa/2.0/> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@mn .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0421 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439) 1.0 Generic"@ru .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne-Na tych samych warunkach 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@st .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno-Dijeli pod istim uvjetima 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial-ShareAlike} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nevyu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B-Zachovejte licenci 1.0 Generic"@cs .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Chung"@vi .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@ga .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1\u2013\u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7 1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk + Jagamine samadel tingimustel 1.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629-\u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A-\u0646\u0633\u0628 \u0627\u0644\u0639\u0645\u0644 1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-sa/1.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@fa .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Nicht-kommerziell-Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@kk .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial-Partilha nos termos da mesma licen\u00E7a 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ep\u00E4kaupallinen-Tarttuva 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial-CompartirIgual 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial-Licenciamiento Rec\u00EDproco 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial-Compartilhamento pela mesma licen\u00E7a 1.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial - CompartilhaIgual 1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 1.0 Generic"@as .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc-sa/1.0/')))
    BY_NC_SA_2_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@ast .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@en .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Chung"@vi .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 2.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 2.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@lt .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 2.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@kk .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-Weitergabe unter gleichen Bedingungen 2.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell-DelP\u00E5SammeVilk\u00E5r 2.0 Generisk"@no .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno-Deliti pod istim uslovima 2.0 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Condividi allo stesso modo 2.0 Generico"@it .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial-PerkongsianSerupa 2.0 Umum"@ms .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@az .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala-PartekatuBerdin 2.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629-\u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A-\u0646\u0633\u0628 \u0627\u0644\u0639\u0645\u0644 2.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@be .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-LicenciarIgual 2.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc-sa/2.0/legalcode> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! - \u00CDgy add tov\u00E1bb! 2.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o - E sego ya Kgwebo - Mohlakanelwa 2.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1\u2013\u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7 2.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-sa/2.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@ml .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Condividi allo stesso modo 2.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@ur .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno-Deljenje pod enakimi pogoji 2.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@en-us .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel-GelijkDelen 2.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-Weitergabe unter gleichen Bedingungen 2.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@hi .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 2.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@fa .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas d'Utilisation Commerciale - Partage \u00E0 l'Identique 2.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 2.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@mn .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0421 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439) 2.0 Generic"@ru .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101ls-Nemainot licenci 2.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial-ShareAlike} 2.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce-Samkondi\u0109e 2.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ep\u00E4kaupallinen-Tarttuva 2.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/terms/hasVersion> "2.0" .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@ta .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 2.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 2.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 2.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-Niekommersieel-InsgelyksDeel 2.0 Generies"@af .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-Necomercial-F\u0103r\u0103Modific\u0103ri 2.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno-Dijeli pod istim uvjetima 2.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk + Jagamine samadel tingimustel 2.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@bn .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial-Compartilhamento pela mesma licen\u00E7a 2.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc-sa" .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-NonKomersial-BerbagiSerupa 2.0 Generik"@id .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-sa/2.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IckeKommersiell-DelaLika 2.0 Generisk"@sv .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 - \u7D99\u627F 2.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0578\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 2.0 Generic"@hy .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 2.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel\u2013DelP\u00E5SammeVilk\u00E5r 2.0 Generisk"@da .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano-Yihlanganyeleni 2.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-Gayriticari-ShareAlike 2.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@st .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial-CompartirIgual 2.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial-Licenciamiento Rec\u00EDproco 2.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial - CompartilhaIgual 2.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial-Partilha nos termos da mesma licen\u00E7a 2.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nevyu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B-Zachovejte licenci 2.0 Generic"@cs .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 2.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Nicht-kommerziell-Weitergabe unter gleichen Bedingungen 2.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@uk .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nc-sa/2.5/> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial-CompartirIgual 2.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@ga .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne-Na tych samych warunkach 2.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@is .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-CompartirDerivadasIgual 2.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 2.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 2.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@te .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-CompartirIgual 2.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD - \u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 2.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nc-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.0 Generic"@as .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc-sa/2.0/')))
    BY_NC_SA_2_5 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 2.5 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk + Jagamine samadel tingimustel 2.5 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.5 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.5 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-Weitergabe unter gleichen Bedingungen 2.5 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@ml .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.5 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel\u2013DelP\u00E5SammeVilk\u00E5r 2.5 Generisk"@da .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce-Samkondi\u0109e 2.5 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-LicenciarIgual 2.5 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0421 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439) 2.5 Generic"@ru .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nevyu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B-Zachovejte licenci 2.5 Generic"@cs .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@ta .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 2.5 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@is .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/identifier> "by-nc-sa" .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@az .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Condividi allo stesso modo 2.5 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne-Na tych samych warunkach 2.5 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Condividi allo stesso modo 2.5 Generico"@it .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano-Yihlanganyeleni 2.5 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell-DelP\u00E5SammeVilk\u00E5r 2.5 Generisk"@no .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 2.5 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@st .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial-PerkongsianSerupa 2.5 Umum"@ms .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@uk .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 2.5 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.5 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial-ShareAlike} 2.5 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 2.5 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@be .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@en-us .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Erkenning-Niekommersieel-InsgelyksDeel 2.5 Generies"@af .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-sa/2.5/88x31.png> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 2.5 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Nicht-kommerziell-Weitergabe unter gleichen Bedingungen 2.5 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@te .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial-Partilha nos termos da mesma licen\u00E7a 2.5 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0578\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 2.5 Generic"@hy .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1\u2013\u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7 2.5 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@ur .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial-Compartilhamento pela mesma licen\u00E7a 2.5 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@as .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial - CompartilhaIgual 2.5 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno-Deliti pod istim uslovima 2.5 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial-CompartirIgual 2.5 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 2.5 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@ast .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 2.5 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ep\u00E4kaupallinen-Tarttuva 2.5 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 2.5 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-Gayriticari-ShareAlike 2.5 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 - \u7D99\u627F 2.5 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/terms/hasVersion> "2.5" .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@mn .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribusi-NonKomersial-BerbagiSerupa 2.5 Generik"@id .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nc-sa/3.0/> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.5 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-sa/2.5/80x15.png> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! - \u00CDgy add tov\u00E1bb! 2.5 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 2.5 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas d'Utilisation Commerciale - Partage \u00E0 l'Identique 2.5 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@lt .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 2.5 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala-PartekatuBerdin 2.5 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@ga .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101ls-Nemainot licenci 2.5 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@fa .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@hi .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-CompartirDerivadasIgual 2.5 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629-\u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A-\u0646\u0633\u0628 \u0627\u0644\u0639\u0645\u0644 2.5 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-CompartirIgual 2.5 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuire-Necomercial-F\u0103r\u0103Modific\u0103ri 2.5 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@bn .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc-sa/2.5/legalcode> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@en .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@kk .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-Weitergabe unter gleichen Bedingungen 2.5 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel-GelijkDelen 2.5 Unported"@nl .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD - \u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 2.5 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno-Deljenje pod enakimi pogoji 2.5 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial-CompartirIgual 2.5 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IckeKommersiell-DelaLika 2.5 Generisk"@sv .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 2.5 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 2.5 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o - E sego ya Kgwebo - Mohlakanelwa 2.5 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno-Dijeli pod istim uvjetima 2.5 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial-Licenciamiento Rec\u00EDproco 2.5 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nc-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 2.5 Chung"@vi .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc-sa/2.5/')))
    BY_NC_SA_3_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@ta .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 3.0 Unported"@es-co .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial-Partilha nos termos da mesma licen\u00E7a 3.0 Unported"@pt-pt .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas d'Utilisation Commerciale - Partage \u00E0 l'Identique 3.0 non transpos\u00E9"@fr .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@ast-es .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@as .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@si-lk .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial-Licenciamiento Rec\u00EDproco 3.0 Unported"@es-mx .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0421 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439) 3.0 \u041D\u0435\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F"@ru .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ep\u00E4kaupallinen-Tarttuva 3.0 Muokkaamaton"@fi .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@en-hk .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@st .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 3.0 Unported"@zh-tw .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 - \u7D99\u627F 3.0 \u975E\u79FB\u690D"@ja .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno-Deljenje pod enakimi pogoji 3.0 Nedolo\u010Dena"@sl .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@fa .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/terms/hasVersion> "3.0" .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0578\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 3.0 \u0549\u057F\u0565\u0572\u0561\u0575\u0576\u0561\u0581\u057E\u0561\u056E"@hy .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Condividi allo stesso modo 3.0 Unported"@it .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@bn .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@hi .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc-sa/3.0/legalcode> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@en-gb .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno-Deliti pod istim uslovima 3.0 Unported"@sr-latn .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial-CompartirIgual 3.0 No adaptada"@ca .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce-Samkondi\u0109e 3.0 Neadaptita"@eo .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-Weitergabe unter gleichen Bedingungen 3.0 Unported"@de-at .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@uk .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial-Compartilhamento pela mesma licen\u00E7a 3.0 Unported"@pt-br .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-Necomercial-F\u0103r\u0103Modific\u0103ri 3.0 Ne-adaptat\u0103"@ro .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! - \u00CDgy add tov\u00E1bb! 3.0 Unported"@hu .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 3.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 3.0 Unported"@fr-lu .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-Gayriticari-ShareAlike 3.0 Unported"@tr .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 3.0 Unported"@ko .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@lt .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 3.0 Unported"@zh .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel-GelijkDelen 3.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial - CompartilhaIgual 3.0 N\u00E3o Adaptada"@pt .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 3.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-LicenciarIgual 3.0 Unported"@es-cl .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-CompartirDerivadasIgual 3.0 Unported"@es-ar .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-Weitergabe unter gleichen Bedingungen 3.0 Unported"@de-ch .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 3.0 Unported"@es-es .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@en .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101ls-Nemainot licenci 3.0 Nep\u0101rnesta"@lv .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 3.0 Unported"@es-gt .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@ml .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1\u2013\u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7 3.0 \u10D0\u10E0\u10D0\u10DE\u10DD\u10E0\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Condividi allo stesso modo 3.0 Unported"@it-ch .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@en-us .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk + Jagamine samadel tingimustel 3.0 Jurisdiktsiooniga sidumata"@et .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 3.0 Unported"@mk .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 3.0 Unported"@zh-hk .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc-sa" .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@vi .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 3.0 Unported"@es-pe .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@ga .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD - \u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 3.0 \u039C\u03B7 \u03B5\u03B9\u03C3\u03B1\u03B3\u03CC\u03BC\u03B5\u03BD\u03BF"@el .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@en-ca .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@sq .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell-DelP\u00E5SammeVilk\u00E5r 3.0 Unported"@no .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o - E sego ya Kgwebo - Mohlakanelwa 3.0 Unported"@nso .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@ast .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel\u2013DelP\u00E5SammeVilk\u00E5r 3.0 Unported"@da .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@oci-es .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@kk .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-NonKomersial-BerbagiSerupa 3.0 Unported"@id .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial-ShareAlike} 3.0 ${Unported}"@x-i18n .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 3.0 Unported"@fr-ca .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 3.0 Unported"@es-pr .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno-Dijeli pod istim uvjetima 3.0 neloklizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 3.0 Unported"@sr .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-Niekommersieel-InsgelyksDeel 3.0 Unported"@af .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano-Yihlanganyeleni 3.0 Unported"@zu .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial-CompartirIgual 3.0 Unported"@gl .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne-Na tych samych warunkach 3.0 Unported"@pl .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 3.0 Unported"@es-ec .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-CompartirIgual 3.0 Unported"@es .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@te .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@en-sg .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nevyu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B-Zachovejte licenci 3.0 Unported"@cs .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IckeKommersiell-DelaLika 3.0 Unported"@sv .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@be .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 3.0 Unported"@fr-ch .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@is .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala-PartekatuBerdin 3.0 Unported"@eu .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial-PerkongsianSerupa 3.0 Unported"@ms .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-sa/3.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@ur .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Nicht-kommerziell-Weitergabe unter gleichen Bedingungen 3.0 Unported"@de .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@mn .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 3.0 Unported"@az .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629-\u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A-\u0646\u0633\u0628 \u0627\u0644\u0639\u0645\u0644 3.0 \u0627\u0644\u0627\u0635\u0644\u064A\u0629"@ar .
<http://creativecommons.org/licenses/by-nc-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 3.0 \u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A"@th .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc-sa/3.0/')))
    BY_NC_SA_4_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 Nd\u00EBrkomb\u00EBtar"@sq .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 Qu\u1ED1c t\u1EBF"@vi .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u00ABAttribution-NonCommercial-ShareAlike\u00BB (\u00AB\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u041D\u0430 \u0442\u0435\u0445 \u0436\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445\u00BB) 4.0 \u0412\u0435\u0441\u044C \u043C\u0438\u0440 (\u0432 \u0442.\u0447. \u0420\u043E\u0441\u0441\u0438\u044F \u0438 \u0434\u0440.)"@ru .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-CompartirIgual 4.0 Internacional"@es-ar .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Tilv\u00EDsun-Ekki\u00C1g\u00F3\u00F0askyni-DeilaEins 4.0 Al\u00FEj\u00F3\u00F0legt"@is .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno-Deliti pod istim uslovima 4.0 International"@sr-latn .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano-Yihlanganyeleni 4.0 International"@zu .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial-CompartirIgual 4.0 Internacional"@gl .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0 \u56FD\u9645"@zh .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional"@es-pe .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional"@es-es .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@en-gb .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 \u0D05\u0D28\u0D4D\u0D24\u0D7C\u0D26\u0D47\u0D36\u0D40\u0D2F\u0D02"@ml .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IckeKommersiell-DelaLika 4.0 Internationell"@sv .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@sr-Latn .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 4.0 \u570B\u969B"@zh-tw .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial-PerkongsianSerupa 4.0 International"@ms .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 \u0DA2\u0DCF\u0DAD\u0DCA\u200D\u0DBA\u0DB1\u0DCA\u0DAD\u0DBB"@si-lk .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@bn .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial-CompartirIgual 4.0 Internacional"@es .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@ur .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell-DelP\u00E5SammeVilk\u00E5r 4.0 Internasjonal"@no .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 4.0 \u570B\u969B"@zh-hk .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-Necomercial-F\u0103r\u0103Modific\u0103ri 4.0 Interna\u021Bional"@ro .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial-Partilha nos termos da mesma licen\u00E7a 4.0 Internacional"@pt-pt .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel\u2013DelP\u00E5SammeVilk\u00E5r 4.0 International"@da .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@en-ca .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-NonKomersial-BerbagiSerupa 4.0 Internasional"@id .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-lu .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1\u2013\u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7 4.0 International"@ka .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ep\u00E4kaupallinen-JaaSamoin 4.0 Kansainv\u00E4linen"@fi .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International"@de-ch .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-N\u00E3oComercial-CompartilhaIgual 4.0 Internacional"@pt-br .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@az .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@mn .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nevyu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B-Zachovejte licenci 4.0 International"@cs .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Condividi allo stesso modo 4.0 Internazionale"@it .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell-Weitergabe unter gleichen Bedingungen 4.0 International"@de-at .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0406\u0437 \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C \u0430\u0432\u0442\u043E\u0440\u0441\u0442\u0432\u0430 - \u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0430 - \u0420\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F \u043D\u0430 \u0442\u0438\u0445 \u0441\u0430\u043C\u0438\u0445 \u0443\u043C\u043E\u0432\u0430\u0445 4.0 \u041C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u0430"@uk .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@en-sg .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ca .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 4.0 \u041C\u0435\u0453\u0443\u043D\u0430\u0440\u043E\u0434\u0435\u043D"@mk .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International"@de .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-Niekommersieel-InsgelyksDeel 4.0 International"@af .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@en-us .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101ls-Nemainot licenci 4.0 International"@lv .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno-Deljenje pod enakimi pogoji 4.0 International"@sl .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 4.0 International"@th .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 - \u7D99\u627F 4.0 \u56FD\u969B"@ja .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! - \u00CDgy add tov\u00E1bb! 4.0 Nemzetk\u00F6zi"@hu .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne-Na tych samych warunkach 4.0 Mi\u0119dzynarodowe"@pl .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala-PartekatuBerdin 4.0 International"@eu .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@en-hk .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@hi .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel-GelijkDelen 4.0 Internationaal"@nl .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce-Samkondi\u0109e 4.0 Internacia"@eo .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk + Jagamine samadel tingimustel 4.0 Rahvusvaheline"@et .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-N\u00E3oComercial-CompartilhaIgual 4.0 Internacional"@pt .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o - E sego ya Kgwebo - Mohlakanelwa 4.0 International"@nso .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale - Condividi allo stesso modo 4.0 Internazionale"@it-ch .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas d\u2019Utilisation Commerciale - Partage dans les M\u00EAmes Conditions 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ch .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 \u0C05\u0C02\u0C24\u0C30\u0C4D\u0C1C\u0C3E\u0C24\u0C40\u0C2F\u0C02"@te .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno-Dijeli pod istim uvjetima 4.0 me\u0111unarodni sporazumi"@hr .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Priskyrimas - Nekomercinis platinimas - Analogi\u0161kas platinimas  4.0 Tarptautin\u0117"@lt .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial-ShareAlike} 4.0 ${International}"@x-i18n .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/terms/hasVersion> "4.0" .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD - \u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 4.0 \u0394\u03B9\u03B5\u03B8\u03BD\u03AD\u03C2"@el .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629-\u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A-\u0646\u0633\u0628 \u0627\u0644\u0639\u0645\u0644 4.0 \u062F\u0648\u0644\u064A"@ar .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@ast-es .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@ga .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@as .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@oci-es .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 4.0 International"@sr .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@kk .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 4.0 \u05D1\u05D9\u05DF\u05BE\u05DC\u05D0\u05D5\u05DE\u05D9"@he .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial-CompartirIgual 4.0 Internacional"@ca .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 4.0 \uAD6D\uC81C"@ko .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc-sa" .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0578\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 4.0 International"@hy .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 4.0 International"@bg .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@ta .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@en .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@be .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@fa .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial-ShareAlike 4.0 International"@ast .
<http://creativecommons.org/licenses/by-nc-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-Gayriticari-ShareAlike 4.0 Uluslararas\u0131"@tr .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc-sa/4.0/')))
    BY_NC_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Nicht-kommerziell 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale 1.0 Generico"@it .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel 1.0 Generisk"@da .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial 1.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno 1.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@ast .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o- E sego ya kgwebo 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u044F\u043B\u044B\u049B \u0435\u043C\u0435\u0441 1.0 Generic"@kk .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno 1.0 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Phi th\u01B0\u01A1ng m\u1EA1i  1.0 Chung"@vi .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell 1.0 Generisk"@no .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@is .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@st .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk 1.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 - \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A 1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 1.0 Generic"@hy .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@mn .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@ga .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc/1.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@az .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel 1.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc/1.0/legalcode> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IckeKommersiell 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ep\u00E4kaupallinen 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@ur .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@ta .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@be .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@lt .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-Gayriticari 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@te .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Neu\u017E\u00EDvejte komer\u010Dn\u011B 1.0 Generic"@cs .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial 1.0 Umum"@ms .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc/1.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial 1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1 1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435) 1.0 Generic"@ru .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@bn .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@hi .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@en .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@as .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-NeComercial 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nc/2.0/> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-NieKommersieel 1.0 Generies"@af .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101li 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 1.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@fa .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribusi-NonKomersial 1.0 Generik"@id .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@uk .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 1.0 Generic"@ml .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc" .
<http://creativecommons.org/licenses/by-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 1.0 Gen\u00E9rica"@es .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc/1.0/')))
    BY_NC_2_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@st .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027 2.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/terms/hasVersion> "2.0" .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@en .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! 2.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@az .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial 2.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 2.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@uk .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial} 2.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno 2.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial 2.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 - \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A 2.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@ga .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 2.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Neu\u017E\u00EDvejte komer\u010Dn\u011B 2.0 Generic"@cs .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale 2.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-Gayriticari 2.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@be .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435) 2.0 Generic"@ru .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E 2.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@bn .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 2.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-NeComercial 2.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce 2.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101li 2.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial 2.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@ta .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 2.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1 2.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial 2.0 Umum"@ms .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne 2.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 2.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel 2.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@mn .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell 2.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u044F\u043B\u044B\u049B \u0435\u043C\u0435\u0441 2.0 Generic"@kk .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 2.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@ast .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 2.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell 2.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Phi th\u01B0\u01A1ng m\u1EA1i  2.0 Chung"@vi .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC 2.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@ur .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale 2.0 Generico"@it .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@fa .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027 2.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IckeKommersiell 2.0 Generisk"@sv .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@te .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 2.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell 2.0 Generisk"@no .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9 2.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel 2.0 Generisk"@da .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@as .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc/2.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano 2.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 2.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk 2.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@is .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 2.0 Generic"@hy .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 2.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno 2.0 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 2.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Nicht-kommerziell 2.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala 2.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@hi .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc" .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc/2.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o- E sego ya kgwebo 2.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@lt .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@ml .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno 2.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc/2.0/legalcode> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-NieKommersieel 2.0 Generies"@af .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@en-us .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial 2.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ep\u00E4kaupallinen 2.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial 2.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribusi-NonKomersial 2.0 Generik"@id .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial 2.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nc/2.5/> .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528 2.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nc/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 2.0 Gen\u00E9rica"@es-cl .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc/2.0/')))
    BY_NC_2_5 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial 2.5 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 2.5 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@en-us .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala 2.5 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc/2.5/88x31.png> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial 2.5 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@ml .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.5 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@as .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@en .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuire-NeComercial 2.5 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@ta .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/terms/hasVersion> "2.5" .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel 2.5 Generisk"@da .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel 2.5 Unported"@nl .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@ur .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Erkenning-NieKommersieel 2.5 Generies"@af .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 2.5 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell 2.5 Generisk"@no .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno 2.5 Generi\u010Dka licenca"@sr-Latn .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 2.5 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@hi .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IckeKommersiell 2.5 Generisk"@sv .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1 2.5 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce 2.5 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.5 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribusi-NonKomersial 2.5 Generik"@id .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@is .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u044F\u043B\u044B\u049B \u0435\u043C\u0435\u0441 2.5 Generic"@kk .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528 2.5 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.5 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@lt .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial 2.5 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell 2.5 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@te .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 2.5 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc/2.5/80x15.png> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 2.5 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial 2.5 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@st .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@mn .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc/2.5/legalcode> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 2.5 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Nicht-kommerziell 2.5 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk 2.5 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell 2.5 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial} 2.5 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial 2.5 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 2.5 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E 2.5 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.5 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@uk .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Neu\u017E\u00EDvejte komer\u010Dn\u011B 2.5 Generic"@cs .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@ast .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno 2.5 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101li 2.5 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-Gayriticari 2.5 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@be .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC 2.5 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.5 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@az .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435) 2.5 Generic"@ru .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 2.5 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@bn .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o- E sego ya kgwebo 2.5 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 2.5 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 2.5 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne 2.5 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 2.5 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ep\u00E4kaupallinen 2.5 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 - \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A 2.5 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@fa .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 2.5 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale 2.5 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale 2.5 Generico"@it .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@ga .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial 2.5 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 2.5 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027 2.5 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/identifier> "by-nc" .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial 2.5 Umum"@ms .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Phi th\u01B0\u01A1ng m\u1EA1i  2.5 Chung"@vi .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 2.5 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027 2.5 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 2.5 Generic"@hy .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! 2.5 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9 2.5 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno 2.5 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano 2.5 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nc/2.5/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nc/3.0/> .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc/2.5/')))
    BY_NC_3_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno 3.0 Unported"@sr-latn .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@en .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IckeKommersiell 3.0 Unported"@sv .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435) 3.0 \u041D\u0435\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F"@ru .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 3.0 \u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A"@th .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk 3.0 Jurisdiktsiooniga sidumata"@et .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno 3.0 Nedolo\u010Dena"@sl .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - N\u00E3oComercial 3.0 N\u00E3o Adaptada"@pt .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial 3.0 Unported"@ms .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 3.0 \u039C\u03B7 \u03B5\u03B9\u03C3\u03B1\u03B3\u03CC\u03BC\u03B5\u03BD\u03BF"@el .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 3.0 \u975E\u79FB\u690D"@ja .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@ga .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 3.0 Unported"@sr .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@ur .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@be .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@en-ca .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027 3.0 Unported"@zh-hk .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 3.0 Unported"@es-pr .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@is .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso n\u00E3o-comercial 3.0 Unported"@pt-br .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@hi .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@en-hk .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Comercial 3.0 Unported"@es-mx .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial 3.0 No adaptada"@ca .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 3.0 Unported"@es .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@st .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 3.0 Unported"@es-ec .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@te .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101li 3.0 Nep\u0101rnesta"@lv .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 3.0 Unported"@es-es .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 3.0 Unported"@es-co .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o- E sego ya kgwebo 3.0 Unported"@nso .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 - \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A 3.0 \u0627\u0644\u0627\u0635\u0644\u064A\u0629"@ar .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@ml .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno 3.0 neloklizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc/3.0/legalcode> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@en-sg .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel 3.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@bn .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial 3.0 Unported"@pt-pt .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-Gayriticari 3.0 Unported"@tr .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@lt .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell 3.0 Unported"@de-ch .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc/3.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala 3.0 Unported"@eu .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-NieKommersieel 3.0 Unported"@af .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@en-us .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial 3.0 Unported"@gl .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@sq .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9 3.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@ta .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell 3.0 Unported"@de-at .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@si-lk .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale 3.0 Unported"@it .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! 3.0 Unported"@hu .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1 3.0 \u10D0\u10E0\u10D0\u10DE\u10DD\u10E0\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8"@ka .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 3.0 Unported"@fr-ca .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@fa .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribusi-NonKomersial 3.0 Unported"@id .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 3.0 \u0549\u057F\u0565\u0572\u0561\u0575\u0576\u0561\u0581\u057E\u0561\u056E"@hy .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Phi th\u01B0\u01A1ng m\u1EA1i  3.0 Unported"@vi .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 3.0 Unported"@fr-lu .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale 3.0 Unported"@it-ch .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell 3.0 Unported"@no .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@uk .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 3.0 Unported"@es-gt .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027 3.0 Unported"@zh-tw .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@ast-es .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Neu\u017E\u00EDvejte komer\u010Dn\u011B 3.0 Unported"@cs .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@oci-es .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@ast .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@en-gb .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce 3.0 Neadaptita"@eo .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Nicht-kommerziell 3.0 Unported"@de .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 3.0 Unported"@es-pe .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 3.0 Unported"@es-ar .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-NeComercial 3.0 Ne-adaptat\u0103"@ro .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne 3.0 Unported"@pl .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528 3.0 Unported"@zh .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@az .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel 3.0 Unported"@da .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial} 3.0 ${Unported}"@x-i18n .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano 3.0 Unported"@zu .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc/3.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u044F\u043B\u044B\u049B \u0435\u043C\u0435\u0441 3.0 Unported"@kk .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@mn .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC 3.0 Unported"@ko .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 3.0 Unported"@mk .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/terms/hasVersion> "3.0" .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ep\u00E4kaupallinen 3.0 Muokkaamaton"@fi .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 3.0 Unported"@es-cl .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc" .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 3.0 non transpos\u00E9"@fr .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 3.0 Unported"@fr-ch .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 3.0 Unported"@as .
<http://creativecommons.org/licenses/by-nc/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E 3.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D"@bg .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc/3.0/')))
    BY_NC_4_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nc/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@be .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 - \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A 4.0 \u062F\u0648\u0644\u064A"@ar .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0406\u0437 \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C \u0430\u0432\u0442\u043E\u0440\u0441\u0442\u0432\u0430 - \u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0430 4.0 \u041C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u0430"@uk .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@ga .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@en-ca .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-Gayriticari 4.0 Uluslararas\u0131"@tr .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Nekomercijalno 4.0 International"@sr-latn .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas d\u2019Utilisation Commerciale 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027 4.0 \u570B\u969B"@zh-tw .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Nicht-kommerziell 4.0 International"@de-ch .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimientu-NonComercial 4.0 International"@ast .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale 4.0 Internazionale"@it-ch .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u044F\u043B\u044B\u049B \u0435\u043C\u0435\u0441 4.0 International"@kk .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Nekomercialno 4.0 International"@sl .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc/4.0/80x15.png> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@hi .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 \u0C05\u0C02\u0C24\u0C30\u0C4D\u0C1C\u0C3E\u0C24\u0C40\u0C2F\u0C02"@te .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBE44\uC601\uB9AC 4.0 \uAD6D\uC81C"@ko .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 4.0 Internacional"@es-es .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@mn .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 4.0 International"@hy .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@oci-es .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-NietCommercieel 4.0 Internationaal"@nl .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nc" .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NoComercial 4.0 Internacional"@es-pe .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-BukanKomersial 4.0 International"@ms .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 4.0 International"@th .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-Ikkekommersiell 4.0 Internasjonal"@no .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Nicht-kommerziell 4.0 International"@de .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne add el! 4.0 Nemzetk\u00F6zi"@hu .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u00ABAttribution-NonCommercial\u00BB (\u00AB\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u00BB) 4.0 \u0412\u0435\u0441\u044C \u043C\u0438\u0440 (\u0432 \u0442.\u0447. \u0420\u043E\u0441\u0441\u0438\u044F \u0438 \u0434\u0440.)"@ru .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-N\u00E3oComercial 4.0 Internacional"@pt .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-NeComercial 4.0 Interna\u021Bional"@ro .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nekomerce 4.0 Internacia"@eo .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nc/4.0/88x31.png> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 4.0 Internacional"@es .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-N\u00E3oComercial 4.0 Internacional"@pt-br .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Priskyrimas - Nekomercinis platinimas 4.0 Tarptautin\u0117"@lt .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E 4.0 International"@bg .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9 4.0 \u05D1\u05D9\u05DF\u05BE\u05DC\u05D0\u05D5\u05DE\u05D9"@he .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-EzKomertziala 4.0 International"@eu .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ch .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u975E\u55B6\u5229 4.0 \u56FD\u969B"@ja .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@en-us .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@en-sg .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribusi-NonKomersial 4.0 Internasional"@id .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@bn .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/terms/hasVersion> "4.0" .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-NonComercial 4.0 Internacional"@gl .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@sr-Latn .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Phi th\u01B0\u01A1ng m\u1EA1i  4.0 Qu\u1ED1c t\u1EBF"@vi .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o- E sego ya kgwebo 4.0 International"@nso .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IckeKommersiell 4.0 Internationell"@sv .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungayisebenziseli Ezentengiselwano 4.0 International"@zu .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 Nd\u00EBrkomb\u00EBtar"@sq .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-NichtKommerziell 4.0 International"@de-at .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@as .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u975E\u5546\u696D\u6027 4.0 \u570B\u969B"@zh-hk .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimientu-NonComercial 4.0 International"@ast-es .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ca .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 \u0D05\u0D28\u0D4D\u0D24\u0D7C\u0D26\u0D47\u0D36\u0D40\u0D2F\u0D02"@ml .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1 4.0 International"@ka .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528 4.0 \u56FD\u9645"@zh .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-U\u017Cycie niekomercyjne 4.0 Mi\u0119dzynarodowe"@pl .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@ur .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IkkeKommerciel 4.0 International"@da .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas d'Utilisation Commerciale 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-lu .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial 4.0 Internacional"@pt-pt .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-NoComercial 4.0 Internacional"@es-ar .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ep\u00E4kaupallinen 4.0 Kansainv\u00E4linen"@fi .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-NieKommersieel 4.0 International"@af .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Neu\u017E\u00EDvejte komer\u010Dn\u011B 4.0 International"@cs .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nc/4.0/legalcode> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non commerciale 4.0 Internazionale"@it .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@en .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 4.0 \u0394\u03B9\u03B5\u03B8\u03BD\u03AD\u03C2"@el .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 4.0 International"@sr .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk 4.0 Rahvusvaheline"@et .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@en-hk .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nekomerci\u0101li 4.0 International"@lv .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 \u0DA2\u0DCF\u0DAD\u0DCA\u200D\u0DBA\u0DB1\u0DCA\u0DAD\u0DBB"@si-lk .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@en-gb .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NonCommercial} 4.0 ${International}"@x-i18n .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@fa .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@az .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NonCommercial 4.0 International"@ta .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Nekomercijalno 4.0 me\u0111unarodni sporazumi"@hr .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Tilv\u00EDsun-Ekki\u00C1g\u00F3\u00F0askyni 4.0 Al\u00FEj\u00F3\u00F0legt"@is .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-NoComercial 4.0 Internacional"@ca .
<http://creativecommons.org/licenses/by-nc/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 4.0 \u041C\u0435\u0453\u0443\u043D\u0430\u0440\u043E\u0434\u0435\u043D"@mk .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nc/4.0/')))
    BY_ND_NC_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@hi .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nd-nc/1.0/legalcode> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-F\u0103r\u0103Modific\u0103ri-Necomercial 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nezasahujte do d\u00EDla-Neu\u017E\u00EDvejte komer\u010Dn\u011B 1.0 Generic"@cs .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Bez prerada-Nekomercijalno 1.0 Generi\u010Dka licenca"@sr-Latn .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@fa .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Keine Bearbeitung-Nicht-kommerziell 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@st .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@en .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435) 1.0 Generic"@ru .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-T\u00FCretilemez-Gayriticari 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@ur .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IngaBearbetningar-IckeKommersiell 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-GeenAfleidings-NieKommersieel 1.0 Generies"@af .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Uso N\u00E3o-Comercial-Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de obras derivadas 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574-\u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B - \u0578\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 1.0 Generic"@hy .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne v\u00E1ltoztasd! - Ne add el! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@as .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Derivadas-No Comercial 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nc-nd/2.0/> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbejdelse-IkkeKommerciel 1.0 Generisk"@da .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@ml .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@lt .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3- Kh\u00F4ng ph\u00E1i sinh - Phi th\u01B0\u01A1ng m\u1EA1i  1.0 Chung"@vi .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@az .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-TiadaTerbitan-BukanKomersial 1.0 Umum"@ms .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@bn .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u7981\u6B62\u6F14\u7ECE-\u975E\u5546\u4E1A\u6027\u4F7F\u7528 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7\u2013\u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1  1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nemain\u012Bts-Nekomerci\u0101ls 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung-NichtKommerziell 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o-T\u0161e sa fetolwego-E sego ya Kgwebo 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@kk .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Bez utwor\u00F3w zale\u017Cnych- U\u017Cycie Niekomercyjne 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C-\u975E\u5546\u696D\u6027 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas-NoComercial 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NoDerivs-NonCommercial} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - SemDerivados - N\u00E3oComercial 1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0645\u0635\u0646\u0641- \u063A\u064A\u0631 \u0645\u0634\u062A\u0642- \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A 1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Vedada a cria\u00E7\u00E3o de obras derivadas-Uso n\u00E3o-comercial 1.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Brez predelav-Nekomercialno 1.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung-NichtKommerziell 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@is .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas-NoComercial 1.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C-\u975E\u5546\u696D\u6027 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-TanpaTurunan-NonKomersial 1.0 Generik"@id .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbeidelse-Ikkekommersiell 1.0 Generisk"@no .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-LanEratorririkGabe-EzKomertziala 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@mn .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBCC0\uACBD\uAE08\uC9C0-\uBE44\uC601\uB9AC 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@be .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GeenAfgeleideWerken-NietCommercieel 1.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd-nc/1.0/80x15.png> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@ta .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-SenObraDerivada-NonComercial 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@te .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Bez prerada-Nekomercijalno 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate - Non commerciale 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@uk .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ei muutoksia-Ep\u00E4kaupallinen 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u6539\u5909\u7981\u6B62 - \u975E\u55B6\u5229 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1-\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nd-nc" .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas-NoComercial 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nemodifite-Nekomerce 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate - Non commerciale 1.0 Generico"@it .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-SenseObraDerivada-NoComercial 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungasuseli lutho kulokhu-Ungayisebenziseli Ezentengiselwano 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd-nc/1.0/88x31.png> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@ga .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0411\u0435\u0437\u0418\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0414\u0435\u043B\u0430-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs-NonCommercial 1.0 Generic"@ast .
<http://creativecommons.org/licenses/by-nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Mitte\u00E4riline eesm\u00E4rk + Tuletatud teoste keeld 1.0 \u00DCldine"@et .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nd-nc/1.0/')))
    BY_ND_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-TiadaTerbitan 1.0 Umum"@ms .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@ta .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0422\u0443\u044B\u043D\u0434\u044B \u0436\u0430\u0441\u0430\u043C\u0430\u0443 1.0 Generic"@kk .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o - T\u0161e sa Fetolwego 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Kh\u00F4ng ph\u00E1i sinh 1.0 Chung"@vi .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-F\u0103r\u0103Modific\u0103ri 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbeidelse 1.0 Generisk"@no .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@ga .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@mn .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 1.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@be .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@bn .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - SemDerivados 1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungasuseli lutho kulokhu 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 1.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@te .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-GeenAfleidings 1.0 Generies"@af .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Keine Bearbeitung 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne v\u00E1ltoztasd! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@as .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Bez prerada 1.0 Generi\u010Dka licenca"@sr-Latn .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GeenAfgeleideWerken 1.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBCC0\uACBD\uAE08\uC9C0 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@st .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-TanpaTurunan 1.0 Generik"@id .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@hi .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nd/2.0/> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@en .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate 1.0 Generico"@it .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Bez utwor\u00F3w zale\u017Cnych 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nd/1.0/legalcode> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Vedada a cria\u00E7\u00E3o de obras derivativas 1.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd/1.0/80x15.png> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u6539\u5909\u7981\u6B62 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nd" .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NoDerivs} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@fa .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-T\u00FCretilemez 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-SenseObraDerivada 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Bez prerada 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-SenObraDerivada 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Derivadas 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@az .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IngaBearbetningar 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd/1.0/88x31.png> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B 1.0 Generic"@hy .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nemodifite 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@lt .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ei muutoksia 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Brez predelav 1.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u7981\u6B62\u6F14\u7ECE 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439) 1.0 Generic"@ru .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@uk .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbejdelse 1.0 Generisk"@da .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@ml .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0411\u0435\u0437\u0418\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0414\u0435\u043B\u0430 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Neatvasinot 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nezasahujte do d\u00EDla 1.0 Generic"@cs .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4 1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-LanEratorririkGabe 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@is .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@ur .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 1.0 Generic"@ast .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Tuletatud teoste keeld 1.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628- \u063A\u064A\u0631 \u0645\u0634\u062A\u0642 1.0 \u0639\u0627\u0645"@ar .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nd/1.0/')))
    BY_ND_2_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o - T\u0161e sa Fetolwego 2.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@te .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd/2.0/88x31.png> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-SenObraDerivada 2.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4 2.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 2.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430 2.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u6539\u5909\u7981\u6B62 2.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbeidelse 2.0 Generisk"@no .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 2.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u7981\u6B62\u6F14\u7ECE 2.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C 2.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@lt .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@is .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nezasahujte do d\u00EDla 2.0 Generic"@cs .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne v\u00E1ltoztasd! 2.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbejdelse 2.0 Generisk"@da .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@hi .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 2.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nd" .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C 2.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Bez prerada 2.0 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@ur .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 2.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0411\u0435\u0437\u0418\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0414\u0435\u043B\u0430 2.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@ast .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-LanEratorririkGabe 2.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Kh\u00F4ng ph\u00E1i sinh 2.0 Chung"@vi .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@en .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@fa .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Tuletatud teoste keeld 2.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate 2.0 Generico"@it .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-TanpaTurunan 2.0 Generik"@id .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-GeenAfleidings 2.0 Generies"@af .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@ml .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-TiadaTerbitan 2.0 Umum"@ms .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NoDerivs} 2.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBCC0\uACBD\uAE08\uC9C0 2.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Derivadas 2.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd/2.0/80x15.png> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Vedada a cria\u00E7\u00E3o de obras derivativas 2.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Keine Bearbeitung 2.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07 2.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628- \u063A\u064A\u0631 \u0645\u0634\u062A\u0642 2.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 2.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 2.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/terms/hasVersion> "2.0" .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ei muutoksia 2.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@st .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Brez predelav 2.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-F\u0103r\u0103Modific\u0103ri 2.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung 2.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@mn .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 2.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung 2.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-T\u00FCretilemez 2.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nemodifite 2.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate 2.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439) 2.0 Generic"@ru .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0422\u0443\u044B\u043D\u0434\u044B \u0436\u0430\u0441\u0430\u043C\u0430\u0443 2.0 Generic"@kk .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-SenseObraDerivada 2.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Neatvasinot 2.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Bez prerada 2.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 2.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@be .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B 2.0 Generic"@hy .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@uk .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA 2.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@ta .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@as .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@az .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - SemDerivados 2.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@en-us .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@ga .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nd/2.0/legalcode> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IngaBearbetningar 2.0 Generisk"@sv .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.0 Generic"@bn .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas 2.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GeenAfgeleideWerken 2.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Bez utwor\u00F3w zale\u017Cnych 2.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nd/2.5/> .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungasuseli lutho kulokhu 2.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nd/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438 2.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nd/2.0/')))
    BY_ND_2_5 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Bez prerada 2.5 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.5 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbeidelse 2.5 Generisk"@no .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0422\u0443\u044B\u043D\u0434\u044B \u0436\u0430\u0441\u0430\u043C\u0430\u0443 2.5 Generic"@kk .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 2.5 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne v\u00E1ltoztasd! 2.5 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@en .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Derivadas 2.5 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438 2.5 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@en-sg .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@as .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuire-F\u0103r\u0103Modific\u0103ri 2.5 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o - T\u0161e sa Fetolwego 2.5 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@bn .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ei muutoksia 2.5 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - SemDerivados 2.5 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.5 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Bez prerada 2.5 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBCC0\uACBD\uAE08\uC9C0 2.5 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/terms/hasVersion> "2.5" .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@en-hk .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Keine Bearbeitung 2.5 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nezasahujte do d\u00EDla 2.5 Generic"@cs .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 2.5 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u7981\u6B62\u6F14\u7ECE 2.5 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Neatvasinot 2.5 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@ast-es .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@en-ca .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@si-lk .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@te .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@lt .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@be .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Vedada a cria\u00E7\u00E3o de obras derivativas 2.5 Generic"@pt-br .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NoDerivs} 2.5 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 2.5 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Kh\u00F4ng ph\u00E1i sinh 2.5 Chung"@vi .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439) 2.5 Generic"@ru .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4 2.5 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@en-us .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nemodifite 2.5 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Tuletatud teoste keeld 2.5 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-SenObraDerivada 2.5 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Erkenning-GeenAfleidings 2.5 Generies"@af .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas 2.5 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate 2.5 Generico"@it .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@hi .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 2.5 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C 2.5 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 2.5 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA 2.5 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IngaBearbetningar 2.5 Generisk"@sv .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-SenseObraDerivada 2.5 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@ta .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.5 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate 2.5 Generico"@it-ch .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-TiadaTerbitan 2.5 Umum"@ms .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-T\u00FCretilemez 2.5 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbejdelse 2.5 Generisk"@da .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.5 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-nd/3.0/> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@az .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@is .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.5 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@st .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/identifier> "by-nd" .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd/2.5/80x15.png> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C 2.5 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@oci-es .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@fa .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 2.5 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribusi-TanpaTurunan 2.5 Generik"@id .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@uk .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u6539\u5909\u7981\u6B62 2.5 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@mn .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 2.5 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@ml .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B 2.5 Generic"@hy .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Bez utwor\u00F3w zale\u017Cnych 2.5 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 2.5 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628- \u063A\u064A\u0631 \u0645\u0634\u062A\u0642 2.5 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0411\u0435\u0437\u0418\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0414\u0435\u043B\u0430 2.5 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungasuseli lutho kulokhu 2.5 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Aitortu-LanEratorririkGabe 2.5 Generikoa"@eu .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@ga .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@ur .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd/2.5/88x31.png> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Brez predelav 2.5 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GeenAfgeleideWerken 2.5 Unported"@nl .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nd/2.5/legalcode> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430 2.5 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@en-gb .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07 2.5 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 2.5 Generic"@ast .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 2.5 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung 2.5 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-nd/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung 2.5 US-amerikanisch (nicht portiert)"@de-ch .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nd/2.5/')))
    BY_ND_3_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 3.0 Unported"@fr-lu .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@oci-es .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@ur .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4 3.0 \u10D0\u10E0\u10D0\u10DE\u10DD\u10E0\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8"@ka .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@si-lk .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@st .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-SenseObraDerivada 3.0 No adaptada"@ca .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@ast .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C 3.0 Unported"@zh-hk .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nezasahujte do d\u00EDla 3.0 Unported"@cs .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@uk .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438 3.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-TanpaTurunan 3.0 Unported"@id .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungasuseli lutho kulokhu 3.0 Unported"@zu .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Tuletatud teoste keeld 3.0 Jurisdiktsiooniga sidumata"@et .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IngaBearbetningar 3.0 Unported"@sv .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@en-sg .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nd" .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA 3.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o - T\u0161e sa Fetolwego 3.0 Unported"@nso .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@te .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0411\u0435\u0437\u0418\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0414\u0435\u043B\u0430 3.0 Unported"@mk .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u6539\u5909\u7981\u6B62 3.0 \u975E\u79FB\u690D"@ja .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ei muutoksia 3.0 Muokkaamaton"@fi .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C 3.0 Unported"@zh-tw .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbeidelse 3.0 Unported"@no .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 3.0 Unported"@fr-ch .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@mn .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Kh\u00F4ng ph\u00E1i sinh 3.0 Unported"@vi .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430 3.0 Unported"@sr .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07 3.0 \u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A"@th .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 3.0 Unported"@es-gt .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas 3.0 Unported"@pt-pt .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-SenObraDerivada 3.0 Unported"@gl .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Bez utwor\u00F3w zale\u017Cnych 3.0 Unported"@pl .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Brez predelav 3.0 Nedolo\u010Dena"@sl .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung 3.0 Unported"@de-ch .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - SemDerivados 3.0 N\u00E3o Adaptada"@pt .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0422\u0443\u044B\u043D\u0434\u044B \u0436\u0430\u0441\u0430\u043C\u0430\u0443 3.0 Unported"@kk .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate 3.0 Unported"@it .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 3.0 non transpos\u00E9"@fr .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 3.0 Unported"@es-cl .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 3.0 Unported"@es-pr .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B 3.0 \u0549\u057F\u0565\u0572\u0561\u0575\u0576\u0561\u0581\u057E\u0561\u056E"@hy .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-F\u0103r\u0103Modific\u0103ri 3.0 Ne-adaptat\u0103"@ro .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@ta .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@en-hk .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbejdelse 3.0 Unported"@da .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd/3.0/88x31.png> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u7981\u6B62\u6F14\u7ECE 3.0 Unported"@zh .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd/3.0/80x15.png> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628- \u063A\u064A\u0631 \u0645\u0634\u062A\u0642 3.0 \u0627\u0644\u0627\u0635\u0644\u064A\u0629"@ar .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 3.0 Unported"@fr-ca .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBCC0\uACBD\uAE08\uC9C0 3.0 Unported"@ko .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nemodifite 3.0 Neadaptita"@eo .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NoDerivs} 3.0 ${Unported}"@x-i18n .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-LanEratorririkGabe 3.0 Unported"@eu .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@en-gb .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 3.0 \u039C\u03B7 \u03B5\u03B9\u03C3\u03B1\u03B3\u03CC\u03BC\u03B5\u03BD\u03BF"@el .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 3.0 Unported"@es-ec .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439) 3.0 \u041D\u0435\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F"@ru .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Vedada a cria\u00E7\u00E3o de obras derivativas 3.0 Unported"@pt-br .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Bez prerada 3.0 neloklizirana licenca"@hr .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@en-us .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@ast-es .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@ga .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne v\u00E1ltoztasd! 3.0 Unported"@hu .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 3.0 Unported"@es-pe .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@az .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@en-ca .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@be .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate 3.0 Unported"@it-ch .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/terms/hasVersion> "3.0" .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung 3.0 Unported"@de-at .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-GeenAfleidings 3.0 Unported"@af .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@ml .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 3.0 Unported"@es-es .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 3.0 Unported"@es-ar .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Keine Bearbeitung 3.0 Unported"@de .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@sq .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@en .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@is .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Neatvasinot 3.0 Nep\u0101rnesta"@lv .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@bn .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@as .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Bez prerada 3.0 Unported"@sr-latn .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nd/3.0/legalcode> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GeenAfgeleideWerken 3.0 Unported"@nl .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-T\u00FCretilemez 3.0 Unported"@tr .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@lt .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-No Derivadas 3.0 Unported"@es-mx .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 3.0 Unported"@es .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@hi .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivs 3.0 Unported"@fa .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-TiadaTerbitan 3.0 Unported"@ms .
<http://creativecommons.org/licenses/by-nd/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 3.0 Unported"@es-co .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nd/3.0/')))
    BY_ND_4_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-LanEratorririkGabe 4.0 International"@eu .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@en-ca .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@en-sg .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Neatvasinot 4.0 International"@lv .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ca .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Tilv\u00EDsun-EnginAfleidd 4.0 Al\u00FEj\u00F3\u00F0legt"@is .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@en-hk .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-T\u00FCretilemez 4.0 Uluslararas\u0131"@tr .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-SenseObraDerivada 4.0 Internacional"@ca .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 4.0 Internacional"@es .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Nezasahujte do d\u00EDla 4.0 International"@cs .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0411\u0435\u0437\u0418\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0414\u0435\u043B\u0430 4.0 \u041C\u0435\u0453\u0443\u043D\u0430\u0440\u043E\u0434\u0435\u043D"@mk .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-TiadaTerbitan 4.0 International"@ms .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u7981\u6B62\u6F14\u7ECE 4.0 \u56FD\u9645"@zh .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@oci-es .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Keine Bearbeitung 4.0 International"@de .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Priskyrimas - Joki\u0173 i\u0161vestini\u0173 darb\u0173 4.0 Tarptautin\u0117"@lt .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution - Pas de Modification 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u00ABAttribution-NoDerivatives\u00BB (\u00AB\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439\u00BB) 4.0 \u0412\u0435\u0441\u044C \u043C\u0438\u0440 (\u0432 \u0442.\u0447. \u0420\u043E\u0441\u0441\u0438\u044F \u0438 \u0434\u0440.)"@ru .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 - Kh\u00F4ng ph\u00E1i sinh 4.0 Qu\u1ED1c t\u1EBF"@vi .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@en .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 \u0D05\u0D28\u0D4D\u0D24\u0D7C\u0D26\u0D47\u0D36\u0D40\u0D2F\u0D02"@ml .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-NoDerivatives} 4.0 ${International}"@x-i18n .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 4.0 Internacional"@es-es .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@be .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 Nd\u00EBrkomb\u00EBtar"@sq .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@fa .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-lu .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@en-gb .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-SemDerivados 4.0 Internacional"@pt .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NonDerivaos 4.0 International"@ast .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbeidelse 4.0 Internasjonal"@no .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-KeineBearbeitung 4.0 International"@de-at .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0406\u0437 \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C \u0430\u0432\u0442\u043E\u0440\u0441\u0442\u0432\u0430 - \u0411\u0435\u0437 \u043F\u043E\u0445\u0456\u0434\u043D\u0438\u0445 \u0442\u0432\u043E\u0440\u0456\u0432 4.0 \u041C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u0430"@uk .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal"@nl .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-nd/4.0/legalcode> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/identifier> "by-nd" .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C 4.0 \u570B\u969B"@zh-hk .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-SemDerivados 4.0 Internacional"@pt-br .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-TanpaTurunan 4.0 Internasional"@id .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Brez predelav 4.0 International"@sl .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o - T\u0161e sa Fetolwego 4.0 International"@nso .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@bn .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07 4.0 International"@th .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Ungasuseli lutho kulokhu 4.0 International"@zu .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@ta .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u7981\u6B62\u6539\u4F5C 4.0 \u570B\u969B"@zh-tw .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0422\u0443\u044B\u043D\u0434\u044B \u0436\u0430\u0441\u0430\u043C\u0430\u0443 4.0 International"@kk .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Nemodifite 4.0 Internacia"@eo .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd/4.0/80x15.png> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Bez prerada 4.0 International"@sr-latn .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-NonDerivaos 4.0 International"@ast-es .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate 4.0 Internazionale"@it-ch .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@hi .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 \u0DA2\u0DCF\u0DAD\u0DCA\u200D\u0DBA\u0DB1\u0DCA\u0DAD\u0DBB"@si-lk .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@ga .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@mn .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Keine Bearbeitung 4.0 International"@de-ch .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@as .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Bez utwor\u00F3w zale\u017Cnych 4.0 Mi\u0119dzynarodowe"@pl .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - Ne v\u00E1ltoztasd! 4.0 Nemzetk\u00F6zi"@hu .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Ei muutoksia 4.0 Kansainv\u00E4linen"@fi .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uBCC0\uACBD\uAE08\uC9C0 4.0 \uAD6D\uC81C"@ko .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 \u0C05\u0C02\u0C24\u0C30\u0C4D\u0C1C\u0C3E\u0C24\u0C40\u0C2F\u0C02"@te .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@ur .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@sr-Latn .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas 4.0 Internacional"@pt-pt .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA 4.0 \u05D1\u05D9\u05DF\u05BE\u05DC\u05D0\u05D5\u05DE\u05D9"@he .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-IngaBearbetningar 4.0 Internationell"@sv .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u6539\u5909\u7981\u6B62 4.0 \u56FD\u969B"@ja .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-nd/4.0/88x31.png> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628- \u063A\u064A\u0631 \u0645\u0634\u062A\u0642 4.0 \u062F\u0648\u0644\u064A"@ar .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438 4.0 International"@bg .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-SinObraDerivada 4.0 Internacional"@es-pe .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-SenObraDerivada 4.0 Internacional"@gl .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire-F\u0103r\u0103Modific\u0103ri 4.0 Interna\u021Bional"@ro .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Non opere derivate 4.0 Internazionale"@it .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-IngenBearbejdelse 4.0 International"@da .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4 4.0 International"@ka .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD-\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 4.0 \u0394\u03B9\u03B5\u03B8\u03BD\u03AD\u03C2"@el .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/terms/hasVersion> "4.0" .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Tuletatud teoste keeld 4.0 Rahvusvaheline"@et .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Bez prerada 4.0 me\u0111unarodni sporazumi"@hr .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B 4.0 International"@hy .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@en-us .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430 4.0 International"@sr .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Pas de Modification 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ch .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-NoDerivatives 4.0 International"@az .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-SinDerivadas 4.0 Internacional"@es-ar .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-nd/4.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-GeenAfleidings 4.0 International"@af .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-nd/4.0/')))
    BY_SA_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@ml .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-ShareAlike} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@az .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Samkondi\u0109e 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@st .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-sa/1.0/88x31.png> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire - Distribuire-\u00EEn-condi\u0163ii-identice 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@kk .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0639\u0645\u0644- \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u0421 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439) 1.0 Generic"@ru .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-DelP\u00E5SammeVilk\u00E5r 1.0 Generisk"@da .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-InsgelyksDeel 1.0 Generies"@af .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Dijeli pod istim uvjetima 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@uk .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GelijkDelen 1.0 Unported"@nl .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Zachovejte licenci 1.0 Generic"@cs .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-BerbagiSerupa 1.0 Generik"@id .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Deliti pod istim uslovima 1.0 Generi\u010Dka licenca"@sr-Latn .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Condividi allo stesso modo 1.0 Generico"@it .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Tarttuva 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@as .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-LicenciarIgual 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Jagamine samadel tingimustel 1.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-sa/1.0/80x15.png> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u2013 \u10D2\u10D0\u10D5\u10E0\u10EA\u10D4\u10DA\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7  1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-sa/1.0/legalcode> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Zihlanganyeleni 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@bn .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-Lisans\u0131DevamEttirme 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@en .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - CompartilhaIgual 1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-CompartirIgual 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-CompartirIgual 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-PartekatuBerdin 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-PerkongsianSerupa 1.0 Umum"@ms .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@te .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@ast .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@ga .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@ur .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@ta .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-CompartirDerivadasIgual 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@mn .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-DelaLika 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@lt .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Condividi allo stesso modo 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-DelP\u00E5SammeVilk\u00E5r 1.0 Generisk"@no .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o -Mohlakanelwa 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nemainot licenci 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@fa .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 1.0 Generic"@hy .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u7D99\u627F 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@is .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-CompartirIgual 1.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Deljenje pod enakimi pogoji 1.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Na tych samych warunkach 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Partilha nos termos da mesma licen\u00E7a 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 1.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-Licenciamiento Rec\u00EDproco 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-sa/2.0/> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@be .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@hi .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - \u00CDgy add tov\u00E1bb! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 1.0 Chung"@vi .
<http://creativecommons.org/licenses/by-sa/1.0/> <http://purl.org/dc/elements/1.1/identifier> "by-sa" .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-sa/1.0/')))
    BY_SA_2_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 2.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-LicenciarIgual 2.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-CompartirDerivadasIgual 2.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0639\u0645\u0644- \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 2.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-Lisans\u0131DevamEttirme 2.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Zihlanganyeleni 2.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@bn .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@fa .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 2.0 Generic"@hy .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GelijkDelen 2.0 Unported"@nl .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@kk .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-sa/2.0/legalcode> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 2.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-DelaLika 2.0 Generisk"@sv .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Na tych samych warunkach 2.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@st .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-sa/2.0/80x15.png> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@hi .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-CompartirIgual 2.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-PerkongsianSerupa 2.0 Umum"@ms .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 2.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Samkondi\u0109e 2.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 2.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@mn .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 2.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Condividi allo stesso modo 2.0 Generico"@it .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@be .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u7D99\u627F 2.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 2.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 2.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 2.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 2.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@en .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@en-us .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-sa/2.0/88x31.png> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u2013 \u10D2\u10D0\u10D5\u10E0\u10EA\u10D4\u10DA\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7  2.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@ga .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 2.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-BerbagiSerupa 2.0 Generik"@id .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Jagamine samadel tingimustel 2.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@te .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage \u00E0 l'Identique 2.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-CompartirIgual 2.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@ast .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-InsgelyksDeel 2.0 Generies"@af .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@ta .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 2.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - CompartilhaIgual 2.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Deliti pod istim uslovima 2.0 Generi\u010Dka licenca"@sr-Latn .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 2.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@ml .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@as .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u0421 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439) 2.0 Generic"@ru .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-ShareAlike} 2.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@ur .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@az .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 2.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - \u00CDgy add tov\u00E1bb! 2.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-DelP\u00E5SammeVilk\u00E5r 2.0 Generisk"@no .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nemainot licenci 2.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Zachovejte licenci 2.0 Generic"@cs .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 2.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Partilha nos termos da mesma licen\u00E7a 2.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o -Mohlakanelwa 2.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/terms/hasVersion> "2.0" .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@uk .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Deljenje pod enakimi pogoji 2.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Tarttuva 2.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Chung"@vi .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-PartekatuBerdin 2.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-sa/2.5/> .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-CompartirIgual 2.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Dijeli pod istim uvjetima 2.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-DelP\u00E5SammeVilk\u00E5r 2.0 Generisk"@da .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@lt .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.0 Generic"@is .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 2.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire - Distribuire-\u00EEn-condi\u0163ii-identice 2.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Condividi allo stesso modo 2.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 2.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-Licenciamiento Rec\u00EDproco 2.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-sa/2.0/> <http://purl.org/dc/elements/1.1/identifier> "by-sa" .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-sa/2.0/')))
    BY_SA_2_5 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 2.5 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@ast-es .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-DelP\u00E5SammeVilk\u00E5r 2.5 Generisk"@no .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-DelP\u00E5SammeVilk\u00E5r 2.5 Generisk"@da .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Aitortu-PartekatuBerdin 2.5 Generikoa"@eu .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@is .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0639\u0645\u0644- \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 2.5 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-Lisans\u0131DevamEttirme 2.5 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Na tych samych warunkach 2.5 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-DelaLika 2.5 Generisk"@sv .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuire - Distribuire-\u00EEn-condi\u0163ii-identice 2.5 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@mn .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 2.5 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Jagamine samadel tingimustel 2.5 \u00DCldine"@et .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-CompartirIgual 2.5 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 2.5 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@fa .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-CompartirDerivadasIgual 2.5 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 2.5 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GelijkDelen 2.5 Unported"@nl .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribusi-BerbagiSerupa 2.5 Generik"@id .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/identifier> "by-sa" .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@te .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-Licenciamiento Rec\u00EDproco 2.5 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage \u00E0 l'Identique 2.5 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 2.5 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.5 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@hi .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 2.5 Generic"@hy .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-sa/2.5/legalcode> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 2.5 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@en-hk .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 2.5 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Zihlanganyeleni 2.5 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Condividi allo stesso modo 2.5 Generico"@it-ch .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@bn .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u0421 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439) 2.5 Generic"@ru .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 2.5 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@pt-br .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Deliti pod istim uslovima 2.5 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-sa/2.5/80x15.png> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Condividi allo stesso modo 2.5 Generico"@it .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@as .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@en-ca .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 2.5 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Zachovejte licenci 2.5 Generic"@cs .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@en .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by-sa/3.0/> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "${Attribution-ShareAlike} 2.5 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 2.5 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-CompartirIgual 2.5 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 2.5 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.5 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@be .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Tarttuva 2.5 Raakaversio"@fi .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@en-us .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Samkondi\u0109e 2.5 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - \u00CDgy add tov\u00E1bb! 2.5 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.5 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Dijeli pod istim uvjetima 2.5 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@ta .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@kk .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 2.5 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/terms/hasVersion> "2.5" .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@st .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u7D99\u627F 2.5 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Partilha nos termos da mesma licen\u00E7a 2.5 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Chung"@vi .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@si-lk .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.5 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@az .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@ml .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-sa/2.5/88x31.png> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@lt .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@oci-es .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - CompartilhaIgual 2.5 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@ga .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@ast .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 2.5 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 2.5 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u2013 \u10D2\u10D0\u10D5\u10E0\u10EA\u10D4\u10DA\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7  2.5 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 2.5 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-LicenciarIgual 2.5 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.5 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-PerkongsianSerupa 2.5 Umum"@ms .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@uk .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nemainot licenci 2.5 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-CompartirIgual 2.5 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 2.5 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Deljenje pod enakimi pogoji 2.5 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Erkenning-InsgelyksDeel 2.5 Generies"@af .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 2.5 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o -Mohlakanelwa 2.5 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@en-sg .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@en-gb .
<http://creativecommons.org/licenses/by-sa/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 2.5 Generic"@ur .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-sa/2.5/')))
    BY_SA_3_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Zachovejte licenci 3.0 Unported"@cs .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@as .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Jagamine samadel tingimustel 3.0 Jurisdiktsiooniga sidumata"@et .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-LicenciarIgual 3.0 Unported"@es-cl .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@ast-es .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@en-hk .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 3.0 \u0549\u057F\u0565\u0572\u0561\u0575\u0576\u0561\u0581\u057E\u0561\u056E"@hy .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 3.0 Unported"@es-es .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-CompartirIgual 3.0 No adaptada"@ca .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@en-sg .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u2013 \u10D2\u10D0\u10D5\u10E0\u10EA\u10D4\u10DA\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7  3.0 \u10D0\u10E0\u10D0\u10DE\u10DD\u10E0\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8"@ka .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 3.0 Unported"@es-co .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 3.0 Unported"@fr-ca .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@be .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-CompartirDerivadasIgual 3.0 Unported"@es-ar .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@mn .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-PerkongsianSerupa 3.0 Unported"@ms .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Deliti pod istim uslovima 3.0 Unported"@sr-Latn .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@ast .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-CompartirIgual 3.0 Unported"@gl .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@bn .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Deljenje pod enakimi pogoji 3.0 Nedolo\u010Dena"@sl .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 3.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o - CompartilhaIgual 3.0 N\u00E3o Adaptada"@pt .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@vi .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 3.0 Unported"@es-gt .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@ur .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/terms/hasVersion> "3.0" .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 3.0 Unported"@de-ch .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-InsgelyksDeel 3.0 Unported"@af .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 3.0 Unported"@mk .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 3.0 \u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A"@th .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-Lisans\u0131DevamEttirme 3.0 Unported"@tr .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 3.0 Unported"@zh-hk .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@uk .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-CompartirIgual 3.0 Unported"@es .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Condividi allo stesso modo 3.0 Unported"@it .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@fa .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GelijkDelen 3.0 Unported"@nl .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-sa/3.0/legalcode> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@en-us .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 3.0 Unported"@ko .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Samkondi\u0109e 3.0 Neadaptita"@eo .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@te .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Dijeli pod istim uvjetima 3.0 neloklizirana licenca"@hr .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@sq .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-ShareAlike} 3.0 ${Unported}"@x-i18n .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 3.0 Unported"@de .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - \u00CDgy add tov\u00E1bb! 3.0 Unported"@hu .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@en-gb .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@lt .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-DelP\u00E5SammeVilk\u00E5r 3.0 Unported"@da .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@ga .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@st .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-BerbagiSerupa 3.0 Unported"@id .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o -Mohlakanelwa 3.0 Unported"@nso .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 3.0 Unported"@es-pr .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@hi .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@ta .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-sa/3.0/80x15.png> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-DelaLika 3.0 Unported"@sv .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Condividi allo stesso modo 3.0 Unported"@it-ch .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u7D99\u627F 3.0 \u975E\u79FB\u690D"@ja .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 3.0 Unported"@de-at .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/identifier> "by-sa" .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 3.0 Unported"@es-ec .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@en .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u0421 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439) 3.0 \u041D\u0435\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F"@ru .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@oci-es .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage \u00E0 l'Identique 3.0 non transpos\u00E9"@fr .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 3.0 Unported"@zh .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@is .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 3.0 Unported"@es-pe .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@si-lk .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Na tych samych warunkach 3.0 Unported"@pl .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Zihlanganyeleni 3.0 Unported"@zu .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Partilha nos termos da mesma licen\u00E7a 3.0 Unported"@pt-pt .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 3.0 Unported"@fr-ch .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 3.0 Unported"@sr .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-PartekatuBerdin 3.0 Unported"@eu .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 3.0 Unported"@fr-lu .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-sa/3.0/88x31.png> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 3.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 3.0 Unported"@zh-tw .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@en-ca .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0639\u0645\u0644- \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 3.0 \u0627\u0644\u0627\u0635\u0644\u064A\u0629"@ar .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nemainot licenci 3.0 Nep\u0101rnesta"@lv .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire - Distribuire-\u00EEn-condi\u0163ii-identice 3.0 Ne-adaptat\u0103"@ro .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@pt-br .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-DelP\u00E5SammeVilk\u00E5r 3.0 Unported"@no .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@az .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-Licenciamiento Rec\u00EDproco 3.0 Unported"@es-mx .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@ml .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-Tarttuva 3.0 Muokkaamaton"@fi .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 3.0 Unported"@kk .
<http://creativecommons.org/licenses/by-sa/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 3.0 \u039C\u03B7 \u03B5\u03B9\u03C3\u03B1\u03B3\u03CC\u03BC\u03B5\u03BD\u03BF"@el .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-sa/3.0/')))
    BY_SA_4_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding-GelijkDelen 4.0 Internationaal"@nl .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung - Weitergabe unter gleichen Bedingungen 4.0 International"@de-ch .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung - Weitergabe unter gleichen Bedingungen 4.0 International"@de .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi-Zihlanganyeleni 4.0 International"@zu .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties-Nemainot licenci 4.0 International"@lv .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-CompartirIgual 4.0 Internacional"@es-ar .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-sa/4.0/88x31.png> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora-Zachovejte licenci 4.0 International"@cs .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@ga .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Condividi allo stesso modo 4.0 Internazionale"@it .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 4.0 Internacional"@es-es .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu-PartekatuBerdin 4.0 International"@eu .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! - \u00CDgy add tov\u00E1bb! 4.0 Nemzetk\u00F6zi"@hu .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje-Dijeli pod istim uvjetima 4.0 me\u0111unarodni sporazumi"@hr .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento-CompartirIgual 4.0 Internacional"@gl .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo-Deliti pod istim uslovima 4.0 International"@sr-latn .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine + Jagamine samadel tingimustel 4.0 Rahvusvaheline"@et .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ch .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@oci-es .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u00ABAttribution-ShareAlike\u00BB (\u00AB\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F \u2014 \u041D\u0430 \u0442\u0435\u0445 \u0436\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445\u00BB) 4.0 \u0412\u0435\u0441\u044C \u043C\u0438\u0440 (\u0432 \u0442.\u0447. \u0420\u043E\u0441\u0441\u0438\u044F \u0438 \u0434\u0440.)"@ru .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 4.0 \u0394\u03B9\u03B5\u03B8\u03BD\u03AD\u03C2"@el .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 4.0 International"@sr .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva-Deljenje pod enakimi pogoji 4.0 International"@sl .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution -  Partage dans les M\u00EAmes Conditions 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@en-sg .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa-Na tych samych warunkach 4.0 Mi\u0119dzynarodowe"@pl .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-DelP\u00E5SammeVilk\u00E5r 4.0 International"@da .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement-CompartirIgual 4.0 Internacional"@ca .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Al\u0131nt\u0131-Lisans\u0131DevamEttirme 4.0 Uluslararas\u0131"@tr .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande-DelaLika 4.0 Internationell"@sv .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A - \u7D99\u627F 4.0 \u56FD\u969B"@ja .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@ast-es .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 4.0 \u05D1\u05D9\u05DF\u05BE\u05DC\u05D0\u05D5\u05DE\u05D9"@he .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite-Samkondi\u0109e 4.0 Internacia"@eo .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o -Mohlakanelwa 4.0 International"@nso .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/identifier> "by-sa" .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire - Distribuire-\u00EEn-condi\u0163ii-identice 4.0 Interna\u021Bional"@ro .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@ta .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@en-us .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@ur .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-CompartilhaIgual 4.0 Internacional"@pt .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@mn .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by-sa/4.0/80x15.png> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7 \u2013 \u10D2\u10D0\u10D5\u10E0\u10EA\u10D4\u10DA\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7  4.0 International"@ka .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung-Weitergabe unter gleichen Bedingungen 4.0 International"@de-at .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 Nd\u00EBrkomb\u00EBtar"@sq .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438\u0418\u0437\u0432\u043E\u0440-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 4.0 \u041C\u0435\u0453\u0443\u043D\u0430\u0440\u043E\u0434\u0435\u043D"@mk .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@en-ca .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@fa .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@ast .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 \u0C05\u0C02\u0C24\u0C30\u0C4D\u0C1C\u0C3E\u0C24\u0C40\u0C2F\u0C02"@te .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Priskyrimas - Analogi\u0161kas platinimas 4.0 Tarptautin\u0117"@lt .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@az .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/terms/hasVersion> "4.0" .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 Qu\u1ED1c t\u1EBF"@vi .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4-JaaSamoin 4.0 Kansainv\u00E4linen"@fi .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-Partilha nos termos da mesma licen\u00E7a 4.0 Internacional"@pt-pt .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi-BerbagiSerupa 4.0 Internasional"@id .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by-sa/4.0/legalcode> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@kk .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@en-gb .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan-PerkongsianSerupa 4.0 International"@ms .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@sr-Latn .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning-InsgelyksDeel 4.0 International"@af .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 4.0 \u570B\u969B"@zh-hk .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0639\u0645\u0644- \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 4.0 \u062F\u0648\u0644\u064A"@ar .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@as .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@be .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0 \u56FD\u9645"@zh .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse-DelP\u00E5SammeVilk\u00E5r 4.0 Internasjonal"@no .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o-CompartilhaIgual 4.0 Internacional"@pt-br .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento-CompartirIgual 4.0 Internacional"@es-pe .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n-CompartirIgual 4.0 Internacional"@es .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution-ShareAlike} 4.0 ${International}"@x-i18n .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 4.0 International"@bg .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 4.0 \u570B\u969B"@zh-tw .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0406\u0437 \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C \u0430\u0432\u0442\u043E\u0440\u0430 - \u0420\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F \u043D\u0430 \u0442\u0438\u0445 \u0441\u0430\u043C\u0438\u0445 \u0443\u043C\u043E\u0432\u0430\u0445 4.0 \u041C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u0430"@uk .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@bn .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 4.0 International"@hy .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@en-hk .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione - Condividi allo stesso modo 4.0 Internazionale"@it-ch .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 4.0 International"@th .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@hi .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-lu .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 \u0D05\u0D28\u0D4D\u0D24\u0D7C\u0D26\u0D47\u0D36\u0D40\u0D2F\u0D02"@ml .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Tilv\u00EDsun-DeilaEins 4.0 Al\u00FEj\u00F3\u00F0legt"@is .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 - Partage des Conditions Initiales \u00E0 l'Identique 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ca .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 4.0 \uAD6D\uC81C"@ko .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 \u0DA2\u0DCF\u0DAD\u0DCA\u200D\u0DBA\u0DB1\u0DCA\u0DAD\u0DBB"@si-lk .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by-sa/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution-ShareAlike 4.0 International"@en .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by-sa/4.0/')))
    BY_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/identifier> "by" .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan 1.0 Umum"@ms .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse 1.0 Generisk"@da .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@fa .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding 1.0 Unported"@nl .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@is .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione 1.0 Generico"@it .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 1.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7  1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC(Attribution) 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438 \u0438\u0437\u0432\u043E\u0440 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0C06\u0C2A\u0C3E\u0C26\u0C3F\u0C02\u0C2A\u0C41 1.0 Generic"@te .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by/1.0/88x31.png> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 1.0 Chung"@vi .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva 1.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@uk .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@ta .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@ast .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F) 1.0 Generic"@ru .
<http://creativecommons.org/licenses/by/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@bn .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@as .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse 1.0 Generisk"@no .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o  1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@st .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@mn .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning 1.0 Generies"@af .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0D15\u0D1F\u0D2A\u0D4D\u0D2A\u0D3E\u0D1F\u0D4D 1.0 Generic"@ml .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0442\u0430\u0443\u044B\u043D \u0441\u0430\u049B\u0442\u0430\u0443 1.0 Generic"@kk .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine 1.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@ur .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Priskyrimas 1.0 Generic"@lt .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@az .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by/1.0/80x15.png> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 1.0 Generic"@hy .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0645\u0635\u0646\u0641  1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 1.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@hi .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo 1.0 Generi\u010Dka licenca"@sr-Latn .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi 1.0 Generik"@id .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora 1.0 Generic"@cs .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@ga .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 1.0 Generic"@en .
<http://creativecommons.org/licenses/by/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by/2.0/> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0442\u0440\u044B\u0431\u0443\u0446\u044B\u044F 1.0 Generic"@be .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by/1.0/legalcode> .
<http://creativecommons.org/licenses/by/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by/1.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o 1.0 Generic"@pt-br .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by/1.0/')))
    BY_2_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 2.0 Generic"@hy .
<http://creativecommons.org/licenses/by/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438 \u0438\u0437\u0432\u043E\u0440 2.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire 2.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@uk .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0645\u0635\u0646\u0641  2.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o  2.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@en-sg .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@en-hk .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi 2.0 Generik"@id .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@en .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@ta .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 2.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 2.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 2.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@ga .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu 2.0 Generikoa"@eu .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1 2.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by/2.5/> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties 2.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0C06\u0C2A\u0C3E\u0C26\u0C3F\u0C02\u0C2A\u0C41 2.0 Generic"@te .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC(Attribution) 2.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F) 2.0 Generic"@ru .
<http://creativecommons.org/licenses/by/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@en-ca .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine 2.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 2.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@az .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@ur .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo 2.0 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/by/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by/2.0/88x31.png> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! 2.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A 2.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD 2.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding 2.0 Unported"@nl .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 2.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@fa .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o 2.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 2.0 Chung"@vi .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/terms/hasVersion> "2.0" .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@hi .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning 2.0 Generies"@af .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande 2.0 Generisk"@sv .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse 2.0 Generisk"@da .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A 2.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje 2.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement 2.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 2.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 2.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva 2.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o 2.0 Generic"@pt-br .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@bn .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o 2.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E 2.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione 2.0 Generico"@it .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento 2.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4 2.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 2.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A 2.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@as .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@en-us .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@ast .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi 2.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa 2.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D 2.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/identifier> "by" .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0442\u0440\u044B\u0431\u0443\u0446\u044B\u044F 2.0 Generic"@be .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan 2.0 Umum"@ms .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora 2.0 Generic"@cs .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@mn .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@en-gb .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by/2.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by/2.0/legalcode> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7  2.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 2.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution} 2.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@st .
<http://creativecommons.org/licenses/by/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by/2.0/80x15.png> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Priskyrimas 2.0 Generic"@lt .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 2.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by/2.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite 2.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@si-lk .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@oci-es .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@ast-es .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435 2.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.0 Generic"@is .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse 2.0 Generisk"@no .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0442\u0430\u0443\u044B\u043D \u0441\u0430\u049B\u0442\u0430\u0443 2.0 Generic"@kk .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione 2.0 Generico"@it-ch .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0D15\u0D1F\u0D2A\u0D4D\u0D2A\u0D3E\u0D1F\u0D4D 2.0 Generic"@ml .
<http://creativecommons.org/licenses/by/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32 2.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by/2.0/')))
    BY_2_5 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.5 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/by/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 2.5 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.5 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@is .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0645\u0635\u0646\u0641  2.5 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@hi .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0C06\u0C2A\u0C3E\u0C26\u0C3F\u0C02\u0C2A\u0C41 2.5 Generic"@te .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@en-ca .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@si-lk .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/terms/hasVersion> "2.5" .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/by/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by/2.5/80x15.png> .
<http://creativecommons.org/licenses/by/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione 2.5 Generico"@it .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Imenovanje 2.5 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0442\u0440\u044B\u0431\u0443\u0446\u044B\u044F 2.5 Generic"@be .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o 2.5 Generic"@pt-br .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/terms/isReplacedBy> <http://creativecommons.org/licenses/by/3.0/> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 2.5 Chung"@vi .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D 2.5 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o 2.5 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora 2.5 Generic"@cs .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@bn .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande 2.5 Generisk"@sv .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32 2.5 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Priskyrimas 2.5 Generic"@lt .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.5 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribuzione 2.5 Generico"@it-ch .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@ur .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa 2.5 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 2.5 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse 2.5 Generisk"@da .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 2.5 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438 \u0438\u0437\u0432\u043E\u0440 2.5 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@as .
<http://creativecommons.org/licenses/by/2.5/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@mn .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435 2.5 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Aitortu 2.5 Generikoa"@eu .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A 2.5 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 2.5 Generic"@hy .
<http://creativecommons.org/licenses/by/2.5/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by/2.5/legalcode> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! 2.5 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties 2.5 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o  2.5 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/by/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 2.5 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuite 2.5 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 2.5 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F) 2.5 Generic"@ru .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuire 2.5 Generic\u0103"@ro .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 2.5 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@en-sg .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconeixement 2.5 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/by/2.5/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7  2.5 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@ast .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@st .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@en-hk .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@en-gb .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@uk .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@ta .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0442\u0430\u0443\u044B\u043D \u0441\u0430\u049B\u0442\u0430\u0443 2.5 Generic"@kk .
<http://creativecommons.org/licenses/by/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine 2.5 \u00DCldine"@et .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.5 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan 2.5 Umum"@ms .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Autorstvo 2.5 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 2.5 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.5 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1 2.5 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/identifier> "by" .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@az .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@ast-es .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0D15\u0D1F\u0D2A\u0D4D\u0D2A\u0D3E\u0D1F\u0D4D 2.5 Generic"@ml .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Navngivelse 2.5 Generisk"@no .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Erkenning 2.5 Generies"@af .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribusi 2.5 Generik"@id .
<http://creativecommons.org/licenses/by/2.5/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by/2.5/88x31.png> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC(Attribution) 2.5 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o 2.5 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A 2.5 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A 2.5 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/by/2.5/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@fa .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 2.5 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "${Attribution} 2.5 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 2.5 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@en .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding 2.5 Unported"@nl .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@ga .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 2.5 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E 2.5 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi 2.5 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@oci-es .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva 2.5 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/by/2.5/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Generic"@en-us .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Attribution 2.5 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 2.5 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD 2.5 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento 2.5 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/by/2.5/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4 2.5 Raakaversio"@fi .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by/2.5/')))
    BY_3_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0442\u0430\u0443\u044B\u043D \u0441\u0430\u049B\u0442\u0430\u0443 3.0 Unported"@kk .
<http://creativecommons.org/licenses/by/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o 3.0 Unported"@pt-br .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi 3.0 Unported"@id .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D 3.0 Unported"@zh .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@ast .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione 3.0 Unported"@it .
<http://creativecommons.org/licenses/by/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@en-gb .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@ast-es .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 3.0 Unported"@es-pr .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding 3.0 Unported"@nl .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 3.0 Unported"@es-cl .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@hi .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Priskyrimas 3.0 Unported"@lt .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan 3.0 Unported"@ms .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0442\u0440\u044B\u0431\u0443\u0446\u044B\u044F 3.0 Unported"@be .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0C06\u0C2A\u0C3E\u0C26\u0C3F\u0C02\u0C2A\u0C41 3.0 Unported"@te .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435 3.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438 \u0438\u0437\u0432\u043E\u0440 3.0 Unported"@mk .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@as .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@en-hk .
<http://creativecommons.org/licenses/by/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 3.0 Unported"@es-pe .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 3.0 Unported"@de .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@en .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@ga .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E 3.0 Unported"@sr .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 3.0 Unported"@es-co .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva 3.0 Nedolo\u010Dena"@sl .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@en-sg .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties 3.0 Nep\u0101rnesta"@lv .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@mn .
<http://creativecommons.org/licenses/by/3.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@ur .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 3.0 Unported"@fr-lu .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o 3.0 Unported"@pt-pt .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 3.0 Unported"@fr-ca .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1 3.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@st .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/identifier> "by" .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande 3.0 Unported"@sv .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@sq .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 3.0 Unported"@vi .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@tr .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7  3.0 \u10D0\u10E0\u10D0\u10DE\u10DD\u10E0\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8"@ka .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A 3.0 Unported"@zh-tw .
<http://creativecommons.org/licenses/by/3.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@bn .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o 3.0 Unported"@nso .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 3.0 Unported"@es-ar .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@si-lk .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution (\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F) 3.0 \u041D\u0435\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F"@ru .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@fa .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o  3.0 N\u00E3o Adaptada"@pt .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC(Attribution) 3.0 Unported"@ko .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse 3.0 Unported"@no .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! 3.0 Unported"@hu .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo 3.0 Unported"@sr-latn .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi 3.0 Unported"@zu .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@en-ca .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa 3.0 Unported"@pl .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@en-us .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 3.0 Unported"@de-ch .
<http://creativecommons.org/licenses/by/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by/3.0/80x15.png> .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora 3.0 Unported"@cs .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@az .
<http://creativecommons.org/licenses/by/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution} 3.0 ${Unported}"@x-i18n .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@ta .
<http://creativecommons.org/licenses/by/3.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD 3.0 \u039C\u03B7 \u03B5\u03B9\u03C3\u03B1\u03B3\u03CC\u03BC\u03B5\u03BD\u03BF"@el .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse 3.0 Unported"@da .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine 3.0 Jurisdiktsiooniga sidumata"@et .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 3.0 Unported"@es-mx .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32 3.0 \u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A"@th .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione 3.0 Unported"@it-ch .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by/3.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by/3.0/legalcode> .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement 3.0 No adaptada"@ca .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A 3.0 Unported"@zh-hk .
<http://creativecommons.org/licenses/by/3.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by/3.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by/3.0/88x31.png> .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje 3.0 neloklizirana licenca"@hr .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@uk .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 3.0 \u0549\u057F\u0565\u0572\u0561\u0575\u0576\u0561\u0581\u057E\u0561\u056E"@hy .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0645\u0635\u0646\u0641  3.0 \u0627\u0644\u0627\u0635\u0644\u064A\u0629"@ar .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@is .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 3.0 Unported"@fr-ch .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 3.0 Unported"@es-gt .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 3.0 Unported"@de-at .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu 3.0 Unported"@eu .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning 3.0 Unported"@af .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 3.0 Unported"@es-es .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A 3.0 \u975E\u79FB\u690D"@ja .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire 3.0 Ne-adaptat\u0103"@ro .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4 3.0 Muokkaamaton"@fi .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 non transpos\u00E9"@fr .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 3.0 Unported"@es .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 3.0 Unported"@es-ec .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/terms/hasVersion> "3.0" .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite 3.0 Neadaptita"@eo .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "\u0D15\u0D1F\u0D2A\u0D4D\u0D2A\u0D3E\u0D1F\u0D4D 3.0 Unported"@ml .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 3.0 Unported"@oci-es .
<http://creativecommons.org/licenses/by/3.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento 3.0 Unported"@gl .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by/3.0/')))
    BY_4_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@az .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse 4.0 International"@da .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0442\u0440\u044B\u0431\u0443\u0446\u044B\u044F 4.0 International"@be .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@hi .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\uC800\uC791\uC790\uD45C\uC2DC 4.0 \uAD6D\uC81C"@ko .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Priskyrimas 4.0 Tarptautin\u0117"@lt .
<http://creativecommons.org/licenses/by/4.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/by/4.0/legalcode> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Aitortu 4.0 International"@eu .
<http://creativecommons.org/licenses/by/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Navngivelse 4.0 Internasjonal"@no .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u8868\u793A 4.0 \u56FD\u969B"@ja .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Naamsvermelding 4.0 Internationaal"@nl .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0443\u0442\u043E\u0440\u0441\u0442\u0432\u043E 4.0 International"@sr .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 4.0 Internacional"@es-pe .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Erk\u00E4nnande 4.0 Internationell"@sv .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@mn .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Ghi nh\u1EADn c\u00F4ng c\u1EE7a t\u00E1c gi\u1EA3 4.0 Qu\u1ED1c t\u1EBF"@vi .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorstvo 4.0 International"@sr-latn .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 Nd\u00EBrkomb\u00EBtar"@sq .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Uve\u010Fte autora 4.0 International"@cs .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A 4.0 \u570B\u969B"@zh-tw .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Imenovanje 4.0 me\u0111unarodni sporazumi"@hr .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u00ABAttribution\u00BB (\u00AB\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F\u00BB) 4.0 \u0412\u0435\u0441\u044C \u043C\u0438\u0440 (\u0432 \u0442.\u0447. \u0420\u043E\u0441\u0441\u0438\u044F \u0438 \u0434\u0440.)"@ru .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 4.0 International"@de-ch .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@en-sg .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10D5\u10E2\u10DD\u10E0\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10D8\u10D7  4.0 International"@ka .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 \u0DA2\u0DCF\u0DAD\u0DCA\u200D\u0DBA\u0DB1\u0DCA\u0DAD\u0DBB"@si-lk .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@oci-es .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuite 4.0 Internacia"@eo .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Uznanie autorstwa 4.0 Mi\u0119dzynarodowe"@pl .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@ta .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuire 4.0 Interna\u021Bional"@ro .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u05D9\u05D9\u05D7\u05D5\u05E1 4.0 \u05D1\u05D9\u05DF\u05BE\u05DC\u05D0\u05D5\u05DE\u05D9"@he .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconeixement 4.0 Internacional"@ca .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0430\u0432\u0435\u0434\u0438 \u0438\u0437\u0432\u043E\u0440 4.0 \u041C\u0435\u0453\u0443\u043D\u0430\u0440\u043E\u0434\u0435\u043D"@mk .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ca .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0C06\u0C2A\u0C3E\u0C26\u0C3F\u0C02\u0C2A\u0C41 4.0 \u0C05\u0C02\u0C24\u0C30\u0C4D\u0C1C\u0C3E\u0C24\u0C40\u0C2F\u0C02"@te .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Qaphela Umnikazi 4.0 International"@zu .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Atsaucoties 4.0 International"@lv .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o 4.0 Internacional"@pt-br .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribusi 4.0 Internasional"@id .
<http://creativecommons.org/licenses/by/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by/4.0/88x31.png> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u7F72\u540D 4.0 \u56FD\u9645"@zh .
<http://creativecommons.org/licenses/by/4.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/by/4.0/80x15.png> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 Uluslararas\u0131"@tr .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Pengiktirafan 4.0 International"@ms .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Priznanje avtorstva 4.0 International"@sl .
<http://creativecommons.org/licenses/by/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/identifier> "by" .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Tsebagat\u0161o 4.0 International"@nso .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u59D3\u540D\u6A19\u793A 4.0 \u570B\u969B"@zh-hk .
<http://creativecommons.org/licenses/by/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@sr-Latn .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/terms/hasVersion> "4.0" .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03BF\u03CD 4.0 \u0394\u03B9\u03B5\u03B8\u03BD\u03AD\u03C2"@el .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@en-hk .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 4.0 Internacional"@es .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0633\u0628 \u0627\u0644\u0645\u0635\u0646\u0641  4.0 \u062F\u0648\u0644\u064A"@ar .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 4.0 International"@de .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@ast-es .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0410\u0442\u0430\u0443\u044B\u043D \u0441\u0430\u049B\u0442\u0430\u0443 4.0 International"@kk .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Autorile viitamine 4.0 Rahvusvaheline"@et .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Reco\u00F1ecemento 4.0 Internacional"@gl .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione 4.0 Internazionale"@it-ch .
<http://creativecommons.org/licenses/by/4.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@en-gb .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "${Attribution} 4.0 ${International}"@x-i18n .
<http://creativecommons.org/licenses/by/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribuci\u00F3n 4.0 Internacional"@es-ar .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@as .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u062A\u062E\u0635\u06CC\u0635 4.0 International"@fa .
<http://creativecommons.org/licenses/by/4.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0D15\u0D1F\u0D2A\u0D4D\u0D2A\u0D3E\u0D1F\u0D4D 4.0 \u0D05\u0D28\u0D4D\u0D24\u0D7C\u0D26\u0D47\u0D36\u0D40\u0D2F\u0D02"@ml .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@ast .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o 4.0 Internacional"@pt-pt .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Atribui\u00E7\u00E3o  4.0 Internacional"@pt .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@en-ca .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@en .
<http://creativecommons.org/licenses/by/4.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E21\u0E32 4.0 International"@th .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Nevezd meg! 4.0 Nemzetk\u00F6zi"@hu .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Namensnennung 4.0 International"@de-at .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Reconocimiento 4.0 Internacional"@es-es .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "V\u00EDsun til h\u00F6fundar 4.0 Al\u00FEj\u00F3\u00F0legt"@is .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-ch .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@bn .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@ur .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Paternit\u00E9 4.0 Ceci peut \u00EAtre votre site web principal ou la page d\u2019informations vous concernant sur une plate forme d\u2019h\u00E9bergement, comme Flickr Commons."@fr-lu .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@en-us .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Nime\u00E4 4.0 Kansainv\u00E4linen"@fi .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Erkenning 4.0 International"@af .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u041F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435 4.0 International"@bg .
<http://creativecommons.org/licenses/by/4.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribuzione 4.0 Internazionale"@it .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0406\u0437 \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C \u0430\u0432\u0442\u043E\u0440\u0441\u0442\u0432\u0430 4.0 \u041C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u0430"@uk .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0572\u0578\u0582\u0574 4.0 International"@hy .
<http://creativecommons.org/licenses/by/4.0/> <http://purl.org/dc/elements/1.1/title> "Attribution 4.0 International"@ga .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/by/4.0/')))
    DEVNATIONS_2_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/identifier> "devnations" .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Na\u00E7\u00F5es em Desenvolvimento License"@pt-pt .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Naciones en desarrollo License"@es-pe .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@kk .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/terms/hasVersion> "2.0" .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Naciones en desarrollo License"@es-pr .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0391\u03BD\u03B1\u03C0\u03C4\u03C5\u03C3\u03C3\u03CC\u03BC\u03B5\u03BD\u03B1 \u0388\u03B8\u03BD\u03B7 License"@el .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@hi .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "${Developing Nations} License"@x-i18n .
<http://creativecommons.org/licenses/devnations/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#HighIncomeNationUse> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/devnations/2.0/80x15.png> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Narodi v razvoju License"@sl .
<http://creativecommons.org/licenses/devnations/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@ta .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Naciones en desarrollo License"@es-gt .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@mn .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@en-sg .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u10D2\u10D0\u10DC\u10D5\u10D8\u10D7\u10D0\u10E0\u10D4\u10D1\u10D0\u10D3\u10D8 \u10D4\u10E0\u10D4\u10D1\u10D8 License"@ka .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@en-gb .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Arengumaad License"@et .
<http://creativecommons.org/licenses/devnations/2.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\uAC1C\uBC1C\uB3C4\uC0C1\uAD6D License"@ko .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@sr .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@uk .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0C05\u0C2D\u0C3F\u0C35\u0C43\u0C26\u0C4D\u0C27\u0C3F \u0C1A\u0C46\u0C02\u0C26\u0C41\u0C24\u0C41\u0C28\u0C4D\u0C28 \u0C26\u0C47\u0C36\u0C3E\u0C32\u0C41 License"@te .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Pays en voie de d\u00E9veloppement License"@fr .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Pays en Voie de D\u00E9veloppement License"@fr-ch .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@as .
<http://creativecommons.org/licenses/devnations/2.0/> <http://creativecommons.org/ns#deprecatedOn> "2007-06-04"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u767A\u5C55\u9014\u4E0A\u56FD License"@ja .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0435\u0441\u044F \u0441\u0442\u0440\u0430\u043D\u044B License"@ru .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0627\u0644\u062F\u0648\u0644 \u0627\u0644\u0646\u0627\u0645\u064A\u0629 License"@ar .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Ontwikkelingslanden  License"@nl .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Dinaga t\u0161e Hlabologago License"@nso .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Fejl\u0151d\u0151 orsz\u00E1gok License"@hu .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Udviklingslande License"@da .
<http://creativecommons.org/licenses/devnations/2.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Nacions en desenvolupament License"@ca .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Na\u0163iuni \u00EEn curs de dezvoltare License"@ro .
<http://creativecommons.org/licenses/devnations/2.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/devnations/2.0/88x31.png> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Pays en Voie de D\u00E9veloppement License"@fr-ca .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@vi .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Naciones en desarrollo License"@es-mx .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u53D1\u5C55\u4E2D\u56FD\u5BB6 License"@zh .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u0449\u0438 \u0441\u0435 \u043D\u0430\u0446\u0438\u0438 License"@bg .
<http://creativecommons.org/licenses/devnations/2.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@en-hk .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@en-us .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@en-ca .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Evolulandoj License"@eo .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Kehitysmaa License"@fi .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@sr-Latn .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@en .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Ontwikkelende Nasies License"@af .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Naciones en desarrollo License"@es .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@ast .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Entwicklungsl\u00E4nder License"@de-at .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Utvecklingsl\u00E4nder License"@sv .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Garapen bidean diren herrialdeak License"@eu .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@ga .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@hy .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Pa\u00EDses en Desarrollo License"@es-cl .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Pa\u0144stwa rozwijaj\u0105ce si\u0119 License"@pl .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Naciones en desarrollo License"@es-ec .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u041A\u0440\u0430\u0456\u043D\u044B \u045E \u0441\u0442\u0430\u0434\u044B\u0456 \u0440\u0430\u0437\u0432\u0456\u0446\u0446\u044F License"@be .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Pays en Voie de D\u00E9veloppement License"@fr-lu .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Pa\u00EDses em Desenvolvimento License"@pt .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@st .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@pt-br .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0417\u0435\u043C\u0458\u0438 \u0432\u043E \u0440\u0430\u0437\u0432\u043E\u0458 License"@mk .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Naciones en Desarrollo License"@es-ar .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@tr .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@fa .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Negara Berkembang License"@id .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Att\u012Bsto\u0161\u0101s n\u0101cijas License"@lv .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Negara-Negara Membangun License"@ms .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@oci-es .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Rozvojov\u00E9 n\u00E1rody License"@cs .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@is .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@bn .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Zemlje u razvoju License"@hr .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u958B\u767C\u4E2D\u570B\u5BB6 License"@zh-hk .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@az .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Entwicklungsl\u00E4nder License"@de-ch .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@ast-es .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@ur .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Naciones en desarrollo License"@es-co .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u05DE\u05D3\u05D9\u05E0\u05D5\u05EA \u05DE\u05EA\u05E4\u05EA\u05D7\u05D5\u05EA License"@he .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0D35\u0D3F\u0D15\u0D38\u0D4D\u0D35\u0D30 \u0D30\u0D3E\u0D37\u0D4D\u0D1F\u0D4D\u0D30\u0D19\u0D4D\u0D19\u0D7E License"@ml .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Izizwe Ezisathuthuka License"@zu .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@gl .
<http://creativecommons.org/licenses/devnations/2.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/devnations/2.0/legalcode> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Entwicklungsl\u00E4nder License"@de .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Besivystan\u010Dios \u0161alys License"@lt .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u958B\u767C\u4E2D\u570B\u5BB6 License"@zh-tw .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1E\u0E31\u0E12\u0E19\u0E32 License"@th .
<http://creativecommons.org/licenses/devnations/2.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Utviklingsland License"@no .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@it-ch .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@it .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Naciones en desarrollo License"@es-es .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Developing Nations License"@si-lk .
<http://creativecommons.org/licenses/devnations/2.0/> <http://purl.org/dc/elements/1.1/title> "Kombe N\u00EB Zhvillim License"@sq .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/devnations/2.0/')))
    NC_SA_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nicht-kommerziell-Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/nc-sa/1.0/legalcode> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@ml .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "${NonCommercial-ShareAlike} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomercijalno-Dijeli pod istim uvjetima 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "IkkeKommerciel\u2013DelP\u00E5SammeVilk\u00E5r 1.0 Generisk"@da .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "No Comercial-Licenciamiento Rec\u00EDproco 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@ta .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@be .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@is .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/nc-sa/1.0/88x31.png> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Uso n\u00E3o-comercial-Compartilhamento pela mesma licen\u00E7a 1.0 Generic"@pt-br .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike (\u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0421 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439) 1.0 Generic"@ru .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@st .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@mn .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial-CompartirIgual 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomercialno-Deljenje pod enakimi pogoji 1.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NietCommercieel-GelijkDelen 1.0 Unported"@nl .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "BukanKomersial-PerkongsianSerupa 1.0 Umum"@ms .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@az .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommerciale-StessaLicenza 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u55B6\u5229 - \u7D99\u627F 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@lt .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Mitte\u00E4riline eesm\u00E4rk + Jagamine samadel tingimustel  1.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1\u2013\u10D2\u10D0\u10D3\u10D0\u10EA\u10D4\u10DB\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7 1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NichtKommerziell-Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial-CompartirDerivadasIgual 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 - \u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@bn .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nevyu\u017E\u00EDvejte komer\u010Dn\u011B-Zachovejte licenci 1.0 Generic"@cs .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomerci\u0101li-Nemainot licenci 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 - \u0570\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 1.0 Generic"@hy .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@fa .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://creativecommons.org/ns#deprecatedOn> "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@ur .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Necomercial - Distribuire-\u00EEn-condi\u0163ii-identice 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@ga .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Ep\u00E4kaupallinen-Tarttuva 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E-\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/identifier> "nc-sa" .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@hi .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Gayriticari-Lisans\u0131DevamEttirme 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32-\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Ungayisebenziseli Ezentengiselwano-Zihlanganyeleni 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@ast .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NieKommersieel-InsgelyksDeel 1.0 Generies"@af .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "EzKomertziala-PartekatuBerdin 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@te .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "U\u017Cycie niekomercyjne-Na tych samych warunkach 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@kk .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NichtKommerziell-Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Ne add el! - \u00CDgy add tov\u00E1bb! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@as .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@en .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonComercial-CompartirIgual 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas d'Utilisation Commerciale - Partage des Conditions Initiales \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomercijalno-Deliti pod istim uslovima 1.0 Generi\u010Dka licenca"@sr-Latn .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Uso N\u00E3o-Comercial-Partilha nos termos da mesma licen\u00E7a 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonKomersial-BerbagiSerupa 1.0 Generik"@id .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u5546\u696D\u6027-\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial-CompartirIgual 1.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "E sego ya Kgwebo-Mohlakanelwa 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas d'Utilisation Commerciale - Partage \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629-\u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A 1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomerce-Samkondi\u0109e 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Ikkekommersiell-DelP\u00E5SammeVilk\u00E5r 1.0 Generisk"@no .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9-\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\uBE44\uC601\uB9AC-\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "IckeKommersiell-DelaLika 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "N\u00E3oComercial - CompartilhaIgual 1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Chung"@vi .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E-\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial-LicenciarIgual 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommerciale-StessaLicenza 1.0 Generico"@it .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/nc-sa/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial-ShareAlike 1.0 Generic"@uk .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/nc-sa/1.0/')))
    NC_SAMPLING_PLUS_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomercijalna Sampling Plus 1.0"@sr-latn .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@ast-es .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@hi .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@et .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus No Comercial 1.0"@es-gt .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://creativecommons.org/ns#deprecatedOn> "2011-09-09"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling N\u00E3o Comercial Plus 1.0"@pt .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@id .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9 \u05D1\u05D3\u05D2\u05D9\u05DE\u05D4 \u05E4\u05DC\u05D5\u05E1 1.0"@he .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@az .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Ep\u00E4kaupallinen s\u00E4mpl\u00E4ys Plus 1.0"@fi .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@fr-lu .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "BukanKomersial Mengambil Cuba Tambah 1.0"@ms .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Uso N\u00E3o-Comercial para Sampling Plus 1.0"@pt-pt .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E \u0421\u0435\u043C\u043F\u043B\u0438\u0440\u0430\u045A\u0435 \u043F\u043B\u0443\u0441 1.0"@mk .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@cs .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@hy .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@ta .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus NonCommerciale 1.0"@it-ch .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Ungayisebenziseli Ezentengiselwano-Ukuthatha Isampula Nokunye 1.0"@zu .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus No Comercial 1.0"@es .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@kk .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@mn .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u55B6\u5229\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u30FB\u30D7\u30E9\u30B9 1.0"@ja .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E \u0421\u0435\u043C\u043F\u043B\u0438\u0440\u0430\u043D\u0435 \u043F\u043B\u044E\u0441 1.0"@bg .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus No Comercial 1.0"@es-cl .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "IkkeKommerciel Sampling Plus 1.0"@da .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@bn .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@be .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@ur .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Non-Commercial Sampling Plus 1.0"@en-hk .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@vi .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus No Comercial 1.0"@es-mx .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@fr-ch .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Niet-commercieel Sampling Plus 1.0"@nl .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus NonCommerciale 1.0"@it .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A- \u0646\u0645\u0627\u0630\u062C \u0627\u0636\u0627\u0641\u064A\u0629 1.0"@ar .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "U\u017Cycie niekomercyjne-Sampling Plus 1.0"@pl .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomerci\u0101li plus iztverot 1.0"@lv .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0447\u0430\u0441\u0442\u0435\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F (<i>NonCommercial Sampling Plus</i>) 1.0"@ru .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Necomercial\u0103 Sampling Plus 1.0"@ro .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus NoComercial 1.0"@es-ar .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E43\u0E0A\u0E49\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1E\u0E34\u0E40\u0E28\u0E29-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 1.0"@th .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@en .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus Pas d'Utilisation Commerciale 1.0"@fr .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus No Comercial 1.0"@es-pr .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@as .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@te .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@ml .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@fr-ca .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@lt .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@en-ca .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "SamplingPlus NoComercial 1.0"@ca .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u5546\u696D\u6027\u7279\u5225\u53D6\u6A23 1.0"@zh-hk .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u5546\u4E1A\u6027\u53D6\u6837\u4F7F\u7528\u52A0\u5F3A\u7248 1.0"@zh .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@st .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@tr .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@is .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampole ya Tlalelet\u0161o e Sego ya Kgwebo 1.0"@nso .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Non-Commercial Sampling Plus 1.0"@en-sg .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NieKommersi\u00EBle Voorsmaak Plus 1.0"@af .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NichtKommerzielle Sampling Plus 1.0"@de-ch .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus No Comercial 1.0"@es-ec .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@ast .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus Ez Komertziala 1.0"@eu .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekompercijalno sempliranje plus 1.0"@hr .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "IckeKommersiell Sampling Plus 1.0"@sv .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\uBE44\uC601\uB9AC \uC0D8\uD50C\uB9C1  1.0"@ko .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomerca Specimeno Plus 1.0"@eo .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@uk .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@ga .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus No Comercial 1.0"@es-es .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Ne add el! Sampling Plus 1.0"@hu .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Non-Commercial Sampling Plus 1.0"@en-gb .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomercialno Sampling Plus 1.0"@sl .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Nicht-kommerziell Sampling Plus 1.0"@de .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NichtKommerzielle Sampling Plus 1.0"@de-at .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u0430 Sampling Plus 1.0"@sr .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@pt-br .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@sq .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/nc-sampling+/1.0/80x15.png> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/identifier> "nc-sampling+" .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "${NonCommercial Sampling Plus} 1.0"@x-i18n .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus No Comercial 1.0"@es-pe .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> " \u0386\u03B4\u03B5\u03B9\u03B1 \u0394\u03B5\u03AF\u03B3\u03BC\u03B1\u03C4\u03BF\u03C2 Plus \u03B3\u03B9\u03B1 \u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 1.0"@el .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@en-us .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1 \u10D3\u10D0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10D7\u10D8 \u10DB\u10D0\u10D2\u10D0\u10DA\u10D8\u10D7\u10D8 1.0"@ka .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus No Comercial 1.0"@es-co .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@fa .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/nc-sampling+/1.0/legalcode> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Ikkekommersiell Sampling Plus 1.0"@no .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonComercial Sampling Plus 1.0"@gl .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/nc-sampling+/1.0/88x31.png> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u5546\u696D\u6027\u7279\u5225\u53D6\u6A23 1.0"@zh-tw .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@si-lk .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/sampling/> .
<http://creativecommons.org/licenses/nc-sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial Sampling Plus 1.0"@oci-es .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/nc-sampling+/1.0/')))
    NC_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NichtKommerziell 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 1.0 Generic"@ru .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommerciale 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nicht kommerziell 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Ne add el! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "${NonCommercial} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonKomersial 1.0 Generik"@id .
<http://creativecommons.org/licenses/nc/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "No Comercial 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NieKommersieel 1.0 Generies"@af .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@ast .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/nc/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Phi th\u01B0\u01A1ng m\u1EA1i 1.0 Chung"@vi .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "BukanKomersial 1.0 Umum"@ms .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Ep\u00E4kaupallinen 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/nc/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial 1.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0548\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 1.0 Generic"@hy .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Non-Commercial 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/nc/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A 1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Mitte\u00E4riline eesm\u00E4rk 1.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Ungayisebenziseli Ezentengiselwano 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomercinis 1.0 Generic"@lt .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@is .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "U\u017Cycie niekomercyjne 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/nc/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u5546\u696D\u6027 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Uso n\u00E3o-comercial 1.0 Generic"@pt-br .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Ikkekommersiell 1.0 Generisk"@no .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/identifier> "nc" .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@ta .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Neu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B 1.0 Generic"@cs .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\uBE44\uC601\uB9AC 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u044F\u043B\u044B\u049B \u0435\u043C\u0435\u0441 1.0 Generic"@kk .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@te .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0985-\u09AC\u09BE\u09A8\u09BF\u099C\u09CD\u09AF\u09BF\u0995 1.0 Generic"@bn .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "IckeKommersiell 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NietCommercieel 1.0 Unported"@nl .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomerce 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u063A\u06CC\u0631 \u062A\u062C\u0627\u0631\u06CC 1.0 Generic"@fa .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "IkkeKommerciel 1.0 Generisk"@da .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@en .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "No Comercial 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "No Comercial 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@as .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/nc/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u5546\u696D\u6027 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u5546\u4E1A\u6027\u4F7F\u7528 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/nc/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/nc/1.0/legalcode> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@ml .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@ga .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomercijalno 1.0 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@az .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@be .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomercijalno 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/nc/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "EzKomertziala 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomerci\u0101li 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@st .
<http://creativecommons.org/licenses/nc/1.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Non-Commercial 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Gayriticari 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/nc/1.0/> <http://creativecommons.org/ns#deprecatedOn> "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NichtKommerziell 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u975E\u55B6\u5229 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Non-Commercial 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nekomercialno 1.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/nc/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/nc/1.0/88x31.png> .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@uk .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonComercial 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8  1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Uso N\u00E3o-Comercial 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "N\u00E3oComercial 1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NeComercial 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@mn .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@hi .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoComercial 1.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "E sego ya Kgwebo 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommerciale 1.0 Generico"@it .
<http://creativecommons.org/licenses/nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NonCommercial 1.0 Generic"@ur .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/nc/1.0/')))
    ND_NC_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@lt .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@kk .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas de Modification - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SinDerivadas-NoComercial 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Keine Bearbeitung-Nicht-kommerziell 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "GeenAfleidings-NieKommersieel 1.0 Generies"@af .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA-\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05D0 \u05DE\u05E1\u05D7\u05E8\u05D9 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@ast .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SemDerivados - N\u00E3oComercial 1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nemain\u012Bts-Nekomerci\u0101ls 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4\u2013\u10D0\u10E0\u10D0\u10D9\u10DD\u10DB\u10D4\u10E0\u10EA\u10D8\u10E3\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1\u10D0\u10D7\u10D5\u10D8\u10E1 1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "IngaBearbetningar-IckeKommersiell 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SinDerivadas-NoComercial 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@uk .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas de Modification - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoOpereDerivate-NonCommerciale 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "GeenAfgeleideWerken-NietCommercieel 1.0 Unported"@nl .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 - \u039C\u03B7 \u0395\u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE \u03A7\u03C1\u03AE\u03C3\u03B7 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u6539\u5909\u7981\u6B62 - \u975E\u55B6\u5229 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SenseObraDerivada-NoComercial 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/nd-nc/1.0/legalcode> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0644\u0627 \u0627\u0634\u062A\u0642\u0627\u0642- \u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A 1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@ga .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://creativecommons.org/ns#deprecatedOn> "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@az .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "IngenBearbeidelse-Ikkekommersiell 1.0 Generisk"@no .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B - \u0578\u0579-\u0561\u057C\u0587\u057F\u0580\u0561\u0575\u056B\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 1.0 Generic"@hy .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0441\u0438\u0430\u043B\u043D\u043E 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SenObraDerivada-NonComercial 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@fa .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://creativecommons.org/ns#prohibits> <http://creativecommons.org/ns#CommercialUse> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/nd-nc/1.0/88x31.png> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E44\u0E21\u0E48\u0E41\u0E01\u0E49\u0E44\u0E02\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07-\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@st .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "KeineBearbeitung-NichtKommerziell 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "TanpaTurunan-NonKomersial 1.0 Generik"@id .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Brez predelav-Nekomercialno 1.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "TiadaTerbitan-BukanKomersial 1.0 Umum"@ms .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Bez prerada-nekomercijalno 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7981\u6B62\u6539\u4F5C-\u975E\u5546\u696D\u6027 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@ml .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@be .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "IngenBearbejdelse-IkkeKommerciel 1.0 Generisk"@da .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@ta .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas-Uso N\u00E3o-Comercial 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nezasahujte do d\u00EDla-Nevyu\u017E\u00EDvejte d\u00EDlo komer\u010Dn\u011B 1.0 Generic"@cs .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "F\u0103r\u0103Modific\u0103ri-Necomercial 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "KeineBearbeitung-NichtKommerziell 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@te .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial (\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u2014 \u041D\u0435\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435) 1.0 Generic"@ru .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Nemodifite-Nekomerce 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SinDerivadas-NoComercial 1.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "LanEratorririkGabe-EzKomertziala 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7981\u6B62\u6539\u4F5C-\u975E\u5546\u696D\u6027 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@mn .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "${NoDerivs-NonCommercial} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Ne v\u00E1ltoztasd! - Ne add el! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoOpereDerivate-NonCommerciale 1.0 Generico"@it .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas de Modification - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Vedada a cria\u00E7\u00E3o de obras derivadas-Uso n\u00E3o-comercial 1.0 Generic"@pt-br .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "No Derivadas-No Comercial 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@en .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\uBCC0\uACBD\uAE08\uC9C0-\uBE44\uC601\uB9AC 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0411\u0435\u0437\u0418\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0414\u0435\u043B\u0430-\u041D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0438\u0458\u0430\u043B\u043D\u043E 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@hi .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Chung"@vi .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-Gayriticari 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/identifier> "nd-nc" .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "T\u0161e sa Fetolwego - E sego t\u0161a Kgwebo 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Mitte\u00E4riline eesm\u00E4rk + Tuletatud teoste keeld 1.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Ungasuseli lutho kulokhu-Ungayisebenziseli Ezentengiselwano 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@ur .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas de Modification - Pas d'Utilisation Commerciale 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@is .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Ei muutoksia-Ep\u00E4kaupallinen 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Bez utwor\u00F3w zale\u017Cnych-U\u017Cycie niekomercyjne 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7981\u6B62\u6F14\u7ECE-\u975E\u5546\u4E1A\u6027\u4F7F\u7528 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@as .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "Bez prerada-Nekomercijalno 1.0 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs-NonCommercial 1.0 Generic"@bn .
<http://creativecommons.org/licenses/nd-nc/1.0/> <http://purl.org/dc/elements/1.1/title> "SinObraDerivada-NoComercial 1.0 Gen\u00E9rica"@es-pe .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/nd-nc/1.0/')))
    ND_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E44\u0E21\u0E48\u0E14\u0E31\u0E14\u0E41\u0E1B\u0E25\u0E07 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u038C\u03C7\u03B9 \u03A0\u03B1\u03C1\u03AC\u03B3\u03C9\u03B3\u03B1 \u0388\u03C1\u03B3\u03B1 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "${NoDerivs} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Ungasuseli lutho kulokhu 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/nd/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/nd/1.0/legalcode> .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoOpereDerivate 1.0 Generico"@it .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "SenseObraDerivada 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@fa .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Bez prerada 1.0 Generi\u010Dka licenca"@sr-Latn .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Be i\u0161vedini\u0173 1.0 Generic"@lt .
<http://creativecommons.org/licenses/nd/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "SinDerivadas 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\uBCC0\uACBD\uAE08\uC9C0 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7981\u6B62\u6539\u4F5C 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "TiadaTerbitan 1.0 Umum"@ms .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@is .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u6539\u5909\u7981\u6B62 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u0438 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/identifier> "nd" .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas de modification 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D2\u10D0\u10D3\u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DC\u10D0\u10EC\u10D0\u10E0\u10DB\u10DD\u10D4\u10D1\u10D8\u10E1 \u10E8\u10D4\u10E5\u10DB\u10DC\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4 1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7981\u6B62\u6F14\u7ECE 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "GeenAfgeleideWerken 1.0 Unported"@nl .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "IngenBearbejdelse 1.0 Generisk"@da .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0411\u0435\u0437 \u043F\u0440\u0435\u0440\u0430\u0434\u0430 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@ast .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "T\u0161e sa fetolwego 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "TanpaTurunan 1.0 Generik"@id .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Nezasahujte do d\u00EDla 1.0 Generic"@cs .
<http://creativecommons.org/licenses/nd/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@en .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Sin Obra Derivada 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/nd/1.0/> <http://creativecommons.org/ns#deprecatedOn> "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "SinObrasDerivadas 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "SemDerivados 1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@st .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Ne v\u00E1ltoztasd! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "KeineBearbeitung 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@mn .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "KeineBearbeitung 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@te .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@ur .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@as .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Bez prerada 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "IngenBearbeidelse 1.0 Generisk"@no .
<http://creativecommons.org/licenses/nd/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/nd/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/nd/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas de modification 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "SinDerivadas 1.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Sin Obra Derivada 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0644\u0627 \u0627\u0634\u062A\u0642\u0627\u0642 1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Nav atvasin\u0101jumu 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0411\u0435\u0437\u0418\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0414\u0435\u043B\u0430 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Nemodifite 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "SinDerivadas 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@ml .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Ei muutoksia 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@uk .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "GeenAfleidings 1.0 Generies"@af .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7981\u6B62\u6539\u4F5C 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@hi .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "SinObraDerivada 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Vedada a cria\u00E7\u00E3o de obras derivadas 1.0 Generic"@pt-br .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "No Derivadas 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "T\u00FCretilemez 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "IngaBearbetningar 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas de Modification 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Pas de modification 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoOpereDerivate 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Kh\u00F4ng Ph\u00E1i sinh 1.0 Chung"@vi .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "LanEratorririkGabe 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "F\u0103r\u0103Modific\u0103ri 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "SinObraDerivada 1.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574 \u0561\u057C\u0561\u0576\u0581 \u057E\u0565\u0580\u0561\u0583\u0578\u056D\u0578\u0582\u0574\u0576\u0565\u0580\u056B 1.0 Generic"@hy .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "SenObraDerivada 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/nd/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@az .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@ta .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@ga .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Keine Bearbeitung 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Tuletatud teoste keeld  1.0 \u00DCldine"@et .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0411\u0435\u0437 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439(<i>NoDerivs</i>) 1.0 Generic"@ru .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@be .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0422\u0423\u044B\u043D\u0434\u044B\u0441\u044B\u0437 1.0 Generic"@kk .
<http://creativecommons.org/licenses/nd/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/nd/1.0/88x31.png> .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Proibi\u00E7\u00E3o de realiza\u00E7\u00E3o de Obras Derivadas 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Bez utwor\u00F3w zale\u017Cnych 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "NoDerivs 1.0 Generic"@bn .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "SinObraDerivada 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05D0\u05D9\u05E1\u05D5\u05E8 \u05D9\u05E6\u05D9\u05E8\u05D5\u05EA \u05E0\u05D2\u05D6\u05E8\u05D5\u05EA 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/nd/1.0/> <http://purl.org/dc/elements/1.1/title> "Brez predelav 1.0 Generi\u010Dna"@sl .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/nd/1.0/')))
    PUBLICDOMAIN = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@es .
<http://creativecommons.org/licenses/publicdomain/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Javni domen"@sr-Latn .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@es-pe .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Voln\u00E1 d\u00EDla"@cs .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain (gemeinfreie oder nicht-sch\u00FCtzbare Inhalte)"@de .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@fr-ca .
<http://creativecommons.org/licenses/publicdomain/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Buleget\u0161e Set\u0161haba"@nso .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@es-cl .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@en .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Pubblico Dominio"@it-ch .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\uD37C"@ko .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@no .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@uk .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@fi .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Domini P\u00FAblic"@ca .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Vie\u0161o naudojimo"@lt .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@az .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dom\u00EDnio P\u00FAblico"@pt-br .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Vabas kasutuses olev teos"@et .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "K\u00F6zkincs"@hu .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u0D2A\u0D4A\u0D24\u0D41\u0D38\u0D1E\u0D4D\u0D1A\u0D2F\u0D02"@ml .
<http://creativecommons.org/licenses/publicdomain/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/publicdomain/80x15.png> .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@si-lk .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u062D\u0648\u0632\u0647 \u0639\u0645\u0648\u0645\u06CC"@fa .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@is .
<http://creativecommons.org/licenses/publicdomain/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/publicdomain/> .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Ukunikezela Emphakathini"@zu .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@de-ch .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "P\u00EBrkat\u00EBsi Publike"@sq .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@de-at .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u0627\u0644\u0645\u0644\u0643\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0629"@ar .
<http://creativecommons.org/licenses/publicdomain/> <http://creativecommons.org/ns#deprecatedOn> "2010-10-05"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u10E1\u10D0\u10EF\u10D0\u10E0\u10DD \u10DB\u10E4\u10DA\u10DD\u10D1\u10D4\u10DA\u10DD\u10D1\u10D0"@ka .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@es-ar .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u0408\u0430\u0432\u0435\u043D \u0434\u043E\u043C\u0435\u043D"@mk .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@da .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Domain Umum"@id .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dom\u00EDnio P\u00FAblico"@pt-pt .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u0408\u0430\u0432\u043D\u0438 \u0434\u043E\u043C\u0435\u043D"@sr .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@es-co .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@as .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@es-es .
<http://creativecommons.org/licenses/publicdomain/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u0413\u0440\u0430\u043C\u0430\u0434\u0441\u043A\u0456 \u0437\u0434\u0430\u0431\u044B\u0442\u0430\u043A"@be .
<http://creativecommons.org/licenses/publicdomain/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Javna domena"@sl .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u0394\u03B7\u03BC\u03CC\u03C3\u03B9\u03BF\u03C2 \u03A4\u03BF\u03BC\u03AD\u03B1\u03C2"@el .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u516C\u5171\u9818\u57DF"@zh-hk .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u516C\u5171\u9886\u57DF"@zh .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Domeniul Public"@ro .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@mn .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@en-hk .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u0430 \u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043E\u0441\u0442"@bg .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Domaine public"@fr .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Pubblico Dominio"@it .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Ph\u1EA1m vi c\u00F4ng ch\u00FAng"@vi .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u516C\u5171\u9818\u57DF"@zh-tw .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Kamu Mal\u0131"@tr .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@es-mx .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u30D1\u30D6\u30EA\u30C3\u30AF\u30FB\u30C9\u30E1\u30A4\u30F3"@ja .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@en-us .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@ast-es .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Javno dobro"@hr .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u05E0\u05D7\u05DC\u05EA \u05D4\u05DB\u05DC\u05DC"@he .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@ga .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@st .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "${Public Domain}"@x-i18n .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34"@th .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u0C38\u0C3E\u0C30\u0C4D\u0C35\u0C1C\u0C28\u0C40\u0C28\u0C02"@te .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@es-pr .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@fr-lu .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@kk .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dom\u00EDnio P\u00FAblico"@pt .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u516C\u773E\u9818\u57DF"@zh-tw .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@bn .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@en-ca .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@ta .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@ur .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@ast .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/identifier> "publicdomain" .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Openbare Domein"@af .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@en-gb .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@es-gt .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@oci-es .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@sv .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@en-sg .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@gl .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Publiek domein"@nl .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0434\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"@ru .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Eskumen Publikoa"@eu .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Sabiedr\u012Bbas \u012Bpa\u0161ums"@lv .
<http://creativecommons.org/licenses/publicdomain/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/publicdomain/88x31.png> .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Domain awam"@ms .
<http://creativecommons.org/licenses/publicdomain/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/publicdomain/legalcode> .
<http://creativecommons.org/licenses/publicdomain/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Dominio P\u00FAblico"@es-ec .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@hi .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0561\u0576\u0580\u0578\u0582\u0569\u0575\u0561\u0576 \u057D\u0565\u0583\u0561\u056F\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576"@hy .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Public Domain"@fr-ch .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Publika\u0135o"@eo .
<http://creativecommons.org/licenses/publicdomain/> <http://purl.org/dc/elements/1.1/title> "Domena publiczna"@pl .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/publicdomain/')))
    SA_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@mn .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7D99\u627F 1.0 \u4E00\u822C"@ja .
<http://creativecommons.org/licenses/sa/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/sa/1.0/legalcode> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "StessaLicenza 1.0 Generico"@it .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@fa .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 1.0 \u901A\u7528\u7248"@zh-tw .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "DelP\u00E5SammeVilk\u00E5r 1.0 Generisk"@no .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0540\u0561\u0574\u0561\u0576\u0574\u0561\u0576 \u057F\u0561\u0580\u0561\u056E\u0578\u0582\u0574 1.0 Generic"@hy .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 \u0642\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Partage des conditions initiales \u00E0 l'identique 1.0 G\u00E9n\u00E9rique"@fr-ch .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Licenciamiento Rec\u00EDproco 1.0 Gen\u00E9rica"@es-mx .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartirIgual 1.0 Gen\u00E9rica"@es-pr .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Partilha nos termos da mesma licen\u00E7a 1.0 Gen\u00E9rica"@pt-pt .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "GelijkDelen 1.0 Unported"@nl .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@ast .
<http://creativecommons.org/licenses/sa/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@as .
<http://creativecommons.org/licenses/sa/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/sa/1.0/88x31.png> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 1.0 \u672A\u672C\u5730\u5316\u7248\u672C"@zh .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 T\u00EB p\u00EBrgjithshme"@sq .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0414\u0435\u043B\u0438\u0442\u0438 \u043F\u043E\u0434 \u0438\u0441\u0442\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u043C\u0430 1.0 \u0413\u0435\u043D\u0435\u0440\u0438\u0447\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@sr .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "InsgelyksDeel 1.0 Generies"@af .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@lt .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@hi .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Perkongsian serupa 1.0 Umum"@ms .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@is .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@te .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Deliti pod istim uslovima 1.0 Generi\u010Dka licenca"@sr-latn .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Deljenje pod enakimi pogoji 1.0 Generi\u010Dna"@sl .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@st .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@pt-br .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "StessaLicenza 1.0 Generico"@it-ch .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\uB3D9\uC77C\uC870\uAC74\uBCC0\uACBD\uD5C8\uB77D 1.0 \uC77C\uBC18"@ko .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0421 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u0439<br />(<i>ShareAlike</i>) 1.0 Generic"@ru .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@en .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@en-sg .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@ta .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@kk .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0421\u043F\u043E\u0434\u0435\u043B\u0438\u041F\u043E\u0434\u0418\u0441\u0442\u0438\u0423\u0441\u043B\u043E\u0432\u0438 1.0 \u041D\u0435\u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0446\u0430"@mk .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0421\u043F\u043E\u0434\u0435\u043B\u044F\u043D\u0435 \u043D\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u043E\u0442\u043E 1.0 \u041D\u0435\u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0430\u043D"@bg .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartirIgual 1.0 Gen\u00E9rica"@es-pe .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "${ShareAlike} 1.0 ${Generic}"@x-i18n .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Distribuie-\u00EEn-condi\u0163ii-identice 1.0 Generic\u0103"@ro .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u76F8\u540C\u65B9\u5F0F\u5206\u4EAB 1.0 \u901A\u7528\u7248"@zh-hk .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Na tych samych warunkach 1.0 Og\u00F3lny"@pl .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartirIgual 1.0 Gen\u00E9rica"@es .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartirIgual 1.0 Gen\u00E9rica"@es-ec .
<http://creativecommons.org/licenses/sa/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartirIgual 1.0 Gen\u00E9rica"@es-co .
<http://creativecommons.org/licenses/sa/1.0/> <http://creativecommons.org/ns#deprecatedOn> "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Samkondi\u0109e 1.0 \u011Cenerala"@eo .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@oci-es .
<http://creativecommons.org/licenses/sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/licenses/sa/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#ShareAlike> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D6\u05D4\u05D4 1.0 \u05DC\u05D0 \u05DE\u05D5\u05EA\u05D0\u05DD"@he .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@uk .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D2\u10D0\u10D5\u10E0\u10EA\u10D4\u10DA\u10D4\u10D1\u10D0 \u10D8\u10D2\u10D8\u10D5\u10D4 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8\u10D7 1.0 \u10D6\u10DD\u10D2\u10D0\u10D3\u10D8"@ka .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/identifier> "sa" .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartirIgual 1.0 Xen\u00E9rica"@gl .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartilhaIgual 1.0 Gen\u00E9rica"@pt .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@en-gb .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@en-us .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@ast-es .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Zihlanganyeleni 1.0 Engadlulisiwe"@zu .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Lisans\u0131DevamEttirme 1.0 Kapsaml\u0131"@tr .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de-at .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@bn .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@en-ca .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u03A0\u03B1\u03C1\u03CC\u03BC\u03BF\u03B9\u03B1 \u0394\u03B9\u03B1\u03BD\u03BF\u03BC\u03AE 1.0 \u0393\u03B5\u03BD\u03B9\u03BA\u03CC"@el .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Partage \u00E0 l'Identique 1.0 G\u00E9n\u00E9rique"@fr .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartirDerivadasIgual 1.0 Gen\u00E9rica"@es-ar .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de-ch .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Licenciar Igual 1.0 Gen\u00E9rica"@es-cl .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Mohlakanelwa 1.0 E sa feti\u0161wago"@nso .
<http://creativecommons.org/licenses/sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@ml .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Dijeli pod istim uvjetima 1.0 nelokalizirana licenca"@hr .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@ur .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u00CDgy add tov\u00E1bb! 1.0 \u00C1ltal\u00E1nos"@hu .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@en-hk .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@ga .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "DelP\u00E5SammeVilk\u00E5r 1.0 Generisk"@da .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "L\u012Bdzv\u0113rt\u012Bgs 1.0 Visp\u0101r\u012Bgs"@lv .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Partage des conditions initiales \u00E0 l'identique 1.0 G\u00E9n\u00E9rique"@fr-lu .
<http://creativecommons.org/licenses/sa/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@si-lk .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 1.0 \u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"@th .
<http://creativecommons.org/licenses/sa/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "PartekatuBerdin 1.0 Generikoa"@eu .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartirIgual 1.0 Gen\u00E8rica"@ca .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartirIgual 1.0 Gen\u00E9rica"@es-es .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Zachovejte licenci 1.0 Generic"@cs .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Chung"@vi .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "DelaLika 1.0 Generisk"@sv .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "CompartirIgual 1.0 Gen\u00E9rica"@es-gt .
<http://creativecommons.org/licenses/sa/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@az .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "ShareAlike 1.0 Generic"@be .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "BerbagiSerupa 1.0 Generik"@id .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Weitergabe unter gleichen Bedingungen 1.0 US-amerikanisch (nicht portiert)"@de .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Tarttuva 1.0 Raakaversio"@fi .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Partage des conditions initiales \u00E0 l'identique 1.0 G\u00E9n\u00E9rique"@fr-ca .
<http://creativecommons.org/licenses/sa/1.0/> <http://purl.org/dc/elements/1.1/title> "Jagamine samadel tingimustel  1.0 \u00DCldine"@et .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/sa/1.0/')))
    SAMPLING_PLUS_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/sampling+/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/sampling+/1.0/legalcode> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@ro .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@fa .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@hy .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@ta .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@uk .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@fr .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@kk .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Specimeno Plus 1.0"@eo .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10D3\u10D0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10D7\u10D8 \u10DC\u10D8\u10DB\u10E3\u10E8\u10D8 1.0"@ka .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@da .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@es-mx .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@fr-lu .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@te .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Mengambil contoh tambah 1.0"@ms .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "<span lang=\"en\">Sampling Plus</span> 1.0"@it .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@pl .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/sampling+/1.0/88x31.png> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@mn .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@fr-ch .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0421\u0435\u043C\u043F\u043B\u0438\u0440\u0430\u045A\u0435 \u043F\u043B\u0443\u0441 1.0"@mk .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@en-hk .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@hu .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@es-gt .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "${Sampling Plus} 1.0"@x-i18n .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Voorsmaak Plus 1.0"@af .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Iztverot plus 1.0"@lv .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@hi .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@id .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0386\u03B4\u03B5\u03B9\u03B1 \u0394\u03B5\u03AF\u03B3\u03BC\u03B1\u03C4\u03BF\u03C2 Plus 1.0"@el .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@es-es .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@az .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@cs .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@is .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\uC0D8\uD50C\uB9C1 \uD50C\uB7EC\uC2A4 1.0"@ko .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@ast .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sempliranje plus 1.0"@hr .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@ur .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@sl .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampole ya Tlalelet\u0161o 1.0"@nso .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@es-pr .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@eu .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@as .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7279\u5225\u53D6\u6A23 1.0"@zh-tw .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@pt-pt .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@ml .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@en-sg .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u30FB\u30D7\u30E9\u30B9 1.0"@ja .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E43\u0E0A\u0E49\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1E\u0E34\u0E40\u0E28\u0E29 1.0"@th .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@lt .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@en-ca .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@pt-br .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@sq .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@es-pe .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@en-us .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@gl .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@nl .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u043B\u0438\u0446\u0435\u043D\u0446\u0430 Sampling Plus 1.0"@sr .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0646\u0645\u0627\u0630\u062C \u0627\u0636\u0627\u0641\u064A\u0629 1.0"@ar .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u53D6\u6837\u4F7F\u7528\u52A0\u5F3A\u7248 1.0"@zh .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@vi .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@de-at .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@es-co .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@pt .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05D3\u05D2\u05D9\u05DE\u05D4 \u05E4\u05DC\u05D5\u05E1 1.0"@he .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@et .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@si-lk .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@es-ar .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@bn .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://creativecommons.org/ns#deprecatedOn> "2011-09-09"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@ast-es .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@en .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@ca .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@de .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "<span lang=\"en\">Sampling Plus</span> 1.0"@it-ch .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@fr-ca .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Sharing> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@tr .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@es-cl .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@de-ch .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/sampling/> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "S\u00E4mpl\u00E4ys Plus 1.0"@fi .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@sv .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0421\u0435\u043C\u043F\u043B\u0438\u0440\u0430\u043D\u0435 \u043F\u043B\u044E\u0441 1.0"@bg .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@no .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/sampling+/1.0/80x15.png> .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0447\u0430\u0441\u0442\u0435\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F (<i>Sampling Plus</i>) 1.0"@ru .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "licenca Sampling Plus 1.0"@sr-latn .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@en-gb .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/identifier> "sampling+" .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@be .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Ukuthatha Isampula Nokunye 1.0"@zu .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@oci-es .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "\u7279\u5225\u53D6\u6A23 1.0"@zh-hk .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@ga .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@st .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@es .
<http://creativecommons.org/licenses/sampling+/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling Plus 1.0"@es-ec .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/sampling+/1.0/')))
    SAMPLING_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Specimeno 1.0"@eo .
<http://creativecommons.org/licenses/sampling/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u53D6\u6837\u4F7F\u7528 1.0"@zh .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@ast .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Vytv\u00E1\u0159en\u00ED sampl\u016F 1.0"@cs .
<http://creativecommons.org/licenses/sampling/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/license/sampling/> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Valikkasutus 1.0"@et .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@eu .
<http://creativecommons.org/licenses/sampling/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sempliranje 1.0"@hr .
<http://creativecommons.org/licenses/sampling/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@es-ar .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0 1.0"@ja .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0447\u0430\u0441\u0442\u0435\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F (<i>Sampling</i>) 1.0"@ru .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "L\u00E0m m\u1EABu 1.0"@vi .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@ro .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0421\u0435\u043C\u043F\u043B\u0438\u0440\u0430\u045A\u0435 1.0"@mk .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@as .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@es-pe .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "${Sampling} 1.0"@x-i18n .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@sq .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "<span lang=\"en\">Sampling</span> 1.0"@it .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/licenses/sampling/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/licenses/sampling/1.0/legalcode> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling/Echantillonage 1.0"@fr-ca .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "S\u00E4mpl\u00E4ys 1.0"@fi .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0421\u0435\u043C\u043F\u043B\u0438\u0440\u0430\u043D\u0435 1.0"@bg .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@az .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/identifier> "sampling" .
<http://creativecommons.org/licenses/sampling/1.0/> <http://creativecommons.org/ns#deprecatedOn> "2007-06-04"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@nl .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@pt-br .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@es-ec .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@kk .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/creator> <http://creativecommons.org> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@en .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@fa .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@en-hk .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling/Echantillonage 1.0"@fr-ch .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@de-ch .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Ukuthatha isampula 1.0"@zu .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling/Echantillonage 1.0"@fr-lu .
<http://creativecommons.org/licenses/sampling/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Attribution> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "<span lang=\"en\">Sampling</span> 1.0"@it-ch .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\uC0D8\uD50C\uB9C1 1.0"@ko .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u05D3\u05D2\u05D9\u05DE\u05D4 1.0"@he .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@tr .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@si-lk .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@no .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0421\u0435\u043C\u043F\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 1.0"@be .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@de .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@en-gb .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@el .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@ur .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0989\u09A6\u09BE\u09B9\u09B0\u09A8 \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09BF\u09A4 \u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u09B0 \u09AF\u09CB\u0997\u09CD\u09AF 1.0"@bn .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@hy .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@lt .
<http://creativecommons.org/licenses/sampling/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/sampling/1.0/88x31.png> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u53D6\u6A23 1.0"@zh-hk .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@hi .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@id .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@en-us .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@gl .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@es-mx .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@en-sg .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@ta .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u53D6\u6A23 1.0"@zh-tw .
<http://creativecommons.org/licenses/sampling/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/l/sampling/1.0/80x15.png> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@es-gt .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Voorsmaak 1.0"@af .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@ca .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@ga .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@es .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@ml .
<http://creativecommons.org/licenses/sampling/1.0/> <http://creativecommons.org/ns#requires> <http://creativecommons.org/ns#Notice> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0421\u0442\u0432\u0430\u0440\u0430\u045A\u0435 \u0434\u0435\u043B\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0443 \u0443\u0437\u043E\u0440\u043A\u0430 (sampling) 1.0"@sr .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@uk .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Mengambil Contoh 1.0"@ms .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@hu .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@is .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@mn .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@es-co .
<http://creativecommons.org/licenses/sampling/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@ast-es .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@da .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10E1\u10EA\u10D0\u10D3\u10D4\u10D7 1.0"@ka .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@pt-pt .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampole 1.0"@nso .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@sv .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@pt .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@oci-es .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@st .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Iztver\u0161ana 1.0"@lv .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@en-ca .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0627\u0644\u0639\u064A\u0646\u0627\u062A 1.0"@ar .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@pl .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@te .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Vzor\u010Denje (sampling) 1.0"@sl .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@es-cl .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@es-pr .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u00C9chantillonnage 1.0"@fr .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0E43\u0E0A\u0E49\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 1.0"@th .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@es-es .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Sampling 1.0"@de-at .
<http://creativecommons.org/licenses/sampling/1.0/> <http://purl.org/dc/elements/1.1/title> "Stvaranje dela na osnovu uzorka (sampling) 1.0"@sr-Latn .

''', format='nt').resource(URIRef('http://creativecommons.org/licenses/sampling/1.0/')))
    MARK_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@he .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Oznaka javnog dobra 1.0"@hr .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "${Public Domain Mark} 1.0"@x-i18n .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@en .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@de-at .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "\u516C\u773E\u9818\u57DF\u6A19\u8A8C 1.0"@zh-tw .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@kk .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@zu .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@hu .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@be .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@af .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@is .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@bn .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain-merket 1.0"@no .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/choose/mark/> .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@en-sg .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@fr-ch .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@es-cl .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@es-mx .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@cs .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@es-es .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Sabiedr\u012Bbas \u012Bpa\u0161uma iez\u012Bme 1.0"@lv .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@de .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@id .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@it-ch .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@sl .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@ru .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@ms .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain -merkki 1.0"@fi .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@fa .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@pt-pt .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@hi .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/identifier> "mark" .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Kamuya A\u00E7\u0131k Eser \u0130\u015Fareti 1.0"@tr .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@hy .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@sv .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@zh .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@de-ch .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@es-pr .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@vi .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Publika\u0135a Marko 1.0"@eo .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Marca\u00E7\u00E3o de Dom\u00EDnio P\u00FAblico 1.0"@pt .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@en-us .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@nl .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@es-ec .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/p/mark/1.0/80x15.png> .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "\u516C\u5171\u9818\u57DF\u6A19\u8A8C 1.0"@zh-tw .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@te .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@si-lk .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/publicdomain/zero/1.0/legalcode> .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@sr-Latn .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@en-gb .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "\u516C\u5171\u9818\u57DF\u6A19\u8A8C 1.0"@zh-hk .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@mk .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/p/mark/1.0/88x31.png> .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u062C\u0627\u0644 \u0627\u0644\u0639\u0627\u0645 1.0"@ar .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@sr .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "\u10E1\u10D0\u10D6\u10DD\u10D2\u10D0\u10D3\u10DD\u10D4\u10D1\u10E0\u10D8\u10D5\u10D8 \u10E1\u10D0\u10D9\u10E3\u10D7\u10E0\u10D4\u10D1\u10D8\u10E1 \u10DC\u10D8\u10E8\u10D0\u10DC\u10D8 1.0"@ka .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@oci-es .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@ast-es .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@pt-br .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@ast .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@es-ar .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@uk .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@ga .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@bg .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@gl .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Shenj\u00EB P\u00EBrkat\u00EBsie Publike 1.0"@sq .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@ja .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@es-co .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Marca de Domini P\u00FAblic 1.0"@ca .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@ro .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@es-gt .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "\u03A3\u03AE\u03BC\u03B1 \u0394\u03B7\u03BC\u03CC\u03C3\u03B9\u03BF\u03C5 \u03A4\u03BF\u03BC\u03AD\u03B1 1.0"@el .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@az .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "\uACF5\uAC1C \uB9C8\uD06C 1.0"@ko .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@fr-ca .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@th .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Vabas kasutuses oleva teose m\u00E4rgend 1.0"@et .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@en-ca .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@nso .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@as .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@ta .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "marque du domaine public 1.0"@fr .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Marchio di pubblico dominio 1.0"@it .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@en-hk .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Oznaczenie domeny publicznej 1.0"@pl .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain markeret 1.0"@da .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@ur .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@es-pe .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Registro de Dom\u00EDnio P\u00FAblico 1.0"@pt-br .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@mn .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@ml .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@fr-lu .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@eu .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Etiqueta de Dominio P\u00FAblico 1.0"@es .
<http://creativecommons.org/publicdomain/mark/1.0/> <http://purl.org/dc/elements/1.1/title> "Public Domain Mark 1.0"@lt .

''', format='nt').resource(URIRef('http://creativecommons.org/publicdomain/mark/1.0/')))
    CC0_1_0 = License.from_rdf(Graph().parse(data=r'''<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@ja .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@fr-ca .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@es .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@es-pr .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \uBCF4\uD3B8\uC801\uC778"@ko .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Univers\u0101ls"@lv .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@cs .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@az .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universell"@de .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@en-ca .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u10E3\u10DC\u10D8\u10D5\u10D4\u10E0\u10E1\u10D0\u10DA\u10E3\u10E0\u10D8"@ka .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Distribution> .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@ml .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@es-mx .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@es-cl .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@zu .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@sl .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/terms/hasVersion> "1.0" .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@en-hk .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@ta .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@en-gb .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u00DCldine"@et .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@en-sg .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 universel"@fr .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u901A\u7528"@zh-tw .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@kk .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Evrensel"@tr .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@it-ch .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universeel"@nl .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@it .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u901A\u7528"@zh-hk .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@ast .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 util.Universal"@st .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@ms .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@ga .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universala"@eo .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@es-ar .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universelt"@da .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Univerzalna"@sr-Latn .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@hu .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u062C\u0647\u0627\u0646\u06CC"@fa .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@no .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@ro .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@pt-br .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@th .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@es-gt .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@eu .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@uk .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@ur .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@as .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 ${Universal}"@x-i18n .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@es-pe .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@lt .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u0639\u0627\u0645"@ar .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@de-at .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/p/zero/1.0/80x15.png> .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@sv .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Univerzalno"@hr .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@fr-ch .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://xmlns.com/foaf/0.1/logo> <http://i.creativecommons.org/p/zero/1.0/88x31.png> .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@af .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u0423\u043D\u0438\u0432\u0435\u0440\u0437\u0430\u043B\u043D\u0430"@sr .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u0430\u044F"@ru .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@pt-pt .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@gl .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@mn .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@is .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@id .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@nso .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@bg .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 To\u00E0n c\u1EA7u"@vi .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@be .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@es-es .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@pt .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@es-ec .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u03A0\u03B1\u03B3\u03BA\u03CC\u03C3\u03BC\u03B9\u03B1"@el .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@mk .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://creativecommons.org/ns#License> .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@he .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://creativecommons.org/ns#legalcode> <http://creativecommons.org/publicdomain/zero/1.0/legalcode> .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universale"@sq .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u09B8\u09BE\u09B0\u09CD\u09AC\u099C\u09A8\u09C0\u09A8"@bn .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/identifier> "CC0" .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 \u0C35\u0C3F\u0C36\u0C4D\u0C35\u0C35\u0C4D\u0C2F\u0C3E\u0C2A\u0C4D\u0C24\u0C02"@te .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@hi .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@ca .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@en .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@oci-es .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://creativecommons.org/ns#licenseClass> <http://creativecommons.org/choose/zero/> .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@es-co .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@si-lk .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 uniwersalna"@pl .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#Reproduction> .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@ast-es .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.paradicms.org/ns#License> .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@hy .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@de-ch .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@en-us .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Yleismaailmallinen"@fi .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://creativecommons.org/ns#permits> <http://creativecommons.org/ns#DerivativeWorks> .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@fr-lu .
<http://creativecommons.org/publicdomain/zero/1.0/> <http://purl.org/dc/elements/1.1/title> "CC0 1.0 Universal"@zh .

''', format='nt').resource(URIRef('http://creativecommons.org/publicdomain/zero/1.0/')))
