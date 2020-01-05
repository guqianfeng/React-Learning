import React, {useReducer, createContext, useContext} from 'react'

let myContext = createContext();

function reducer(state = 0, action){
    switch(action.type){
        case "add":
            state += 1;
            break;
        case "minus":
            state -= 1;
            break;        
    }
    return state;
}

function Child(){
    let {state, dispatch} = useContext(myContext)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "minus"
                })
            }}>  -  </button>
            <span> {state} </span>
            <button onClick={() => {
                dispatch({
                    type: "add"
                })
            }}>  +  </button>
        </div>
    )
}

export default () => {
    // console.log(useReducer(reducer, 0))
    let [state, dispatch] = useReducer(reducer, 0);
    return (
        <myContext.Provider value={{state, dispatch}}>
            <div>
                <h1>useReducer</h1>
                <Child/>
            </div>
        </myContext.Provider>
    )
}