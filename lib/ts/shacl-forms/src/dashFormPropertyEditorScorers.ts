import {dash, rdf, xsd} from "@paradicms/vocabularies";
import {FormPropertyWidgetScorer} from "./FormPropertyWidgetScorer";
import {NodeKind} from "@paradicms/shacl";

const dashAutoCompleteEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.AutoCompleteEditor;

  if (
    formPropertyValues.length > 0 &&
    formPropertyValues.every(value => value.termType === "NamedNode")
  ) {
    // 1 if the value is an IRI.
    return {score: 1, widget};
  }

  if (formProperty.shape.nodeKind !== NodeKind.IRI) {
    // 0 otherwise
    return {score: 0, widget};
  }

  if (formProperty.shape.classes.length > 0) {
    // 1 if the value is an IRI.
    return {score: 1, widget};
  }

  // 0 otherwise
  return {score: 0, widget};
};

const dashBooleanSelectEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.BooleanSelectEditor;

  if (
    formPropertyValues.length > 0 &&
    formPropertyValues.every(
      term => term.termType === "Literal" && term.datatype.equals(xsd.boolean)
    )
  ) {
    // 10 for xsd:boolean literals
    return {score: 10, widget};
  }

  const datatype = formProperty.shape.datatype;

  if (datatype) {
    if (datatype.equals(xsd.boolean)) {
      // 10 for xsd:boolean literals.
      return {score: 10, widget};
    } else {
      // 0 for non-literals or if there is a sh:datatype constraint
      return {score: 0, widget};
    }
  }

  if (formProperty.shape.nodeKind) {
    switch (formProperty.shape.nodeKind) {
      case NodeKind.BLANK_NODE_OR_LITERAL:
      case NodeKind.IRI_OR_LITERAL:
      case NodeKind.LITERAL:
        break;
      default:
        // 0 for non-literals
        return {score: 0, widget};
    }
  }

  if (formProperty.shape.classes.length > 0) {
    // 0 for non-literals
    return {score: 0, widget};
  }

  if (formProperty.shape.in_ && formProperty.shape.in_.length > 0) {
    if (
      formProperty.shape.in_.every(
        term => term.termType === "Literal" && term.datatype.equals(xsd.boolean)
      )
    ) {
      // 10 for xsd:boolean literals
      return {score: 10, widget};
    } else {
      // 0 for non-literals
      return {score: 0, widget};
    }
  }

  // null for properties allowing literals without specifying a particular datatype
  return {score: null, widget};
};

const dashDatePickerEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.DatePickerEditor;

  if (
    formPropertyValues.length > 0 &&
    formPropertyValues.every(
      value => value.termType === "Literal" && value.datatype.equals(xsd.date)
    )
  ) {
    // 10 for xsd:date literals
    return {score: 10, widget};
  }

  const datatype = formProperty.shape.datatype;
  if (datatype && datatype.equals(xsd.date)) {
    // 5 if the property has sh:datatype xsd:date
    return {score: 5, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashDateTimePickerEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.DateTimePickerEditor;

  if (
    formPropertyValues.length > 0 &&
    formPropertyValues.every(
      value =>
        value.termType === "Literal" && value.datatype.equals(xsd.dateTime)
    )
  ) {
    // 10 for xsd:dateTime literals
    return {score: 10, widget};
  }

  const datatype = formProperty.shape.datatype;
  if (datatype && datatype.equals(xsd.dateTime)) {
    // 5 if the property has sh:datatype xsd:dateTime
    return {score: 5, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashDetailsEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.DetailsEditor;

  if (
    formProperty.shape.classes.length > 0 ||
    formProperty.shape.nodeShapes.length > 0
  ) {
    // null for non-literals, i.e. it can be selected manually via dash:editor.
    return {score: null, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashEnumSelectEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.EnumSelectEditor;
  if (formProperty.shape.in_ && formProperty.shape.in_.length > 0) {
    // 10 if there exists a sh:in constraint for the same property at the current focus node
    return {score: 10, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashInstancesSelectEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.InstancesSelectEditor;
  if (formProperty.shape.classes.length > 0) {
    // null if there exists a sh:class for the property
    return {score: null, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashRichTextEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.RichTextEditor;
  if (formPropertyValues.length > 0) {
    if (
      formPropertyValues.every(
        value => value.termType === "Literal" && value.datatype.equals(rdf.HTML)
      )
    ) {
      // 10 for rdf:HTML literals
      return {score: 10, widget};
    }
  }

  const datatype = formProperty.shape.datatype;
  if (datatype && datatype.equals(rdf.HTML)) {
    // 10 for rdf:HTML literals
    return {score: 10, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashSubClassEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  // null i.e. this should be selected explicitly through a dash:editor statement
  return {score: null, widget: dash.SubClassEditor};
};

const dashTextAreaEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.TextAreaEditor;

  const datatype = formProperty.shape.datatype;
  const singleLine = formProperty.shape.singleLine;
  const valuesAreXsdStringLiterals =
    formPropertyValues.length > 0 &&
    formPropertyValues.every(
      term => term.termType === "Literal" && term.datatype.equals(xsd.string)
    );

  if (singleLine !== null) {
    if (singleLine) {
      // 0 if the property is marked dash:singleLine true
      return {score: 0, widget};
    } else {
      if (
        valuesAreXsdStringLiterals ||
        (datatype && datatype.equals(xsd.string))
      ) {
        // 20 if the value is an xsd:string literal and dash:singleLine false
        return {score: 20, widget};
      }
    }
  }

  // 5 if the value is an xsd:string literal.
  if (valuesAreXsdStringLiterals || (datatype && datatype.equals(xsd.string))) {
    return {score: 5, widget};
  }

  // 2 if the property has xsd:string among the permissible datatypes.
  for (const orPropertyShape of formProperty.shape.or) {
    if (
      orPropertyShape.datatype &&
      orPropertyShape.datatype.equals(xsd.string)
    ) {
      return {score: 2, widget};
    }
  }

  return {score: 0, widget};
};

const dashTextFieldEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.TextFieldEditor;
  if (formPropertyValues.length > 0) {
    // 10 if the value is a literal that is neither rdf:langString nor xsd:boolean. 0 otherwise.
    for (const value of formPropertyValues) {
      if (value.termType !== "Literal") {
        return {score: 0, widget};
      }
      if (
        value.datatype.equals(rdf.langString) ||
        value.datatype.equals(xsd.boolean)
      ) {
        return {score: 0, widget};
      }
    }
    return {score: 10, widget};
  }

  const datatype = formProperty.shape.datatype;
  if (!datatype) {
    return {score: 0, widget};
  }
  if (!datatype.equals(rdf.langString) && !datatype.equals(xsd.boolean)) {
    // 10 if the value is a literal that is neither rdf:langString nor xsd:boolean.
    return {score: 10, widget};
  } else {
    // 0 otherwise
    return {score: 0, widget};
  }
};

const dashURIEditorScorer: FormPropertyWidgetScorer = ({
  formProperty,
  formPropertyValues,
}) => {
  const widget = dash.URIEditor;

  const valuesAreIris =
    formPropertyValues.length > 0 &&
    formPropertyValues.every(value => value.termType === "NamedNode");
  const nodeKind = formProperty.shape.nodeKind;

  if (
    valuesAreIris &&
    nodeKind === NodeKind.IRI &&
    formProperty.shape.classes.length === 0
  ) {
    // 10 if the value is a IRI node and the property has sh:nodeKind sh:IRI and no sh:class constraint.
    return {score: 10, widget};
  }

  if (valuesAreIris) {
    return {score: null, widget};
  }

  // 0 otherwise
  return {score: 0, widget};
};

export const dashFormPropertyEditorScorers: readonly FormPropertyWidgetScorer[] = [
  dashAutoCompleteEditorScorer,
  // Skip dash:BlankNodeEditor
  dashBooleanSelectEditorScorer,
  dashDatePickerEditorScorer,
  dashDateTimePickerEditorScorer,
  dashDetailsEditorScorer,
  dashEnumSelectEditorScorer,
  dashInstancesSelectEditorScorer,
  dashRichTextEditorScorer,
  dashSubClassEditorScorer,
  dashTextAreaEditorScorer,
  // Skip dash:TextAreaWithLangEditor
  dashTextFieldEditorScorer,
  // Skip dash:TextFieldWithLangEditor
  dashURIEditorScorer,
];
