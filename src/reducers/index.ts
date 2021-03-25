import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import phonePage from 'reducers/phonePage';
import phonesPage from 'reducers/phonesPage';
import phones from 'reducers/phones';
import basket from 'reducers/basket';

export const createRootReducer = (history: any) =>
  combineReducers({
    phones,
    phonesPage,
    phonePage,
    basket,
    router: connectRouter(history),
  });
