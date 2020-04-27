import React from 'react'

/**
 * 1分钟之内： 刚刚 60 * 1000
 * 1小时之内： n分钟之前 60 * 60 * 1000
 * 1天内： n小时之前 24 * 60 * 60 * 1000
 * 1周内： n天之前 7 * 24 * 60 * 60 * 1000
 * time
 * @param {*} props 
 */
function ToDate (props) {
  let { time } = props
  // console.log(time)
  let nowTime = Date.now();
  let newTime = new Date(time).getTime();
  let disTime = nowTime - newTime;
  if (disTime < 60 * 1000) {
    return '刚刚'
  } else if (disTime < 60 * 60 * 1000) {
    return `${disTime / (60 * 1000)}分钟之前`
  } else if (disTime < 24 * 60 * 60 * 1000) {
    return `${disTime / (60 * 60 * 1000)}小时之前`
  } else if (disTime < 7 * 24 * 60 * 60 * 1000) {
    return `${disTime / (24 * 60 * 60 * 1000)}天之前`
  } else {
    return time;
  }
}

export default ToDate