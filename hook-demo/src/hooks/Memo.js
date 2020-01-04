import React, {useState, useEffect, useMemo} from 'react'

export default () => {
    const [name, setName] = useState("cfz");
    const [age, setAge] = useState(3)
    // let isAdult = (() => {
    //     console.log("test run")
    //     return age < 18 ? "未成年" : "成年"
    // })()
    let isAdult = useMemo(() => {
        console.log("test memo")
        return age < 18 ? "未成年" : "成年"
    }, [age < 18])
    useEffect(() => {
        console.log("test effect", "update end");
    }, [age])
    console.log("在更新了")
    return (
        <div>
            <h1>useMemo</h1>
            <p>姓名 - {name}</p>
            <p>年龄 - {age}</p>
            <p>是否成年 - {isAdult}</p>
            <button onClick={() => {
                setAge(age + 3)
            }}>add</button>  
        </div>
    )
}