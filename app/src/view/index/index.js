import React from 'react'

import {connect} from 'react-redux'

import Frame from '../../common/component/frame'
import Tab from '../../common/component/tab'
import Works from '../../common/component/works'
import Course from './course'
import Vip from './vip'
import Miaov from './miaov'

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
        <Frame>
            <div>
                <Tab 
                    data={imgData}
                    render={(data) => {
                        return <img src={data}/>
                    }}
                />
                <section className="index_content"> 
                    <Course />
                </section>
                <Vip />
                <Miaov />
                <Works />
            </div>
        </Frame>
    )
}

export default connect(props => {
    return {...props.works};    
})(Index);