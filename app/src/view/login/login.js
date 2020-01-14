import React, {useState} from 'react'

import {connect} from 'react-redux'

import login from '../../store/action/login'

function LoginBox(props){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [vcode, setVcode] = useState("");
    const [vcodeShow, setVcodeShow] = useState(false);
    const [vcodeSrc, setVcodeSrc] = useState("/miaov/user/verify?" + Date.now());

    function toLogin(){
        props.dispatch(login({
            verify: vcode, 
            username: user,
            password
        })).then(res => {
            alert(res.msg);
            setTimeout(() => {
                if(res.code != 0){
                    //登录失败
                    setVcodeSrc("/miaov/user/verify?" + Date.now())
                }
            }, 100)
        })
    }

    return (
        <div className="login_box">
            <figure className="user_img">
                <img src="images/user_img.png" alt="" />
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input 
                        type="text"  
                        placeholder="用户名" 
                        value={user}
                        onChange={(e) => {
                            setUser(e.target.value)
                        }}                                            
                    />
                </p>
                <p>
                    <input 
                        type="password"  
                        placeholder="请输入密码" 
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}                        
                    />
                </p>
                <p className="clearfix">
                    <input 
                        type="text"  
                        placeholder="验证码" 
                        value={vcode}
                        onChange={(e) => {
                            setVcode(e.target.value)
                        }} 
                        onFocus={e => {
                            setVcodeShow(true) 
                        }} 
                        className="verifyCode"                      
                    />
                    {
                        vcodeShow ? 
                        <img 
                            src={vcodeSrc}
                            className="verify"
                            onClick={e => {
                                setVcodeSrc("/miaov/user/verify?" + Date.now())
                            }}
                        />
                        :
                        ""
                    }
                </p>
                <button className="form_btn" onClick={toLogin}>登录</button>
                <p className="form_tip">没有帐号？<a href="#">立即注册</a></p>
            </div>
        </div>        
    )
}

export default connect(res => res)(LoginBox);