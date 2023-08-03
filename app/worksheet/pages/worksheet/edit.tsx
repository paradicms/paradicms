import * as React from "react";
import {useMemo} from "react";
import {Col, Container, Input, Row} from "reactstrap";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {useWorksheet} from "~/hooks/useWorksheet";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";
import {Spinner} from "~/components/Spinner";
import {readModelSet} from "@paradicms/next";
import path from "path";
import fs from "fs";
import {GetStaticProps} from "next";
import {ModelSet, ModelSetBuilder} from "@paradicms/models";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {useRouteWorksheetMark} from "~/hooks/useRouteWorksheetMark";
import {
  galleryThumbnailSelector,
  ModelSetJsonLdParser,
} from "@paradicms/react-dom-components";
import {JsonLd} from "jsonld/jsonld-spec";

interface StaticProps {
  readonly modelSetJsonLd: JsonLd;
}

const WorksheetEditPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({modelSet}) => {
  const configuration = modelSet.appConfiguration;
  const routeWorksheetMark = useRouteWorksheetMark({review: false});
  const worksheetDefinition = useMemo(() => new WorksheetDefinition(modelSet), [
    modelSet,
  ]);

  const {
    dispatchWorksheet,
    exception: worksheetException,
    worksheet,
  } = useWorksheet({routeWorksheetMark, worksheetDefinition});

  if (worksheetException) {
    return <GenericErrorHandler exception={worksheetException} />;
  } else if (!worksheet) {
    return <Spinner />;
  }

  return (
    <WorksheetNavigationFrame
      configuration={configuration}
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
                label: featureSet.definition.label,
                onToggleSelected: () => {
                  featureSet.selected = !featureSet.selected;
                  dispatchWorksheet({payload: worksheet});
                },
                selected: featureSet.selected,
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

const WorksheetEditPage: React.FunctionComponent<StaticProps> = ({
  modelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={modelSetJsonLd}
    render={modelSet => (
      <WorksheetEditPageImpl modelSet={modelSet} {...otherProps} />
    )}
  />
);

export default WorksheetEditPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeModelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile: (filePath: string) =>
      fs.promises.readFile(filePath).then(contents => contents.toString()),
  });

  return {
    props: {
      modelSetJsonLd: await new ModelSetBuilder()
        .addAppConfiguration(completeModelSet.appConfiguration)
        .addPropertyGroups(completeModelSet.propertyGroups, {
          properties: {
            rangeValues: {},
          },
          thumbnail: galleryThumbnailSelector,
        })
        .build()
        .toJsonLd(),
    },
  };
};
