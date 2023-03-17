import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";
import {useNavigate} from "react-router-dom";
import {Hrefs} from "~/Hrefs";
import {WorksheetMode} from "~/models/WorksheetMode";
import {WorksheetFeatureSet} from "~/models/WorksheetFeatureSet";
import {Table} from "reactstrap";
import Select from "react-select";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";

const WorksheetFeatureSelectsTable: React.FunctionComponent<{
  dispatchFeatureSet: () => void;
  featureSet: WorksheetFeatureSet;
}> = ({dispatchFeatureSet, featureSet}) => {
  return (
    <Table>
      <tbody>
        {featureSet.features.map((feature, featureI) => {
          return (
            <tr key={featureI}>
              <td style={{verticalAlign: "middle", width: "10%"}}>
                <strong>{feature.definition.title}</strong>
              </td>
              <td className="w-90">
                <Select
                  isMulti={true}
                  onChange={options => {
                    for (const featureValue of feature.values) {
                      featureValue.unselect();
                    }
                    for (const option of options) {
                      const featureValue = feature.values.find(
                        value => value.uri === option.value
                      )!;
                      featureValue.select();
                    }
                    dispatchFeatureSet();
                  }}
                  options={feature.values.map(value => ({
                    label: value.definition.prefLabel,
                    value: value.uri,
                  }))}
                  value={feature.values
                    .filter(value => value.selected)
                    .map(value => ({
                      label: value.definition.prefLabel,
                      value: value.uri,
                    }))}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export const WorksheetFeatureSetEditPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

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

  const featureSet = worksheet.currentFeatureSet;
  if (!featureSet) {
    throw new EvalError("expected feature set");
  }

  return (
    <WorksheetNavigationFrame
      dispatchWorksheet={dispatchWorksheet}
      finishButtonEnabled={true}
      headline={`Feature Set: ${featureSet.definition.title}`}
      nextButtonEnabled={true}
      previousButtonEnabled={true}
      worksheet={worksheet}
    >
      {worksheet.currentMark.mode === WorksheetMode.ADVANCED ? (
        <WorksheetFeatureSelectsTable
          dispatchFeatureSet={() => dispatchWorksheet({payload: worksheet})}
          featureSet={featureSet}
        />
      ) : (
        <>
          <div className="text-center w-100">
            <p>
              This is the list of features for this work type. Click on{" "}
              <b>Next</b> to begin entering data for each feature in order, or
              click on a specific feature to jump to it. You can click on{" "}
              <b>Finish</b> at any time to return to this page and see a summary
              of your choices.
            </p>
          </div>
          <MasterDetailContainer
            items={featureSet.features.map(feature => ({
              altLabels: null,
              description: feature.definition.abstract,
              images: feature.definition.images,
              onToggleSelected: () => {
                navigate(
                  Hrefs.worksheetMark({
                    featureSetUri: featureSet.uri,
                    featureUri: feature.uri,
                    review: false,
                    mode: worksheet!.currentMark.mode,
                    worksheetStateId: worksheet!.stateId,
                  })
                );
              },
              selected: null,
              title: feature.definition.title,
            }))}
            mode={worksheet.currentMark.mode}
          />
        </>
      )}
    </WorksheetNavigationFrame>
  );
};
