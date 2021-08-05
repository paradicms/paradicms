const basex = require("base-x");
const base58 = basex(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
);

export const encodeBase58String = (value: string): string =>
  base58.encode(new TextEncoder().encode(value));
