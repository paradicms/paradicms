import {ModelRdfReader} from "./ModelRdfReader";
import {Image, ImageDimensions} from "@paradicms/models";
import {EXIF, FOAF, PARADICMS} from "./vocabularies";
import {IndexedFormula} from "rdflib";
import {RightsRdfReader} from "./RightsRdfReader";
import {NamedNode} from "rdflib/lib/tf-types";
import {RdfReaderException} from "./RdfReaderException";
import {ModelNode} from "./ModelNode";

export class ImageRdfReader extends ModelRdfReader<Image> {
  constructor(node: ModelNode, store: IndexedFormula) {
    super(node, store);
  }

  read(): Image {
    return {
      depictsUri: this.readRequiredParentNamedNode(FOAF.depicts).value,
      exactDimensions: this.readImageDimensions(EXIF.height, EXIF.width),
      institutionUri: this.readRequiredParentNamedNode(PARADICMS.institution)
        .value,
      maxDimensions: this.readImageDimensions(
        PARADICMS.imageMaxHeight,
        PARADICMS.imageMaxWidth
      ),
      originalImageUri:
        this.store.any(undefined, FOAF.thumbnail, this.node)?.value ?? null,
      rights: new RightsRdfReader(this.node, this.store).read(),
      uri: this.nodeUri,
    };
  }

  private readImageDimensions(
    heightProperty: NamedNode,
    widthProperty: NamedNode
  ): ImageDimensions | null {
    const heightLiteral = this.readOptionalLiteral(heightProperty);
    const widthLiteral = this.readOptionalLiteral(widthProperty);

    if (heightLiteral) {
      if (widthLiteral) {
        return {
          height: heightLiteral.toInteger(),
          width: widthLiteral.toInteger(),
        };
      } else {
        throw new RdfReaderException(
          `image ${this.nodeUri} has a ${heightProperty.value} but not a ${widthProperty.value}`
        );
      }
    } else if (widthLiteral) {
      throw new RdfReaderException(
        `image ${this.nodeUri} has a ${widthProperty.value} but not a ${heightProperty.value}`
      );
    } else {
      return null;
    }
  }

  static readAll(store: IndexedFormula) {
    return ModelRdfReader._readAll<Image>(
      node => new ImageRdfReader(node, store),
      store,
      PARADICMS.Image
    );
  }
}
