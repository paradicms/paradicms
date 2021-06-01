from pathlib import Path

from rdflib import URIRef

from paradicms_etl.file_cache import FileCache
from paradicms_etl.image_archivers.fs_image_archiver import FsImageArchiver


def test_archive_image(tmp_path):
    tmp_dir_path = Path(tmp_path)
    archive_dir_path = tmp_dir_path / "archive"
    cache_dir_path = tmp_dir_path / "cache"
    cache_dir_path.mkdir()

    image_cache = FileCache(cache_dir_path=cache_dir_path)
    sut = FsImageArchiver(
        base_url="/img/archive/", root_directory_path=archive_dir_path
    )

    archived_url = sut.archive_image(
        image_file_path=image_cache.get_file(URIRef("https://place-hold.it/1000x1000"))
    )
    assert archived_url
    assert archived_url.startswith("/img/archive/")
    # print("Archived URL: " + archived_url)
    file_name = archived_url[len("/img/archive/") :]
    assert (archive_dir_path / file_name).is_file()
