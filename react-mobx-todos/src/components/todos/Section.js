import React from 'react'

function Li () {
    return (
        <li className="">
            <div className="view" style={{display: 'block'}}>
                <input className="toggle" type="checkbox" />
                <label>213213</label>
                <a className="destroy"></a>
            </div>
            <input className="edit" type="text" value="213213" style={{display: 'none'}} />
        </li>
    )
}

export default function Section() {
    return (
        <section id="main" style={{display: 'block'}}>
            <input id="toggle-all" type="checkbox" checked="" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                <Li/>
            </ul>
        </section>
    )
}
