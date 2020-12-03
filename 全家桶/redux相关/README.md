# redux相关

### 最基本的redux使用

* 安装redux
* redux最基本的使用
  * createStore - 参数传入reducer
  * getState - 获取state
  * dispatch - 更改数据
  * subscribe  订阅，在回调函数中处理逻辑
* 在src目录下新建store目录，新建index.js
```js
import {createStore} from 'redux'

function CounterReducer (state = 0, action) {
  switch(action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(CounterReducer);

export default store;
```
* 写一个ReduxTest组件
```js
import React, { Component } from 'react'

import store from '../store'
// console.log(store)

export default class ReduxTest extends Component {
  componentDidMount () {
    store.subscribe(() => {
      this.forceUpdate();
    })
  }
  render() {
    return (
      <div>
        <h1>Redux Test</h1>
        <div>
          <span>{store.getState()}</span>
          <div>
            <button onClick={() => store.dispatch({type: 'add'})}>+</button>
            <button onClick={() => store.dispatch({type: 'minus'})}>-</button>
          </div>
        </div>
      </div>
    )
  }
}

```

### react-redux结合中间件
* react-redux解决的痛点为
 * 提供Provider，在根组件把store传下去，这样store就可以在任意组件都能取到了
 * connect函数，提供响应式，便捷各种操作，mapStateToProps,mapDispathToProps
* 安装`yarn add react-redux redux-thunk redux-logger`
* thunk是解决异步的问题
* logger是打印日志
* src/index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();

```
* store/counter.js
```js
export function CounterReducer (state = 0, action) {
  let num = action.payload || 1;
  switch(action.type) {
    case "add":
      return state + num;
    case "minus":
      return state - num;
    default:
      return state;
  }
}

export const add = (step) => ({type: 'add', payload: step});
export const minus = () => ({type: 'minus'});
export const asyncAdd = () => dispatch => {
  setTimeout(() => {
    dispatch({type: 'add', payload: 10})
  }, 1000)
}
```
* store/index.js
```js
import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {CounterReducer} from './counter'

const store = createStore(
  combineReducers({
    counter: CounterReducer
  }),
  applyMiddleware(logger, thunk)
);

export default store;
```
* ReduxTest
```js
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add, minus, asyncAdd} from '../store/counter'

@connect(
  state => ({num: state.counter}),
  {
    add,
    minus,
    asyncAdd
  }
)
class ReduxTest extends Component {
  render() {
    return (
      <div>
        <h1>Redux Test</h1>
        <div>
          <span>{this.props.num}</span>
          <div>
            {/* <button onClick={() => this.props.dispatch({type: 'add'})}>+</button>
            <button onClick={() => this.props.dispatch({type: 'minus'})}>-</button> */}
            <button onClick={() => this.props.add(2)}>+</button>
            <button onClick={this.props.minus}>-</button>
            <button onClick={this.props.asyncAdd}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReduxTest

```
