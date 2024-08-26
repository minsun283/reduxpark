let initialState ={
contactList:[],
keyword:"",

};

function reducer(state=initialState, action){
switch(action.type){
    case "ADD_CONTACT" :
        return {...state, contactList:[...state.contactList,{
            name:action.payload.name, phonNumber:action.payload.phonNumber, memo:action.payload.memo
        }
    ]}

    case "SEARCH_BUTTON":
        return {...state, keyword: action.payload.keyword}


    default : return{...state}
}
}

export default reducer;