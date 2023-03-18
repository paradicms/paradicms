import dataclasses
from pathlib import Path

from paradicms_etl.loaders.buffering_loader import BufferingLoader
from paradicms_etl.models.costume_core.costume_core_predicate import (
    CostumeCorePredicate,
)
from paradicms_etl.models.costume_core.costume_core_term import CostumeCoreTerm


class CostumeCoreOntologyPyLoader(BufferingLoader):
    def _flush(self, models):
        models_dir_path = Path(__file__).parent.parent / "models" / "costume_core"
        assert models_dir_path.is_dir(), models_dir_path

        with open(
            models_dir_path / "costume_core_predicates.py", "w+", encoding="ascii"
        ) as predicates_py_file:
            print(
                "from .costume_core_predicate import CostumeCorePredicate",
                file=predicates_py_file,
            )
            print("import rdflib.term", file=predicates_py_file)
            print(file=predicates_py_file)
            predicates = tuple(
                filter(lambda model: isinstance(model, CostumeCorePredicate), models)
            )
            for predicate in predicates:
                print(
                    f"{predicate.id} = {dataclasses.replace(predicate, terms=None)}",
                    file=predicates_py_file,
                )
            print(
                f"COSTUME_CORE_PREDICATES = ({', '.join(predicate.id for predicate in predicates)})",
                file=predicates_py_file,
            )

        with open(
            models_dir_path / "costume_core_terms.py",
            "w+",
            encoding="utf-8",
            newline="\n",
        ) as terms_py_file:
            print("# -*- coding: utf-8 -*-", file=terms_py_file)
            print(file=terms_py_file)
            print(
                "from .costume_core_description import CostumeCoreDescription",
                file=terms_py_file,
            )
            print(
                "from .costume_core_rights import CostumeCoreRights", file=terms_py_file
            )
            print("from .costume_core_term import CostumeCoreTerm", file=terms_py_file)
            print("import rdflib.term", file=terms_py_file)
            print(file=terms_py_file)
            terms = tuple(
                filter(lambda model: isinstance(model, CostumeCoreTerm), models)
            )
            for term in terms:
                print(f"{term.id} = {term}", file=terms_py_file)
            print(
                f"COSTUME_CORE_TERMS = ({', '.join(term.id for term in terms)})",
                file=terms_py_file,
            )
