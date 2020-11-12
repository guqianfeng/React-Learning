import React from 'react';

const data = {
  foo: {
    title: "foo",
    content: 'foo'
  },
  boo: {
    title: "boo",
    content: 'boo'
  }
}

function Dialog (props) {
  const {def, foot} = props.children(data[props.type])
  return (
    <div style={{border: '1px solid blue'}}>
      {def}
      {foot ? foot : ""}
    </div>
  )
}

function RadioGroup ({children, name}) {
  return (
    <div>
      {
        React.Children.map(children, r => (
          React.cloneElement(r, {name})
        ))
      }
    </div>
  )
}

function Radio ({children, ...rest}) {
  return (
    <label>
      <input type="radio" {...rest}/> {children}
    </label>
  )
}

function CompositionTest(props) {
  return (
    <div>
      <Dialog type="boo">
        {({title, content}) => ({
          def: (
            <div>
              <h1>{title}</h1>
              <p>{content}</p>
            </div>
          ),
          foot: (
            <div>
              <button onClick={() => {alert('react nb')}}>sure</button>
            </div>
          )
        })}
      </Dialog>
      <Dialog type="foo">
        {({title, content}) => ({
          def: (
            <div>
              <h1>{title}</h1>
              <p>{content}</p>
            </div>
          )
        })}
      </Dialog>
      <RadioGroup name="mvvm">
        <Radio value="vue">vue</Radio>
        <Radio value="react">react</Radio>
        <Radio value="ng">angular</Radio>
      </RadioGroup>
      {/* 
        <div>
          <label>
            <input type="radio" value="vue" name="mvvm"/> vue
          </label>
          <label>
            <input type="radio" value="react" name="mvvm"/> react
          </label>
          <label>
            <input type="radio" value="ng" name="mvvm"/> angular
          </label>
        </div>
      */}
    </div>
  );
}

export default CompositionTest;
