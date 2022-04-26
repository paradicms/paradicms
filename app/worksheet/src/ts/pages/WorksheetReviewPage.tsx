import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import Clipboard from "react-clipboard.js";
import {Button, Col, Container, Form, Input, Row} from "reactstrap";
import {StringWorksheetStateExporter} from "~/exporters/StringWorksheetStateExporter";
import {TextWorksheetStateExporter} from "~/exporters/TextWorksheetStateExporter";
import {CsvStringWorksheetStateExporter} from "~/exporters/CsvStringWorksheetStateExporter";
import {JsonStringWorksheetStateExporter} from "~/exporters/JsonStringWorksheetStateExporter";
import {JsonLdStringWorksheetStateExporter} from "~/exporters/JsonLdStringWorksheetStateExporter";
import {useCallback, useState} from "react";
import {WorksheetFeatureSetTable} from "~/components/WorksheetFeatureSetTable";

const STRING_EXPORTERS: StringWorksheetStateExporter[] = [
  new TextWorksheetStateExporter(),
  new CsvStringWorksheetStateExporter(),
  new JsonStringWorksheetStateExporter(),
  new JsonLdStringWorksheetStateExporter(),
];

export const WorksheetReviewPage: React.FunctionComponent = () => {
  const [worksheet, _] = useWorksheet();
  const [selectedStringExporterIndex, setSelectedStringExporterIndex] =
    useState<number>(0);

  const export_ = () =>
    worksheet
      ? STRING_EXPORTERS[selectedStringExporterIndex].export(
          worksheet.definition,
          [worksheet.state]
        )
      : "";

  const onClickDownloadButton = useCallback(
    (event: React.MouseEvent) => {
      if (!worksheet) {
        throw new EvalError();
      }

      const content = export_();
      const selectedStringExporter =
        STRING_EXPORTERS[selectedStringExporterIndex];

      const a = document.createElement("a");
      const fileName =
        worksheet.stateId + "." + selectedStringExporter.fileExtension;
      const mimeType = selectedStringExporter.mimeType;

      if ((navigator as any).msSaveBlob) {
        // IE10
        if (
          !(navigator as any).msSaveBlob(
            new Blob([content], {type: mimeType}),
            fileName
          )
        ) {
          event.stopPropagation();
        }
      } else if ("download" in a) {
        //html5 A[download]
        a.href = "data:" + mimeType + "," + encodeURIComponent(content);
        a.setAttribute("download", fileName);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        //do iframe dataURL download (old ch+FF):
        const f = document.createElement("iframe");
        document.body.appendChild(f);
        f.src = "data:" + mimeType + "," + encodeURIComponent(content);
        setTimeout(() => {
          document.body.removeChild(f);
        }, 333);
      }
    },
    [export_, selectedStringExporterIndex, worksheet]
  );

  const onClickEmailButton = useCallback(() => {
    if (!worksheet) {
      throw new EvalError();
    }
    window.open(
      "mailto:?to=&subject=" +
        encodeURIComponent(worksheet.stateId) +
        "&body=" +
        encodeURIComponent(export_())
    );
  }, [export_, worksheet]);

  if (!worksheet) {
    return <Spinner />;
  }

  return (
    <WorksheetNavigationFrame
      finishButtonEnabled={false}
      headline={`Worksheet: ${worksheet.stateId}`}
      nextButtonEnabled={false}
      previousButtonEnabled={true}
      worksheet={worksheet}
    >
      <Container fluid>
        <Row>
          <Col className="d-flex p-0" xs="12">
            <div style={{flexGrow: 0}}>
              <h3 className="card-title">Review</h3>
            </div>
            <span style={{flexGrow: 1}} />
            <div style={{flexGrow: 0}}>
              <Form>
                <Clipboard
                  className="btn btn-secondary copy-button"
                  component="a"
                  option-text={export_}
                >
                  Copy
                </Clipboard>
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
                  onChange={(event) =>
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
            {worksheet.featureSets.map((featureSet) => {
              const featureSetState = featureSet.state;
              if (!featureSetState) {
                return null;
              }
              return (
                <React.Fragment key={featureSet.uri}>
                  <h4 className="text-center">{featureSet.definition.title}</h4>
                  <WorksheetFeatureSetTable
                    featureSet={featureSet}
                    includeFeatureDescriptions={false}
                    worksheetStateId={worksheet.stateId}
                  />
                </React.Fragment>
              );
            })}
          </Col>
        </Row>
        {worksheet.state.text ? (
          <Row className="mt-2">
            <Col md={12}>
              <h4>Freetext description</h4>
              <p>{worksheet.state.text}</p>
            </Col>
          </Row>
        ) : null}
      </Container>
    </WorksheetNavigationFrame>
  );
};
