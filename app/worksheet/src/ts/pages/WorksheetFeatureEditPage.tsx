import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";
import {Navigate} from "react-router-dom";
import {WorksheetMode} from "~/models/WorksheetMode";
import {Hrefs} from "~/Hrefs";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";

export const WorksheetFeatureEditPage: React.FunctionComponent = () => {
  const {
    dispatchWorksheet,
    exception: worksheetException,
    worksheet,
  } = useWorksheet();

  if (worksheetException) {
    return <GenericErrorHandler exception={worksheetException} />;
  } else if (!worksheet) {
    return <Spinner />;
  }

  if (worksheet.currentMark.mode === WorksheetMode.ADVANCED) {
    // Advanced mode has pages per feature set but not pages per feature.
    // The user likely switched to advanced mode will on a feature page.
    // Redirect to the "parent" feature set page.
    return (
      <Navigate
        to={Hrefs.worksheetMark({
          ...worksheet.currentMark,
          featureUri: null,
        })}
      />
    );
  }

  const feature = worksheet.currentFeature;
  if (!feature) {
    throw new EvalError("expected feature");
  }

  return (
    <WorksheetNavigationFrame
      dispatchWorksheet={dispatchWorksheet}
      headline={"Feature: " + feature.definition.title}
      finishButtonEnabled={true}
      nextButtonEnabled={true}
      previousButtonEnabled={true}
      worksheet={worksheet}
    >
      <div className="text-center w-100">
        <p>
          Select one or more boxes, then click <b>Next</b> to move to the next
          feature. Click on the arrow at the bottom right of an image to see the
          definition and other information.
        </p>
      </div>
      <MasterDetailContainer
        items={feature.values.map((featureValue) => ({
          altLabels: featureValue.definition.altLabels,
          description: featureValue.definition.abstract,
          images: featureValue.definition.images,
          onToggleSelected: () => {
            featureValue.selected = !featureValue.selected;
            dispatchWorksheet({payload: worksheet});
          },
          selected: featureValue.selected,
          title: featureValue.definition.title!,
        }))}
        mode={worksheet.currentMark.mode}
      />
    </WorksheetNavigationFrame>
  );
};
