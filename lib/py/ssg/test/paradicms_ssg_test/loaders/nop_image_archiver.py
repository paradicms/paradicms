from pathlib import Path

from rdflib import URIRef


class NopImageArchiver:
    def __call__(self, *, image_file_path: Path) -> URIRef:
        return URIRef(image_file_path.as_uri())
