import * as React from "react";
import {
  StringFacetValue,
  StringFilter,
  StringFilterState,
} from "@paradicms/models";
import {
  Button,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
} from "reactstrap";

export const StringFacetForm: React.FunctionComponent<{
  currentState?: StringFilter; // value id's only
  onChange: (newState?: StringFilter) => void;
  valueUniverse: readonly StringFacetValue[];
}> = ({currentState, onChange, valueUniverse}) => {
  const state = new StringFilterState({
    filter: currentState,
    valueUniverse: valueUniverse.map(value => value.value),
  });

  return (
    <ListGroup>
      <ListGroupItem className="m-0 pr-0 w-100">
        <Button
          className="d-inline p-0"
          color="link"
          onClick={() => {
            state.includeAll();
            onChange(state.snapshot);
          }}
        >
          Select
        </Button>
        &nbsp;/&nbsp;
        <Button
          className="d-inline p-0 pl-1"
          color="link"
          onClick={() => {
            state.excludeAll();
            onChange(state.snapshot);
          }}
        >
          Deselect all
        </Button>
      </ListGroupItem>
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
