export const api = (limit, page) => `https://join-tsh-api-staging.herokuapp.com/products?limit=${limit}&page=${page}`
export const searchApi = (search, promo, active) => `https://join-tsh-api-staging.herokuapp.com/products?search=${search}&promo=${promo}&active=${active}`
export const apiDetail = (id) => `https://join-tsh-api-staging.herokuapp.com/products/${id}`