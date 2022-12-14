import * as React from "react";
import * as renderer from "react-test-renderer";
import {testForm} from "../testForm";
import {FormNodeViewer} from "../../src/viewers/FormNodeViewer";
import {createFormPropertyViewer} from "../../src/viewers/createFormPropertyViewer";
import {Text, ThemeProvider} from "@rneui/themed";
import {defaultTheme} from "@rneui/base";

jest.useFakeTimers();

test("renders correctly", () => {
  const formNode = testForm().nodeTypes[0].nodes[0];
  const tree = renderer
    .create(
      <ThemeProvider theme={defaultTheme}>
        <FormNodeViewer
          formNode={formNode}
          formPropertyViewerFactory={createFormPropertyViewer}
          iconFactory={({name}) => <Text>{name}</Text>}
        />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
