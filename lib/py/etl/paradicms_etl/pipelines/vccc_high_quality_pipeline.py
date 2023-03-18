from pathlib import Path
from typing import Optional

from paradicms_etl.extractors.omeka_classic_extractor import OmekaClassicExtractor
from paradicms_etl.loader import Loader
from paradicms_etl.pipeline import Pipeline
from paradicms_ssg.deployers.s3_deployer import S3Deployer  # type: ignore
from paradicms_ssg.image_archivers.s3_image_archiver import S3ImageArchiver  # type: ignore
from paradicms_ssg.loaders.app_loader import AppLoader  # type: ignore
from rdflib import DCTERMS

from dressdiscover_etl.transformers.vccc_transformer import VcccTransformer

HIGH_QUALITY_OBJECT_DC_IDENTIFIERS = frozenset(
    """\
VC2021014
VC2021011
VC2021009
VC2021008
VC2021007
VC2021006
VC2021004
VC2021002
VC2020011
VC2020010
VC2020009
VC2020001
VC20200008
VC2019036
VC2019035
VC2019034
VC2019023
VC2019019
VC2019018
VC2019005
VC2019004
VC2018007
VC2018005
VC2017022
VC2017008
VC2017006
VC2017005
VC2017004
VC2017003
VC2015024
VC2015023
VC2015022
VC2015012
VC2015001
VC2014007
VC2014005
VC2014004

VC2013008
VC2013007
VC2012066
VC2012065
VC2012057
VC2011009
VC2011002
VC2007022
VC2007021
VC2007020
VC2007006
VC2005004
VC2005003
VC2005002
VC2004032
VC2004019
VC2003008
VC2001159
VC2001141
VC2001080
VC2001045
VC2001044
VC2001043
VC2001041
VC2001038
VC2001033
VC1992125
VC1992087
VC1992082
VC1992034
VC1992031
VC1992013
PC2013001
JR2013001
HH2013001
DM2013001
AL2013001""".split()
)


class VcccHighQualityPipeline(Pipeline):
    __ID = "vccc_high_quality"

    class __VcccHighQualityTransformer(VcccTransformer):
        def _transform_item(self, *, item, **kwds):
            work = VcccTransformer._transform_item(self, item=item, **kwds)
            if work is None:
                return work
            for identifier in work.resource.objects(DCTERMS.identifier):
                identifier = str(identifier.toPython()).rsplit("/", 1)[-1]
                if identifier in HIGH_QUALITY_OBJECT_DC_IDENTIFIERS:
                    return work
                else:
                    return None
            return None

    def __init__(
        self,
        *,
        data_dir_path: Path,
        omeka_api_key: str,
        loader: Optional[Loader] = None,
        **kwds
    ):
        if loader is None:
            loader = AppLoader(
                app="work-search",
                configuration_file_path=(
                    data_dir_path / self.__ID / "configuration.json"
                ).absolute(),
                deployer=S3Deployer(
                    s3_bucket_name="vccc.dressdiscover.org",
                    **kwds,
                ),
                image_archiver=S3ImageArchiver(
                    s3_bucket_name="dressdiscover-images", **kwds
                ),
                loaded_data_dir_path=data_dir_path / self.__ID / "loaded",
                pipeline_id=self.__ID,
            )

        Pipeline.__init__(
            self,
            extractor=OmekaClassicExtractor(
                api_key=omeka_api_key,
                extracted_data_dir_path=data_dir_path / self.__ID / "extracted",
                endpoint_url="https://vcomeka.com/vccc/",
            ),
            id=self.__ID,
            loader=loader,
            transformer=self.__VcccHighQualityTransformer(),
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        Pipeline.add_arguments(arg_parser)
        cls._add_data_dir_path_argument(arg_parser)
        arg_parser.add_argument("--omeka-api-key", help="Omeka API key", required=True)


if __name__ == "__main__":
    VcccHighQualityPipeline.main()
