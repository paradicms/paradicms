import 'dressdiscover/cms/gui/core/custom_bootstrap.scss';

import {apolloClient} from "dressdiscover/cms/gui/core/api/apolloClient";
import {createBrowserHistory} from 'history';
import {NoRoute} from 'dressdiscover/cms/gui/core/components/error/NoRoute';
import {Home} from 'dressdiscover/cms/gui/core/components/home/Home';
import {Privacy} from 'dressdiscover/cms/gui/core/components/static/Privacy';
import {Hrefs} from 'dressdiscover/cms/gui/core/Hrefs';
import {ConsoleLogger} from 'dressdiscover/cms/gui/core/util/logging/ConsoleLogger';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ApolloProvider} from "react-apollo";
import {ApolloProvider as ApolloHooksProvider} from "@apollo/react-hooks";
import {Route, Router, Switch} from 'react-router';
import {LoggerContext} from 'dressdiscover/cms/gui/core/util/logging/LoggerContext';
import {CollectionOverview} from "dressdiscover/cms/gui/core/components/collection/CollectionOverview";
import {InstitutionOverview} from "dressdiscover/cms/gui/core/components/institution/InstitutionOverview";
import {ObjectOverview} from "dressdiscover/cms/gui/core/components/object/ObjectOverview";
import {SearchResults} from "dressdiscover/cms/gui/core/components/search/SearchResults";

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
