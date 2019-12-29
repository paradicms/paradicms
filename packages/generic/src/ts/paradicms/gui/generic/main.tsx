import 'paradicms/gui/generic/custom_bootstrap.scss';

import {apolloClient} from "paradicms/gui/generic/api/apolloClient";
import {createBrowserHistory} from 'history';
import {NoRoute} from 'paradicms/gui/generic/components/error/NoRoute';
import {Home} from 'paradicms/gui/generic/components/home/Home';
import {Privacy} from 'paradicms/gui/generic/components/static/Privacy';
import {Hrefs} from 'paradicms/gui/generic/Hrefs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ApolloProvider} from "react-apollo";
import {ApolloProvider as ApolloHooksProvider} from "@apollo/react-hooks";
import {Route, Router, Switch} from 'react-router';
import {ConsoleLogger, LoggerContext} from 'paradicms-gui-lib';
import {CollectionOverview} from "paradicms/gui/generic/components/collection/CollectionOverview";
import {InstitutionOverview} from "paradicms/gui/generic/components/institution/InstitutionOverview";
import {ObjectOverview} from "paradicms/gui/generic/components/object/ObjectOverview";
import {SearchResults} from "paradicms/gui/generic/components/search/SearchResults";

// Logger
const logger = new ConsoleLogger();

// Stores
const browserHistory = createBrowserHistory();

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <ApolloHooksProvider client={apolloClient}>
        <LoggerContext.Provider value={logger}>
          <Router history={browserHistory}>
              <Switch>
                  <Route exact path={Hrefs.home} component={Home}/>
                  <Route path="/institution/:institutionUri/collection/:collectionUri/object/:objectUri"
                         component={ObjectOverview}/>
                  <Route path="/institution/:institutionUri/collection/:collectionUri" component={CollectionOverview}/>
                  <Route path="/institution/:institutionUri" component={InstitutionOverview}/>
                  <Route exact path={Hrefs.privacy} component={Privacy}/>
                  <Route path="/search/:text" component={SearchResults}/>
                  <Route component={NoRoute}/>
              </Switch>
          </Router>
        </LoggerContext.Provider>
      </ApolloHooksProvider>
    </ApolloProvider>,
    document.getElementById('root')
);
