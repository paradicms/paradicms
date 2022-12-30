import * as React from "react";
import * as renderer from "react-test-renderer";
import {testFormData} from "../testFormData";
import {FormNodeDataViewer} from "../../src/viewers/FormNodeDataViewer";
import {createFormPropertyDataViewer} from "../../src/viewers/createFormPropertyDataViewer";
import {Text, ThemeProvider} from "@rneui/themed";
import {defaultTheme} from "@rneui/base";

test("renders correctly", () => {
  const formNode = testFormData().nodeTypes[0].nodes[0];
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
