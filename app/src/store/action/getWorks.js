import HTTP from './http'
export default function getWorks(page){
    return function(dispatch){
        dispatch({
            type: "LOAD"
        })
        return HTTP.post(`/lecturer/lists?page=${page}&rows=8`, {
            order: "desc",
            sort: "sort",
            category_id: 1,
            recommend: 1
        })
        .then(res => {
        //    console.log(res);
           dispatch({
               type: "LOADOVER",
               data: res.data
           })
        })
    }
}