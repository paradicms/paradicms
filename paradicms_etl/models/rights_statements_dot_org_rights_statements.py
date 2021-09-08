# -*- coding: utf-8 -*-

import rdflib.term

from paradicms_etl.models._model_singletons import _ModelSingletons
from paradicms_etl.models.rights_statement import RightsStatement


class RightsStatementsDotOrgRightsStatements(_ModelSingletons):
    _MODEL_CLASS = RightsStatement

    CNE = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/CNE/1.0/"),
        identifier="CNE",
        pref_label="Copyright Not Evaluated",
        definition="The copyright and related rights status of this Item has not been evaluated.\n\n  Please refer to the organization that has made the Item available for more information.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
        description="This Rights Statement indicates that the organization that has published the Item has not evaluated the copyright and related rights status of the Item.",
        notes=(
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        ),
        scope_note="This Rights Statement should be used for Items for which the copyright status is unknown and for which the organization that intends to make the Item available has not undertaken an effort to determine the copyright status of the underlying Work.",
    )

    InC_EDU = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/InC-EDU/1.0/"),
        identifier="InC-EDU",
        pref_label="In Copyright - Educational Use Permitted",
        definition="This Item is protected by copyright and/or related rights.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use. In addition, no permission is required from the rights-holder(s) for educational uses.\n\n  For other uses, you need to obtain permission from the rights-holder(s).",
        description="This Rights Statement indicates that the Item labeled with this Rights Statement is in copyright but that educational use is allowed without the need to obtain additional permission.",
        notes=(
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        ),
        scope_note="This Rights Statement can be used only for copyrighted Items for which the organization making the Item available is the rights-holder or has been explicitly authorized by the rights-holder(s) to allow third parties to use their Work(s) for educational purposes without first obtaining permission.",
    )

    InC_NC = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/InC-NC/1.0/"),
        identifier="InC-NC",
        pref_label="In Copyright - Non-Commercial Use Permitted",
        definition="This Item is protected by copyright and/or related rights.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use. In addition, no permission is required from the rights-holder(s) for non-commercial uses.\n\n  For other uses you need to obtain permission from the rights-holder(s).",
        description="This Rights Statement indicates that the Item labeled with this Rights Statement is in copyright but that non-commercial use is allowed without the need to obtain additional permission.",
        notes=(
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
        ),
        scope_note="This Rights Statement can be used only for copyrighted Items for which the organization making the Item available is the rights-holder or has been explicitly authorized by the rights-holder(s) to allow third parties to use their Work(s) for non-commercial purposes without obtaining permission first.",
    )

    InC_OW_EU = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/InC-OW-EU/1.0/"),
        identifier="InC-OW-EU",
        pref_label="In Copyright - EU Orphan Work",
        definition="This Item has been identified as an orphan work in the country of first publication and in line with Directive 2012/28/EU of the European Parliament and of the Council of 25 October 2012 on certain permitted uses of orphan works.\n\n  For this Item, either (a) no rights-holder(s) have been identified or (b) one or more rights-holder(s) have been identified but none have been located even though a diligent search for the rights-holder(s) has been conducted. The results of the diligent search are available in the EU Orphan Works Database.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
        description="This Rights Statement indicates that the Item labeled with this Rights Statement has been identified as an ‘Orphan Work’ under the terms of the EU Orphan Works Directive.",
        notes=(
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
            "If you have any information that can contribute to identifying or locating the rights-holder(s), please notify the organization that has made the Item available.",
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        ),
        scope_note="This Rights Statement is intended for use with Items for which the underlying Work has been identified as an Orphan Work in accordance with Directive 2012/28/EU of the European Parliament and of the Council of 25 October 2012 on certain permitted uses of Orphan Works. It can only be applied to Items derived from Works that are covered by the Directive: Works published in the form of books, journals, newspapers, magazines or other writings as well as cinematographic or audiovisual works and phonograms (note: this excludes photography and visual arts). It can only be applied by organizations that are beneficiaries of the Directive: publicly accessible libraries, educational establishments and museums, archives, film or audio heritage institutions and public-service broadcasting organizations, established in one of the EU member states. The beneficiary is also expected to have registered the work in the EU Orphan Works Database maintained by EUIPO.",
    )

    InC_RUU = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/InC-RUU/1.0/"),
        identifier="InC-RUU",
        pref_label="In Copyright - Rights-holder(s) Unlocatable or Unidentifiable",
        definition="This Item is protected by copyright and/or related rights. However, for this Item, either (a) no rights-holder(s) have been identified or (b) one or more rights-holder(s) have been identified but none have been located.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
        description="This Rights Statement indicates that the Item labeled with this Rights Statement has been identified as in copyright, but its rights-holder(s) either cannot be identified or cannot be located.",
        notes=(
            "If you have any information that can contribute to identifying or locating the rights-holder(s) please notify the organization that has made the Item available.",
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
        ),
        scope_note="This Rights Statement is intended for use with an Item that has been identified as in copyright but for which no rights-holder(s) has been identified or located after some reasonable investigation. This Rights Statement should only be used if the organization that intends to make the Item available is reasonably sure that the underlying Work is in copyright. This Rights Statement is not intended for use by EU-based organizations who have identified works as Orphan Works in accordance with the EU Orphan Works Directive (they must use InC-OW-EU instead).",
    )

    InC = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/InC/1.0/"),
        identifier="InC",
        pref_label="In Copyright",
        definition="This Item is protected by copyright and/or related rights.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.\n\n  For other uses you need to obtain permission from the rights-holder(s).",
        description="This Rights Statement indicates that the Item labeled with this Rights Statement is in copyright.",
        notes=(
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        ),
        scope_note="This Rights Statement can be used for an Item that is in copyright. Using this statement implies that the organization making this Item available has determined that the Item is in copyright and either is the rights-holder, has obtained permission from the rights-holder(s) to make their Work(s) available, or makes the Item available under an exception or limitation to copyright (including Fair Use) that entitles it to make the Item available.",
    )

    NKC = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/NKC/1.0/"),
        identifier="NKC",
        pref_label="No Known Copyright",
        definition="The organization that has made the Item available reasonably believes that the Item is not restricted by copyright or related rights, but a conclusive determination could not be made.\n\n  Please refer to the organization that has made the Item available for more information.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
        description="This Rights Statement indicates that the organization that has published the Item believes that no copyright or related rights are known to exist for the Item, but that a conclusive determination could not be made.",
        notes=(
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        ),
        scope_note="This Rights Statement should be used for Items for which the copyright status has not been determined conclusively, but for which the organization that intends to make the Item available has reasonable cause to believe that the underlying Work is not covered by copyright or related rights anymore. This Rights Statement should not be used for Orphan Works (which are assumed to be in-copyright) or for Items where the organization that intends to make the Item available has not undertaken an effort to ascertain the copyright status of the underlying Work.",
    )

    NoC_CR = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/NoC-CR/1.0/"),
        identifier="NoC-CR",
        pref_label="No Copyright - Contractual Restrictions",
        definition="Use of this Item is not restricted by copyright and/or related rights.\n\n  As part of the acquisition or digitization of this Work, the organization that has made the Item available is contractually required to limit the use of this Item. Limitations may include, but are not limited to, privacy issues, cultural protections, digitization agreements or donor agreements.\n\n  Please refer to the organization that has made the Item available for more information.",
        description="This Rights Statement indicates that the underlying Work is in the Public Domain, but the organization that has published the Item is contractually required to restrict certain forms of use by third parties.",
        notes=(
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
        ),
        scope_note="This Rights Statement can only be used for Items that are in the Public Domain but for which the organization that intends to make the Item available has entered into contractual agreement that requires it to take steps to restrict third party uses of the Item. In order for this Rights Statement to be conclusive, the organization that intends to make the Item available should provide a link to a page detailing the contractual restrictions that apply to the use of the Item.",
    )

    NoC_NC = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/NoC-NC/1.0/"),
        identifier="NoC-NC",
        pref_label="No Copyright - Non-Commercial Use Only",
        definition="This Work has been digitized in a public-private partnership. As part of this partnership, the partners have agreed to limit commercial uses of this digital representation of the Work by third parties.\n\n  You can, without permission, copy, modify, distribute, display, or perform the Item, for non-commercial uses. For any other permissible uses, please review the terms and conditions of the organization that has made the Item available.",
        description="This Rights Statement indicates that the underlying Work is in the Public Domain, but the organization that has published the Item is contractually required to allow only non-commercial use by third parties.",
        notes=(
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you may use the material.",
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
        ),
        scope_note="This Rights Statement can only be used for Works that are in the Public Domain and have been digitized in a public-private partnership as part of which, the partners have agreed to limit commercial uses of this digital representation of the Work by third parties. It has been developed specifically to allow the inclusion of Works that have been digitized as part of the partnerships between European Libraries and Google, but can in theory be applied to Items that have been digitized in similar public-private partnerships.",
    )

    NoC_OKLR = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/NoC-OKLR/1.0/"),
        identifier="NoC-OKLR",
        pref_label="No Copyright - Other Known Legal Restrictions",
        definition="Use of this Item is not restricted by copyright and/or related rights.\n\n  In one or more jurisdictions, laws other than copyright are known to impose restrictions on the use of this Item.\n\n  Please refer to the organization that has made the Item available for more information.",
        description="This Rights Statement indicates that the underlying Work is in the Public Domain, but that there are known restrictions imposed by laws other than copyright and/or related rights on the use of the Item by third parties.",
        notes=(
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        ),
        scope_note="This Rights Statement should be used for Items that are in the Public Domain but that cannot be freely re-used as the consequence of known legal restrictions that prevent the organization that intends to make the Item available from allowing free re-use of the Item, such as cultural heritage or traditional cultural expression protections. In order for this Rights Statement to be conclusive, the organization that intends to make the Item available should provide a link to a page detailing the legal restrictions that limit re-use of the Item.",
    )

    NoC_US = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/NoC-US/1.0/"),
        identifier="NoC-US",
        pref_label="No Copyright - United States",
        definition="The organization that has made the Item available believes that the Item is in the Public Domain under the laws of the United States, but a determination was not made as to its copyright status under the copyright laws of other countries. The Item may not be in the Public Domain under the laws of other countries.\n\n  Please refer to the organization that has made the Item available for more information.",
        description="This Rights Statement indicates that the Item is in the Public Domain under the laws of the United States, but that a determination was not made as to its copyright status under the copyright laws of other countries.",
        notes=(
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
        ),
        scope_note="This Rights Statement should be used for Items for which the organization that intends to make the Item available has determined are free of copyright under the laws of the United States. This Rights Statement should not be used for Orphan Works (which are assumed to be in-copyright) or for Items where the organization that intends to make the Item available has not undertaken an effort to ascertain the copyright status of the underlying Work.",
    )

    UND = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/UND/1.0/"),
        identifier="UND",
        pref_label="Copyright Undetermined",
        definition="The copyright and related rights status of this Item has been reviewed by the organization that has made the Item available, but the organization was unable to make a conclusive determination as to the copyright status of the Item.\n\n  Please refer to the organization that has made the Item available for more information.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
        description="This Rights Statement indicates that the organization that has made the Item available has reviewed the copyright and related rights status of the Item, but was unable to determine the copyright status of the Item.",
        notes=(
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
        ),
        scope_note="This Rights Statement should be used for Items for which the copyright status is unknown and for which the organization that has made the Item available has undertaken an (unsuccessful) effort to determine the copyright status of the underlying Work. Typically, this Rights Statement is used when the organization is missing key facts essential to making an accurate copyright status determination.",
    )

    collection_ic = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/collection-ic/1.0/"),
        identifier="collection-ic",
        pref_label="Statements for works that are in copyright",
        definition=None,
        description=None,
        notes=(),
        scope_note=None,
    )

    collection_nc = RightsStatement.from_fields(
        uri=rdflib.term.URIRef("http://rightsstatements.org/vocab/collection-nc/1.0/"),
        identifier="collection-nc",
        pref_label="Statements for works that are not in copyright",
        definition=None,
        description=None,
        notes=(),
        scope_note=None,
    )

    collection_other = RightsStatement.from_fields(
        uri=rdflib.term.URIRef(
            "http://rightsstatements.org/vocab/collection-other/1.0/"
        ),
        identifier="collection-other",
        pref_label="Statements for works where the copyright status is unclear",
        definition=None,
        description=None,
        notes=(),
        scope_note=None,
    )
