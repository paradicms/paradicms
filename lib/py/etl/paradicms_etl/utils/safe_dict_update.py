from typing import Dict, Any


def safe_dict_update(dict_: Dict[Any, Any], updates: Dict[Any, Any]) -> Dict[Any, Any]:
    """
    Update a dict without overwriting any keys.

    :param dict_: input dictionary, not mutated
    :param updates: updates to the dictionary
    :return: a new dict with the updates applied
    """

    updated_dict = dict_.copy()
    for key, value in updates.items():
        if key in dict_:
            raise KeyError(f'{key} already exists')
        updated_dict[key] = value
    return updated_dict
