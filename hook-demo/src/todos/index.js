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
    // console.log(todos);
    function changeCompleted(id, completed){
        todos.forEach(item => {
            if(item.id == id){
                item.completed = completed;
            }
        })
        setTodos([...todos]);
    }
    function deleteTodo(id){
        setTodos(todos.filter(item => item.id != id))
    }
    return (
        <div id="todoapp">
            <Header addTodo={addTodo}/>
            <Main todos={todos} changeCompleted={changeCompleted} deleteTodo={deleteTodo}/>
            <Footer />
        </div>
    )
}