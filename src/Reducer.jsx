import React, {useReducer, useState} from "react";
import { initialValue, listReducer } from "./ReducerForUseReducer";

const DisplayList = () => {
    const [reducerList, dispatch] = useReducer(listReducer, initialValue);
    console.log(reducerList);

    const changeHandler = (e) => dispatch({type:"NEW_INPUT_DATA", value:e.target.value});

    const editChangeHandler = (e) => dispatch({type:"EDIT_INPUT_DATA", value:e.target.value});

    const saveHandler = () => dispatch({type:"ADD", value:reducerList.newInputData})
    
    const deleteHandler = (index) => dispatch({type:"DELETE", value:index})

    const editHandler = (name) => dispatch({type:"EDIT", value:{ListName:name, updatedData:reducerList.editInputData}})
    
    return(
        <div>
            <div>
                <input onChange={changeHandler} type="text" placeholder="sfhsdgfj"/>
                <button onClick={saveHandler}>save</button>
            </div>
            {reducerList.list.map((listItem, index) => {
                console.log(listItem);
                return(
                    <div key={index}>
            <h1>{listItem}</h1>
            <input type="text" value={reducerList.newInputData} onChange={e => editChangeHandler(e)}/>
            <button onClick={() => deleteHandler(index)}>delete</button>
            <button onClick={() => editHandler(listItem)}>Edit</button>
            </div>
            )
            })}
        </div>
    )
}

export default DisplayList;