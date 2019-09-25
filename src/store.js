import { createStore } from "redux";
import calReducer from "./reducers/toggleReducer";

const store = createStore(calReducer);

export default store;
