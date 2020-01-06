export default (state=0, action) => {
    switch(action.type){
        case "":
           return ""  
        default: 
            return state;
    }
}