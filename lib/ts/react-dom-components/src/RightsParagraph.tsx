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

    const creatorTexts = new Set<string>();
    for (const creator of rights.creators) {
      pushRightsElement(
        <span>
          <i>Creator</i>: {creator.toString()}
        </span>
      );
      creatorTexts.add(creator.toString());
    }

    if (rights.rightsStatement) {
      pushRightsElement(
        <span>
          <i>Statement</i>:{" "}
          <RightsStatementLink rightsStatement={rights.rightsStatement} />
        </span>
      );
    }

    for (const holder of rights.rightsHolders) {
      if (creatorTexts.has(holder.toString())) {
        continue;
      }
      pushRightsElement(
        <span>
          <i>Holder</i>: {holder.toString()}
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
