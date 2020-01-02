import React, {useState, useEffect, useRef} from 'react'

function Li({inner, changeCompleted, deleteTodo, editVal}){
    const [edit, setEdit] = useState(false)
    const editEl = useRef(null);
    useEffect(() => {
        if(edit){
            editEl.current.select();
        }else{
            if(!editEl.current.value.trim()){
                setEdit(true)
            }
        }
    }, [edit])
    return (
        <li className={inner.completed ? "done" : ""}>
            <div className="view" style={{display: edit? "none" : "block"}}>
                <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={inner.completed}
                    onChange={(e) => {
                        changeCompleted(inner.id, e.target.checked)
                    }}
                />
                <label onDoubleClick={() => {
                    setEdit(true);
                }}>{inner.val}</label>
                <a className="destroy" onClick={()=>{
                    deleteTodo(inner.id)
                }}></a>
            </div>
            <input className="edit" 
                type="text" 
                value={inner.val} 
                style={{display: edit? "block" : "none"}}
                onBlur={() => {
                    setEdit(false);
                }}
                ref={editEl}
                onChange={(e) => {
                    editVal(inner.id, e.target.value)
                }}
            />
        </li>        
    )
}

export default ({todos, changeCompleted, deleteTodo, editVal}) => {
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
                                editVal = {editVal}
                            />
                })}
            </ul>
        </section>
    )
}