// Discriminated union that captures an RDF literal or an RDF named node
export interface Value {
  type: "text" | "uri";
  value: string;
}

export interface TextValue extends Value {
  type: "text";
}

export interface UriValue extends Value {
  type: "uri";
}
