export function createStore (reducer) {
  let currentState;
  let listeners = [];

  function getState () {
    return currentState;
  }

  function dispatch (action) {
    currentState = reducer(currentState, action)
    listeners.forEach(fn => fn())
    return action;
  }

  function subscribe(cb) {
    listeners.push(cb)
  }

  dispatch({type: 'gqf-redux~~'})

  return {
    getState,
    dispatch,
    subscribe,
  }
}