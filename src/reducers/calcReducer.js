const initialState = {
  isDark: false
};

const calReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return { ...state, isDark: true };
    case "LIGHT_MODE":
      return { ...state, isDark: false };
    default:
      return state;
  }
};

export default calReducer;
