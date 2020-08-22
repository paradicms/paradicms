import basex from "base-x";
const base58 = basex(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
);

export const decodeFileName = (value: string): string =>
  base58.decode(value).toString("utf-8");

export const encodeFileName = (value: string): string =>
  base58.encode(Buffer.from(value, "utf-8"));
