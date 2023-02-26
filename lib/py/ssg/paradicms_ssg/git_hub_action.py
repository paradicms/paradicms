import dataclasses
import logging
import os
from dataclasses import dataclass
from pathlib import Path

from configargparse import ArgParser

from paradicms_etl.loader import Loader
from paradicms_ssg.deployers.fs_deployer import FsDeployer
from paradicms_ssg.loaders.app_loader import AppLoader


class GitHubAction:
    """
    Abstract base class for static site-generating GitHub Actions.
    """

    @dataclass(frozen=True)
    class RequiredInputs:
        app: str
        pipeline_id: str

        @classmethod
        def from_args(cls):
            argument_parser = ArgParser()
            argument_parser.add_argument(
                "-c", is_config_file=True, help="path to a file to read arguments from"
            )
            for field in dataclasses.fields(cls):
                if field.name == "dev":
                    continue
                argument_parser.add_argument(
                    "--" + field.name.replace("_", "-"),
                    env_var="INPUT_" + field.name.upper(),
                    required=field.default == dataclasses.MISSING,
                )
                field.default
            # The dev argument can only be supplied manually from the command line.
            # It makes no sense to run the Next.js dev server ("next dev") in the GitHub Action.
            argument_parser.add_argument("--dev", action="store_true")
            args = argument_parser.parse_args()
            kwds = {
                key: value
                for key, value in vars(args).items()
                if isinstance(value, str) and value.strip()
            }
            if args.dev:
                kwds["dev"] = True
            for ignore_key in ("c",):
                kwds.pop(ignore_key, None)
            if "pipeline_id" not in kwds:
                kwds["pipeline_id"] = os.environ["GITHUB_REPOSITORY"].rsplit("/", 1)[-1]
            return cls(**kwds)

        def __post_init__(self):
            for field in dataclasses.fields(self):
                if field.default != dataclasses.MISSING:
                    continue
                value = getattr(self, field.name)
                if not value.strip():
                    raise ValueError("empty/blank " + field.name)

    @dataclass(frozen=True)
    class OptionalInputs(RequiredInputs):
        app_configuration: str = ""
        debug: str = ""
        dev: bool = False

    def __init__(
        self,
        *,
        optional_inputs: OptionalInputs,
        required_inputs: RequiredInputs,
        temp_dir_path: Path
    ):
        self.__optional_inputs = optional_inputs
        self.__required_inputs = required_inputs
        if self.__optional_inputs.debug:
            logging.basicConfig(level=logging.DEBUG)
        else:
            logging.basicConfig(level=logging.INFO)
        self.__logger = logging.getLogger(__name__)
        self.__temp_dir_path = temp_dir_path

    def _create_loader(self) -> Loader:
        app = self.__required_inputs.app

        app_deploy_dir_path = Path("_site").absolute()

        for app_dir_path in (
            Path(app).absolute(),
            Path("/paradicms") / "app" / app,
        ):
            if app_dir_path.is_dir():
                self.__logger.debug("app_dir_path %s exists, using", app_dir_path)
                app = str(app_dir_path)
                break
            else:
                self.__logger.debug("app_dir_path %s does not exist", app_dir_path)

        if self.__optional_inputs.app_configuration:
            app_configuration_file_path = Path(
                self.__optional_inputs.app_configuration
            ).absolute()
            if not app_configuration_file_path.is_file():
                raise ValueError(
                    "configuration file %s does not exist or is not a file"
                    % app_configuration_file_path
                )
        else:
            app_configuration_file_path = None

        self.__logger.info(
            "AppLoader: app=%s, export path=%s, configuration_file_path=%s",
            app,
            app_deploy_dir_path,
            app_configuration_file_path,
        )

        return AppLoader(
            app=app,
            configuration_file_path=app_configuration_file_path,
            deployer=FsDeployer(
                # We're running in an environment that's never been used before, so no need to archive
                archive=False,
                # We're also running in Docker, which usually means that the GUI's out directory is on a different mount
                # than the directory we're "deploying" to, and we need to use copy instead of rename.
                copy=True,
                deploy_dir_path=app_deploy_dir_path,
            ),
            dev=self.__optional_inputs.dev,
            loaded_data_dir_path=self.__temp_dir_path / "loaded",
            pipeline_id=self.__required_inputs.pipeline_id,
        )

    @property
    def _extracted_data_dir_path(self) -> Path:
        return self.__temp_dir_path / "extracted"

    # def __create_markdown_directory_pipeline(self, *, loader: Loader) -> Pipeline:
    #     extracted_data_dir_path = Path(self.__inputs.input_data)
    #     if not extracted_data_dir_path.is_dir():
    #         raise ValueError(
    #             f"Markdown directory {extracted_data_dir_path} does not exist"
    #         )
    #
    #     return Pipeline(
    #         extractor=MarkdownDirectoryExtractor(
    #             extracted_data_dir_path=extracted_data_dir_path,
    #             pipeline_id=self.__pipeline_id,
    #         ),
    #         id=self.__pipeline_id,
    #         loader=loader,
    #         transformer=MarkdownDirectoryTransformer(
    #             pipeline_id=self.__pipeline_id,
    #         ),
    #     )
    #
    # def __create_pipeline(self) -> Pipeline:
    #     loader = self.__create_loader()
    #
    #     input_format = self.__inputs.input_format.lower()
    #     if self.__inputs.input_format in ("markdown", "markdown_directory"):
    #         return self.__create_markdown_directory_pipeline(loader=loader)
    #     else:
    #         raise NotImplementedError(self.__inputs.input_format)
    #
    # def __create_rdf_file_loader(self, *, output_format: str) -> RdfFileLoader:
    #     if output_format == "rdf":
    #         rdf_format = RdfFileLoader.FORMAT_DEFAULT
    #     elif output_format.endswith("-rdf"):
    #         rdf_format = output_format[: -len("-rdf")]
    #     else:
    #         raise NotImplementedError
    #
    #     output_data_path = Path(self.__inputs.output_data).absolute()
    #     if output_data_path.is_dir():
    #         rdf_file_path = output_data_path / ("data." + rdf_format)
    #     else:
    #         rdf_file_path = output_data_path
    #         self.__mkdir(rdf_file_path.parent)
    #
    #     self.__logger.info(
    #         "RDF file loader: format=%s, file path=%s", rdf_format, rdf_file_path
    #     )
    #     return RdfFileLoader(
    #         file_path=rdf_file_path,
    #         format=rdf_format,
    #         pipeline_id=self.__pipeline_id,
    #     )

    # def __mkdir(self, dir_path: Path) -> None:
    #     if dir_path.is_dir():
    #         self.__logger.debug("directory %s already exists", dir_path)
    #         return
    #     elif dir_path.exists():
    #         raise IOError("%s already exists and is not a directory", dir_path)
    #     else:
    #         dir_path.mkdir(parents=True, exist_ok=True)
    #         self.__logger.debug("created directory %s", dir_path)
