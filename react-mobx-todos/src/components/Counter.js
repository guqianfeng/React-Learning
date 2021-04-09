import React from 'react'
import { observer } from 'mobx-react'
// import { useStores } from '../hooks/use-stores'
import { useCounterStore } from '../hooks/index'

export default observer(function Counter() {

    // const { counterStore } = useStores()
    const counterStore = useCounterStore()
    console.warn(counterStore)

    return (
        <div>
            <div>{counterStore.count}</div>
            <div>{counterStore.doubleCount}</div>
            <button onClick={e => counterStore.increment()}>+</button>
            <button onClick={e => counterStore.decrement()}>-</button>
        </div>
    )
})
