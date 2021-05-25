import React, {forwardRef} from "react";
import NextLink, {LinkProps as NextLinkProps} from "next/link";
import {Link as MuiLink, LinkProps as MuiLinkProps} from "@material-ui/core";
import invariant from "ts-invariant";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LinkRef = any;

export type LinkImplProps =
  | (Omit<MuiLinkProps, "href" | "classes"> &
      Pick<NextLinkProps, "href" | "as" | "prefetch">)
  | HTMLAnchorElement;

const LinkImpl = ({href, prefetch, ...props}: NextLinkProps, ref: LinkRef) => {
  invariant(href, "href must be defined");
  return (
    <NextLink href={href} prefetch={prefetch} passHref>
      <MuiLink ref={ref} {...props} />
    </NextLink>
  );
};

export const Link = forwardRef<LinkImplProps, LinkRef>(LinkImpl);
