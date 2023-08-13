import * as React from "react";
import {useCallback, useMemo, useState} from "react";
import {Button, Col, Container, Form, Input, Row, Table} from "reactstrap";
import {Hrefs} from "~/Hrefs";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {CsvStringWorksheetStateExporter} from "~/exporters/CsvStringWorksheetStateExporter";
import {JsonLdStringWorksheetStateExporter} from "~/exporters/JsonLdStringWorksheetStateExporter";
import {JsonStringWorksheetStateExporter} from "~/exporters/JsonStringWorksheetStateExporter";
import {StringWorksheetStateExporter} from "~/exporters/StringWorksheetStateExporter";
import {TextWorksheetStateExporter} from "~/exporters/TextWorksheetStateExporter";
import {useWorksheet} from "~/hooks/useWorksheet";
import {JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {useRouteWorksheetMark} from "~/hooks/useRouteWorksheetMark";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {getStaticApi} from "@paradicms/next";
import {GetStaticProps} from "next";
import Link from "next/link";
import CopyToClipboard from "react-copy-to-clipboard";
import {JsonLd} from "jsonld/jsonld-spec";
import {
  galleryThumbnailSelector,
  ModelSetJsonLdParser,
} from "@paradicms/react-dom-components";

const STRING_EXPORTERS: StringWorksheetStateExporter[] = [
  new TextWorksheetStateExporter(),
  new CsvStringWorksheetStateExporter(),
  new JsonStringWorksheetStateExporter(),
  new JsonLdStringWorksheetStateExporter(),
];

interface StaticProps {
  readonly configuration: JsonAppConfiguration | null;
  readonly modelSetJsonLd: JsonLd;
}

const WorksheetReviewPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({configuration, modelSet}) => {
  const routeWorksheetMark = useRouteWorksheetMark({review: true});
  const worksheetDefinition = useMemo(() => new WorksheetDefinition(modelSet), [
    modelSet,
  ]);

  const {
    dispatchWorksheet,
    exception: worksheetException,
    worksheet,
  } = useWorksheet({routeWorksheetMark, worksheetDefinition});

  const [
    selectedStringExporterIndex,
    setSelectedStringExporterIndex,
  ] = useState<number>(0);

  const [exportMessage, setExportMessage] = useState<string>("");

  const exportedString = useMemo(
    () =>
      worksheet
        ? STRING_EXPORTERS[
            selectedStringExporterIndex
          ].export(worksheet.definition, [worksheet.state])
        : "",
    [selectedStringExporterIndex, worksheet]
  );

  const onClickDownloadButton = useCallback(
    (event: React.MouseEvent) => {
      if (!worksheet) {
        throw new EvalError();
      }

      const selectedStringExporter =
        STRING_EXPORTERS[selectedStringExporterIndex];

      const a = document.createElement("a");
      const fileName =
        worksheet.stateId + "." + selectedStringExporter.fileExtension;
      const mimeType = selectedStringExporter.mimeType;

      if ("download" in a) {
        //html5 A[download]
        a.href = "data:" + mimeType + "," + encodeURIComponent(exportedString);
        a.setAttribute("download", fileName);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        //do iframe dataURL download (old ch+FF):
        const f = document.createElement("iframe");
        document.body.appendChild(f);
        f.src = "data:" + mimeType + "," + encodeURIComponent(exportedString);
        setTimeout(() => {
          document.body.removeChild(f);
        }, 333);
      }
    },
    [exportedString, selectedStringExporterIndex, worksheet]
  );

  const onClickEmailButton = useCallback(() => {
    if (!worksheet) {
      throw new EvalError();
    }
    window.open(
      "mailto:?to=&subject=" +
        encodeURIComponent(worksheet.stateId) +
        "&body=" +
        encodeURIComponent(exportedString)
    );
  }, [exportedString, worksheet]);

  if (worksheetException) {
    return <GenericErrorHandler exception={worksheetException} />;
  } else if (!worksheet) {
    return <Spinner />;
  }

  return (
    <WorksheetNavigationFrame
      configuration={configuration}
      dispatchWorksheet={dispatchWorksheet}
      finishButtonEnabled={false}
      headline={`Worksheet: ${worksheet.stateId}`}
      nextButtonEnabled={false}
      previousButtonEnabled={true}
      worksheet={worksheet}
    >
      <Container fluid>
        <Row>
          <Col className="d-flex p-0" xs="12">
            <div>
              <h3 className="card-title">Review</h3>
            </div>
            <span className="flex-grow-1" />
            <div>
              <Form>
                {exportMessage.length > 0 ? (
                  <>
                    <strong className="text-success">{exportMessage}</strong>
                    &nbsp;
                  </>
                ) : null}
                <CopyToClipboard
                  text={exportedString}
                  onCopy={() => {
                    setExportMessage("Copied");
                    setTimeout(() => setExportMessage(""), 2000);
                  }}
                >
                  <span
                    className="btn btn-secondary"
                    style={{cursor: "pointer"}}
                  >
                    Copy
                  </span>
                </CopyToClipboard>
                &nbsp;
                <Button color="secondary" onClick={onClickEmailButton}>
                  Email
                </Button>
                &nbsp;
                <Button color="secondary" onClick={onClickDownloadButton}>
                  Download
                </Button>
                &nbsp;
                <Input
                  onChange={event =>
                    setSelectedStringExporterIndex(
                      parseInt(event.target.value, 10)
                    )
                  }
                  style={{
                    display: "inline",
                    verticalAlign: "middle",
                    width: "inherit",
                  }}
                  type="select"
                  value={selectedStringExporterIndex}
                >
                  {STRING_EXPORTERS.map(
                    (stringExporter, stringExporterIndex) => (
                      <option
                        key={stringExporter.fileExtension}
                        value={stringExporterIndex.toString()}
                      >
                        {stringExporter.displayName}
                      </option>
                    )
                  )}
                </Input>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="p-0" xs="6">
            <strong>Generated text</strong>
            <p>
              {new TextWorksheetStateExporter().export(worksheet.definition, [
                worksheet.state,
              ])}
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="p-0" xs="12">
            {worksheet.featureSets.map(featureSet => {
              const featureSetState = featureSet.state;
              if (!featureSetState) {
                return null;
              }
              return (
                <React.Fragment key={featureSet.iri}>
                  <h4 className="text-center">{featureSet.definition.label}</h4>
                  <Table className="table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center w-25">Feature</th>
                        <th className="text-center">Value(s)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {featureSet.features.map(feature => {
                        return (
                          <tr key={feature.iri}>
                            <td className="align-middle text-center w-25">
                              <Link
                                className="btn btn-lg btn-secondary w-100"
                                href={Hrefs.worksheetMark({
                                  featureSetKey: featureSet.key,
                                  featureKey: feature.key,
                                  review: false,
                                  mode: worksheet!.currentMark.mode,
                                  worksheetStateId: worksheet!.stateId,
                                })}
                              >
                                {feature.definition.label}
                              </Link>
                            </td>
                            <td className="align-middle">
                              {feature.values
                                .filter(value => value.selected)
                                .map(value => (
                                  <span
                                    className="border border-info d-inline-block h4 m-2 p-2"
                                    key={value.iri}
                                    style={{borderWidth: "4px !important"}}
                                  >
                                    {value.definition.label}
                                  </span>
                                ))}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </React.Fragment>
              );
            })}
          </Col>
        </Row>
        {worksheet.state.text ? (
          <Row className="mt-2">
            <Col xs={12}>
              <h4>Freetext description</h4>
              <p>{worksheet.state.text}</p>
            </Col>
          </Row>
        ) : null}
      </Container>
    </WorksheetNavigationFrame>
  );
};

const WorksheetReviewPage: React.FunctionComponent<StaticProps> = ({
  modelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={modelSetJsonLd}
    render={modelSet => (
      <WorksheetReviewPageImpl modelSet={modelSet} {...otherProps} />
    )}
  />
);

export default WorksheetReviewPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const api = await getStaticApi();

  return {
    props: {
      configuration: await api.getAppConfiguration(),
      modelSetJsonLd: await (
        await api.getPropertyGroups({
          joinSelector: {
            properties: {
              rangeValues: {},
            },
            thumbnail: galleryThumbnailSelector,
          },
        })
      ).modelSet.toJsonLd(),
    },
  };
};
