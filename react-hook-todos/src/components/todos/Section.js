import React, {useContext, useState, useEffect, useRef} from 'react'
import { todosContext } from './Todos'

function Li ({item, dispatch}) {
    const [edit, setEdit] = useState(false)
    const editEl = useRef(null)
    useEffect(() => {
        if (edit) {
            editEl.current.select()
        } else {
            if (!editEl.current.value.trim()) {
                setEdit(true)
            }
        }
    }, [edit, setEdit])
    return (
        <li className={item.completed ? 'done' : ''}>
            <div className="view" style={{display: edit ? 'none' : 'block'}}>
                <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={item.completed}
                    onChange={e => {
                        dispatch({
                            type: 'changeCompletedById',
                            payload: {
                                id: item.id,
                                completed: e.target.checked
                            }
                        })
                    }}
                />
                <label
                    onDoubleClick={e => {
                        setEdit(true)
                    }}
                >{item.todo}</label>
                <span className="destroy" onClick={e => {
                    dispatch({
                        type: 'deleteTodoById',
                        payload: {
                            id: item.id
                        }
                    })
                }}></span>
            </div>
            <input 
                className="edit" 
                type="text" 
                value={item.todo} 
                style={{display: edit ? 'block' : 'none'}}
                ref={editEl}
                onChange={e => {
                    dispatch({
                        type: 'editTodoById',
                        payload: {
                            id: item.id,
                            todo: e.target.value
                        }
                    })
                }} 
                onBlur={e => {
                    setEdit(false)
                }}
            />
        </li>
    )
}

export default function Section() {
    const {todos, dispatch} = useContext(todosContext)
    const completedLength = todos.filter(item => item.completed).length
    // console.log(todos)
    return (
        <section id="main" style={{display: todos.length ? 'block' : 'none'}}>
            <input 
                id="toggle-all" 
                type="checkbox" 
                checked={completedLength === todos.length}
                onChange={e => {
                    // console.log(e.target.checked)
                    dispatch({
                        type: 'changeAllCompleted',
                        payload: {
                            completed: e.target.checked
                        }
                    })
                }} 
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                {todos.map(item => (
                    <Li
                        key={item.id}
                        item={item}
                        dispatch={dispatch}
                    />
                ))}
            </ul>
        </section>
    )
}
