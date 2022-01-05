import { createStore, applyMiddleware } from "redux";
import taskReducer from "./task/taskReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(taskReducer, composeWithDevTools(applyMiddleware()));

export default store;