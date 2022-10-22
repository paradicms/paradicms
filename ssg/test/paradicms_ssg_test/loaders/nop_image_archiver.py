from pathlib import Path

from rdflib import URIRef

from paradicms_ssg.image_archiver import ImageArchiver


class NopImageArchiver(ImageArchiver):
    def archive_image(self, *, image_file_path: Path) -> URIRef:
        return URIRef(image_file_path.as_uri())
