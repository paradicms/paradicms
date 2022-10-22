from pathlib import Path
from urllib.error import HTTPError

from rdflib import URIRef

from paradicms_gui.file_cache import FileCache


def test_get_file_404(tmp_path):
    tmp_dir_path = Path(tmp_path)
    sut = FileCache(cache_dir_path=tmp_dir_path)
    URL = URIRef("https://minorgordon.net/nonextant")
    try:
        sut.get_file(URL)
        assert False
    except HTTPError:
        pass


def test_get_file_200(tmp_path):
    tmp_dir_path = Path(tmp_path)
    sut = FileCache(cache_dir_path=tmp_dir_path)
    URL = URIRef("https://place-hold.it/100x100")

    for i in range(2):  # Initial miss, then hit
        cached_file_path = sut.get_file(URL)
        assert cached_file_path.is_file(), cached_file_path
        assert (
            cached_file_path.parent != tmp_dir_path
        ), cached_file_path  # Every file is put in its own directory
        assert (cached_file_path.parent / "headers.json").is_file()
