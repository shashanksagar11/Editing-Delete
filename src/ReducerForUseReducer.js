  
export const initialValue = {
    list:[],
    newInputData:"",
    editInputData:""
}

export const listReducer = (state, action) => {
    console.log(state);
    if(action.type === "ADD"){
        return {...state, list:[...state.list, action.value]}
    } else if(action.type === "DELETE"){
        console.log(action.value,"action.value");
        const filteredList = state.list.filter((_, index) => index !== action.value)
        return filteredList;
    }else if(action.type === "EDIT"){
        const mappedList = state.list?.map(name => {
            if(name === state.editInputData){
              return  {...state, list:[...state.list, action.value.updatedData]}
            }
            return name;
        })
        return mappedList;
    }else if(action.type === "NEW_INPUT_DATA"){
        return {...state, newInputData:action.value}
    }else if(action.type === "EDIT_INPUT_DATA"){
        return {...state, editInputData:action.value}
    }

    return state;

};
