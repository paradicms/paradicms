import hashlib
from pathlib import Path


def sha256_hash_file(file_path: Path) -> str:
    """
    Hash the contents of a file using SHA-256, returning the hexdigest.
    """
    file_hash = hashlib.sha256()
    with open(file_path, "rb") as file_:
        for byte_block in iter(lambda: file_.read(4096), b""):
            file_hash.update(byte_block)
    return file_hash.hexdigest()
