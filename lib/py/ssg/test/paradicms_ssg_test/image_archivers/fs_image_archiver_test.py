from paradicms_etl.utils.file_cache import FileCache
from paradicms_ssg.image_archivers.fs_image_archiver import FsImageArchiver
from rdflib import URIRef


def test_archive_image(tmp_path):
    archive_dir_path = tmp_path / "archive"
    cache_dir_path = tmp_path / "cache"
    cache_dir_path.mkdir()

    image_cache = FileCache(cache_dir_path=cache_dir_path)
    sut = FsImageArchiver(
        base_url="/img/archive/", root_directory_path=archive_dir_path
    )

    archived_url = sut(
        image_file_path=image_cache.get_file(
            URIRef("https://paradicms.github.io/img/placeholder/1000x1000.png")
        )
    )
    assert archived_url
    assert archived_url.startswith("/img/archive/")
    # print("Archived URL: " + archived_url)
    file_name = archived_url[len("/img/archive/") :]
    assert (archive_dir_path / file_name).is_file()
