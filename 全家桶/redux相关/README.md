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

* 安装`yarn add react-redux redux-thunk redux-logger`
