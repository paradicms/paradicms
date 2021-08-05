import {FreetextFilter} from "~/models/FreetextFilter";
import React, {FormEvent, useCallback, useState} from "react";
import {Button, Form, Input} from "reactstrap";
import {CurrentQueryStore} from "~/stores/CurrentQueryStore";
import {encodeBase58String} from "~/utils/encodeBase58String";

export const FreetextFilterComponent: React.FunctionComponent<{
  filter: FreetextFilter;
}> = ({filter}) => {
  const [value, setValue] = useState<string>(filter.value);

  const onSubmit = useCallback(
    (ev: FormEvent<HTMLFormElement>) => {
      CurrentQueryStore.update((state) => {
        const currentFilter = state.currentQuery.filters.find(
          (checkFilter) => checkFilter.id === filter.id
        );
        if (currentFilter && currentFilter.type === "freetext") {
          (currentFilter as FreetextFilter).value = value;
          console.debug("updated filter", filter.id, "value to", value);
        } else {
          console.warn(`unable to find filter ${filter.id}`);
        }
      });
      ev.preventDefault();
    },
    [filter, value]
  );

  const encodedFilterId = encodeBase58String(filter.id);

  return (
    <Form inline onSubmit={onSubmit}>
      <Input
        className="mr-4"
        id={encodedFilterId}
        name={encodedFilterId}
        type="search"
        onChange={(e) => setValue(e.target.value)}
        placeholder={filter.label}
        style={{width: "24em"}}
        value={value}
      ></Input>
      <Button type="submit">Submit</Button>
    </Form>
  );
  return <div></div>;
};
