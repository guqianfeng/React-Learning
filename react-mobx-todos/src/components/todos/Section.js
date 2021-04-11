import React from 'react'

import { observer } from 'mobx-react'
import { useTodosStore } from '../../hooks'

function Li ({item, ...restProps}) {
    console.log('Li', restProps)
    return (
        <li className={item.completed ? 'done' : ''}>
            <div className="view" style={{display: 'block'}}>
                <input 
                    className="toggle" 
                    type="checkbox"
                />
                <label>{item.todo}</label>
                <span className="destroy"></span>
            </div>
            <input className="edit" type="text" value="213213" style={{display: 'none'}} />
        </li>
    )
}

export default observer(function Section() {

    const todosStore = useTodosStore()
    // console.log('Section', todosStore.changeCompletedById)

    return (
        <section id="main" style={{display: todosStore.todosLength ? 'block' : 'none'}}>
            <input id="toggle-all" type="checkbox" checked="" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                {todosStore.todos.map(item => (
                    <Li
                        key={item.id}
                        item={item}
                        {...todosStore}
                    />
                ))}
            </ul>
        </section>
    )
})
