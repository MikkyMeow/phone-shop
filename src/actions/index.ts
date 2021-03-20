import { EFetchPhones, ELoadMorePhones } from 'actionTypes';
import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
} from 'api';
import { getRenderedPhonesLength } from 'selectors';

interface IFetchPhones {}

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
export const loadMorePhones: React.FC<IFetchPhones> = () => async (
  dispatch: any,
  getState: any
) => {
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
