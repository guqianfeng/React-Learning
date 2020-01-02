import React from 'react'

function Li({inner, changeCompleted, deleteTodo}){
    return (
        <li className={inner.completed ? "done" : ""}>
            <div className="view" >
                <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={inner.completed}
                    onChange={(e) => {
                        changeCompleted(inner.id, e.target.checked)
                    }}
                />
                <label>{inner.val}</label>
                <a className="destroy" onClick={()=>{
                    deleteTodo(inner.id)
                }}></a>
            </div>
            <input className="edit" 
                type="text" 
                value={inner.val} 
            />
        </li>        
    )
}

export default ({todos, changeCompleted, deleteTodo}) => {
    return (
        <section id="main" style={{display: todos.length ? "block" : "none"}}>
            <input id="toggle-all" type="checkbox" checked="" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                {todos.map(item => {
                    return <Li 
                                key = {item.id}
                                inner = {item}
                                changeCompleted = {changeCompleted}
                                deleteTodo = {deleteTodo}
                            />
                })}
            </ul>
        </section>
    )
}