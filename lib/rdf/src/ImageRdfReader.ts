import {ModelRdfReader} from "./ModelRdfReader";
import {Image, ImageDimensions} from "@paradicms/models";
import {EXIF, FOAF, PARADICMS} from "./vocabularies";
import {RightsRdfReader} from "./RightsRdfReader";
import {RdfReaderException} from "./RdfReaderException";
import {NamedNode, Store} from "n3";

export class ImageRdfReader extends ModelRdfReader<Image> {
  read(): Image {
    const originalImageUriSubjects = this.store.getSubjects(FOAF.thumbnail, this.node, null);

    return {
      depictsUri: this.readRequiredParentNamedNode(FOAF.depicts).value,
      exactDimensions: this.readImageDimensions(EXIF.height, EXIF.width),
      institutionUri: this.readRequiredParentNamedNode(PARADICMS.institution)
        .value,
      maxDimensions: this.readImageDimensions(
        PARADICMS.imageMaxHeight,
        PARADICMS.imageMaxWidth,
      ),
      originalImageUri: originalImageUriSubjects.length > 0 ? originalImageUriSubjects[0].value : null,
      rights: new RightsRdfReader(this.node, this.store).read(),
      src: this.readOptionalLiteral(PARADICMS.imageSrc)?.toString() ?? null,
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

  static readAll(store: Store) {
    return ModelRdfReader._readAll<Image>(
      node => new ImageRdfReader(node, store),
      store,
      PARADICMS.Image,
    );
  }
}
