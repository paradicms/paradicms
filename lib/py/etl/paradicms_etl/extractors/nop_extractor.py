def nop_extractor(**kwds):
    """
    Extractor that returns nothing, used as a placeholder in pipelines that generate data (like the TestDataPipeline)
    rather than extracting it from an existing source.
    """

    return {}
