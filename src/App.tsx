import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createRootReducer } from 'reducers';
import Router from 'routes';

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="view-container">
          <div className="container">
            <div className="row">
              <div className="col-md-3">Sidebar</div>
              <div className="col-md-9">
                <Router />
              </div>
            </div>
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
