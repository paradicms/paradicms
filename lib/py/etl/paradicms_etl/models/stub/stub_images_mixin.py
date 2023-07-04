from paradicms_etl.models.images_mixin import ImagesMixin


class StubImagesMixin(ImagesMixin):
    @property
    def image_uris(self):
        return ()
