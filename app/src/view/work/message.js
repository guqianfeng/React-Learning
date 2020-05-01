import React, { useState } from 'react'
import { connect } from 'react-redux'
import putMessage from '../../store/action/putMessage'

function Message (props) {
  let { show, setShow, id, dispatch, getUser } = props;
  let [info, setInfo] = useState('');
  let [put, setPut] = useState(false);
  return (
    <div 
      className="message_wrap"
      style={{
        transform: `translateY(${show ? 0 : '100%'})`
      }}
    >
      <textarea 
        value={info}
        onChange={e => {
          setInfo(e.target.value)
        }}
      />
      {
        put 
        ? 
        <footer className="miiapv_footer put">评论提交中......</footer>
        : 
        <footer 
          className="miiapv_footer"
          onClick={() => {
            if(!info.trim().length){
              alert('请输入内容')
              return;
            }
            dispatch(putMessage({
              article_id: id,
              content: info,
            })).then(res => {
              setPut(false);
              setInfo('');
              setShow(false)
              dispatch({
                type: 'MESSAGE_ADD',
                messageList: {
                  content: info,
                  create_time: Date.now(),
                  username: getUser
                }
              })
            })
            setPut(true)
          }}
        >发表评论</footer>
      }
    </div>
  )
}

export default connect(state => state)(Message)