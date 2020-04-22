import React, { useEffect, useState } from 'react'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import { getGood, setGood, cancelGood } from '../../store/action/good'

function Good (props) {
  let { goodNumber, id,  good, goodId, user, dispatch, history } = props;
  let point = {};
  const [goodCount, setGoodCount] = useState(goodNumber * 1);
  useEffect(() => {
    dispatch(getGood(id))
  }, [user])
  console.log(props)
  return (
    <p className="miiaov_zan">
      <span>有{ goodCount }人觉得很赞</span>
      <span 
        className={"iconfont icon-tuijian1" + (good ? "good" : "")}
        onTouchEnd={(e) => {
          let touch = e.changedTouches[0];
          let nowPoint = {
            x: touch.pageX,
            y: touch.pageY
          }
          // console.log(point, nowPoint)
          if (Math.abs(nowPoint.x - point.x) < 5 && Math.abs(nowPoint.y - point.y) < 5) {
            // console.log('点击')
            console.log(user, good)
            if (user) {
              if (good) {
                console.log('取消点赞')
                dispatch(cancelGood({
                  id,
                  goodid: goodId
                })).then(res => {
                  if(res){
                    setGoodCount(goodCount - 1)
                  }
                })
              } else {
                console.log('点赞')
                dispatch(setGood(id)).then(res => {
                  setGoodCount(goodCount + 1)
                })
              }
            } else {
              history.push('/login')
            }
          }
        }}
        onTouchStart={(e) => {
          // console.log(e.changedTouches)
          let touch = e.changedTouches[0];
          point.x = touch.pageX;
          point.y = touch.pageY;
          
        }}
      ></span>
    </p>
  )
}

export default withRouter(connect(state => ({
  ...state.good,
  user: state.getUser
}))(Good));