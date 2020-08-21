import {BreadcrumbsProps} from "components/BreadcrumbsProps";
import {Breadcrumbs as MuiBreadcrumbs} from "@material-ui/core";
import * as React from "react";
import Link from "next/link";
import {Hrefs} from "lib/Hrefs";

export const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps & {
  className?: string;
}> = ({className, collection, institution, object}) => {
  const breadcrumbNodes: React.ReactNode[] = [
    <Link key="home" {...Hrefs.home}>
      Home
    </Link>,
    <Link key="institutions" {...Hrefs.home}>
      Institutions
    </Link>,
  ];
  if (institution) {
    breadcrumbNodes.push(
      <Link
        key={`institution-${institution.uri}`}
        {...Hrefs.institution(institution.uri).home}
      >
        {institution.name}
      </Link>
    );

    if (collection) {
      breadcrumbNodes.push(
        <Link key="collections" {...Hrefs.institution(institution.uri).home}>
          Collections
        </Link>
      );
      breadcrumbNodes.push(
        <Link
          key={`collection-${collection.uri}`}
          {...Hrefs.institution(institution.uri).collection(collection.uri)
            .home}
        >
          {collection.title}
        </Link>
      );
    }

    if (object) {
      if (collection) {
        breadcrumbNodes.push(
          <Link
            key="objects"
            {...Hrefs.institution(institution.uri)
              .collection(collection.uri)
              .objects()}
          >
            Objects
          </Link>
        );
      } else {
        breadcrumbNodes.push(<span key="objects">Objects</span>);
      }
      breadcrumbNodes.push(
        <Link
          key={`object-${object.uri}`}
          {...Hrefs.institution(institution.uri).object(object.uri)}
        >
          {object.title}
        </Link>
      );
    }
  }

  return (
    <MuiBreadcrumbs className={className} data-cy="breadcrumbs">
      {breadcrumbNodes}
    </MuiBreadcrumbs>
  );
};
