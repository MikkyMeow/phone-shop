import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import phonesPage from 'reducers/phonesPage';
import phones from 'reducers/phones';

export const createRootReducer = (history: any) =>
  combineReducers({
    phones,
    phonesPage,
    router: connectRouter(history),
  });
