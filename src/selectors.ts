import * as R from 'ramda';

// @ts-ignore
export const getPhoneById = (state, id) => R.prop(id, state.phones);

// @ts-ignore
export const getPhones = (state) => {
  const phones = R.map((id) => getPhoneById(state, id), state.phonesPage.ids);
  return phones;
};

// @ts-ignore
export const getRenderedPhonesLength = (state) =>
  R.length(state.phonesPage.ids);
