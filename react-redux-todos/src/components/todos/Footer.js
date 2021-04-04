import React from 'react'

import {connect} from 'react-redux'

import {
    clearCompleted
} from '../../store/action/todos'

export default connect(
    state => ({todos: state.todos}),
    {
        clearCompleted
    }
)(function Footer({todos, clearCompleted}) {
    const completedLength = todos.filter(item => item.completed).length;
    const uncompletedLength = todos.length - completedLength
    return (
        <footer style={{display: todos.length ? 'block' : 'none'}}>
            <span 
                id="clear-completed" 
                style={{display: completedLength ? 'block' : 'none'}}
                onClick={clearCompleted}
            >Clear {completedLength} completed item</span>
            <div id="todo-count">{uncompletedLength} items left</div>
        </footer>
    )
})
