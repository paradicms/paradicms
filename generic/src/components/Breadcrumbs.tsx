import {BreadcrumbsProps} from "~/components/BreadcrumbsProps";
import {Breadcrumbs as MuiBreadcrumbs} from "@material-ui/core";
import {Link} from "gatsby";
import {Hrefs} from "~/Hrefs";
import * as React from "react";

export const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps & {
  className?: string;
}> = ({className, collection, institution, object}) => {
  const breadcrumbNodes: React.ReactNode[] = [
    <Link key="home" to={Hrefs.home}>
      Home
    </Link>,
    <Link key="institutions" to={Hrefs.home}>
      Institutions
    </Link>,
  ];
  if (institution) {
    breadcrumbNodes.push(
      <Link
        key={`institution-${institution.uri}`}
        to={Hrefs.institution(institution).home}
      >
        {institution.name}
      </Link>
    );

    if (collection) {
      breadcrumbNodes.push(
        <Link key="collections" to={Hrefs.institution(institution).home}>
          Collections
        </Link>
      );
      breadcrumbNodes.push(
        <Link
          key={`collection-${collection.uri}`}
          to={Hrefs.institution(institution).collection(collection).home}
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
            to={Hrefs.institution(institution)
              .collection(collection)
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
          to={Hrefs.institution(institution).object(object)}
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
