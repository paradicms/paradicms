import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Crm {
  "": NamedNode<"http://www.cidoc-crm.org/cidoc-crm/">;

  // Properties
  P1_is_identified_by: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P1_is_identified_by"
  >;
  P2_has_type: NamedNode<"http://www.cidoc-crm.org/cidoc-crm/P2_has_type">;
  "P4_has_time-span": NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P4_has_time-span"
  >;
  P14_carried_out_by: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P14_carried_out_by"
  >;
  P104_is_subject_to: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P104_is_subject_to"
  >;
  P67i_is_referred_to_by: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P67i_is_referred_to_by"
  >;
  P82a_begin_of_the_begin: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P82a_begin_of_the_begin"
  >;
  P82b_end_of_the_end: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P82b_end_of_the_end"
  >;
  P108i_was_produced_by: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P108i_was_produced_by"
  >;
  P129i_is_subject_of: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P129i_is_subject_of"
  >;
  P138i_has_representation: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P138i_has_representation"
  >;
  P190_has_symbolic_content: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P190_has_symbolic_content"
  >;

  // Resources
  E12_Production: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/E12_Production"
  >;
  E21_Person: NamedNode<"http://www.cidoc-crm.org/cidoc-crm/E21_Person">;
  "E22_Human-Made_Object": NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/E22_Human-Made_Object"
  >;
  E30_Right: NamedNode<"http://www.cidoc-crm.org/cidoc-crm/E30_Right">;
  E33_Linguistic_Object: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/E33_Linguistic_Object"
  >;
  E33_E41_Linguistic_Appellation: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/E33_E41_Linguistic_Appellation"
  >;
  E36_Visual_Item: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/E36_Visual_Item"
  >;
  E52_Time_Span: NamedNode<"http://www.cidoc-crm.org/cidoc-crm/E52_Time-Span">;
  E55_Type: NamedNode<"http://www.cidoc-crm.org/cidoc-crm/E55_Type">;
  E73_Information_Object: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/E73_Information_Object"
  >;
}

const builder = namespace("http://www.cidoc-crm.org/cidoc-crm/") as any;
export const strict = builder as NamespaceBuilder<keyof Crm> & Crm;
export const loose = builder as NamespaceBuilder & Crm;
