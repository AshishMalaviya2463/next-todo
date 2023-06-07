import { combineReducers } from "redux";
import authReducer from "./authReducer";
import toastReducer from "./toastReducer";
import todoReducer from "./todoReducer";

export const rootReducer = combineReducers({
    authDetails: authReducer,
    todoesData: todoReducer,
    toastData: toastReducer
})