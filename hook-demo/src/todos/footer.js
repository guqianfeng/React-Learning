import React from 'react'

export default ({todos, removeCompleted}) => {
    let completedTodos = todos.filter(item => item.completed);
    let unCompletedTodos = todos.filter(item => !item.completed);
    return (
        <footer style={{display: todos.length? "block" : "none"}}>
            <a  id="clear-completed" 
                style={{display: completedTodos.length? "block" : "none"}}
                onClick={() => {
                    removeCompleted();
                }}
            >
                Clear {completedTodos.length} completed item
            </a>
            <div id="todo-count">{unCompletedTodos.length} items left</div>
        </footer>
    )
}