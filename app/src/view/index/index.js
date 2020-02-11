import React from 'react'

import {connect} from 'react-redux'

import Tab from '../../common/component/tab'

import '../../common/css/index.css'

let imgData = [
    require("../../common/images/banner1.jpg"),
    require("../../common/images/banner2.jpg"),
    require("../../common/images/banner3.jpg"),
    require("../../common/images/banner4.jpg"),
]

function Index(props){
    // console.log(props)
    return (
        <div>
            <Tab 
                data={imgData}
                render={(data) => {
                    return <img src={data}/>
                }}
            />
        </div>
    )
}

export default connect(res => {
    return res;    
})(Index);