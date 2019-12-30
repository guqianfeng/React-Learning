import React, {useState} from 'react'

export default ({addTodo}) => {
    const [todo, setTodo] = useState("");
    return (
        <header>
            <h1>Todos</h1>
            <input 
                id="new-todo" 
                type="text" 
                placeholder="What needs to be done?" 
                value={todo} 
                onChange={(e) => {
                    setTodo(e.target.value)
                }}
                onKeyDown={(e) => {
                    if(e.keyCode === 13){
                        if(!todo.trim().length){
                            alert("输入点内容");
                            e.target.focus();
                            return;
                        }else{
                            addTodo(todo);
                            setTodo("")
                        }
                    }
                }}
            />
        </header>
    )
}