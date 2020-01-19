import React from 'react'

import {Link, withRouter} from 'react-router-dom'

import {connect} from 'react-redux'

import {useBack} from '../hook/index'


function getUser(path, user){
    if(path === "/login"){
        return ""
    }
    if(user){
        return <span className="header-btn-right header-user">{user}</span>
    }
    return <Link className="user" to="/login"/>
}

function Header(props){
    // console.log(props);
    const back = useBack(props.history);
    const path = props.location.pathname;
    const {user} = props;
    return (
        <header id="header">
            <nav className="menu">
                {path === "/login" ?
                    // 返回按钮
                    <a className="header-btn-left iconfont icon-back"
                        onClick={() => {
                            back();
                        }}
                    ></a>
                    :
                    // 菜单按钮
                    <a className="header-btn-left iconfont icon-hycaidan"></a>
                }
            </nav>
            <h1 className="logo">miaov.com</h1>
            {getUser(path, user)}
        </header>
    )
}

export default connect(state => {
    // console.log(state);
    return {
        user: state.getUser
    }
})(withRouter(Header));