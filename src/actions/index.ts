import {
  EFetchPhones,
  ELoadMorePhones,
  EFetchPhoneById,
  EAddPhoneToBasket,
  ESearchPhone,
} from 'actionTypes';
import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
  fetchPhoneById as fetchPhoneByIdApi,
} from 'api';
import { getRenderedPhonesLength } from 'selectors';

// @ts-ignore
export const fetchPhones: React.FC<IFetchPhones> = () => async (dispatch) => {
  dispatch({
    type: EFetchPhones.FETCH_PHONES_PENDING,
  });

  try {
    const phones = await fetchPhonesApi();
    dispatch({
      type: EFetchPhones.FETCH_PHONES_SUCCESS,
      payload: phones,
    });
  } catch (err) {
    dispatch({
      type: EFetchPhones.FETCH_PHONES_FAILURE,
      payload: err,
      error: true,
    });
  }
};

// @ts-ignore
export const loadMorePhones = () => async (dispatch: any, getState: any) => {
  const offset = getRenderedPhonesLength(getState());
  dispatch({
    type: ELoadMorePhones.LOAD_MORE_PHONES_PENDING,
  });

  try {
    const phones = await loadMorePhonesApi({ offset });
    dispatch({
      type: ELoadMorePhones.LOAD_MORE_PHONES_SUCCESS,
      payload: phones,
    });
  } catch (err) {
    dispatch({
      type: ELoadMorePhones.LOAD_MORE_PHONES_FAILURE,
      payload: err,
      error: true,
    });
  }
};

// @ts-ignore
export const fetchPhoneById = (id) => async (dispatch) => {
  dispatch({
    type: EFetchPhoneById.FETCH_PHONE_BY_ID_PENDING,
  });

  try {
    const phone = await fetchPhoneByIdApi(id);
    dispatch({
      type: EFetchPhoneById.FETCH_PHONE_BY_ID_SUCCESS,
      payload: phone,
    });
  } catch (err) {
    dispatch({
      type: EFetchPhoneById.FETCH_PHONE_BY_ID_FAILURE,
      payload: err,
      error: true,
    });
  }
};

// @ts-ignore
export const addPhoneToBasket = (id) => (dispatch) => {
  dispatch({
    type: EAddPhoneToBasket.ADD_PHONE_TO_BASKET,
    payload: id,
  });
};

// @ts-ignore
export const searchPhone = (text) => (dispatch) => {
  dispatch({
    type: ESearchPhone.SEARCH_PHONE,
    payload: text,
  });
};
