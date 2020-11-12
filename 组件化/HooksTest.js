import React, {useState, useEffect, useReducer, useContext} from 'react';

const Context = React.createContext();

function FruitReducer (state, action) {
  switch(action.type) {
    case "init":
      return action.payload;
    case "add": 
      return [...state, action.payload];
    default: 
      return state;    
  }
}


function FruitList ({fruits, onSetFruit}) {
  return (
    <ul>
      {fruits.map(f => (<li key={f} onClick={() => {onSetFruit(f)}}>{f}</li>))}
    </ul>
  )
}

function AddFruit ({onSetFruits}) {
  const [pname, setPname] = useState("")
  const {dispatch} = useContext(Context);
  return (
    <div>
      <input 
        value={pname}
        onChange={(e) => setPname(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // onSetFruits(pname);
            dispatch({type: 'add', payload: pname})
            setPname("")
          }
        }}
      />
    </div>
  )
}

function HooksTest(props) {
  const [fruit, setFruit] = useState("")
  // const [fruits, setFruits] = useState([])
  const [fruits, dispatch] = useReducer(FruitReducer, [])
  useEffect(() => {
    setTimeout(() => {
      // setFruits(['苹果', '香蕉', '梨'])
      dispatch({type: 'init', payload: ['苹果', '香蕉', '梨']})
    }, 1000)
  }, [])
  useEffect(() => {
    document.title = fruit;
  }, [fruit])
  return (
    <Context.Provider value={{fruits, dispatch}}>
      <h1>HooksTest</h1>
      {/* <AddFruit onSetFruits={pname => setFruits([...fruits, pname])}/> */}
      {/* <AddFruit onSetFruits={pname => dispatch({type: 'add', payload: pname})}/> */}
      <AddFruit />
      <p>{fruit ? `你喜欢的水果是 ${fruit}` : `选择你喜欢的水果`}</p>
      <FruitList fruits={fruits} onSetFruit={setFruit}/>
    </Context.Provider>
  );
}

export default HooksTest;