from paradicms_etl.utils.markdown_to_rdf_converter import MarkdownToRdfConverter


def test_convert():
    MD = """\
---
title:  "Test title"
date:   2021-03-20
---

Some *label* text

### [](#description)
Some **description text**

Further description ***text***

# [](#comment)
Some comment _text_ including a [link](/comment/link)

    Code here
"""

    MarkdownToRdfConverter.convert(MD)
