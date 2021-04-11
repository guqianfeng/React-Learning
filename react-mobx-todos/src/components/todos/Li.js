import React, {useState, useRef, useEffect} from 'react'
import {observer} from 'mobx-react'
import {useTodosStore} from '../../hooks/index'

export default observer(function Li ({item}) {
  const todosStore = useTodosStore()
  const [edit, setEdit] = useState(false)
  const editEl = useRef(null)
  useEffect(() => {
    if (edit) {
      editEl.current.select()
    }
  }, [edit])
  return (
      <li className={item.completed ? 'done' : ''}>
          <div className="view" style={{display: edit ? 'none' : 'block'}}>
              <input 
                  className="toggle" 
                  type="checkbox"
                  checked={item.completed}
                  onChange={e => {
                    todosStore.changeCompletedById(item.id, e.target.checked)
                  }}
              />
              <label
                onDoubleClick={e => {
                  setEdit(true)
                }} 
              >{item.todo}</label>
              <span className="destroy" onClick={e => {
                todosStore.deleteTodoById(item.id)
              }}></span>
          </div>
          <input 
            className="edit" 
            type="text"
            ref={editEl} 
            value={item.todo} 
            style={{display: edit ? 'block' : 'none'}}
            onBlur={e => {
              if (!item.todo.trim()) {
                setEdit(true)
              } else {
                setEdit(false)
              }
            }}
            onChange={e => {
              todosStore.changeEditById(item.id, e.target.value)
            }} 
          />
      </li>
  )
})