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
    function editVal(id, val){
        todos.forEach(item => {
            if(item.id == id){
                item.val = val;
            }
        })
        setTodos([...todos]);
    }
    function removeCompleted(){
        setTodos(todos.filter(item => !item.completed))
    }

    function changeAllCompleted(completed){
        todos.forEach(item => {item.completed = completed})
        setTodos([...todos]);
    }
    return (
        <div id="todoapp">
            <Header addTodo={addTodo}/>
            <Main 
                todos={todos} 
                changeCompleted={changeCompleted} 
                deleteTodo={deleteTodo} 
                editVal={editVal} 
                changeAllCompleted={changeAllCompleted}
            />
            <Footer todos={todos} removeCompleted={removeCompleted}/>
        </div>
    )
}