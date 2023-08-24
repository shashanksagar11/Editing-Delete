import React, { useReducer, useState } from 'react';
import {reducer, initialState} from './addTaskInputReducer';
import './addTaskInput.css';

const DisplayInput = () => {
  const [inputText, setInputText] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSave = () => {
    if (inputText.trim() !== '') {
      const newInput = {
        id: Math.random(),
        text: inputText,
      };
      dispatch({ type: 'ADD_INPUT', payload: newInput });
      setInputText('');
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_INPUT', payload: id });
  };
 ``
  const handleEdit = (id) => {
    const newInputText = prompt('Enter new value:');
    if (newInputText !== null && newInputText.trim() !== '') {
      dispatch({
        type: 'EDIT_INPUT',
        payload: { id, text: newInputText },
      });
    }
  };

  return (
    <div className="App">
      <h1>Input List</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleSave}>Save</button>
      </div>
      {state.inputs.length === 0 ? (
        <p>No data added</p>
      ) : (
        <ul>
          {state.inputs.map((input) => (
            <div key={input.id}>
              <h1>{input.text}</h1>
              <input type='text' value={inputText.newInput}/>
              <button onClick={() => handleDelete(input.id)}>Delete</button>
              <button onClick={() => handleEdit(input.id)}>Edit</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayInput;
