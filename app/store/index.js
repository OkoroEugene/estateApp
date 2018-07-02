// configureStore.js

import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'

const initialState = {};
const middleWare = [thunk];
export default store = createStore(rootReducer, initialState, applyMiddleware(...middleWare))
// export default store