import React, {useState} from 'react'

function useCount(init){
    let [count, setCount] = useState(init);
    function add(){
        count++;
        setCount(count);
    }
    function minus(){
        count--
        setCount(count);
    }
    return [count, setCount, add, minus];
}

export default () => {
    let [count, setCount, add, minus] = useCount(0);
    return (
        <div>
            <h1>自定义Hook</h1>
            <div>
                <button onClick={() => {
                    minus();
                }}>  -  </button>
                <span>  {count}  </span>
                <button onClick={() => {
                    add();
                }}>  +  </button>
            </div>
            <div style={{marginTop: '20px'}}>
                <button onClick={() => {
                    setCount(Math.random() * 100 | 0)
                }}>set</button>
            </div>
        </div>
    )
}