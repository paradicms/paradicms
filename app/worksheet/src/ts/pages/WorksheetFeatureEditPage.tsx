import * as React from "react";
import {useWorksheet} from "~/hooks/useWorksheet";
import {Spinner} from "~/components/Spinner";
import {WorksheetNavigationFrame} from "~/components/WorksheetNavigationFrame";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
} from "reactstrap";
import classnames from "classnames";
import {RightsParagraph, thumbnailTargetDimensions} from "@paradicms/bootstrap";
import {Image} from "@paradicms/models";
import {WorksheetDescriptionFragment} from "~/components/WorksheetDescriptionFragment";
import {useCallback, useState} from "react";

export const WorksheetFeatureEditPage: React.FunctionComponent = () => {
  const [worksheet, dispatchWorksheet] = useWorksheet();
  const [
    openFeatureValueDescriptionAccordionIds,
    setOpenFeatureValueDescriptionAccordionIds,
  ] = useState<string[]>([]);

  const toggleFeatureValueDescriptionAccordion = useCallback(
    (featureValueDescriptionAccordionId: string) => {
      const accordionIdsCopy = openFeatureValueDescriptionAccordionIds.concat();
      const accordionIdIndex = openFeatureValueDescriptionAccordionIds.indexOf(
        featureValueDescriptionAccordionId
      );
      if (accordionIdIndex !== -1) {
        accordionIdsCopy.splice(accordionIdIndex, 1);
      } else {
        accordionIdsCopy.push(featureValueDescriptionAccordionId);
      }
      setOpenFeatureValueDescriptionAccordionIds(accordionIdsCopy);
    },
    [openFeatureValueDescriptionAccordionIds]
  );

  if (!worksheet) {
    return <Spinner />;
  }
  const feature = worksheet.currentFeature;
  if (!feature) {
    throw new EvalError("expected feature");
  }

  return (
    <WorksheetNavigationFrame
      headline={"Feature: " + feature.definition.title}
      finishButtonEnabled={true}
      nextButtonEnabled={true}
      previousButtonEnabled={true}
      worksheet={worksheet}
    >
      <p>
        Select one or more boxes, then click <b>Next</b> to move to the next
        feature. Click on the arrow at the bottom right of an image to see the
        definition and other information.
      </p>
      <Container fluid>
        <Row>
          {feature.values
            .concat()
            .sort((left, right) =>
              left.definition.title!.localeCompare(right.definition.title!)
            )
            .map((featureValue, featureValueI) => {
              const thumbnail = featureValue.definition.thumbnail({
                targetDimensions: thumbnailTargetDimensions,
              });
              let thumbnailSrc: string;
              if (thumbnail) {
                thumbnailSrc = thumbnail.src ?? thumbnail.uri;
              } else {
                thumbnailSrc = Image.placeholderSrc(thumbnailTargetDimensions);
              }

              const onToggleSelected = () => {
                featureValue.selected = !featureValue.selected;
                dispatchWorksheet({payload: worksheet});
              };

              return (
                <Card
                  className={classnames({
                    "border-info": featureValue.selected,
                    "mb-4": true,
                    "me-4": true,
                  })}
                  key={featureValueI}
                  style={{borderWidth: "8px", width: "240px"}}
                >
                  <CardHeader className="px-0 mt-2 text-center w-100">
                    <Button
                      color="primary"
                      onClick={onToggleSelected}
                      style={{cursor: "pointer", textDecoration: "none"}}
                    >
                      {featureValue.definition.title}
                    </Button>
                  </CardHeader>
                  <CardBody
                    className="pb-0 px-0 w-100"
                    style={{cursor: "pointer"}}
                  >
                    <figure className="figure">
                      <a onClick={onToggleSelected}>
                        <img
                          className="figure-img rounded"
                          src={thumbnailSrc}
                          style={{
                            height: thumbnailTargetDimensions.height,
                            width: thumbnailTargetDimensions.width,
                          }}
                        />
                      </a>
                      {thumbnail && thumbnail.rights ? (
                        <figcaption
                          className="figure-caption"
                          style={{fontSize: "xx-small"}}
                        >
                          <RightsParagraph
                            material="Image"
                            rights={thumbnail.rights}
                          />
                        </figcaption>
                      ) : null}
                    </figure>
                    {featureValue.definition.abstract ? (
                      <Accordion
                        open={openFeatureValueDescriptionAccordionIds}
                        /* @ts-ignore */
                        toggle={toggleFeatureValueDescriptionAccordion}
                      >
                        <AccordionHeader targetId={featureValueI.toString()}>
                          Description
                        </AccordionHeader>
                        <AccordionBody accordionId={featureValueI.toString()}>
                          <WorksheetDescriptionFragment
                            description={featureValue.definition.abstract}
                          />
                        </AccordionBody>
                      </Accordion>
                    ) : null}
                  </CardBody>
                </Card>
              );
            })}
        </Row>
      </Container>
    </WorksheetNavigationFrame>
  );
};
