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
import {decodeFileName, encodeFileName, getStaticApi} from "@paradicms/next";
import path from "path";
import fs from "fs";
import {GetStaticPaths, GetStaticProps} from "next";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {useRouteWorksheetMark} from "~/hooks/useRouteWorksheetMark";
import {
  JsonAppConfiguration,
  ModelSet,
  PropertyGroupJoinSelector,
} from "@paradicms/models";
import {
  galleryThumbnailSelector,
  ModelSetJsonLdParser,
} from "@paradicms/react-dom-components";
import {JsonLd} from "jsonld/jsonld-spec";

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
  readonly configuration: JsonAppConfiguration | null;
  readonly featureSetKey: string;
  readonly modelSetJsonLd: JsonLd;
}

const WorksheetFeatureSetEditPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({
  configuration,
  featureSetKey,
  modelSet,
}) => {
  const router = useRouter();
  const routeWorksheetMark = useRouteWorksheetMark({
    featureSetKey,
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
                    featureSetKey: featureSet.key,
                    featureKey: feature.key,
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

const WorksheetFeatureSetEditPage: React.FunctionComponent<StaticProps> = ({
  modelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={modelSetJsonLd}
    render={modelSet => (
      <WorksheetFeatureSetEditPageImpl modelSet={modelSet} {...otherProps} />
    )}
  />
);

export default WorksheetFeatureSetEditPage;

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

export const getStaticPaths: GetStaticPaths = async () => {
  const {api} = await getStaticApi({
    pathDelimiter: path.delimiter,
    readFile,
  });

  return {
    fallback: false,
    paths: (await api.getPropertyGroupKeys()).modelKeys.map(featureSetKey => ({
      params: {
        featureSetKey: encodeFileName(featureSetKey),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{
  props: StaticProps;
}> => {
  const featureSetKey = decodeFileName(params!.featureSetKey as string);

  const {api} = await getStaticApi({
    pathDelimiter: path.delimiter,
    readFile,
  });

  // Get features and feature values for the feature set we're editing/reviewing
  const thisFeatureSetJoinSelector: {
    [index: string]: PropertyGroupJoinSelector;
  } = {};
  thisFeatureSetJoinSelector[featureSetKey] = {
    properties: {
      rangeValues: {},
      thumbnail: galleryThumbnailSelector,
    },
  };

  // Only get features in feature sets we're not editing/reviewing
  // We need these to build out the progress bar
  const otherFeatureSetsJoinSelector: PropertyGroupJoinSelector = {
    properties: {},
  };

  const modelSet = (
    await api.getPropertyGroups({
      joinSelector: otherFeatureSetsJoinSelector,
      joinSelectorByKey: thisFeatureSetJoinSelector,
    })
  ).modelSet;

  return {
    props: {
      configuration: await api.getAppConfiguration(),
      featureSetKey,
      modelSetJsonLd: await modelSet.toJsonLd(),
    },
  };
};
