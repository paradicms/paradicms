import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Col, Container, Input, Row} from "reactstrap";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
// import {useReducer} from "react";
import {Spinner} from "~/components/Spinner";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";

export const WorksheetEditPage: React.FunctionComponent = () => {
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

  return (
    <WorksheetNavigationFrame
      dispatchWorksheet={dispatchWorksheet}
      headline={"Worksheet: " + worksheet.stateId}
      finishButtonEnabled={worksheet.selectedFeatureSetCount > 0}
      nextButtonEnabled={worksheet.selectedFeatureSetCount > 0}
      previousButtonEnabled={false}
      worksheet={worksheet}
    >
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="text-center w-100">
              <h4>Select feature sets</h4>
              <p>Select one or more feature sets to describe the object.</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12}>
            <MasterDetailContainer
              items={worksheet.featureSets.map(featureSet => ({
                altLabels: null,
                description: featureSet.definition.description,
                images: featureSet.definition.images,
                onToggleSelected: () => {
                  featureSet.selected = !featureSet.selected;
                  dispatchWorksheet({payload: worksheet});
                },
                selected: featureSet.selected,
                title: featureSet.definition.title!,
              }))}
              mode={worksheet.currentMark.mode}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12}>
            <h4>Freetext description</h4>
            <Input
              onChange={event => {
                worksheet.text = event.target.value;
                dispatchWorksheet({payload: worksheet});
              }}
              placeholder="Freetext description (optional)"
              rows="8"
              type="textarea"
              value={worksheet.text}
            />
          </Col>
        </Row>
      </Container>
    </WorksheetNavigationFrame>
  );
};

// (WorksheetEditPage as any).whyDidYouRender = true;
