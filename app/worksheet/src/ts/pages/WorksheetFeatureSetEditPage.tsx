import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {WorksheetFeatureSetTable} from "~/components/WorksheetFeatureSetTable";

export const WorksheetFeatureSetEditPage: React.FunctionComponent = () => {
  const [worksheet, _] = useWorksheet();
  if (!worksheet) {
    return <Spinner />;
  }
  const featureSet = worksheet.currentFeatureSet;
  if (!featureSet) {
    throw new EvalError("expected feature set");
  }

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
      <WorksheetFeatureSetTable
        featureSet={featureSet}
        worksheetStateId={worksheet.stateId}
      />
    </WorksheetNavigationFrame>
  );
};
