import React from 'react'

import {NavLink} from 'react-router-dom'

import {nav} from '../../router/route_list'

export default function Menu(props){
    // console.log(nav)
    const {menuHide} = props;
    return (
        <nav id="menu">
            {/* <NavLink className="iconfont icon-home" to="/" onClick={() => {menuHide()}}>首页</NavLink>
            <NavLink className="iconfont icon-kecheng" to="/course" onClick={() => {menuHide()}}>课程安排</NavLink>
            <NavLink className="iconfont icon-peixunjiangshi" to="/lecturer" onClick={() => {menuHide()}}>讲师团队</NavLink> */}
            {nav.map((item, index) => {
                return (
                <NavLink 
                    key={index} 
                    className={item.className} 
                    to={item.path} 
                    onTouchEnd={() => {menuHide()}}
                    activeClassName={'active'}
                    exact={item.exact}
                >{item.name}</NavLink>
                )
            })}
        </nav>        
    )
}