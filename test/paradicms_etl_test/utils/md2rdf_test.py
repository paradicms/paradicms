from paradicms_etl.utils.md2rdf import md2rdf
from paradicms_etl.utils.string_utils import is_uri, sanitize_method_name


def test_md2rdf():
    MD = """\
---
title:  "Test title"
date:   2021-03-20
---

### [Description](#description)
Some *description text*

Further description text
# [Label](#label)
Some label _text_
"""

    md2rdf(MD)
