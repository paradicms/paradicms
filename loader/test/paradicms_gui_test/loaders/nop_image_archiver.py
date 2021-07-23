from pathlib import Path

from rdflib import URIRef

from paradicms_gui._image_archiver import _ImageArchiver


class NopImageArchiver(_ImageArchiver):
    def archive_image(self, *, image_file_path: Path) -> URIRef:
        return URIRef(image_file_path.as_uri())
