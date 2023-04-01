import * as React from "react";
import {useCallback, useMemo, useState} from "react";
import {smallThumbnailTargetDimensions} from "./smallThumbnailTargetDimensions";
import classNames from "classnames";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import {
  JsonPrimitiveType,
  ValueFacet,
  ValueFacetValue,
  ValueFilter,
  ValueFilterState,
} from "@paradicms/services";
import {Image} from "@paradicms/models";

interface ValueFacetValueCardProps<T extends JsonPrimitiveType> {
  filterState: ValueFilterState<T, ValueFilter<T>>;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  onChange: (newFilter: ValueFilter<T>) => void;
  value: ValueFacetValue<T>;
}

const ValueFacetValueCard = <T extends JsonPrimitiveType>(
  props: ValueFacetValueCardProps<T>
) => {
  const {filterState, getAbsoluteImageSrc, onChange, value} = props;

  const onToggle = useCallback(() => {
    if (filterState.includesValue(value.value)) {
      filterState.excludeValue(value.value);
    } else {
      filterState.includeValue(value.value);
    }
    onChange(filterState.snapshot);
  }, [filterState, value]);

  const [openAccordionId, setOpenAccordionId] = useState<string>("");

  const toggleAccordion = useCallback(
    (newOpenAccordionId: string) => {
      if (newOpenAccordionId === openAccordionId) {
        setOpenAccordionId("");
      } else {
        setOpenAccordionId(newOpenAccordionId);
      }
    },
    [openAccordionId]
  );

  return (
    <Card
      className={classNames({
        "border-info": filterState.includesValue(value.value),
        "mb-4": true,
        "me-4": true,
        "text-center": true,
      })}
      style={{
        borderWidth: "4px",
      }}
    >
      <CardHeader>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              checked={filterState.includesValue(value.value)}
              onChange={onToggle}
            />
            {value.label}
          </Label>
        </FormGroup>
      </CardHeader>
      <a onClick={onToggle}>
        <CardImg
          src={
            value.thumbnail?.src
              ? getAbsoluteImageSrc(value.thumbnail.src)
              : Image.placeholderSrc(smallThumbnailTargetDimensions)
          }
          style={{
            height: smallThumbnailTargetDimensions.height,
            marginBottom: "20px",
            marginTop: "20px",
            width: smallThumbnailTargetDimensions.width,
          }}
          title={value.label ?? value.value.toString()}
        />
      </a>
      {value.thumbnail && value.thumbnail.rights ? (
        <CardBody>
          {/*@ts-ignore*/}
          <Accordion open={openAccordionId} toggle={toggleAccordion}>
            <AccordionItem>
              <AccordionHeader targetId="0">Image rights</AccordionHeader>
              <AccordionBody accordionId="0">
                <table style={{fontSize: "xx-small"}}>
                  {Object.keys(value.thumbnail.rights).map(rightsKey => {
                    const rightsValue = (value.thumbnail!.rights as any)[
                      rightsKey
                    ];
                    if (!rightsValue) {
                      return;
                    }
                    return (
                      <tr>
                        <td style={{padding: 0, textAlign: "left"}}>
                          <strong>
                            {rightsKey[0].toUpperCase() +
                              rightsKey.substring(1)}
                          </strong>
                        </td>
                        <td style={{padding: 0, textAlign: "left"}}>
                          {rightsValue}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </CardBody>
      ) : null}
    </Card>
  );
};

interface ValueFilterGalleryProps<T extends JsonPrimitiveType> {
  facet: ValueFacet<T>;
  filter: ValueFilter<T>;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  onChange: (newFilter: ValueFilter<T>) => void;
}

export const ValueFilterGallery = <T extends JsonPrimitiveType>(
  props: ValueFilterGalleryProps<T>
) => {
  const {facet, filter, getAbsoluteImageSrc, onChange} = props;

  const filterState = useMemo(
    () =>
      new ValueFilterState({
        filter,
        valueUniverse: facet.values.map(value => value.value),
      }),
    [facet, filter]
  );

  return (
    <>
      {facet.values.map(value => (
        <div
          key={value.value.toString()}
          style={{
            marginLeft: "20px",
            marginBottom: "20px",
            // width: "400px",
          }}
        >
          <ValueFacetValueCard
            getAbsoluteImageSrc={getAbsoluteImageSrc}
            filterState={filterState}
            onChange={onChange}
            value={value}
          />
        </div>
      ))}
    </>
  );
};
