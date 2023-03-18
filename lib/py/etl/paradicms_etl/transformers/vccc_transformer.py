from typing import Optional

from paradicms_etl.models.collection import Collection
from paradicms_etl.transformers.costume_core_omeka_classic_transformer import (
    CostumeCoreOmekaClassicTransformer,
)


class VcccTransformer(CostumeCoreOmekaClassicTransformer):
    def __init__(self, **kwds):
        CostumeCoreOmekaClassicTransformer.__init__(
            self,
            fullsize_max_height_px=600,
            fullsize_max_width_px=600,
            square_thumbnail_height_px=150,
            square_thumbnail_width_px=150,
            thumbnail_max_height_px=200,
            thumbnail_max_width_px=200,
            **kwds
        )

    def _transform_collection(
        self, *, omeka_collection, **kwds
    ) -> Optional[Collection]:
        if not omeka_collection["url"].endswith("/collections/1"):
            return None  # Ignore all but  the "Costumes and Textiles" collection
        return CostumeCoreOmekaClassicTransformer._transform_collection(
            self, omeka_collection=omeka_collection, **kwds
        )

    def _transform_file(self, **kwds):
        return tuple(
            image.replace(copyable=False)
            for image in CostumeCoreOmekaClassicTransformer._transform_file(
                self, **kwds
            )
        )
