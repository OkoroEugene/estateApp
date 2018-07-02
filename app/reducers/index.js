// reducers/index.js

import { combineReducers } from 'redux'
import listReducer from './list'

export default combineReducers({
    list: listReducer,
})

// export default rootReducer