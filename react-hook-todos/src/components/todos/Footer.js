import React, {useContext} from 'react'
import {todosContext} from './Todos'

export default function Footer() {
    const {todos, dispatch} = useContext(todosContext)
    const completedLength = todos.filter(item => item.completed).length;
    const uncompletedLength = todos.length - completedLength;
    return (
        <footer style={{display: todos.length ? 'block' : 'none'}}>
            <span 
                id="clear-completed" 
                style={{display: completedLength ? 'block' : 'none'}}
                onClick={e => {
                    dispatch({
                        type: 'clearCompleted'
                    })
                }}
            >Clear {completedLength} completed item</span>
            <div id="todo-count">{uncompletedLength} items left</div>
        </footer>
    )
}
