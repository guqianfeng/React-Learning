import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import { getGood } from '../../store/action/good'

function Good (props) {
  let { goodNumber, id,  good, user, dispatch } = props;
  useEffect(() => {
    dispatch(getGood(id))
  }, [user])
  // console.log(props)
  return (
    <p className="miiaov_zan">
      <span>有{ goodNumber }人觉得很赞</span>
      <span className={"iconfont icon-tuijian1" + (good ? "good" : "")}></span>
    </p>
  )
}

export default connect(state => ({
  good: state.good,
  user: state.getUser
}))(Good);