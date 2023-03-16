from typing import List, Optional, Tuple

from configargparse import ArgParser

from paradicms_etl.extractors.nop_extractor import nop_extractor
from paradicms_etl.loader import Loader
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.nop_transformer import nop_transformer
from paradicms_etl.transformers.validation_transformer import validation_transformer


class CompositePipeline(Pipeline):
    """
    A base class for pipelines that compose 2+ other pipelines and share a loader.
    """

    def __init__(
        self,
        *,
        id: str,
        loader: Loader,
        pipelines: Tuple[Pipeline, ...],
        exclude_pipeline_id: Optional[List[str]] = None,
        include_pipeline_id: Optional[List[str]] = None,
    ):
        Pipeline.__init__(
            self,
            extractor=nop_extractor,
            id=id,
            loader=loader,
            transformer=nop_transformer,
        )

        exclude_pipeline_ids = (exclude_pipeline_id,) if exclude_pipeline_id else ()
        include_pipeline_ids = (include_pipeline_id,) if include_pipeline_id else ()

        filtered_pipeline_ids = [pipeline.id for pipeline in pipelines]
        for exclude_pipeline_id in exclude_pipeline_ids:
            if exclude_pipeline_id not in filtered_pipeline_ids:
                raise ValueError(f"unknown pipeline: {exclude_pipeline_id}")
        for include_pipeline_id in include_pipeline_ids:
            if include_pipeline_id not in filtered_pipeline_ids:
                raise ValueError(f"unknown pipeline: {include_pipeline_id}")

        for exclude_pipeline_id in exclude_pipeline_ids:
            filtered_pipeline_ids.remove(exclude_pipeline_id)
        if include_pipeline_ids:
            filtered_pipeline_ids = [
                pipeline_id
                for pipeline_id in filtered_pipeline_ids
                if pipeline_id in include_pipeline_ids
            ]

        self.__pipelines = tuple(
            pipeline for pipeline in pipelines if pipeline.id in filtered_pipeline_ids
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser) -> None:
        Pipeline.add_arguments(arg_parser)
        arg_parser.add_argument("--exclude-pipeline-id", action="append")
        arg_parser.add_argument("--include-pipeline-id", action="append")

    def extract_transform_load(self, **kwds):
        def extract_transform():
            for pipeline in self.__pipelines:
                yield from pipeline.extract_transform(**kwds)

        models = extract_transform()
        validated_models = validation_transformer(models)

        self.loader(flush=True, models=validated_models)

    @property
    def _pipelines(self) -> Tuple[Pipeline, ...]:
        return self.__pipelines
