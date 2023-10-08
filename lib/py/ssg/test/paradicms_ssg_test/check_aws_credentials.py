from pathlib import Path


def check_aws_credentials() -> bool:
    """
    Check if AWS credentials are configured.
    """

    if (Path.home() / ".aws" / "credentials").is_file():
        return True

    if "AWS_ACCESS_KEY_ID" in os.environ and "AWS_SECRET_ACCESS_KEY" in os.environ:
        return True

    return False
