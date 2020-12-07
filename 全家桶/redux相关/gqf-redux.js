export function createStore(reducer, enhance) {
  if (enhance) {
    return enhance(createStore)(reducer);
  }
  let currentState;
  let listeners = [];
  function getState () {
    return currentState;
  }

  function dispatch (action) {
    currentState = reducer(currentState, action);
    listeners.forEach(cb => cb());
    return action;
  }

  function subscribe (cb) {
    listeners.push(cb)
  }

  dispatch({type: 'gqf nb'})
  
  return {
    getState,
    dispatch,
    subscribe
  }
}

function compose (...fns) {
  console.log(fns, fns.length)
  if (!fns.length) {
    return arg => arg
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce((left, right) => (...args) => right(left(...args)));
}

export function applyMiddleware (...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);
    let dispatch = store.dispatch;
    let midAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args) 
    }
    console.log(midAPI, middlewares)
    let chain = middlewares.map(mw => mw(midAPI));
    console.log(compose)
    dispatch = compose(...chain)(dispatch);

    return {
      ...store,
      dispatch
    }
  }
}