import React, {useEffect} from 'react'

import Tab from '../../common/component/tab'

export default function LecturerTab (props) {
  let { data, newData } = props
  return (
     data.length < 1 ? '' : <Tab data={ newData } render={(data) => {
      return (
        <ul className="lecturer_list">
          {
            data.map(item => {
              return (
                <li key={item.id}>
                  <img src={item.icon}/>
                  <p>{item.title}</p>
                </li>
              )
            })
          }
        </ul>
      )
    }} /> 
  )
}