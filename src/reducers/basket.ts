import * as R from 'ramda';

import { EAddPhoneToBasket } from 'actionTypes';

const initialState: string[] = [];

// @ts-ignore
const basket = (state = initialState, { type, payload }) => {
  switch (type) {
    case EAddPhoneToBasket.ADD_PHONE_TO_BASKET:
      return R.append(payload, state);
    default:
      return state;
  }
};

export default basket;
