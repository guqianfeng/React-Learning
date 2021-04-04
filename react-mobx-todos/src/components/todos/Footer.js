import React from 'react'

export default function Footer() {
    return (
        <footer style={{display: 'block'}}>
            <span id="clear-completed" style={{display: 'none'}}>Clear 0 completed item</span>
            <div id="todo-count">10 items left</div>
        </footer>
    )
}
