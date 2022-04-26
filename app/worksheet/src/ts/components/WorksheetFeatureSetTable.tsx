import * as React from "react";
import {WorksheetFeatureSet} from "~/models/WorksheetFeatureSet";
import {Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Hrefs} from "~/Hrefs";
import {WorksheetDescriptionFragment} from "~/components/WorksheetDescriptionFragment";

export const WorksheetFeatureSetTable: React.FunctionComponent<{
  featureSet: WorksheetFeatureSet;
  includeFeatureDescriptions?: boolean;
  worksheetStateId: string;
}> = ({featureSet, includeFeatureDescriptions, worksheetStateId}) => {
  if (typeof includeFeatureDescriptions === "undefined") {
    includeFeatureDescriptions = featureSet.features.some(
      (feature) => !!feature.definition.abstract
    );
  }

  return (
    <Table className="table-bordered">
      <thead>
        <tr>
          <th className="text-center w-25">Feature</th>
          {includeFeatureDescriptions ? (
            <th className="text-center w-25">Description</th>
          ) : null}
          <th className="text-center">Value(s)</th>
        </tr>
      </thead>
      <tbody>
        {featureSet.features.map((feature) => {
          return (
            <tr key={feature.uri}>
              <td className="align-middle text-center w-25">
                <Link
                  className="btn btn-lg btn-secondary w-100"
                  to={Hrefs.worksheetMark({
                    featureSetUri: featureSet.uri,
                    featureUri: feature.uri,
                    worksheetStateId: worksheetStateId,
                  })}
                >
                  {feature.definition.title}
                </Link>
              </td>
              {includeFeatureDescriptions ? (
                <td className="w-25">
                  <WorksheetDescriptionFragment
                    description={feature.definition.abstract}
                  />
                </td>
              ) : null}
              <td className="align-middle">
                {feature.values
                  .filter((value) => value.selected)
                  .map((value) => (
                    <span
                      className="border border-info d-inline-block h4 m-2 p-2"
                      key={value.uri}
                      style={{borderWidth: "4px !important"}}
                    >
                      {value.definition.title}
                    </span>
                  ))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
