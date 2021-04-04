import {createStore, combineReducers} from 'redux'

import todosReducer from './reducer/todos'

const store = createStore(combineReducers({
    todos: todosReducer
}))

export default store