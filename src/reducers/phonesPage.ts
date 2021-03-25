import * as R from 'ramda';
import { EFetchPhones, ELoadMorePhones, ESearchPhone } from './../actionTypes';

const initialState = {
  ids: [],
  search: '',
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
    case ESearchPhone.SEARCH_PHONE:
      return R.merge(state, {
        search: payload,
      });
    default:
      return state;
  }
};

export default phonesPage;
