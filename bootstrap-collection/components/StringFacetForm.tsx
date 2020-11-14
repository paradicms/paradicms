import * as React from "react";
import {
  StringFacetValue,
  StringFilter,
  StringFilterState,
} from "@paradicms/models";
import {FormGroup, Input, Label, ListGroup, ListGroupItem} from "reactstrap";

export const StringFacetForm: React.FunctionComponent<{
  currentState?: StringFilter; // value id's only
  onChange: (newState?: StringFilter) => void;
  valueUniverse: readonly StringFacetValue[];
}> = ({currentState, onChange, valueUniverse}) => {
  const state = new StringFilterState({
    filter: currentState,
    valueUniverse: Object.keys(valueUniverse),
  });

  return (
    <ListGroup>
      {valueUniverse
        .concat()
        .sort((left, right) => right.count - left.count)
        .map(value => {
          const onChangeValue = (
            e: React.ChangeEvent<HTMLInputElement>
          ): void => {
            const newChecked = e.target.checked;
            if (newChecked) {
              state.includeValue(value.value);
            } else {
              state.excludeValue(value.value);
            }
            onChange(state.snapshot);
          };

          return (
            <ListGroupItem className="w-100" key={value.value}>
              <FormGroup check>
                <Label check>
                  <Input
                    checked={state.includesValue(value.value)}
                    data-cy={"facet-value-" + value.value}
                    onChange={onChangeValue}
                    type="checkbox"
                  />
                  {value.label ?? value.value}&nbsp;({value.count})
                </Label>
              </FormGroup>
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
};
