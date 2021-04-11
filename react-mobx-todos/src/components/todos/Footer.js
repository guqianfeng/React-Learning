import React from 'react'
import { observer } from 'mobx-react'
import { useTodosStore } from '../../hooks'

export default observer(function Footer() {

    const todosStore = useTodosStore()

    return (
        <footer style={{display: todosStore.todosLength ? 'block' : 'none'}}>
            <span 
                id="clear-completed" 
                style={{display: todosStore.completedTodosLength ? 'block' : 'none'}}
                onClick={e => {
                    todosStore.deleteAllCompleted()
                }}
            >Clear {todosStore.completedTodosLength} completed item</span>
            <div id="todo-count">{todosStore.uncompletedTodosLength} items left</div>
        </footer>
    )
})
