import classnames from "classnames";
import {Hrefs} from "~/Hrefs";
import * as React from "react";
import {ReactNode, useCallback} from "react";
import Hammer from "react-hammerjs";
import {Link, useNavigate} from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Progress,
  Row,
} from "reactstrap";
import {Worksheet} from "~/models/Worksheet";
import {Frame} from "~/components/Frame";
import {Headline} from "~/components/Headline";

export const WorksheetNavigationFrame: React.FunctionComponent<
  React.PropsWithChildren<{
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
  const nextPreviousButtons =
    finishOrNextButtonEnabled || nextButtonEnabled || previousButtonEnabled ? (
      <Row>
        <Col xs="12">
          <div className="float-left">
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
          <div className="float-right">
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
              <Col md="12">
                <Headline>{headline}</Headline>
              </Col>
            </Row>
            <Row>
              <Col md="12"></Col>
            </Row>
            <Row>
              <Col md="12">
                {breadcrumbItems.length > 1 ? (
                  <Breadcrumb>{breadcrumbItems}</Breadcrumb>
                ) : null}
                {worksheet.progressPercentage > 0 ? (
                  <div className="progress-wrapper">
                    <Progress
                      className="h-100"
                      bar
                      value={worksheet.progressPercentage}
                    ></Progress>
                  </div>
                ) : null}
              </Col>
            </Row>
            {nextPreviousButtons}
            <Row className="my-2">
              <Col md="12">{children}</Col>
            </Row>
            {nextPreviousButtons}
          </Container>
        </Frame>
      </div>
    </Hammer>
  );
};
