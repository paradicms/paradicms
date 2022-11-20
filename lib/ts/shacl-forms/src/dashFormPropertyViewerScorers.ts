import {FormPropertyWidgetScorer} from "./FormPropertyWidgetScorer";
import {FormProperty} from "./FormProperty";
import {dash, rdf, xsd} from "@paradicms/vocabularies";
import {FormPropertyValue} from "./FormPropertyValue";

const DashBlankNodeViewerScorer: FormPropertyWidgetScorer = {
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null {
    if (formPropertyValues.length === 0) {
      return 0;
    }
    if (formPropertyValues.every(value => value.termType === "BlankNode")) {
      // 1 for blank nodes
      return 1;
    } else {
      // 0 for all other nodes
      return 0;
    }
  },

  widgetName: dash.BlankNodeViewer,
};

const DashDetailsViewerScorer: FormPropertyWidgetScorer = {
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null {
    if (formPropertyValues.length === 0) {
      return 0;
    }
    if (formPropertyValues.every(value => value.termType === "Literal")) {
      // 0 for literals
      return 0;
    } else {
      // null for IRIs and blank nodes
      return null;
    }
  },

  widgetName: dash.DetailsViewer,
};

const DashHtmlViewerScorer: FormPropertyWidgetScorer = {
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null {
    if (formPropertyValues.length === 0) {
      return 0;
    }
    if (
      formPropertyValues.every(
        value => value.termType === "Literal" && value.datatype.equals(rdf.HTML)
      )
    ) {
      // 50 for literals with datatype rdf:HTML
      return 50;
    } else {
      // 0 for all other formPropertyValues
      return 0;
    }
  },

  widgetName: dash.HTMLViewer,
};

const DashHyperlinkViewerScorer: FormPropertyWidgetScorer = {
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null {
    if (formPropertyValues.length === 0) {
      return 0;
    }
    if (
      formPropertyValues.every(
        value =>
          value.termType === "Literal" && value.datatype.equals(xsd.anyURI)
      )
    ) {
      // 50 for literals with datatype xsd:anyURI
      return 50;
    } else if (
      formPropertyValues.every(
        value =>
          value.termType === "Literal" && value.datatype.equals(xsd.string)
      )
    ) {
      // null for xsd:string literals
      return null;
    } else {
      // 0 for all other formPropertyValues
      return 0;
    }
  },

  widgetName: dash.HyperlinkViewer,
};

const DashImageViewerScorer: FormPropertyWidgetScorer = {
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null {
    if (formPropertyValues.length === 0) {
      return 0;
    }
    if (
      formPropertyValues.every(value => {
        switch (value.termType) {
          case "NamedNode":
          case "Literal":
            const lowerCaseValue = value.value.toLowerCase();
            for (const imageFileExtension in [
              ".png",
              ".jpg",
              ".jpeg",
              ".gif",
              ".svg",
            ]) {
              if (lowerCaseValue.endsWith(imageFileExtension)) {
                return true;
              }
            }
        }
        return false;
      })
    ) {
      // 50 for IRI nodes or literals that have a case-insensitive recognized image ending such as .png, .jpg, .jpeg, .gif and .svg.
      return 50;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.ImageViewer,
};

const DashLabelViewerScorer: FormPropertyWidgetScorer = {
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null {
    if (formPropertyValues.length === 0) {
      return 0;
    }
    if (formPropertyValues.every(value => value.termType === "NamedNode")) {
      // 5 if the value is an IRI
      return 5;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.LabelViewer,
};

const DashLangStringViewer: FormPropertyWidgetScorer = {
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null {
    if (formPropertyValues.length === 0) {
      return 0;
    }
    if (
      formPropertyValues.every(
        value =>
          value.termType === "Literal" && value.datatype.equals(rdf.langString)
      )
    ) {
      // 10 if the value is a literal of type rdf:langString
      return 10;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.LangStringViewer,
};

const DashLiteralViewerScorer: FormPropertyWidgetScorer = {
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null {
    if (formPropertyValues.length === 0) {
      return 0;
    }
    if (formPropertyValues.every(value => value.termType === "Literal")) {
      // 5 if the value is a literal
      return 1;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.LiteralViewer,
};

const DashURIViewerScorer: FormPropertyWidgetScorer = {
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null {
    if (formPropertyValues.length === 0) {
      return 0;
    }
    if (formPropertyValues.every(value => value.termType === "NamedNode")) {
      // 1 if the value is an IRI
      return 1;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.URIViewer,
};

const DashValueTableViewerScorer: FormPropertyWidgetScorer = {
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null {
    return null;
  },

  widgetName: dash.ValueTableViewer,
};

export const dashFormPropertyViewerScorers: readonly FormPropertyWidgetScorer[] = [
  DashBlankNodeViewerScorer,
  DashDetailsViewerScorer,
  DashHtmlViewerScorer,
  DashHyperlinkViewerScorer,
  DashImageViewerScorer,
  DashLabelViewerScorer,
  DashLangStringViewer,
  DashLiteralViewerScorer,
  DashURIViewerScorer,
  DashValueTableViewerScorer,
];

if (
  new Set(dashFormPropertyViewerScorers.map(scorer => scorer.widgetName.value))
    .size !== dashFormPropertyViewerScorers.length
) {
  throw new EvalError("duplicate widget names");
}
