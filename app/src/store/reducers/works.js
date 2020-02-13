export default function works(state={
    data: [],
    loading: false,
    loadEnd: false,
}, action){
    switch(action.type){
        case "LOAD":
            return {
                ...state,
                loading: true
            };
        case "LOADOVER":
            return {
                ...state,
                loading: false,
                data: action.data,
            }  
        case "LOADEND":
            return {
                ...state,
                loadEnd: true
            }      
    }
    return state;
}