from paradicms_etl.loaders.buffering_loader import BufferingLoader


class CollectingLoader(BufferingLoader):
    def _flush(self, models):
        return models
