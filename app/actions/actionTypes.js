// const REQUEST = 'REQUEST';
// const SUCCESS = 'SUCCESS';
// const FAILURE = 'FAILURE';

// function createRequestTypes(base) {
//     const res = {};
//     [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `${base}_${type}`);
//     return res;
// }

// // Login events
// export const LOGIN = createRequestTypes('LOGIN');
// export const LOGOUT = 'LOGOUT'; // logout is always success

// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';
// export const LIST = "LIST";

export const FETCH_LIST_BEGIN = 'FETCH_LIST_BEGIN';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS';
export const POST_LIST_FAILURE = 'POST_LIST_FAILURE;'