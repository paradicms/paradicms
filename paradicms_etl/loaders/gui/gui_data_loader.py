from paradicms_etl.loaders.json_directory_loader import JsonDirectoryLoader


class GuiDataLoader(JsonDirectoryLoader):
    def __init__(self, *, clean: bool = True, **kwds):
        JsonDirectoryLoader.__init__(self, clean=clean, **kwds)
