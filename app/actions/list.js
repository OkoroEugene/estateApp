import * as types from './actionTypes';

export const fetchListsBegin = () => ({
    type: types.FETCH_LIST_BEGIN
});

export const fetchLists = () => dispatch => {
    fetch('http://192.168.10.10:5000/api/list')
        .then(res => res.json())
        .then(allData => dispatch({
            type: types.FETCH_LIST_SUCCESS,
            payload: allData
        }))
        .catch(err => dispatch({
            type: types.FETCH_LIST_FAILURE,
            payload: err
        }));
}

export const postList = (list = {}) => dispatch => {
    fetch('http://192.168.10.10:5000/api/postData', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(list)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: types.POST_LIST_SUCCESS,
            payload: data
        }))
        .catch(err => dispatch({
            type: types.POST_LIST_FAILURE,
            payload: {
                error: err
            }
        }));
}