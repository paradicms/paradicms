import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {NamedValue} from "@paradicms/models";
import {useState} from "react";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";

export const WorksheetFeatureEditPage: React.FunctionComponent = () => {
  const [worksheet, dispatchWorksheet] = useWorksheet();

  // @ts-ignore
  const [detailFeatureValue, setDetailFeatureValue] =
    useState<NamedValue | null>(null);

  if (!worksheet) {
    return <Spinner />;
  }
  const feature = worksheet.currentFeature;
  if (!feature) {
    throw new EvalError("expected feature");
  }

  return (
    <WorksheetNavigationFrame
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
        items={feature.values
          .concat()
          .sort((left, right) =>
            left.definition.title!.localeCompare(right.definition.title!)
          )
          .map((featureValue) => ({
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
