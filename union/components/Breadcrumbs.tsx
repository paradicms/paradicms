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
      <a>Home</a>
    </Link>,
    <Link key="institutions" {...Hrefs.home}>
      <a>Institutions</a>
    </Link>,
  ];
  if (institution) {
    breadcrumbNodes.push(
      <Link
        key={`institution-${institution.uri}`}
        {...Hrefs.institution(institution.uri).home}
      >
        <a>{institution.name}</a>
      </Link>
    );

    if (collection) {
      breadcrumbNodes.push(
        <Link key="collections" {...Hrefs.institution(institution.uri).home}>
          <a>Collections</a>
        </Link>
      );
      breadcrumbNodes.push(
        <Link
          key={`collection-${collection.uri}`}
          {...Hrefs.institution(institution.uri).collection(collection.uri)
            .home}
        >
          <a>{collection.title}</a>
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
            <a>Objects</a>
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
          <a>{object.title}</a>
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
