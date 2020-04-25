import React from 'react'

import { connect } from 'react-redux'

function MessageList (props) {
  console.log(props)
  return (
    <ul className="comment_list">
      <li>
        <div className="user_comment clearfix">
          <span>xuezhige</span>
        </div>
        <div className="comment_txt">
          作品很棒
        </div>
        <div className="comment_footer">
          <time>17分钟前</time>
        </div>
      </li>
    </ul>  
  )
}

export default connect(state => state.messageList)(MessageList);