from paradicms_etl._loader import _Loader


class CollectingLoader(_Loader):
    def load(self, *, models, **kwds):
        return tuple(models)
