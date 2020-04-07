import React, {useEffect} from 'react'

import Tab from '../../common/component/tab'

export default function LecturerTab (props) {
  let { data, newData, showAlert } = props
  return (
     data.length < 1 ? '' : <Tab data={ newData } render={(data) => {
      return (
        <ul className="lecturer_list">
          {
            data.map(item => {
              let point = {};
              return (
                <li 
                  key={item.id} 
                  onTouchEnd={(e) => {
                    let touch = e.changedTouches[0];
                    let nowPoint = {
                      x: touch.pageX,
                      y: touch.pageY
                    }
                    // console.log(point, nowPoint)
                    if (Math.abs(nowPoint.x - point.x) < 5 && Math.abs(nowPoint.y - point.y) < 5) {
                      // console.log('点击')
                      showAlert(item)
                    }
                  }}
                  onTouchStart={(e) => {
                    // console.log(e.changedTouches)
                    let touch = e.changedTouches[0];
                    point.x = touch.pageX;
                    point.y = touch.pageY;
                    
                  }}
                >
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