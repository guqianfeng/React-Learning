import React, {useState} from 'react'
import useWatch from '../hooks/use-watch'

export default function WatchDemo() {
    const [count, setCount] = useState(0)
    const stop = useWatch(count, (prev) => {
        console.log('发生变化了，当前值是 ', count, '上一次值是 ', prev)
    }, {
        immediate: !true
    })
    return (
        <div>
            <h1>Watch Demo</h1>
            <div>
                {count}
            </div>
            <div>
                <button onClick={() => {
                    setCount(count + 1)
                }}>+</button>
                <button onClick={() => {
                    setCount(count - 1)
                }}>-</button>
                <button onClick={stop}>停止观察</button>
            </div>
        </div>
    )
}
