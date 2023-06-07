import * as React from "react";
import {useMemo} from "react";
import Select from "react-select";
import {Table} from "reactstrap";
import {Hrefs} from "~/Hrefs";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {useWorksheet} from "~/hooks/useWorksheet";
import {WorksheetFeatureSet} from "~/models/WorksheetFeatureSet";
import {WorksheetMode} from "~/models/WorksheetMode";
import {useRouter} from "next/router";
import {decodeFileName, encodeFileName, readModelSet} from "@paradicms/next";
import path from "path";
import fs from "fs";
import {GetStaticPaths, GetStaticProps} from "next";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {useRouteWorksheetMark} from "~/hooks/useRouteWorksheetMark";
import {ModelSetBuilder, ModelSetFactory} from "@paradicms/models";
import {galleryThumbnailSelector} from "@paradicms/react-dom-components";

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
                <strong>{feature.definition.label}</strong>
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
                        value => value.iri === option.value
                      )!;
                      featureValue.select();
                    }
                    dispatchFeatureSet();
                  }}
                  options={feature.values.map(value => ({
                    label: value.definition.label,
                    value: value.iri,
                  }))}
                  value={feature.values
                    .filter(value => value.selected)
                    .map(value => ({
                      label: value.definition.label,
                      value: value.iri,
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

interface StaticProps {
  readonly featureSetIri: string;
  readonly modelSetString: string;
}

const WorksheetFeatureSetEditPage: React.FunctionComponent<StaticProps> = ({
  featureSetIri,
  modelSetString,
}) => {
  const modelSet = useMemo(
    () => ModelSetFactory.fromFastRdfString(modelSetString),
    [modelSetString]
  );
  const configuration = modelSet.appConfiguration;
  const router = useRouter();
  const routeWorksheetMark = useRouteWorksheetMark({
    featureSetIri,
    review: false,
  });
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

  const featureSet = worksheet.currentFeatureSet;
  if (!featureSet) {
    throw new EvalError("expected feature set");
  }

  return (
    <WorksheetNavigationFrame
      configuration={configuration}
      dispatchWorksheet={dispatchWorksheet}
      finishButtonEnabled={true}
      headline={`Feature Set: ${featureSet.definition.label}`}
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
              description: feature.definition.description,
              images: feature.definition.images,
              label: feature.definition.label,
              onToggleSelected: () => {
                router.push(
                  Hrefs.worksheetMark({
                    featureSetIri: featureSet.iri,
                    featureIri: feature.iri,
                    review: false,
                    mode: worksheet!.currentMark.mode,
                    worksheetStateId: worksheet!.stateId,
                  })
                );
              },
              selected: null,
            }))}
            mode={worksheet.currentMark.mode}
          />
        </>
      )}
    </WorksheetNavigationFrame>
  );
};

export default WorksheetFeatureSetEditPage;

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

export const getStaticPaths: GetStaticPaths = async () => {
  const modelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });
  const worksheetDefinition = new WorksheetDefinition(modelSet);

  const paths: {params: {featureSetIri: string}}[] = [];
  for (const featureSet of worksheetDefinition.featureSets) {
    paths.push({
      params: {
        featureSetIri: encodeFileName(featureSet.iri),
      },
    });
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{
  props: StaticProps;
}> => {
  const featureSetIri = decodeFileName(params!.featureSetIri as string);

  const completeModelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });

  return {
    props: {
      featureSetIri,
      modelSetString: new ModelSetBuilder()
        .addAppConfiguration(completeModelSet.appConfiguration)
        .addPropertyGroup(completeModelSet.propertyGroupByIri(featureSetIri), {
          properties: {
            rangeValues: {},
            thumbnail: galleryThumbnailSelector,
          },
        })
        // Add other property groups in order to determine where this page is in the workflow and how many more pages there ares
        .addPropertyGroups(
          completeModelSet.propertyGroups.filter(
            propertyGroup =>
              !propertyGroup.iris.some(
                propertyGroupIri => propertyGroupIri === featureSetIri
              )
          ),
          {
            properties: {
              rangeValues: {},
            },
          }
        )
        .build()
        .toFastRdfString(),
    },
  };
};
