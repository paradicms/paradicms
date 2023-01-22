import {License, Rights} from "@paradicms/models";
import * as React from "react";
import {useMemo} from "react";
import {RightsStatementLink} from "./RightsStatementLink";
import {LicenseLink} from "./LicenseLink";

export const RightsParagraph: React.FunctionComponent<{
  material: string;
  rights: Rights;
  style?: React.CSSProperties;
}> = ({material, rights, style}) => {
  const rightsElements: React.ReactElement[] = useMemo(() => {
    const license = rights.license;
    if (license instanceof License && !license.requiresAttribution) {
      return [];
    }

    const result: React.ReactElement[] = [];

    const pushRightsElement = (rightsElement: React.ReactNode) => {
      if (result.length > 0) {
        result.push(<span key={result.length}>&nbsp;&bull;&nbsp;</span>);
      }
      result.push(<span key={result.length}>{rightsElement}</span>);
    };

    const creatorTexts = new Set<string>();
    for (const creator of rights.creators) {
      pushRightsElement(
        <span>
          <i>Creator</i>: {creator.toString()}
        </span>
      );
      creatorTexts.add(creator.toString());
    }

    if (rights.statement) {
      pushRightsElement(
        <span>
          <i>Statement</i>:{" "}
          <RightsStatementLink rightsStatement={rights.statement} />
        </span>
      );
    }

    for (const holder of rights.holders) {
      if (creatorTexts.has(holder.toString())) {
        continue;
      }
      pushRightsElement(
        <span>
          <i>Holder</i>: {holder.toString()}
        </span>
      );
    }

    if (license) {
      pushRightsElement(
        <span>
          <i>License</i>: {<LicenseLink license={license} />}
        </span>
      );
    }

    return result;
  }, [rights]);

  if (rightsElements.length === 0) {
    return null;
  }

  return (
    <p style={style}>
      {material} rights: {rightsElements}
    </p>
  );
};
