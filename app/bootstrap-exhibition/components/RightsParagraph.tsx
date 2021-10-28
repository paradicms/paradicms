import {License, Rights, RightsStatement} from "@paradicms/models";
import * as React from "react";
import {useMemo} from "react";

export const RightsParagraph: React.FunctionComponent<{
  material: string;
  rights: Rights;
  style?: React.CSSProperties;
}> = ({material, rights, style}) => {
  const creatorValue = React.useMemo(() => rights.creator?.toString() ?? null, [
    rights,
  ]);

  const licenseValue: string | null = useMemo(() => {
    if (!rights || !rights.license) {
      return null;
    }
    if (typeof rights.license === "string") {
      return rights.license as string;
    }
    const license = rights.license as License;
    return <a href={license.uri}>{license.title}</a>;
  }, [rights]);

  const rightsStatementValue: string | null = useMemo(() => {
    if (!rights || !rights.statement) {
      return null;
    }
    if (typeof rights.statement === "string") {
      return rights.statement as string;
    }
    const rightsStatement = rights.statement as RightsStatement;
    return <a href={rightsStatement.uri}>{rightsStatement.prefLabel}</a>;
  }, [rights]);

  const rightsElements: React.ReactNodeArray = useMemo(() => {
    const result: React.ReactNodeArray = [];

    const pushRightsElement = (rightsElement: React.ReactNode) => {
      if (result.length > 0) {
        result.push(<span key={result.length}>&nbsp;&bull;&nbsp;</span>);
      }
      result.push(<span key={result.length}>{rightsElement}</span>);
    };

    if (creatorValue) {
      pushRightsElement(
        <span>
          <i>Creator</i>: {creatorValue}
        </span>
      );
    }

    if (rightsStatementValue) {
      pushRightsElement(
        <span>
          <i>Statement</i>: {rightsStatementValue}
        </span>
      );
    }

    if (rights.holder) {
      pushRightsElement(
        <span>
          <i>Holder</i>: {rights.holder}
        </span>
      );
    }

    if (licenseValue) {
      pushRightsElement(
        <span>
          <i>License</i>: {licenseValue}
        </span>
      );
    }

    return result;
  }, [creatorValue, licenseValue, rights, rightsStatementValue]);

  return (
    <p style={style}>
      {material} rights: {rightsElements}
    </p>
  );
};
