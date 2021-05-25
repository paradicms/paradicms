import {ModelRdfReader} from "./ModelRdfReader";
import {GuiMetadata} from "@paradicms/models";
import {PARADICMS} from "./vocabularies";
import {IndexedFormula} from "rdflib";

export class GuiMetadataRdfReader extends ModelRdfReader<GuiMetadata> {
  read(): GuiMetadata {
    return {
      documentTitle:
        this.readOptionalLiteral(PARADICMS.guiDocumentTitle)?.toString() ??
        null,
      navbarTitle:
        this.readOptionalLiteral(PARADICMS.guiNavbarTitle)?.toString() ?? null,
    };
  }

  static readAll(store: IndexedFormula) {
    return ModelRdfReader._readAll<GuiMetadata>(
      node => new GuiMetadataRdfReader(node, store),
      store,
      PARADICMS.GuiMetadata
    );
  }
}
