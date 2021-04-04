import React, {useState} from 'react'

import {connect} from 'react-redux'
import {addTodo} from '../../store/action/todos'

export default connect(
    state => ({todos: state.todos}),
    {
        addTodo
    }
)(function Header({addTodo}) {
    const [todo, setTodo] = useState('')
    return (
        <header>
            <h1>Todos</h1>
            <input 
                id="new-todo" 
                type="text" 
                placeholder="What needs to be done?" 
                value={todo}
                onChange={e => {
                    setTodo(e.target.value)
                }}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        if (!todo.trim()) {
                            alert('please input')
                            return;
                        } else {
                            addTodo(todo)
                            setTodo('')
                        }
                    }
                }} 
            />
        </header>
    )
})
