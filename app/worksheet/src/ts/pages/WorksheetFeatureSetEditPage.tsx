import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";
import {thumbnailTargetDimensions} from "@paradicms/bootstrap";
import {useNavigate} from "react-router-dom";
import {Hrefs} from "~/Hrefs";

export const WorksheetFeatureSetEditPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
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
      <div className="text-center w-100">
        <p>
          This is the list of features for this work type. Click on <b>Next</b>{" "}
          to begin entering data for each feature in order, or click on a
          specific feature to jump to it. You can click on <b>Finish</b> at any
          time to return to this page and see a summary of your choices.
        </p>
      </div>
      <MasterDetailContainer
        items={featureSet.features
          .concat()
          .sort((left, right) =>
            left.definition.title!.localeCompare(right.definition.title!)
          )
          .map((feature) => ({
            altLabels: null,
            description: feature.definition.abstract,
            onToggleSelected: () => {
              navigate(
                Hrefs.worksheetMark({
                  featureSetUri: featureSet.uri,
                  featureUri: feature.uri,
                  worksheetStateId: worksheet?.stateId,
                })
              );
            },
            selected: null,
            thumbnail: feature.definition.thumbnail({
              targetDimensions: thumbnailTargetDimensions,
            }),
            title: feature.definition.title,
          }))}
      />
    </WorksheetNavigationFrame>
  );
};
