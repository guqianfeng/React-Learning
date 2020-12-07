import React, { Component } from 'react'

import {createStore, applyMiddleware} from '../store/gqf-redux'
function CounterReducer (state = 0, action) {
  let step = action.payload || 1;
  switch (action.type) {
    case 'add':
      return state + step;
    case 'minus':
      return state - step;
    default:
      return state;
  }
}

const loggerGqf = () => dispatch => action => {
  console.log('gqf', action.type)
  return dispatch(action)
}

const loggerTest = () => dispatch => action => {
  console.log('test', action.type)
  return dispatch(action)
}

const store = createStore(CounterReducer, applyMiddleware(loggerGqf, loggerTest));
// console.log(store)


export default class MyReduxTest extends Component {
  componentDidMount(){
    store.subscribe(() => {
      this.forceUpdate();
    })
  }
  render() {
    return (
      <div>
        <h1>My Redux Test</h1>
        <div>
          <p>{store.getState()}</p>
          <div>
            <button onClick={() => store.dispatch({type: 'add'})}>+</button>
            <button onClick={() => store.dispatch({type: 'minus'})}>-</button>
          </div>
        </div>
      </div>
    )
  }
}
