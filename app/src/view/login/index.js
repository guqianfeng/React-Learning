import React from 'react'

import '../../common/css/login.css'

import LoginBox from './login'

export default function Login(){
    return (
        <div id="login_boxWrap">
            <h2 className="login_register"><span>登录&注册</span></h2>
            <div className="login_register_box">
                <div className="box">
                    <LoginBox/>
                </div>
            </div>
        </div>
    )
}