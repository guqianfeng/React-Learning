import React, {useState, useEffect, useMemo, useCallback} from 'react'

export default () => {
    const [name, setName] = useState("cfz");
    const [age, setAge] = useState(3)
    // let isAdult = (() => {
    //     console.log("test run")
    //     return age < 18 ? "未成年" : "成年"
    // })()
    // let isAdult = useMemo(() => {
    //     console.log("test memo")
    //     // return age < 18 ? "未成年" : "成年"
    //     return () => {return age < 18 ? "未成年" : "成年"}
    // }, [age < 18])
    let isAdult = useCallback(() => age < 18 ? "未成年" : "成年", [age < 18])
    return (
        <div>
            <h1>useCallback</h1>
            <p>姓名 - {name}</p>
            <p>年龄 - {age}</p>
            <p>是否成年 - {isAdult()}</p>
            <button onClick={() => {
                setAge(age + 3)
            }}>add</button>  
        </div>
    )
}