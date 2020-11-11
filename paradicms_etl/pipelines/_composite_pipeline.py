from typing import Dict, List, Optional, Tuple

from configargparse import ArgParser

from paradicms_etl._loader import _Loader
from paradicms_etl._pipeline import _Pipeline
from paradicms_etl.extractors.nop_extractor import NopExtractor
from paradicms_etl.transformers.nop_transformer import NopTransformer
from paradicms_etl.transformers.validation_transformer import ValidationTransformer


class _CompositePipeline(_Pipeline):
    """
    A base class for pipelines that compose 2+ other pipelines and share a loader.
    """

    def __init__(
        self,
        *,
        id: str,
        loader: _Loader,
        pipelines: Tuple[_Pipeline, ...],
        exclude_pipeline_id: Optional[List[str]] = None,
        include_pipeline_id: Optional[List[str]] = None,
        **kwds,
    ):
        _Pipeline.__init__(
            self,
            extractor=NopExtractor(pipeline_id=id, **kwds),
            id=id,
            loader=loader,
            transformer=NopTransformer(pipeline_id=id, **kwds),
            **kwds,
        )

        exclude_pipeline_ids = tuple(exclude_pipeline_id) if exclude_pipeline_id else ()
        include_pipeline_ids = tuple(include_pipeline_id) if include_pipeline_id else ()

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
        _Pipeline.add_arguments(arg_parser)
        arg_parser.add_argument("--exclude-pipeline-id", action="append")
        arg_parser.add_argument("--include-pipeline-id", action="append")

    def extract_transform_load(self, **kwds):
        def extract_transform():
            for pipeline in self.__pipelines:
                yield from pipeline.extract_transform(**kwds)

        self.loader.load(ValidationTransformer(pipeline_id=self.id)).transform(
            extract_transform()
        )
        self.loader.flush()

    @property
    def _pipelines(self) -> Tuple[_Pipeline, ...]:
        return self.__pipelines
