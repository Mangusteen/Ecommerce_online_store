export const BASE_URL = 'https://fakestoreapi.com';
export const PRODUCTS = 'https://fakestoreapi.com/products';

export const getTotalPrice = (arr) => {
  return arr.reduce((current, prev) => current + prev, 0)
}
