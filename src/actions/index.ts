import { EFetchPhones } from 'actionTypes';
import { fetchPhones as fetchPhonesApi } from 'api';

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
