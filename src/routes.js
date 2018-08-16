import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from './components/Layout';
import App from './App';
import About from './components/About';
import NotFound from './components/NotFound';

export default () => {
  return(
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Layout>
  )
}
