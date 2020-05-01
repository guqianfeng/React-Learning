import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Frame from '../../common/component/frame'
import Skeleton from '../../common/component/skeleton'
import Main from './main'
import Message from './message'


import '../../common/css/miiaov.css'

import getWork from '../../store/action/getWork'
import getMessageList from '../../store/action/getMessageList'

function Work (props) {
  let [show, setShow] = useState(false);
  let { data, loading, dispatch, match, user, history } = props
  // console.log(user)
  let { id } = match.params
  // console.log(data, loading)
  function getMessageData () {
    return dispatch(getMessageList(id))
  }
  useEffect(() => {
    dispatch(getWork(id))
    getMessageData()
    return () => {
      dispatch({
        type: 'WORK_RESET'
      })
      dispatch({
        type: 'MESSAGE_RESET'
      })
    }
  }, [])
  return (
    <div>
      <Frame
        pullUp={true}
        getData={getMessageData}
      >
        {
          loading ? <Skeleton/> : <Main data={data}/>
        }
      </Frame>
      <footer 
        className="miiapv_footer"
        onClick={() => {
          if (user) {
            setShow(true)
          } else {
            history.push('/login')
          }
        }}
      >
        回复本帖
      </footer>
      <Message 
        show={ show }
        setShow = { setShow }
        id = { id }
      />
    </div>
  )
}

export default connect(state => ({...(state.work),
  user: state.getUser
}))(Work)