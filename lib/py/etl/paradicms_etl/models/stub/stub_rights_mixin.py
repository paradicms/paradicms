from paradicms_etl.models.rights_mixin import RightsMixin


class StubRightsMixin(RightsMixin):
    @property
    def contributors(self):
        return ()

    @property
    def creators(self):
        return ()

    @property
    def licenses(self):
        return ()

    @property
    def rights_holders(self):
        return ()

    @property
    def rights_statements(self):
        return ()
