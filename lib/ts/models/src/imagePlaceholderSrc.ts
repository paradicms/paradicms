import {ImageDimensions} from "./ImageDimensions";

export const imagePlaceholderSrc = (dimensions: ImageDimensions): string => {
  return `https://paradicms.org/img/placeholder/${dimensions.width}x${dimensions.height}.png`;
};
