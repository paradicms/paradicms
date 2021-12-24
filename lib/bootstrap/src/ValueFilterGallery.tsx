import * as React from "react";
import {useCallback, useMemo, useState} from "react";
import {Image} from "@paradicms/models";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
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
import {PrimitiveType, ValueFilter, ValueFilterState} from "@paradicms/filters";
import {ValueFacet, ValueFacetValue} from "@paradicms/facets";

interface ValueFacetValueCardProps<T extends PrimitiveType> {
  filterState: ValueFilterState<T, ValueFilter<T>>;
  onChange: (newFilter: ValueFilter<T>) => void;
  value: ValueFacetValue<T>;
}

const ValueFacetValueCard = <T extends PrimitiveType>(
  props: ValueFacetValueCardProps<T>
) => {
  const {filterState, onChange, value} = props;

  const thumbnailSrc = value.thumbnail
    ? value.thumbnail.src
    : Image.placeholderSrc(thumbnailTargetDimensions);

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
          src={thumbnailSrc}
          style={{
            height: thumbnailTargetDimensions.height,
            marginBottom: "20px",
            marginTop: "20px",
            width: thumbnailTargetDimensions.width,
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

interface ValueFilterGalleryProps<T extends PrimitiveType> {
  facet: ValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (newFilter: ValueFilter<T>) => void;
}

export const ValueFilterGallery = <T extends PrimitiveType>(
  props: ValueFilterGalleryProps<T>
) => {
  const {facet, filter, onChange} = props;

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
            filterState={filterState}
            onChange={onChange}
            value={value}
          />
        </div>
      ))}
    </>
  );
};
