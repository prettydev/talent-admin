import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './redux/store';
import Auth0ProviderWithHistory from './auth0-provider-with-history';
import { client } from './graphql';

const App = React.lazy(() => import(/* webpackChunkName: "App" */ './App'));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Auth0ProviderWithHistory>
      <Provider store={configureStore()}>
        <Suspense fallback={<div className="loading" />}>
          <App />
        </Suspense>
      </Provider>
    </Auth0ProviderWithHistory>
  </ApolloProvider>,
  document.getElementById('root')
);
/*
  //,
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
