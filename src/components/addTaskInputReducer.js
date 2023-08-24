export const initialState = {
    inputs: [],
  };
  
export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_INPUT'
      :
        return {
          ...state,
          inputs: [...state.inputs, action.payload],
        };
      case 'DELETE_INPUT':
        return {
          ...state,
          inputs: state.inputs.filter((input) => input.id !== action.payload),
        };
      case 'EDIT_INPUT':
        return {
          ...state,
          inputs: state.inputs.map((input) =>
            input.id === action.payload.id
              ? { ...input, text: action.payload.text }
              : input
          ),
        };
      default:
        return state;
    }
  }