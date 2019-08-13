import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/store";
import Home from "../src/containers/home/index";
import {App} from "./containers/app/";
import { PersistGate } from 'redux-persist/integration/react';
import { Route } from "react-router-dom";
const target = document.querySelector("#root");
import configureStore from './store/store';
import Counter from "./containers/count/index";
const redux = configureStore();

render(
  <Provider store={redux.store}>
    <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={redux.persistor}>
          <App key="app" />
          <Route exact path="/" key="home" component={Home} />
          <Route exact path="/count" component={Counter} key="count" />
        </PersistGate>
    </ConnectedRouter>
  </Provider>,
  target
);
