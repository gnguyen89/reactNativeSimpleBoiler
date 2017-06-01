import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './store';
import Router from './router';

// set up Redux middlewares
function configureMiddlewares() {
  const middlewares = [ReduxThunk];

  // if (__DEV__ === true) {
  const reduxLogger = createLogger({
    predicate: (getState, action) => action.type !== 'WINDOW_RESIZE',
    collapsed: () => true,
  });
  middlewares.push(reduxLogger);
  // }

  return middlewares;
}

export default function App() {
  const middlewares = configureMiddlewares();
  const store = createStore(reducers, {}, applyMiddleware(...middlewares));

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
