import { phones } from './mockPhones';

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    resolve(phones);
    // reject('error');
  });
};

// @ts-ignore
export const loadMorePhones = async ({ offset }) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    resolve(phones);
    // reject('error');
  });
};
