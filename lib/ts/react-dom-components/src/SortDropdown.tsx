import {Sort} from "@paradicms/services";
import React, {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

export const SortDropdown = <
  SortPropertyT,
  SortT extends Sort<SortPropertyT>
>(props: {
  onChange: (sort: SortT) => void;
  options: readonly SortT[];
  sortToString: (sort: SortT) => string;
  value: SortT;
}) => {
  const {onChange, options, sortToString, value} = props;

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={open} toggle={toggle}>
      <DropdownToggle caret>Sort by: {sortToString(value)}</DropdownToggle>
      <DropdownMenu>
        {options.map((option, optionI) => (
          <DropdownItem
            key={optionI}
            onClick={() => {
              if (option.ascending !== value.ascending) {
                console.debug(
                  "sort ascending changed to:",
                  JSON.stringify(option)
                );
                onChange(option);
              } else if (option.property !== value.property) {
                console.debug(
                  "sort property changed to:",
                  JSON.stringify(option)
                );
                onChange(option);
              } else {
                console.debug(
                  "sort hasn't changed from:",
                  JSON.stringify(value),
                  "to:",
                  JSON.stringify(option)
                );
              }
            }}
          >
            {sortToString(option)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
