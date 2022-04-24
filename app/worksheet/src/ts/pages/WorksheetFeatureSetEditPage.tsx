import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Hrefs} from "~/Hrefs";
import {WorksheetDescriptionFragment} from "~/components/WorksheetDescriptionFragment";

export const WorksheetFeatureSetEditPage: React.FunctionComponent = () => {
  const [worksheet, _] = useWorksheet();
  if (!worksheet) {
    return <Spinner />;
  }
  const featureSet = worksheet.currentFeatureSet;
  if (!featureSet) {
    throw new EvalError("expected feature set");
  }

  const includeFeatureDescriptions =
    !worksheet.currentMark.review &&
    featureSet.features.some((feature) => !!feature.definition.abstract);

  return (
    <WorksheetNavigationFrame
      finishButtonEnabled={true}
      headline={`Feature Set: ${featureSet.definition.title}`}
      nextButtonEnabled={true}
      previousButtonEnabled={true}
      worksheet={worksheet}
    >
      <p>
        This is the list of features for this work type. Click on <b>Next</b> to
        begin entering data for each feature in order, or click on a specific
        feature to jump to it. You can click on <b>Finish</b> at any time to
        return to this page and see a summary of your choices.
      </p>
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
                <td className="text-center w-25">
                  <Link
                    className="btn btn-lg btn-secondary w-100"
                    to={Hrefs.worksheetMark({
                      featureSetUri: featureSet.uri,
                      featureUri: feature.uri,
                      worksheetStateId: worksheet!.stateId,
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
                  {feature.values.map((value) => (
                    <span
                      className="border border-info h4 m-2 p-2"
                      key={value.uri}
                      style={{borderWidth: "8px !important"}}
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
    </WorksheetNavigationFrame>
  );
};
