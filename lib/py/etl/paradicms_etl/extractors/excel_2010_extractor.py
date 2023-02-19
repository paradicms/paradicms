import logging
from pathlib import Path

from openpyxl import load_workbook


# def _convert_csv_row_to_json_object(csv_row_dict: Dict[str, Any]) -> Dict[str, Any]:
#     """
#     Convert a CSV row {header: cell} dict to a JSON object.
#
#     Headers separators (".") indicate nested values.
#     Arrays are not supported.
#     """
#
#     root_json_object = {}
#     for csv_key, csv_value in csv_row_dict.items():
#         if csv_value is None:
#             continue
#         key_split = csv_key.split(".")
#         if len(key_split) == 1:
#             root_json_object[csv_key] = csv_value
#             continue
#         json_object = root_json_object
#         for sub_key in key_split[:-1]:
#             json_object = json_object.setdefault(sub_key, {})
#         json_object[key_split[-1]] = csv_value
#     return root_json_object


class Excel2010Extractor:
    def __init__(self, *, xlsx_file_path: Path):
        self.__logger = logging.getLogger(__name__)
        self.__xlsx_file_path = xlsx_file_path

    def __call__(self, **kwds):
        workbook = load_workbook(str(self.__xlsx_file_path), data_only=True)
        workbook.iso_dates = True
        sheets = {}
        for sheet_name in workbook.sheetnames:
            sheet = workbook[sheet_name]
            sheets[sheet_name] = {
                "rows": tuple(tuple(cell.value for cell in row) for row in sheet.rows)
            }
        return {"sheets": sheets}
