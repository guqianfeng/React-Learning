import React, {useState} from 'react';

const {Provider, Consumer} = React.createContext();

function Counter(props) {
  return (
    <div onClick={() => props.add()}>
      {props.counter}
    </div>
  );
}

function withConsumer(Cons) {
  return Comp => props => (
    <Cons>
        {value => <Comp {...value}/>}
    </Cons>
  )
}
const Child = withConsumer(Consumer)(Counter)

function ContextTest(props) {
  const [counter, setCounter] = useState(0)
  function add(num = 1) {
    setCounter(counter + num)
  }
  return (
    <div>
      <h1>Context Test</h1>
      <Provider value={{counter, add}}>
        <Consumer>
          {value => <Counter {...value}/>}
        </Consumer>
        <Consumer>
          {value => <Counter {...value}/>}
        </Consumer>
        <Consumer>
          {value => <Counter {...value}/>}
        </Consumer>
        <Consumer>
          {value => <Counter {...value}/>}
        </Consumer>
        <Child/>
        <Child/>
        <Child/>
      </Provider>
    </div>
  );
}

export default ContextTest;