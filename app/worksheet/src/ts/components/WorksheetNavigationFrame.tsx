import classnames from "classnames";
import {Hrefs} from "~/Hrefs";
import * as React from "react";
import {Dispatch, ReactNode, useCallback} from "react";
import Hammer from "react-hammerjs";
import {Link, useNavigate} from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Input,
  Progress,
  Row,
} from "reactstrap";
import {Worksheet} from "~/models/Worksheet";
import {Frame} from "~/components/Frame";
import {Headline} from "~/components/Headline";
import {useQueryParam} from "use-query-params";
import {WorksheetMode} from "~/models/WorksheetMode";
import {WorksheetReducerAction} from "~/hooks/useWorksheet";

export const WorksheetNavigationFrame: React.FunctionComponent<
  React.PropsWithChildren<{
    dispatchWorksheet: Dispatch<WorksheetReducerAction>;
    finishButtonEnabled: boolean;
    headline: string;
    nextButtonEnabled: boolean;
    previousButtonEnabled: boolean;
    worksheet: Worksheet;
  }>
> = ({
  children,
  finishButtonEnabled,
  headline,
  nextButtonEnabled,
  previousButtonEnabled,
  worksheet,
}) => {
  const navigate = useNavigate();

  const [_, setMode] = useQueryParam<string>("mode");

  const onClickFinishButton = useCallback(() => {
    worksheet
      .save()
      .then(() => navigate(Hrefs.worksheetMark(worksheet.lastMark)));
  }, [navigate, worksheet]);

  const onClickNextButton = useCallback(() => {
    worksheet
      .save()
      .then(() => navigate(Hrefs.worksheetMark(worksheet.nextMark)));
  }, [navigate, worksheet]);

  const onClickPreviousButton = useCallback(() => {
    worksheet.save().then(() => {
      if (worksheet.currentMarkIndex > 0) {
        navigate(Hrefs.worksheetMark(worksheet.previousMark));
      } else {
        navigate(Hrefs.index);
      }
    });
  }, [navigate, worksheet]);

  const breadcrumbItems: ReactNode[] = [];
  breadcrumbItems.push(
    <BreadcrumbItem active={!worksheet.currentFeatureSet} key="worksheet-mark">
      <Link to={Hrefs.worksheetMark(worksheet.firstMark)}>
        Worksheet: {worksheet.stateId}
      </Link>
    </BreadcrumbItem>
  );
  if (worksheet.currentFeatureSet) {
    breadcrumbItems.push(
      <BreadcrumbItem active={!worksheet.currentFeature} key="feature-set-mark">
        <Link
          to={Hrefs.worksheetMark({
            featureSetUri: worksheet.currentFeatureSet.uri,
            featureUri: null,
            mode: worksheet.currentMark.mode,
            review: false,
            worksheetStateId: worksheet.stateId,
          })}
        >
          Feature Set: {worksheet.currentFeatureSet.definition.title}
        </Link>
      </BreadcrumbItem>
    );
  }
  if (worksheet.currentFeature) {
    breadcrumbItems.push(
      <BreadcrumbItem active={true} key="feature-mark">
        <Link
          to={Hrefs.worksheetMark({
            featureSetUri: worksheet.currentFeatureSet!.uri,
            featureUri: worksheet.currentFeature.uri,
            mode: worksheet.currentMark.mode,
            review: false,
            worksheetStateId: worksheet.stateId,
          })}
        >
          Feature: {worksheet.currentFeature.definition.title}
        </Link>
      </BreadcrumbItem>
    );
  }

  const finishOrNextButtonEnabled =
    typeof finishButtonEnabled !== "undefined"
      ? finishButtonEnabled
      : nextButtonEnabled;
  const navigationButtons =
    finishOrNextButtonEnabled || nextButtonEnabled || previousButtonEnabled ? (
      <Row className="mt-1">
        <Col className="d-flex" xs="12">
          <div>
            <Button
              className={classnames({
                invisible: !previousButtonEnabled,
                visible: !!previousButtonEnabled,
              })}
              color="primary"
              size="lg"
              onClick={onClickPreviousButton}
            >
              Previous
            </Button>
          </div>
          <span className="flex-grow-1" />
          <div>
            <Button
              className={classnames({
                invisible: !nextButtonEnabled,
                visible: !!nextButtonEnabled,
              })}
              color="primary"
              size="lg"
              onClick={onClickNextButton}
            >
              Next
            </Button>
            &nbsp;
            <Button
              className={classnames({
                invisible: !finishOrNextButtonEnabled,
                visible: finishOrNextButtonEnabled,
              })}
              color="primary"
              size="lg"
              onClick={onClickFinishButton}
            >
              Finish
            </Button>
          </div>
        </Col>
      </Row>
    ) : null;

  return (
    <Hammer
      onSwipeLeft={() => {
        if (previousButtonEnabled) onClickPreviousButton();
      }}
      onSwipeRight={() => {
        if (nextButtonEnabled) onClickNextButton();
      }}
    >
      <div>
        <Frame>
          <Container fluid>
            <Row>
              <Col className="d-flex" xs="12">
                <div className="justify-content-center flex-grow-1">
                  <Headline>{headline}</Headline>
                </div>
                <div className="d-flex align-items-center">
                  <strong>Mode</strong>&nbsp;&nbsp;
                  <Input
                    id="modeSelect"
                    name="modeSelect"
                    onChange={(event) => {
                      const newMode = event.target.value;
                      worksheet.save().then(() => setMode(newMode));
                    }}
                    type="select"
                    value={worksheet.currentMark.mode}
                  >
                    <option value={WorksheetMode.BEGINNER}>Beginner</option>
                    <option value={WorksheetMode.INTERMEDIATE}>
                      Intermediate
                    </option>
                    <option value={WorksheetMode.ADVANCED}>Advanced</option>
                  </Input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                {breadcrumbItems.length > 1 ? (
                  <Breadcrumb>{breadcrumbItems}</Breadcrumb>
                ) : null}
                {worksheet.progressPercentage > 0 ? (
                  <div
                    className="w-100"
                    style={{backgroundColor: "darkgray", height: "20px"}}
                  >
                    <Progress
                      className="h-100"
                      bar
                      value={worksheet.progressPercentage}
                    ></Progress>
                  </div>
                ) : null}
              </Col>
            </Row>
            {navigationButtons}
            <Row className="mt-1">
              <Col xs="12">{children}</Col>
            </Row>
            {navigationButtons}
          </Container>
        </Frame>
      </div>
    </Hammer>
  );
};
