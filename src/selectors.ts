import * as R from 'ramda';

// @ts-ignore
export const getPhoneById = (state, id) => R.prop(id, state.phones);

// @ts-ignore
export const getPhones = (state) => {
  // const phones = R.map((id) => getPhoneById(state, id), state.phonesPage.ids);
  const applySearch = (item: any) =>
    R.contains(state.phonesPage.search, R.prop('name', item));

  const phones = R.compose(
    // @ts-ignore
    R.filter(applySearch),
    R.map((id) => getPhoneById(state, id))
  )(state.phonesPage.ids);
  return phones;
};

// @ts-ignore
export const getRenderedPhonesLength = (state) =>
  R.length(state.phonesPage.ids);

// @ts-ignore
export const getTotalBasketCount = (state) => R.length(state.basket);

// @ts-ignore
export const getTotalBasketPrice = (state) => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map((id) => getPhoneById(state, id))
  )(state.basket);

  return totalPrice;
};
