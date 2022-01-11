from paradicms_etl.loader import Loader


class NopLoader(Loader):
    def load(self, *, models):
        # Iterate over models to exhaust the generator
        for _ in models:
            pass
