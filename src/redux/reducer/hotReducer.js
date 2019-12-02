const hotReducer =(prevState=[],action)=>{
    var {type,payload} = action
    switch(type){
        case "getHotList":
            return payload
        default :
            return prevState
    }
}
export default hotReducer