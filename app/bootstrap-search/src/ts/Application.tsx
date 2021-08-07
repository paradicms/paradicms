import * as React from "react";
import {useContext} from "react";
import {Col, Container, Navbar, NavbarBrand, Row} from "reactstrap";
import {CurrentQueryStore} from "~/stores/CurrentQueryStore";
import {Query} from "~/models/Query";
import {ConfigurationContext} from "~/contexts/ConfigurationContext";
import {ObjectQueryServiceContext} from "~/contexts/ObjectQueryServiceContext";
import {createAsyncAction, errorResult, successResult} from "pullstate";
import {GetObjectsResult, ObjectQueryService} from "~/services/ObjectQueryService";
import {CurrentQueryContainer} from "~/components/CurrentQueryContainer";

const getObjectsAsyncAction = createAsyncAction<{objectQueryService: ObjectQueryService; query: Query | null},
  {result: GetObjectsResult | null}>(
  async ({objectQueryService, query}) => {
    if (!query) {
      console.debug("query is null, returning null result");
      return successResult({result: null});
    }

    try {
      const result = await objectQueryService.getObjects(query);
      return successResult({result});
    } catch (e) {
      return errorResult([], undefined, e);
    }
  },
  {
    postActionHook: ({result, stores}) => {
      if (result.error) {
        console.debug("postActionHook ignoring getObjects error");
        return;
      } else if (!result.payload.result) {
        return;
      }
      CurrentResultsStore.update((state) => {
        state.initialized = true;
        state.currentResult = result.payload.result!;
      });
    },
  }
);

export const Application: React.FunctionComponent = () => {
  console.debug("Rendering application");
  console.debug("");

  const configuration = useContext(ConfigurationContext);
  console.debug("Configuration:", JSON.stringify(configuration));
  console.debug("");

  // @ts-ignore
  const {currentQuery, initialized: currentQueryInitialized} =
    CurrentQueryStore.useState((state) => state);
  console.debug("Current query:", JSON.stringify(currentQuery));
  console.debug("Current query initialized:", currentQueryInitialized);
  console.debug("");

  // @ts-ignore
  const {currentResult, initialized: currentResultInitialized} =
    CurrentResultsStore.useState((state) => state);
  console.debug("Current result:", JSON.stringify(currentResult));
  console.debug("Current result initialized:", currentResultInitialized);
  console.debug("");

  const objectQueryService = useContext(ObjectQueryServiceContext);

  const [getObjectsFinished, getObjectsResult] =
    getObjectsAsyncAction.useBeckon({
      objectQueryService,
      query: currentQueryInitialized ? currentQuery : null,
    });
  // console.debug("getObjects started:", getObjectsStarted);
  // console.debug("getObjects finished:", getObjectsFinished);
  // console.debug("getObjects result:", JSON.stringify(getObjectsResult));

  if (!currentQueryInitialized) {
    CurrentQueryStore.update((state) => {
      state.initialized = true;
      state.currentQuery.filters = configuration.filters;
    });
    return null;
  }

  if (!currentResultInitialized) {
    // Don't run the action until we've initialized the current query from the configuration
    getObjectsAsyncAction.run({objectQueryService, query: currentQuery});
  }

  if (!getObjectsFinished) {
    // console.debug("getObjects not finished");
    return null;
  }
  if (getObjectsResult.error) {
    throw new EvalError("not implemented");
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Navbar className="p-0">
            <NavbarBrand>DressDiscover Search</NavbarBrand>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <CurrentQueryContainer />
        </Col>
        <Col className="px-0" xs={8}>
          <CurrentResultsContainer />
        </Col>
      </Row>
    </Container>
  );
};
