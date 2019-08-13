import {createStore,applyMiddleware,compose} from "redux";
import {connectRouter,routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import rootReducer from "../modules/rootReducer";

// doc https://github.com/rt2zz/redux-persist
// import persist store and persist reducer
import {persistStore,persistReducer} from 'redux-persist';

// import persist storage
import storage from 'redux-persist/lib/storage';

export const history = createHistory();

// config for persist, setting it to session storage
// blacklisting payment reducer
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['payment']
}

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

// persisted reducer passing config and out main reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configure store with history and our persisted reducer
export default function configureStore() {
  const store = createStore(
    connectRouter(history)(persistedReducer),
    initialState,
    composedEnhancers
  );

  // our persisted store
  const persistor = persistStore(store);

  // return object of both store and our persistor
  return {
    store,
    persistor
  };
}