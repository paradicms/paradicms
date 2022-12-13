import {FormPropertyWidgetScorer} from "./FormPropertyWidgetScorer";
import {dash, rdf, xsd} from "@paradicms/vocabularies";

const dashBlankNodeViewerScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.BlankNodeViewer;

  if (formPropertyValues.length === 0) {
    return {score: 0, widget};
  }
  if (formPropertyValues.every(value => value.termType === "BlankNode")) {
    // 1 for blank nodes
    return {score: 1, widget};
  } else {
    // 0 for all other nodes
    return {score: 0, widget};
  }
};

const dashDetailsViewerScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.DetailsViewer;

  if (formPropertyValues.length === 0) {
    return {score: 0, widget};
  }
  if (formPropertyValues.every(value => value.termType === "Literal")) {
    // 0 for literals
    return {score: 0, widget};
  } else {
    // null for IRIs and blank nodes
    return {score: null, widget};
  }
};

const dashHtmlViewerScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.HTMLViewer;

  if (formPropertyValues.length === 0) {
    return {score: 0, widget};
  }
  if (
    formPropertyValues.every(
      value => value.termType === "Literal" && value.datatype.equals(rdf.HTML)
    )
  ) {
    // 50 for literals with datatype rdf:HTML
    return {score: 50, widget};
  } else {
    // 0 for all other formPropertyValues
    return {score: 0, widget};
  }
};

const dashHyperlinkViewerScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.HyperlinkViewer;

  if (formPropertyValues.length === 0) {
    return {score: 0, widget};
  }
  if (
    formPropertyValues.every(
      value => value.termType === "Literal" && value.datatype.equals(xsd.anyURI)
    )
  ) {
    // 50 for literals with datatype xsd:anyURI
    return {score: 50, widget};
  } else if (
    formPropertyValues.every(
      value => value.termType === "Literal" && value.datatype.equals(xsd.string)
    )
  ) {
    // null for xsd:string literals
    return {score: null, widget};
  } else {
    // 0 for all other formPropertyValues
    return {score: 0, widget};
  }
};

const dashImageViewerScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.ImageViewer;

  if (formPropertyValues.length === 0) {
    return {score: 0, widget};
  }
  if (
    formPropertyValues.every(value => {
      switch (value.termType) {
        case "NamedNode":
        case "Literal":
          const lowerCaseValue = value.value.toLowerCase();
          for (const imageFileExtension of [
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
          break;
      }
      return false;
    })
  ) {
    // 50 for IRI nodes or literals that have a case-insensitive recognized image ending such as .png, .jpg, .jpeg, .gif and .svg.
    return {score: 50, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashLabelViewerScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.LabelViewer;

  if (formPropertyValues.length === 0) {
    return {score: 0, widget};
  }
  if (formPropertyValues.every(value => value.termType === "NamedNode")) {
    // 5 if the value is an IRI
    return {score: 5, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashLangStringViewer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.LangStringViewer;

  if (formPropertyValues.length === 0) {
    return {score: 0, widget};
  }
  if (
    formPropertyValues.every(
      value =>
        value.termType === "Literal" && value.datatype.equals(rdf.langString)
    )
  ) {
    // 10 if the value is a literal of type rdf:langString
    return {score: 10, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashLiteralViewerScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.LiteralViewer;

  if (formPropertyValues.length === 0) {
    return {score: 0, widget};
  }
  if (formPropertyValues.every(value => value.termType === "Literal")) {
    // 5 if the value is a literal
    return {score: 1, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashURIViewerScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.URIViewer;

  if (formPropertyValues.length === 0) {
    return {score: 0, widget};
  }
  if (formPropertyValues.every(value => value.termType === "NamedNode")) {
    // 1 if the value is an IRI
    return {score: 1, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashValueTableViewerScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => ({score: null, widget: dash.ValueTableViewer});

export const dashFormPropertyViewerScorers: readonly FormPropertyWidgetScorer[] = [
  dashBlankNodeViewerScorer,
  dashDetailsViewerScorer,
  dashHtmlViewerScorer,
  dashHyperlinkViewerScorer,
  dashImageViewerScorer,
  dashLabelViewerScorer,
  dashLangStringViewer,
  dashLiteralViewerScorer,
  dashURIViewerScorer,
  dashValueTableViewerScorer,
];
