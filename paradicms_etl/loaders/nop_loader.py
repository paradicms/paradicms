from paradicms_etl._loader import _Loader


class NopLoader(_Loader):
    def load(self, *, models):
        # Iterate over models to exhaust the generator
        for _ in models:
            pass
