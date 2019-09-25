const initialState = {
  input: "",
  display: 0,
  prevNumber: "",
  currentNumber: "",
  operator: "",
  total: "" 
};

const calReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR":
      return {
        ...state,
        input: "",
        display: 0,
        prevNumber: "",
        currentNumber: "",
        operator: "",
        total: ""
      };
      case "ADDINPUT":
          return{
              ...state,
              input: state.input + action.val
          }
  }
};

export default calReducer;
