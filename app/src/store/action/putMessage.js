import HTTP from './http'
export default function putMessage(info){
    return function(dispatch){
        return HTTP.post("/lecturer/addcomment", info).then(res => {
            if(res.data.code != 0){
              // console.log(res)
              alert(res.data.message)
            }
            return true;
        })
    }
}