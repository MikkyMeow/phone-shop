import * as R from 'ramda';
import { EFetchPhones } from './../actionTypes';

const initialState = {
  ids: [],
};

// @ts-ignore
const phonesPage = (state = initialState, { type, payload }) => {
  switch (type) {
    case EFetchPhones.FETCH_PHONES_SUCCESS:
      return R.merge(state, {
        // @ts-ignore
        ids: R.pluck('id', payload),
      });
    default:
      return state;
  }
};

export default phonesPage;
