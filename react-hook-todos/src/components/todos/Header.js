import React, {useContext, useState} from 'react'

import {todosContext} from './Todos'

export default function Header() {
    // console.log(useContext(todosContext))
    const {dispatch} = useContext(todosContext)
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
                            return
                        } else {
                            dispatch({
                                type: 'addTodo',
                                payload: {
                                    todo
                                }
                            })
                            setTodo('')
                        }
                    }
                }}
            />
        </header>
    )
}
