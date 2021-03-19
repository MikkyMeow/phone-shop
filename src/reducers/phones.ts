import * as R from 'ramda';
import { EFetchPhones } from 'actionTypes';

const initialState = {};

// @ts-ignore
export const phones = (state = initialState, { type, payload }) => {
  switch (type) {
    case EFetchPhones.FETCH_PHONES_SUCCESS:
      // @ts-ignore
      const newValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValues);
    default:
      return state;
  }
};

export default phones;
