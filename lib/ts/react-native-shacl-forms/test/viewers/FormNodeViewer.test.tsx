import * as React from "react";
import * as renderer from "react-test-renderer";
import {testForm} from "../testForm";
import {FormNodeDataViewer} from "../../src/viewers/FormNodeDataViewer";
import {createFormPropertyDataViewer} from "../../src/viewers/createFormPropertyDataViewer";
import {Text, ThemeProvider} from "@rneui/themed";
import {defaultTheme} from "@rneui/base";

jest.useFakeTimers();

test("renders correctly", () => {
  const formNode = testForm().nodeTypes[0].nodes[0];
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <FormNodeDataViewer
          formNodeData={formNode}
          formPropertyDataViewerFactory={createFormPropertyDataViewer}
          iconFactory={({name}) => <Text>{name}</Text>}
        />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
