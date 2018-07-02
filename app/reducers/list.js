import * as types from '../actions/actionTypes';

// const initialState = {
//     allList: []
// };
// export const list = (state = initialState, action) => {
//     switch (action.type) {
//         case types.LIST:
//             // console.log('AAASSSEEEeeeeeeeeeeeeeeeWWWDDD' + action.payload.allList);
//             return Object.assign({}, state, {
//                 allList: action.payload.allData
//             });
//         default:
//             return state;
//     }
// };

const initialState = {
    lists: [],
    item: [],
    loading: false,
    error: null
};

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_LIST_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case types.FETCH_LIST_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return Object.assign({}, state, {
                loading: false,
                lists: action.payload
            });

        case types.FETCH_LIST_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                lists: []
            };

        case types.POST_LIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                item: action.payload
            });

        case types.POST_LIST_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}