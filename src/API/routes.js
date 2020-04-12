const _BASE_URL = "http://localhost:80/";
const VERSION = "v1/";
const _API_URL = `${_BASE_URL}${VERSION}`;

export const allOrders = () => `${_API_URL}admin/orders`;
export const allUsers = () => `${_API_URL}admin/users`;
export const allProducts = () => `${_API_URL}admin/products`;
