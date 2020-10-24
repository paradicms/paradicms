import * as React from "react";
import {StringFilter, StringFilterState} from "@paradicms/models";
import {FormGroup, Input, ListGroup, ListGroupItem, Label} from "reactstrap";

export const StringFacetForm: React.FunctionComponent<{
  currentState?: StringFilter; // value id's only
  onChange: (newState?: StringFilter) => void;
  valueUniverse: {[index: string]: string}; // valueId: value label
}> = ({currentState, onChange, valueUniverse}) => {
  const state = new StringFilterState({
    filter: currentState,
    valueUniverse: Object.keys(valueUniverse),
  });

  return (
    <ListGroup>
      {Object.keys(valueUniverse).map(valueId => {
        const valueLabel = valueUniverse[valueId];

        const onChangeValue = (
          e: React.ChangeEvent<HTMLInputElement>
        ): void => {
          const newChecked = e.target.checked;
          if (newChecked) {
            state.includeValue(valueId);
          } else {
            state.excludeValue(valueId);
          }
          onChange(state.snapshot);
        };

        return (
          <ListGroupItem className="w-100" key={valueId}>
            <FormGroup check>
              <Label check>
                <Input
                  checked={state.includesValue(valueId)}
                  data-cy={"facet-value-" + valueId}
                  onChange={onChangeValue}
                  type="checkbox"
                />
                {valueLabel}
              </Label>
            </FormGroup>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};
