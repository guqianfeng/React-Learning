import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import {
    changeCompletedById,
    changeAllCompleted,
    deleteTodoById,
    editTodoById
} from '../../store/action/todos'

function Li ({item, ...restProps}) {
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
        <li className={item.completed ? 'done' : 'none'}>
            <div className="view" style={{display: edit ? 'none' :'block'}}>
                <input 
                    className="toggle" 
                    type="checkbox"
                    checked={item.completed}
                    onChange={e => {
                        restProps.changeCompletedById(e.target.checked, item.id)
                    }} 
                />
                <label onDoubleClick={e => {
                    setEdit(true)
                }}>{item.todo}</label>
                <span className="destroy" onClick={e => restProps.deleteTodoById(item.id)}></span>
            </div>
            <input 
                ref={editEl}
                className="edit" 
                type="text" 
                value={item.todo} 
                style={{display: edit ? 'block' : 'none'}} 
                onChange={e => {
                    restProps.editTodoById(e.target.value, item.id)
                }}
                onBlur={e => {
                    setEdit(false)
                }}
            />
        </li>
    )
}

export default connect(
    state => ({todos: state.todos}),
    {
        changeCompletedById,
        changeAllCompleted,
        deleteTodoById,
        editTodoById
    }
)(function Section({todos, ...restProps}) {
    // console.log(todos)
    const completedLength = todos.filter(item => item.completed).length
    return (
        <section id="main" style={{display: todos.length ? 'block' : 'none'}}>
            <input 
                id="toggle-all" 
                type="checkbox" 
                checked={completedLength === todos.length}
                onChange={e => {
                    restProps.changeAllCompleted(e.target.checked)
                }} 
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                {todos.map(item => (
                    <Li
                        key={item.id}
                        item={item}
                        {...restProps}
                    />
                ))}
            </ul>
        </section>
    )
})
