import logging
from importlib import import_module
from inspect import isclass

from configargparse import ArgParser

from paradicms.etl.lib.pipeline._pipeline import _Pipeline


class Cli:
    def __init__(self):
        self.__arg_parser = ArgParser()
        self.__logger = logging.getLogger(self.__class__.__name__)


    def __import_pipeline_class(self, pipeline_module_name: str) -> _Pipeline:
        try_pipeline_module_names = [pipeline_module_name]
        if not "." in pipeline_module_name:
            try_pipeline_module_names.append(".%s.%s" % (pipeline_module_name, pipeline_module_name + "_pipeline"))

        first_import_error = None
        pipeline_module = None
        for pipeline_module_name_i, pipeline_module_name in enumerate(try_pipeline_module_names):
            try:
                pipeline_module = import_module(pipeline_module_name, _Pipeline.__module__.rsplit(".", 1)[0])
                break
            except ImportError as e:
                if pipeline_module_name_i == 0:
                    first_import_error = e

        if pipeline_module is None:
            raise first_import_error

        for attr in dir(pipeline_module):
            value = getattr(pipeline_module, attr)
            if isclass(value) and issubclass(value, _Pipeline):
                return value
        raise ImportError("no Pipeline in the %s module" % pipeline_module.__name__)

    def main(self):
        arg_parser = ArgParser()
        arg_parser.add_argument(
            'pipeline_module',
            help='absolute (parent.module) or relative (.module) module name for the pipeline implementation'
        )
        args, _ = arg_parser.parse_known_args()

        pipeline_class = self.__import_pipeline_class(args.pipeline_module)
        pipeline_class.add_arguments(arg_parser)
        args = arg_parser.parse_args()

        pipeline_class.main(args=args)


def main():
    Cli().main()


if __name__ == '__main__':
    main()
