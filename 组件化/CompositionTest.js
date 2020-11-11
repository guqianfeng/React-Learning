import React from 'react';

function Dialog (props) {
  const data = {
    "foo": {title: 'foo-title', content: 'foo-content'},
    "boo": {title: 'boo-title', content: 'boo-content'},
  } 
  const {def, footer} = props.children(data[props.msg])
  return (
    <div style={{border: '1px solid blue'}}>
      {def}
      {footer ? footer : ""}
    </div>
  )
}

function RadioGroup (props) {
  return (
    <div>
      {
        React.Children.map(props.children, radio => (
          React.cloneElement(radio, {name: props.name})
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
      <h1>Composition Test</h1>
      <Dialog msg="foo">
        {({title, content}) => ({
          def: (
            <div>
              <h1>{title}</h1>
              <p>{content}</p>
            </div>
          ),
          footer: (
            <button onClick={() => {alert('react牛逼')}}>react真爽</button>
          )
        })}
      </Dialog>
      <Dialog msg="boo">
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
    </div>
  );
}

export default CompositionTest;