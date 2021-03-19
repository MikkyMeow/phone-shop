import { EFetchPhones } from 'actionTypes';

const initialState = {};

// @ts-ignore
export const phones = (state = initialState, { type, payload }) => {
  switch (type) {
    case EFetchPhones.FETCH_PHONES_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default phones;
