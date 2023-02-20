import { combineReducers, createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginActions from "./User/loginActions";
import signupActions from "./User/signupActions";

const rootReducer = combineReducers({
    loginActions,
    signupActions
});

const store = createStore(
    rootReducer, applyMiddleware(thunk)
);

export default store;