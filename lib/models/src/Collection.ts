import {NamedModel} from "./NamedModel";
import {Institution} from "./Institution";
import {CMS, DCTERMS} from "./vocabularies";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Image} from "./Image";
import {Work} from "./Work";
import {Text} from "./Text";
import {Memoize} from "typescript-memoize";
import {requireDefined} from "./requireDefined";

export class Collection extends NamedModel {
  @Memoize()
  get abstract(): string | Text | null {
    for (const term of this.propertyObjects(DCTERMS.abstract)) {
      switch (term.termType) {
        case "BlankNode":
          return new Text({
            dataset: this.dataset,
            graphNode: this.graphNode,
            node: term,
          });
        case "Literal":
          return term.value;
      }
    }
    return null;
  }

  get institution(): Institution {
    return this.dataset.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return requireDefined(
      this.propertyObjects(CMS.institution).find(
        term => term.termType === "NamedNode"
      )
    ).value;
  }

  get works(): readonly Work[] {
    return this.dataset.collectionWorks(this.uri);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    const collectionImages: readonly Image[] = this.dataset.imagesByDepictsUri(
      this.uri
    );
    if (collectionImages.length > 0) {
      const thumbnail = selectThumbnail(collectionImages, selector);
      if (thumbnail) {
        return thumbnail;
      }
    }
    for (const work of this.works) {
      const thumbnail = work.thumbnail(selector);
      if (thumbnail) {
        return thumbnail;
      }
    }

    return null;
  }

  get title(): string {
    return requireDefined(
      this.propertyObjects(DCTERMS.title).find(
        term => term.termType === "Literal"
      )
    ).value;
  }
}
