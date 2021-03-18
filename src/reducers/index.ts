import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import phones from 'reducers/phones';

export const createRootReducer = (history: any) =>
  combineReducers({
    phones,
    router: connectRouter(history),
  });
