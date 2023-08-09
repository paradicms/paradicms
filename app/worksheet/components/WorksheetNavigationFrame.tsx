import classnames from "classnames";
import * as React from "react";
import {Dispatch, ReactNode, useCallback, useState} from "react";
import Hammer from "react-hammerjs";
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
import {useQueryParam} from "use-query-params";
import {Exception} from "~/Exception";
import {Hrefs} from "~/Hrefs";
import {Frame} from "~/components/Frame";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {Headline} from "~/components/Headline";
import {WorksheetReducerAction} from "~/hooks/useWorksheet";
import {Worksheet} from "~/models/Worksheet";
import {WorksheetMode} from "~/models/WorksheetMode";
import {JsonAppConfiguration} from "@paradicms/models";
import {useRouter} from "next/router";
import Link from "next/link";

export const WorksheetNavigationFrame: React.FunctionComponent<React.PropsWithChildren<{
  configuration: JsonAppConfiguration | null;
  dispatchWorksheet: Dispatch<WorksheetReducerAction>;
  finishButtonEnabled: boolean;
  headline: string;
  nextButtonEnabled: boolean;
  previousButtonEnabled: boolean;
  worksheet: Worksheet;
}>> = ({
  children,
  configuration,
  finishButtonEnabled,
  headline,
  nextButtonEnabled,
  previousButtonEnabled,
  worksheet,
}) => {
  const router = useRouter();
  const [_, setMode] = useQueryParam<string>("mode");
  const [exception, setException] = useState<Exception | null>(null);

  const onClickFinishButton = useCallback(() => {
    worksheet
      .save()
      .then(
        () => router.push(Hrefs.worksheetMark(worksheet.lastMark)),
        setException
      );
  }, [router, worksheet]);

  const onClickNextButton = useCallback(() => {
    worksheet
      .save()
      .then(
        () => router.push(Hrefs.worksheetMark(worksheet.nextMark)),
        setException
      );
  }, [router, worksheet]);

  const onClickPreviousButton = useCallback(() => {
    worksheet.save().then(() => {
      if (worksheet.currentMarkIndex > 0) {
        router.push(Hrefs.worksheetMark(worksheet.previousMark));
      } else {
        router.push(Hrefs.index);
      }
    }, setException);
  }, [router, worksheet]);

  if (exception) {
    return <GenericErrorHandler exception={exception} />;
  }

  const breadcrumbItems: ReactNode[] = [];
  breadcrumbItems.push(
    <BreadcrumbItem active={!worksheet.currentFeatureSet} key="worksheet-mark">
      <Link href={Hrefs.worksheetMark(worksheet.firstMark)}>
        <>Worksheet: {worksheet.stateId}</>
      </Link>
    </BreadcrumbItem>
  );
  if (worksheet.currentFeatureSet) {
    breadcrumbItems.push(
      <BreadcrumbItem active={!worksheet.currentFeature} key="feature-set-mark">
        <Link
          href={Hrefs.worksheetMark({
            featureSetIri: worksheet.currentFeatureSet.iri,
            featureIri: null,
            mode: worksheet.currentMark.mode,
            review: false,
            worksheetStateId: worksheet.stateId,
          })}
        >
          <>Feature Set: {worksheet.currentFeatureSet.definition.label}</>
        </Link>
      </BreadcrumbItem>
    );
  }
  if (worksheet.currentFeature) {
    breadcrumbItems.push(
      <BreadcrumbItem active={true} key="feature-mark">
        <Link
          href={Hrefs.worksheetMark({
            featureSetIri: worksheet.currentFeatureSet!.iri,
            featureIri: worksheet.currentFeature.iri,
            mode: worksheet.currentMark.mode,
            review: false,
            worksheetStateId: worksheet.stateId,
          })}
        >
          <>Feature: {worksheet.currentFeature.definition.label}</>
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
        <Frame configuration={configuration}>
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
                    onChange={event => {
                      const newMode = event.target.value;
                      worksheet
                        .save()
                        .then(() => setMode(newMode), setException);
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
