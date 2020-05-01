import React from 'react'

function Message (props) {
  let { show, setShow } = props;
  return (
    <div 
      className="message_wrap"
      style={{
        transform: `translateY(${show ? 0 : '100%'})`
      }}
    >
      <textarea></textarea>
      <footer 
        className="miiapv_footer"
        onClick={() => {
          setShow(false)
        }}
      >
        发表评论
      </footer>
    </div>
  )
}

export default Message