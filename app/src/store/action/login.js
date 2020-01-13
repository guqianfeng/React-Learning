import HTTP from './http'
export default function login(data){
    return function(dispatch){
        HTTP.post("/user/login", data).then(res => {
            console.log(res);
        })
    }
}