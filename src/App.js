import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loading from './components/views/loading';
const Homepage = lazy(() => import('./components/views/homepage'));
const NoMatch = lazy(() => import('./components/views/noMatch'));

function App() {
  return (
    <main className="App">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </main>
  );
}

export default App;
