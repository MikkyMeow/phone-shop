import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import phonePage from 'reducers/phonePage';
import phonesPage from 'reducers/phonesPage';
import phones from 'reducers/phones';

export const createRootReducer = (history: any) =>
  combineReducers({
    phones,
    phonesPage,
    phonePage,
    router: connectRouter(history),
  });
