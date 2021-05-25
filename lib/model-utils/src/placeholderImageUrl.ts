import {ImageDimensions} from "@paradicms/models";

export const placeholderImageUrl = (kwds: {
  dimensions: ImageDimensions;
  text: string;
}): string => {
  const {dimensions, text} = kwds;
  return `https://place-hold.it/${dimensions.width}x${
    dimensions.height
  }?text=${encodeURIComponent(text)}`;
};
