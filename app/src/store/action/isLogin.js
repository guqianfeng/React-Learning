import HTTP from './http'
export default function isLogin(){
    return function(dispatch){
        return HTTP.post("/user/islogin").then(res => {
            if(res.data.code === 0){
                //已经登录
                dispatch({
                    type: "LOGIN",
                    user: res.data.username
                })
            }
        })
    }
}