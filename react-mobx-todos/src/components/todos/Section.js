import React from 'react'

import { observer } from 'mobx-react'
import { useTodosStore } from '../../hooks'
import Li from './Li'

export default observer(function Section() {

    const todosStore = useTodosStore()
    // console.log('Section', todosStore.changeCompletedById)

    return (
        <section id="main" style={{display: todosStore.todosLength ? 'block' : 'none'}}>
            <input 
                id="toggle-all" 
                type="checkbox" 
                checked={todosStore.todosLength === todosStore.completedTodosLength} 
                onChange={e => {
                    todosStore.changeAllCompleted(e.target.checked)
                }}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                {todosStore.todos.map(item => (
                    <Li
                        key={item.id}
                        item={item}
                    />
                ))}
            </ul>
        </section>
    )
})
