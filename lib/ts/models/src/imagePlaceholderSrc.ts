import {ImageDimensions} from "./ImageDimensions";

export const imagePlaceholderSrc = (dimensions: ImageDimensions): string => {
  return `https://paradicms.github.io/img/placeholder/${dimensions.width}x${dimensions.height}.png`;
};
