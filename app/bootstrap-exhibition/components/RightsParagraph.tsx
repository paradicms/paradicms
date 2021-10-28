import {Rights} from "@paradicms/models";
import * as React from "react";
import {useMemo} from "react";
import {LicenseLink, RightsStatementLink} from "../../../lib/bootstrap/src";

export const RightsParagraph: React.FunctionComponent<{
  material: string;
  rights: Rights;
  style?: React.CSSProperties;
}> = ({material, rights, style}) => {
  const creatorValue = React.useMemo(() => rights.creator?.toString() ?? null, [
    rights,
  ]);

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

    if (rights.statement) {
      pushRightsElement(
        <span>
          <i>Statement</i>:{" "}
          <RightsStatementLink rightsStatement={rights.statement} />
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

    if (rights.license) {
      pushRightsElement(
        <span>
          <i>License</i>: {<LicenseLink license={rights.license} />}
        </span>
      );
    }

    return result;
  }, [creatorValue, rights]);

  return (
    <p style={style}>
      {material} rights: {rightsElements}
    </p>
  );
};
