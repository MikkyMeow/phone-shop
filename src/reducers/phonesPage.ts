import * as R from 'ramda';
import { EFetchPhones, ELoadMorePhones } from './../actionTypes';

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
    case ELoadMorePhones.LOAD_MORE_PHONES_SUCCESS:
      // @ts-ignore
      const ids = R.pluck('id', payload);
      return R.merge(state, {
        // @ts-ignore
        ids: R.concat(state.ids, ids),
      });

    default:
      return state;
  }
};

export default phonesPage;
