import React, {useState} from 'react'

import './index.css'

import Header from './header'
import Main from './main'
import Footer from './footer'

export default () => {
    const [todos, setTodos] = useState([]);
    function addTodo(val){
        setTodos([...todos, {
            id: Date.now(),
            val,
            completed: false,
        }])
    }
    console.log(todos);
    return (
        <div id="todoapp">
            <Header addTodo={addTodo}/>
            <Main />
            <Footer />
        </div>
    )
}