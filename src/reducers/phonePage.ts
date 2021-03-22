import * as R from 'ramda';

import { EFetchPhoneById } from 'actionTypes';

const initialState = {
  id: null,
};

// @ts-ignore
const phonePage = (state = initialState, { type, payload }) => {
  switch (type) {
    case EFetchPhoneById.FETCH_PHONE_BY_ID_SUCCESS:
      return R.merge(state, {
        id: R.prop('id', payload),
      });
    default:
      return state;
  }
};

export default phonePage;
