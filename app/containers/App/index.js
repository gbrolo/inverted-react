/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from 'containers/LandingPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={LandingPage} />
      </Switch>      
    </div>
  );
}
