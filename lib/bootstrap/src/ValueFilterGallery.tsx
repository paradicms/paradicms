import * as React from "react";
import {useCallback, useMemo} from "react";
import {
  JoinedImage,
  JoinedValueFacet,
  JoinedValueFacetValue,
  PrimitiveType,
  ValueFilter,
  ValueFilterState,
} from "@paradicms/models";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import classNames from "classnames";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import {Accordion} from "./Accordion";
import {RightsTable} from "./RightsTable";

interface ValueFacetValueCardProps<T extends PrimitiveType> {
  filterState: ValueFilterState<T, ValueFilter<T>>;
  onChange: (newFilter: ValueFilter<T>) => void;
  value: JoinedValueFacetValue<T>;
}

const ValueFacetValueCard = <T extends PrimitiveType>(
  props: ValueFacetValueCardProps<T>
) => {
  const {filterState, onChange, value} = props;

  const thumbnail = value.thumbnail({
    targetDimensions: thumbnailTargetDimensions,
  });
  const thumbnailSrc =
    thumbnail?.src ?? JoinedImage.placeholderSrc(thumbnailTargetDimensions);

  const onToggle = useCallback(() => {
    if (filterState.includesValue(value.value)) {
      filterState.excludeValue(value.value);
    } else {
      filterState.includeValue(value.value);
    }
    onChange(filterState.snapshot);
  }, [filterState, value]);

  return (
    <Card
      className={classNames({
        "border-info": filterState.includesValue(value.value),
        "mb-4": true,
        "mr-4": true,
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
          title={value.label}
        />
      </a>
      {thumbnail && thumbnail.rights ? (
        <CardBody>
          <Accordion title="Image rights">
            <RightsTable
              cellStyle={{
                padding: 0,
                textAlign: "left",
              }}
              rights={thumbnail.rights}
              tableStyle={{fontSize: "xx-small"}}
            ></RightsTable>
          </Accordion>
        </CardBody>
      ) : null}
    </Card>
  );
};

interface ValueFilterGalleryProps<T extends PrimitiveType> {
  facet: JoinedValueFacet<T>;
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
      {facet.joinedValues.map(value => (
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
