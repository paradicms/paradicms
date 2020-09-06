from paradicms_etl.loaders._buffering_loader import _BufferingLoader


class CollectingLoader(_BufferingLoader):
    def _flush(self, models):
        return models
