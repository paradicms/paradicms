import * as React from "react";
import {useMemo} from "react";
import {RightsStatementLink} from "./RightsStatementLink";
import {LicenseLink} from "./LicenseLink";
import {RightsMixin} from "@paradicms/models";

export const RightsParagraph: React.FunctionComponent<{
  material: string;
  rights: RightsMixin;
  style?: React.CSSProperties;
  tag?: React.ElementType;
}> = ({material, rights, style, tag}) => {
  if (!rights.requiresAttribution) {
    return null;
  }

  const rightsElements: React.ReactElement[] = useMemo(() => {
    const result: React.ReactElement[] = [];

    const pushRightsElement = (rightsElement: React.ReactNode) => {
      if (result.length > 0) {
        result.push(<span key={result.length}>&nbsp;&bull;&nbsp;</span>);
      }
      result.push(<span key={result.length}>{rightsElement}</span>);
    };

    const creatorLabels = new Set<string>();
    for (const creator of rights.creators) {
      pushRightsElement(
        <span>
          <i>Creator</i>: {creator.label}
        </span>
      );
      creatorLabels.add(creator.label);
    }

    for (const rightsStatement of rights.rightsStatements) {
      pushRightsElement(
        <span>
          <i>Statement</i>:{" "}
          <RightsStatementLink rightsStatement={rightsStatement} />
        </span>
      );
    }

    for (const rigthsHolder of rights.rightsHolders) {
      if (creatorLabels.has(rigthsHolder.label)) {
        continue;
      }
      pushRightsElement(
        <span>
          <i>Holder</i>:{" "}
          <span dangerouslySetInnerHTML={{__html: rigthsHolder.label}} />
        </span>
      );
    }

    for (const license of rights.licenses) {
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

  const Tag = tag || "p";

  return (
    <Tag style={style}>
      {material}: {rightsElements}
    </Tag>
  );
};
