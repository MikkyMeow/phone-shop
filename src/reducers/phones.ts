import * as R from 'ramda';
import { EFetchPhoneById, EFetchPhones, ELoadMorePhones } from 'actionTypes';

const initialState = {};

// @ts-ignore
export const phones = (state = initialState, { type, payload }) => {
  switch (type) {
    case EFetchPhones.FETCH_PHONES_SUCCESS:
      // @ts-ignore
      const newValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValues);
    case ELoadMorePhones.LOAD_MORE_PHONES_SUCCESS:
      // @ts-ignore
      const moreValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, moreValues);
    case EFetchPhoneById.FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state);
    default:
      return state;
  }
};

export default phones;
