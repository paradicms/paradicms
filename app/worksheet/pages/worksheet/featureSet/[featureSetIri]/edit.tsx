import {PropertyGroupJoinSelector} from "@paradicms/api";
import {JsonAppConfiguration, ModelSet} from "@paradicms/models";
import {decodeFileName, encodeFileName, getStaticApi} from "@paradicms/next";
import {
  ModelSetJsonLdParser,
  galleryThumbnailSelector,
} from "@paradicms/react-dom-components";
import {JsonLd} from "jsonld/jsonld-spec";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import * as React from "react";
import {useMemo} from "react";
import Select from "react-select";
import {Table} from "reactstrap";
import {Hrefs} from "~/Hrefs";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {useRouteWorksheetMark} from "~/hooks/useRouteWorksheetMark";
import {useWorksheet} from "~/hooks/useWorksheet";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetFeatureSet} from "~/models/WorksheetFeatureSet";
import {WorksheetMode} from "~/models/WorksheetMode";

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
  readonly featureSetIri: string;
  readonly modelSetJsonLd: JsonLd;
}

const WorksheetFeatureSetEditPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({
  configuration,
  featureSetIri,
  modelSet,
}) => {
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
                    featureSetIri: featureSet.iri.value,
                    featureIri: feature.key,
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

export const getStaticPaths: GetStaticPaths = async () => {
  const api = await getStaticApi();

  return {
    fallback: false,
    paths: (await api.getPropertyGroupIris()).modelIris.map(featureSetIri => ({
      params: {
        featureSetIri: encodeFileName(featureSetIri),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{
  props: StaticProps;
}> => {
  const featureSetIri = decodeFileName(params!.featureSetIri as string);

  const api = await getStaticApi();

  // Get features and feature values for the feature set we're editing/reviewing
  const thisFeatureSetJoinSelector: {
    [index: string]: PropertyGroupJoinSelector;
  } = {};
  thisFeatureSetJoinSelector[featureSetIri] = {
    properties: {
      rangeValues: {},
      thumbnail: galleryThumbnailSelector,
    },
  };

  // Only get features in feature sets we're not editing/reviewing
  // We need these to build out the progress bar
  const otherFeatureSetsJoinSelector: PropertyGroupJoinSelector = {
    properties: {
      rangeValues: {},
    },
  };

  const modelSet = (
    await api.getPropertyGroups({
      joinSelector: otherFeatureSetsJoinSelector,
      joinSelectorByIri: thisFeatureSetJoinSelector,
    })
  ).modelSet;

  return {
    props: {
      configuration: await api.getAppConfiguration(),
      featureSetIri,
      modelSetJsonLd: await modelSet.toJsonLd(),
    },
  };
};
