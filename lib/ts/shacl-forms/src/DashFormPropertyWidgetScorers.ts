import {dash, rdf, xsd} from "@paradicms/vocabularies";
import {FormPropertyWidgetScorer} from "./FormPropertyWidgetScorer";
import {FormProperty} from "./FormProperty";
import {NodeKind} from "@paradicms/shacl";

const DashAutoCompleteEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    const values = formProperty.values;

    if (
      values.length > 0 &&
      values.every(value => value.termType === "NamedNode")
    ) {
      // 1 if the value is an IRI.
      return 1;
    }

    if (formProperty.shape.nodeKind !== NodeKind.IRI) {
      // 0 otherwise
      return 0;
    }

    if (formProperty.shape.classes.length > 0) {
      // 1 if the value is an IRI.
      return 1;
    }

    // 0 otherwise
    return 0;
  },

  widgetName: dash.AutoCompleteEditor,
};

const DashBooleanSelectEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    const values = formProperty.values;
    if (
      values.length > 0 &&
      values.every(
        term => term.termType === "Literal" && term.datatype.equals(xsd.boolean)
      )
    ) {
      // 10 for xsd:boolean literals
      return 10;
    }

    const datatype = formProperty.shape.datatype;

    if (datatype) {
      if (datatype.equals(xsd.boolean)) {
        // 10 for xsd:boolean literals.
        return 10;
      } else {
        // 0 for non-literals or if there is a sh:datatype constraint
        return 0;
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
          return 0;
      }
    }

    if (formProperty.shape.classes.length > 0) {
      // 0 for non-literals
      return 0;
    }

    if (formProperty.shape.in_ && formProperty.shape.in_.length > 0) {
      if (
        formProperty.shape.in_.every(
          term =>
            term.termType === "Literal" && term.datatype.equals(xsd.boolean)
        )
      ) {
        // 10 for xsd:boolean literals
        return 10;
      } else {
        // 0 for non-literals
        return 0;
      }
    }

    // null for properties allowing literals without specifying a particular datatype
    return null;
  },

  widgetName: dash.BooleanSelectEditor,
};

const DashDatePickerEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    const values = formProperty.values;
    if (
      values.length > 0 &&
      values.every(
        value => value.termType === "Literal" && value.datatype.equals(xsd.date)
      )
    ) {
      // 10 for xsd:date literals
      return 10;
    }

    const datatype = formProperty.shape.datatype;
    if (datatype && datatype.equals(xsd.date)) {
      // 5 if the property has sh:datatype xsd:date
      return 5;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.DatePickerEditor,
};

const DashDateTimePickerEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    const values = formProperty.values;
    if (
      values.length > 0 &&
      values.every(
        value =>
          value.termType === "Literal" && value.datatype.equals(xsd.dateTime)
      )
    ) {
      // 10 for xsd:dateTime literals
      return 10;
    }

    const datatype = formProperty.shape.datatype;
    if (datatype && datatype.equals(xsd.dateTime)) {
      // 5 if the property has sh:datatype xsd:dateTime
      return 5;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.DateTimePickerEditor,
};

const DashDetailsEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    if (
      formProperty.shape.classes.length > 0 ||
      formProperty.shape.nodeShapes.length > 0
    ) {
      // null for non-literals, i.e. it can be selected manually via dash:editor.
      return null;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.DetailsEditor,
};

const DashEnumSelectEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    if (formProperty.shape.in_ && formProperty.shape.in_.length > 0) {
      // 10 if there exists a sh:in constraint for the same property at the current focus node
      return 10;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.EnumSelectEditor,
};

const DashInstancesSelectEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    if (formProperty.shape.classes.length > 0) {
      // null if there exists a sh:class for the property
      return null;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.InstancesSelectEditor,
};

const DashRichTextEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    const values = formProperty.values;
    if (values.length > 0) {
      if (
        values.every(
          value =>
            value.termType === "Literal" && value.datatype.equals(rdf.HTML)
        )
      ) {
        // 10 for rdf:HTML literals
        return 10;
      }
    }

    const datatype = formProperty.shape.datatype;
    if (datatype && datatype.equals(rdf.HTML)) {
      // 10 for rdf:HTML literals
      return 10;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.RichTextEditor,
};

const DashSubClassEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    // null i.e. this should be selected explicitly through a dash:editor statement
    return null;
  },

  widgetName: dash.SubClassEditor,
};

const DashTextAreaEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    const datatype = formProperty.shape.datatype;
    const singleLine = formProperty.shape.singleLine;
    const values = formProperty.values;
    const valuesAreXsdStringLiterals =
      values.length > 0 &&
      values.every(
        term => term.termType === "Literal" && term.datatype.equals(xsd.string)
      );

    if (singleLine !== null) {
      if (singleLine) {
        // 0 if the property is marked dash:singleLine true
        return 0;
      } else {
        if (
          valuesAreXsdStringLiterals ||
          (datatype && datatype.equals(xsd.string))
        ) {
          // 20 if the value is an xsd:string literal and dash:singleLine false
          return 20;
        }
      }
    }

    // 5 if the value is an xsd:string literal.
    if (
      valuesAreXsdStringLiterals ||
      (datatype && datatype.equals(xsd.string))
    ) {
      return 5;
    }

    // 2 if the property has xsd:string among the permissible datatypes.
    for (const orPropertyShape of formProperty.shape.or) {
      if (
        orPropertyShape.datatype &&
        orPropertyShape.datatype.equals(xsd.string)
      ) {
        return 2;
      }
    }

    return 0;
  },

  widgetName: dash.TextAreaEditor,
};

const DashTextFieldEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    const values = formProperty.values;
    if (values.length > 0) {
      // 10 if the value is a literal that is neither rdf:langString nor xsd:boolean. 0 otherwise.
      for (const value of values) {
        if (value.termType !== "Literal") {
          return 0;
        }
        if (
          value.datatype.equals(rdf.langString) ||
          value.datatype.equals(xsd.boolean)
        ) {
          return 0;
        }
      }
      return 10;
    }

    const datatype = formProperty.shape.datatype;
    if (!datatype) {
      return 0;
    }
    if (!datatype.equals(rdf.langString) && !datatype.equals(xsd.boolean)) {
      // 10 if the value is a literal that is neither rdf:langString nor xsd:boolean.
      return 10;
    } else {
      // 0 otherwise
      return 0;
    }
  },

  widgetName: dash.TextFieldEditor,
};

const DashURIEditorScorer: FormPropertyWidgetScorer = {
  score(formProperty: FormProperty): number | null {
    const values = formProperty.values;
    const valuesAreIris =
      values.length > 0 &&
      values.every(value => value.termType === "NamedNode");
    const nodeKind = formProperty.shape.nodeKind;

    if (
      valuesAreIris &&
      nodeKind === NodeKind.IRI &&
      formProperty.shape.classes.length === 0
    ) {
      // 10 if the value is a IRI node and the property has sh:nodeKind sh:IRI and no sh:class constraint.
      return 10;
    }

    if (valuesAreIris) {
      return null;
    }

    // 0 otherwise
    return 0;
  },

  widgetName: dash.URIEditor,
};

export const dashEditorScorers = [
  DashAutoCompleteEditorScorer,
  // Skip dash:BlankNodeEditor
  DashBooleanSelectEditorScorer,
  DashDatePickerEditorScorer,
  DashDateTimePickerEditorScorer,
  DashDetailsEditorScorer,
  DashEnumSelectEditorScorer,
  DashInstancesSelectEditorScorer,
  DashRichTextEditorScorer,
  DashSubClassEditorScorer,
  DashTextAreaEditorScorer,
  // Skip dash:TextAreaWithLangEditor
  DashTextFieldEditorScorer,
  // Skip dash:TextFieldWithLangEditor
  DashURIEditorScorer,
];

if (
  new Set(dashEditorScorers.map(scorer => scorer.widgetName.value)).size !==
  dashEditorScorers.length
) {
  throw new EvalError("duplicate widget names");
}
