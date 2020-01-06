import {createStore, applyMiddleware, combineReducers} from 'redux';
import Thunk from 'redux-thunk'

import index from './reducers/index'

const store = createStore(
    combineReducers({
        index
    }),
    applyMiddleware(Thunk)
)

export default store;