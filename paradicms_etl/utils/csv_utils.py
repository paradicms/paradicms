from typing import Dict


def strip_csv_row(csv_row: Dict[str, str]) -> Dict[str, str]:
    """
    strip() each column of a CSV row dict, removing items that are empty after stripping.
    Copies on write.
    :return new CSV row dict with stripped columns
    """

    row_copy = {}
    for key, value in csv_row.items():
        key = key.strip()
        if not key:
            continue
        value = value.strip()
        if not value:
            continue
        row_copy[key] = value
    return row_copy
