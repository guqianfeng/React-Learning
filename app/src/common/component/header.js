import React, {useEffect, useState} from 'react'

import {Link, withRouter} from 'react-router-dom'

import {connect} from 'react-redux'

import {useBack} from '../hook/index'

import isLogin from '../../store/action/isLogin'
import logout from '../../store/action/logout'

function Header(props){
    // console.log(props);
    const back = useBack(props.history);
    const [btnShow, setBtnShow] = useState(false);
    const path = props.location.pathname;
    const {user} = props;
    useEffect(() => {
        props.dispatch(isLogin())
    }, [])
    function getUser(){
        if(path === "/login"){
            return ""
        }
        if(user){
            return (
                <span className="header-btn-right">
                    <span 
                        className="header-user"
                        onClick={()=>{
                            setBtnShow(!btnShow);
                        }}
                    >{user}</span>
                    <span 
                        className="header-logout-btn" 
                        onClick={() => {
                            props.dispatch(logout());
                        }}
                        style={{display: btnShow ? "block" : "none"}}
                    >退出</span>
                </span> 
            )
        }
        return <Link className="user" to="/login"/>
    }
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
            {getUser()}
        </header>
    )
}

export default connect(state => {
    // console.log(state);
    return {
        user: state.getUser
    }
})(withRouter(Header));