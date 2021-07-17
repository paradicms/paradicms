import {ModelRdfReader} from "./ModelRdfReader";
import {GuiMetadata} from "@paradicms/models";
import {PARADICMS} from "./vocabularies";
import {Store} from "n3";

export class GuiMetadataRdfReader extends ModelRdfReader<GuiMetadata> {
  read(): GuiMetadata {
    return {
      bootstrapStylesheetHref:
        this.readOptionalLiteral(PARADICMS.guiBootstrapStylesheetHref)?.toString() ?? null,
      documentTitle:
        this.readOptionalLiteral(PARADICMS.guiDocumentTitle)?.toString() ??
        null,
      navbarTitle:
        this.readOptionalLiteral(PARADICMS.guiNavbarTitle)?.toString() ?? null,
    };
  }

  static readAll(store: Store) {
    return ModelRdfReader._readAll<GuiMetadata>(
      node => new GuiMetadataRdfReader(node, store),
      store,
      PARADICMS.GuiMetadata,
    );
  }
}
