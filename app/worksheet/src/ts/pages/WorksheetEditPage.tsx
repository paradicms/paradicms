import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Button, Col, Container, Input, Row, Spinner, Table} from "reactstrap";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
// import {useReducer} from "react";
import classnames from "classnames";

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
          <Col md={12}>
            <h4>Select feature sets</h4>
            <p className="card-text">
              Select one or more feature sets to describe the object. Currently
              the feature set for a Dress is the only one available, but more
              will be added in the future.
            </p>
            <Table className="table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Features</th>
                </tr>
              </thead>
              <tbody>
                {worksheet.featureSets.map((featureSet) => (
                  <tr
                    className={classnames({
                      "feature-set": true,
                      selected: featureSet.selected,
                    })}
                    key={featureSet.uri}
                  >
                    <td className="text-center">
                      <Button
                        active={featureSet.selected}
                        className={
                          featureSet.selected
                            ? "border border-primary border-4"
                            : undefined
                        }
                        color="secondary"
                        onClick={() => {
                          featureSet.selected = !featureSet.selected;
                          dispatchWorksheet({payload: worksheet});
                        }}
                        size="lg"
                      >
                        {featureSet.definition.title}
                      </Button>
                      {/* <Input checked={this.isFeatureSetSelected(featureSetDefinition.id)} type="checkbox"></Input> */}
                    </td>
                    <td className="align-middle">
                      {featureSet.features.map((feature, featureIndex) => (
                        <React.Fragment key={feature.uri}>
                          <span
                            data-bind="text: displayName"
                            style={{
                              fontWeight:
                                featureIndex % 2 === 0 ? "bold" : "normal",
                            }}
                          >
                            {feature.definition.title}
                          </span>
                          {featureIndex + 1 < featureSet.features.length
                            ? "  \u00b7"
                            : null}
                          &nbsp;
                        </React.Fragment>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={12}>
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

(WorksheetEditPage as any).whyDidYouRender = true;
