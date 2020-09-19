from paradicms_etl._loader import _Loader


class NopLoader(_Loader):
    def load(self, *args, **kwds):
        pass
