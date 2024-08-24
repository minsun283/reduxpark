let initialState ={count:0}

function reducer(state=initialState, action){
    console.log("action",action)

    if(action.type=== "INCREMENT"){
        return {...state, count: state.count+1} //reducer는 리턴값으로 store변경 그래서 항상 리턴값있음
    } else if(action.type == "DESCREASE"){
        return {...state, count: state.count-1}
    }else if(action.type == "INCREMENTFIVE"){
        return {...state, count: state.count + action.payload.num}
    }else if(action.type == "DESCREASEFIVE"){
        return {...state, count: state.count + action.payload.num}
    }

    return {...state}
}

export default reducer;