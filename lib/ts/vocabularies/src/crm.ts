import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

interface Crm {
  "": NamedNode<"http://www.cidoc-crm.org/cidoc-crm/">;

  // Properties
  P2_has_type: NamedNode<"http://www.cidoc-crm.org/cidoc-crm/P2_has_type">;
  P104_is_subject_to: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P104_is_subject_to"
  >;
  P67i_is_referred_to_by: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/P67i_is_referred_to_by"
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
  E30_Right: NamedNode<"http://www.cidoc-crm.org/cidoc-crm/E30_Right">;
  E33_Linguistic_Object: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/E33_Linguistic_Object"
  >;
  E36_Visual_Item: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/E36_Visual_Item"
  >;
  E55_Type: NamedNode<"http://www.cidoc-crm.org/cidoc-crm/E55_Type">;
  E73_Information_Object: NamedNode<
    "http://www.cidoc-crm.org/cidoc-crm/E73_Information_Object"
  >;
}

const builder = namespace("http://www.cidoc-crm.org/cidoc-crm/") as any;
export const strict = builder as NamespaceBuilder<keyof Crm> & Crm;
export const loose = builder as NamespaceBuilder & Crm;
