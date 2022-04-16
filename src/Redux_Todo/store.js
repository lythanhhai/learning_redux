import { combineReducers } from "redux";
import reducerTodo from "./reducer";

const combine = combineReducers({
  reducerTodo: reducerTodo,
});

export default combine;
