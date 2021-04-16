import React, {useCallback,useMemo, useState, useRef, useEffect} from 'react'

export default function HookDemo() {
    const [count, setCount] = useState(10)
    const [msg, setMsg] = useState('hello hook')
    // const dbCountCb = useCallback(() => {
    //     console.log('dbcount-useCallback')
    //     return count * 2
    // }, [count])
    const dbCountCb = useMemo(() => {
        return () => {
            console.log('dbCountcb')
            return count * 2
        }
    }, [count])
    const dbCountMemo = useMemo(() => {
        console.log('dbcount-useMemo')
        return count * 2
    }, [count])
    const reverseMsgMemo = useMemo(() => {
        console.log('reverseMsg-useMemo')
        return msg.split('').reverse().join('')
    }, [msg])
    const prevCount = useRef(count)
    useEffect(() => {
        if (prevCount.current === count) {
            return;
        }
        changeColorEl.current.style.color = prevCount.current < count ? 'red' : 'blue'
        prevCount.current = count
    }, [count])
    const changeColorEl = useRef(null)
    return (
        <div>
            <h1>Hook Demo</h1>
            <div ref={changeColorEl}>
                上个值 - {prevCount.current}
            </div>
            <div>
                当前值 - {count}
            </div>
            <div>
                {dbCountCb()}
            </div>
            <div>
                {dbCountMemo}
            </div>
            <div>
                {msg}
            </div>
            <div>
                {reverseMsgMemo}
            </div>
            <div>
                <button onClick={() => {setCount(count + 1)}}>+</button>
                <button onClick={() => {setCount(count - 1)}}>-</button>
                <button onClick={() => {
                    setMsg('随机数->' + Math.random() * 100)
                }}>random msg</button>
            </div>
        </div>
    )
}
