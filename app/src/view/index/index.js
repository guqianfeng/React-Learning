import React from 'react'

import {connect} from 'react-redux'

function Index(props){
    // console.log(props)
    return (
        <div>
            <h1>首页</h1>
        </div>
    )
}

export default connect(res => {
    return res;    
})(Index);