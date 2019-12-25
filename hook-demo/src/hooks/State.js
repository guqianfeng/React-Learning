import React, {Component, useState} from 'react'

/* class State extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "gqf",
            age: 27
        }
    }
    render(){
        let {name, age} = this.state
        return (
            <div>
                <h1>State</h1>
                <p>姓名 - {name}</p>
                <p>年龄 - {age}</p>
                <p><button onClick={() => {
                    this.setState({
                        age: ++age
                    })
                }}>长大</button></p>
            </div>
        )
    }
} */

/* function State(){
    const [name, setName] = useState("gqf");
    const [age, setAge] = useState(27) 
    return (
        <div>
            <h1>State</h1>
            <p>姓名 - {name}</p>
            <p>年龄 - {age}</p>
            <p><button onClick={() => {
                setAge(age + 1);
            }}>长大</button></p>
        </div>
    )
} */

function State(){
    const [state, setState] = useState({
        name: "gqf",
        age: 27
    });
    let {name, age} = state;
    return (
        <div>
            <h1>State</h1>
            <p>姓名 - {name}</p>
            <p>年龄 - {age}</p>
            <p><button onClick={() => {
                setState({
                    ...state,
                    age: ++age
                })
            }}>长大</button></p>
        </div>
    )
}

export default State;