import React, {useState} from 'react'
import { useTodosStore } from '../../hooks'

export default function Header() {

    const todosStore = useTodosStore()
    // console.log('Header', todosStore.addTodo)

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
                            todosStore.addTodo(todo)
                            setTodo('')
                        }
                    }
                }}
            />
        </header>
    )
}
