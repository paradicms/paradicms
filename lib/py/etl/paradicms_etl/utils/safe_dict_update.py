from typing import Dict, Any, Optional


def safe_dict_update(
    dict_: Dict[Any, Any],
    updates1: Dict[Any, Any],
    # Just use optionals rather than trying to type hint *args
    updates2: Optional[Dict[Any, Any]] = None,
    updates3: Optional[Dict[Any, Any]] = None,
    updates4: Optional[Dict[Any, Any]] = None,
    updates5: Optional[Dict[Any, Any]] = None,
) -> Dict[Any, Any]:
    """
    Update a dict without overwriting any keys.

    :param dict_: input dictionary, not mutated
    :param updates1: updates to the dictionary
    :return: a new dict with the updates applied
    """

    updated_dict = dict_.copy()
    for updates in (updates1, updates2, updates3, updates3, updates4, updates5):
        if updates is None:
            continue
        for key, value in updates.items():
            if key in dict_:
                raise KeyError(f"{key} already exists")
            updated_dict[key] = value
    return updated_dict
