class _ModelSingletons:
    """
    Base class for classes that contain model singletons as class constants.
    """

    @classmethod
    def as_tuple(cls):
        tuple_ = []
        for __attr in dir(cls):
            __value = getattr(cls, __attr)
            if isinstance(__value, cls._MODEL_CLASS):
                tuple_.append(__value)
        return tuple(tuple_)
