import { createStore } from "redux";
import calReducer from "./reducers/calcReducer";

const store = createStore(calReducer);

export default store;
