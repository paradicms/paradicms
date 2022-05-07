import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Col, Container, Input, Row} from "reactstrap";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
// import {useReducer} from "react";
import {Spinner} from "~/components/Spinner";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";
import {thumbnailTargetDimensions} from "@paradicms/bootstrap";

export const WorksheetEditPage: React.FunctionComponent = () => {
  const [worksheet, dispatchWorksheet] = useWorksheet();

  if (!worksheet) {
    return <Spinner />;
  }

  return (
    <WorksheetNavigationFrame
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
              items={worksheet.featureSets
                .concat()
                .sort((left, right) =>
                  left.definition.title!.localeCompare(right.definition.title!)
                )
                .map((featureSet) => ({
                  altLabels: null,
                  description: featureSet.definition.abstract,
                  onToggleSelected: () => {
                    featureSet.selected = !featureSet.selected;
                    dispatchWorksheet({payload: worksheet});
                  },
                  selected: featureSet.selected,
                  thumbnail: featureSet.definition.thumbnail({
                    targetDimensions: thumbnailTargetDimensions,
                  }),
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
              onChange={(event) => {
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
