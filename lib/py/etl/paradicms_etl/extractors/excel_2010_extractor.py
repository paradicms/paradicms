import logging
from pathlib import Path
from typing import Dict, Any

from openpyxl import load_workbook


def _convert_csv_row_to_json_object(csv_row_dict: Dict[str, Any]) -> Dict[str, Any]:
    """
    Convert a CSV row {header: cell} dict to a JSON object.

    Headers separators (".") indicate nested values.
    Arrays are not supported.
    """

    root_json_object = {}
    for csv_key, csv_value in csv_row_dict.items():
        if csv_value is None:
            continue
        key_split = csv_key.split(".")
        if len(key_split) == 1:
            root_json_object[csv_key] = csv_value
            continue
        json_object = root_json_object
        for sub_key in key_split[:-1]:
            json_object = json_object.setdefault(sub_key, {})
        json_object[key_split[-1]] = csv_value
    return root_json_object


class Excel2010Extractor:
    def __init__(self, *, xlsx_file_path: Path):
        self.__logger = logging.getLogger(__name__)
        self.__xlsx_file_path = xlsx_file_path

    def __call__(self, **kwds):
        workbook = load_workbook(str(self.__xlsx_file_path), data_only=True)
        workbook.iso_dates = True
        result = {}
        for sheet_name in workbook.sheetnames:
            sheet = workbook[sheet_name]
            header_row = None
            row_dicts = []
            for row_i, row in enumerate(sheet.rows):
                if row_i == 0:
                    header_row = row
                else:
                    data_row = row
                    assert header_row is not None
                    assert len(header_row) == len(data_row)
                    row_dict = {
                        header_cell.value: data_cell.value
                        for header_cell, data_cell in zip(header_row, data_row)
                    }
                    if row_dict:
                        row_dicts.append(_convert_csv_row_to_json_object(row_dict))
            if row_dicts:
                result[sheet_name] = tuple(row_dicts)
        return result
