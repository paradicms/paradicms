import os
from pathlib import Path
from shutil import rmtree

from paradicms_gui.deployers.fs_deployer import FsDeployer


def test_archive_rename(tmp_path):
    tmp_dir_path = Path(tmp_path)
    gui_deploy_dir_path = tmp_dir_path / "deploy"
    gui_deploy_dir_path.mkdir()
    app_out_dir_path = tmp_dir_path / "out"
    app_out_dir_path.mkdir()
    (app_out_dir_path / "temp.txt").touch()

    sut = FsDeployer(archive=True, gui_deploy_dir_path=gui_deploy_dir_path, copy=False)
    sut.deploy(app_out_dir_path=app_out_dir_path)
    assert not app_out_dir_path.exists()  # Should have been renamed
    assert (gui_deploy_dir_path / "current").is_dir()
    assert (gui_deploy_dir_path / "current" / "temp.txt").is_file()

    # Deploy again, which should create an archive
    app_out_dir_path.mkdir()
    (app_out_dir_path / "temp.txt").touch()
    sut.deploy(app_out_dir_path=app_out_dir_path)
    assert not app_out_dir_path.exists()  # Should have been renamed
    assert (gui_deploy_dir_path / "current" / "temp.txt").is_file()

    gui_deploy_dir_path_subdirs = [
        dir_name
        for dir_name in os.listdir(gui_deploy_dir_path)
        if (gui_deploy_dir_path / dir_name).is_dir()
    ]
    assert len(gui_deploy_dir_path_subdirs) == 2
    gui_deploy_dir_path_subdirs.remove("current")
    assert gui_deploy_dir_path_subdirs[0].startswith(
        "pre-"
    ), gui_deploy_dir_path_subdirs


def test_overwrite_copy(tmp_path):
    tmp_dir_path = Path(tmp_path)
    gui_deploy_dir_path = tmp_dir_path / "deploy"
    app_out_dir_path = tmp_dir_path / "out"
    app_out_dir_path.mkdir()
    (app_out_dir_path / "temp.txt").touch()

    sut = FsDeployer(archive=False, gui_deploy_dir_path=gui_deploy_dir_path, copy=True)
    sut.deploy(app_out_dir_path=app_out_dir_path)
    assert gui_deploy_dir_path.is_dir()
    assert app_out_dir_path.exists()

    # Deploy again
    rmtree(gui_deploy_dir_path)
    assert not gui_deploy_dir_path.exists()
    sut.deploy(app_out_dir_path=app_out_dir_path)
    assert gui_deploy_dir_path.is_dir()
    assert app_out_dir_path.exists()


def test_overwrite_rename(tmp_path):
    tmp_dir_path = Path(tmp_path)
    gui_deploy_dir_path = tmp_dir_path / "deploy"
    app_out_dir_path = tmp_dir_path / "out"
    app_out_dir_path.mkdir()
    (app_out_dir_path / "temp.txt").touch()

    sut = FsDeployer(archive=False, gui_deploy_dir_path=gui_deploy_dir_path)
    sut.deploy(app_out_dir_path=app_out_dir_path)
    assert gui_deploy_dir_path.is_dir()
    assert not app_out_dir_path.exists()  # Should have been renamed

    # Deploy again
    app_out_dir_path.mkdir()
    (app_out_dir_path / "temp.txt").touch()
    sut.deploy(app_out_dir_path=app_out_dir_path)
    assert gui_deploy_dir_path.is_dir()
    assert not app_out_dir_path.exists()  # Should have been renamed
