from urllib.error import HTTPError

from rdflib import URIRef

from paradicms_ssg.file_cache import FileCache


def test_get_file_404(tmp_path):
    sut = FileCache(cache_dir_path=tmp_path)
    URL = URIRef("https://minorgordon.net/nonextant")
    try:
        sut.get_file(URL)
        assert False
    except HTTPError:
        pass


def test_get_file_200(tmp_path):
    sut = FileCache(cache_dir_path=tmp_path)
    url = URIRef("https://place-hold.it/100x100")

    for i in range(2):  # Initial miss, then hit
        cached_file_path = sut.get_file(url)
        assert cached_file_path.is_file(), cached_file_path
        assert (
            cached_file_path.parent != tmp_path
        ), cached_file_path  # Every file is put in its own directory
        assert (cached_file_path.parent / "headers.json").is_file()


def test_put_file(tmp_path):
    sut = FileCache(cache_dir_path=tmp_path)
    with open(__file__, "rb") as file_:
        file_data = file_.read()
    cached_file_path = sut.put_file(
        file_data=file_data,
        file_mime_type="text/plain",
        file_url=URIRef("https://place-hold.it/100x100"),
    )
    assert str(cached_file_path).endswith(".txt")
    assert cached_file_path.is_file()
