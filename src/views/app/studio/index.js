import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Studios = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './studios')
);
const StudioMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/studios`} />
      <Route
        path={`${match.url}/studios`}
        render={(props) => <Studios {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default StudioMenu;
