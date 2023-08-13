import * as React from "react";
import {useMemo} from "react";
import {Hrefs} from "~/Hrefs";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {useWorksheet} from "~/hooks/useWorksheet";
import {WorksheetMode} from "~/models/WorksheetMode";
import {decodeFileName, encodeFileName, getStaticApi} from "@paradicms/next";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {GetStaticPaths, GetStaticProps} from "next";
import {ModelSet} from "@paradicms/models";
import {useRouteWorksheetMark} from "~/hooks/useRouteWorksheetMark";
import {useRouter} from "next/router";
import {
  galleryThumbnailSelector,
  ModelSetJsonLdParser,
} from "@paradicms/react-dom-components";
import {JsonLd} from "jsonld/jsonld-spec";
import {PropertyGroupJoinSelector, PropertyJoinSelector} from "@paradicms/api";

interface StaticProps {
  readonly featureSetKey: string;
  readonly featureKey: string;
  readonly modelSetJsonLd: JsonLd;
}

const WorksheetFeatureEditPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "modelSetJsonLd"
> & {readonly modelSet: ModelSet}> = ({
  featureSetKey,
  featureKey,
  modelSet,
}) => {
  const configuration = modelSet.appConfiguration;
  const routeWorksheetMark = useRouteWorksheetMark({
    featureSetKey,
    featureKey,
    review: false,
  });
  const router = useRouter();
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

  if (worksheet.currentMark.mode === WorksheetMode.ADVANCED) {
    // Advanced mode has pages per feature set but not pages per feature.
    // The user likely switched to advanced mode will on a feature page.
    // Redirect to the "parent" feature set page.
    router.push(
      Hrefs.worksheetMark({
        ...worksheet.currentMark,
        featureKey: null,
      })
    );
    return null;
  }

  const feature = worksheet.currentFeature;
  if (!feature) {
    throw new EvalError("expected feature");
  }

  return (
    <WorksheetNavigationFrame
      configuration={configuration}
      dispatchWorksheet={dispatchWorksheet}
      headline={"Feature: " + feature.definition.label}
      finishButtonEnabled={true}
      nextButtonEnabled={true}
      previousButtonEnabled={true}
      worksheet={worksheet}
    >
      <div className="text-center w-100">
        <p>
          Select one or more boxes, then click <b>Next</b> to move to the next
          feature. Click on the arrow at the bottom right of an image to see the
          definition and other information.
        </p>
      </div>
      <MasterDetailContainer
        items={feature.values.map(featureValue => ({
          altLabels: featureValue.definition.altLabels,
          description: featureValue.definition.description,
          images: featureValue.definition.images,
          label: featureValue.definition.label,
          onToggleSelected: () => {
            featureValue.selected = !featureValue.selected;
            dispatchWorksheet({payload: worksheet});
          },
          selected: featureValue.selected,
        }))}
        mode={worksheet.currentMark.mode}
      />
    </WorksheetNavigationFrame>
  );
};

const WorksheetFeatureEditPage: React.FunctionComponent<StaticProps> = ({
  modelSetJsonLd,
  ...otherProps
}) => (
  <ModelSetJsonLdParser
    modelSetJsonLd={modelSetJsonLd}
    render={modelSet => (
      <WorksheetFeatureEditPageImpl modelSet={modelSet} {...otherProps} />
    )}
  />
);

export default WorksheetFeatureEditPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const api = await getStaticApi();

  const worksheetDefinition = new WorksheetDefinition(
    (
      await api.getPropertyGroups({
        joinSelector: {
          properties: {},
        },
      })
    ).modelSet
  );

  const paths: {params: {featureSetKey: string; featureKey: string}}[] = [];
  for (const featureSet of worksheetDefinition.featureSets) {
    for (const feature of featureSet.features) {
      paths.push({
        params: {
          featureSetKey: encodeFileName(featureSet.key),
          featureKey: encodeFileName(feature.key),
        },
      });
    }
  }

  return {
    fallback: false,
    paths,
  };
};

class StaticProps {}

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{
  props: StaticProps;
}> => {
  const featureSetKey = decodeFileName(params!.featureSetKey as string);
  const featureKey = decodeFileName(params!.featureKey as string);

  const api = await getStaticApi();

  // Get feature values for the feature we're editing
  const thisFeatureJoinSelector: {[index: string]: PropertyJoinSelector} = {};
  thisFeatureJoinSelector[featureKey] = {
    rangeValues: {
      thumbnail: galleryThumbnailSelector,
    },
  };

  // Get the other features in the feature set
  // We need these to build out the progress bar.
  const thisFeatureSetJoinSelector: {
    [index: string]: PropertyGroupJoinSelector;
  } = {};
  thisFeatureSetJoinSelector[featureSetKey] = {
    properties: {rangeValues: {}},
    propertiesByKey: thisFeatureJoinSelector,
  };

  // Only get features in feature sets we're not editing/reviewing
  // We need these to build out the progress bar
  const otherFeatureSetsJoinSelector: PropertyGroupJoinSelector = {
    properties: {rangeValues: {}},
  };

  const modelSet = (
    await api.getPropertyGroups({
      joinSelector: otherFeatureSetsJoinSelector,
      joinSelectorByKey: thisFeatureSetJoinSelector,
    })
  ).modelSet;

  return {
    props: {
      featureSetKey,
      featureKey,
      modelSetJsonLd: await modelSet.toJsonLd(),
    },
  };
};
