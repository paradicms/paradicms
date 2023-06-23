import * as React from "react";
import {useMemo} from "react";
import {Hrefs} from "~/Hrefs";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {MasterDetailContainer} from "~/components/MasterDetailContainer";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {useWorksheet} from "~/hooks/useWorksheet";
import {WorksheetMode} from "~/models/WorksheetMode";
import fs from "fs";
import {decodeFileName, encodeFileName, readModelSet} from "@paradicms/next";
import path from "path";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {GetStaticPaths, GetStaticProps} from "next";
import {ModelSetBuilder, ModelSetFactory} from "@paradicms/models";
import {useRouteWorksheetMark} from "~/hooks/useRouteWorksheetMark";
import {useRouter} from "next/router";
import {galleryThumbnailSelector} from "@paradicms/react-dom-components";
import {requireNonNull} from "@paradicms/utilities";

interface StaticProps {
  readonly featureSetIri: string;
  readonly featureIri: string;
  readonly modelSetString: string;
}

const WorksheetFeatureEditPage: React.FunctionComponent<StaticProps> = ({
  featureSetIri,
  featureIri,
  modelSetString,
}) => {
  const modelSet = useMemo(
    () => ModelSetFactory.fromFastRdfString(modelSetString),
    [modelSetString]
  );
  const configuration = modelSet.appConfiguration;
  const routeWorksheetMark = useRouteWorksheetMark({
    featureSetIri,
    featureIri,
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
        featureIri: null,
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

export default WorksheetFeatureEditPage;

const readFile = (filePath: string) =>
  fs.promises.readFile(filePath).then(contents => contents.toString());

export const getStaticPaths: GetStaticPaths = async () => {
  const modelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });
  const worksheetDefinition = new WorksheetDefinition(modelSet);

  const paths: {params: {featureSetIri: string; featureIri: string}}[] = [];
  for (const featureSet of worksheetDefinition.featureSets) {
    for (const feature of featureSet.features) {
      paths.push({
        params: {
          featureSetIri: encodeFileName(featureSet.iri),
          featureIri: encodeFileName(feature.iri),
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
  const featureSetIri = decodeFileName(params!.featureSetIri as string);
  const featureIri = decodeFileName(params!.featureIri as string);

  const completeModelSet = await readModelSet({
    pathDelimiter: path.delimiter,
    readFile,
  });

  return {
    props: {
      featureSetIri,
      featureIri,
      modelSetString: new ModelSetBuilder()
        .addAppConfiguration(completeModelSet.appConfiguration)
        .addProperty(
          requireNonNull(completeModelSet.propertyByIri(featureIri)),
          {
            rangeValues: {
              thumbnail: galleryThumbnailSelector,
            },
          }
        )
        .addPropertyGroups(completeModelSet.propertyGroups, {
          properties: {
            rangeValues: {},
          },
        })
        .build()
        .toFastRdfString(),
    },
  };
};
