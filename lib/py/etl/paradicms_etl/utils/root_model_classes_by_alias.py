from typing import Dict, Type

from stringcase import snakecase, spinalcase

from paradicms_etl.model import Model


def root_model_classes_by_alias(
    root_model_classes_by_name: Dict[str, Type[Model]]
) -> Dict[str, Type[Model]]:
    """
    Given a dict of {model class.__name__, model class}, return a dict of {model class name variation: model class}
    """

    result = root_model_classes_by_name.copy()

    for (
        root_model_class_name,
        root_model_class,
    ) in root_model_classes_by_name.items():
        for model_class_name_variation in (
            snakecase(root_model_class_name),
            spinalcase(root_model_class_name),
        ):
            if model_class_name_variation not in result:
                result[model_class_name_variation] = root_model_class

    return result
