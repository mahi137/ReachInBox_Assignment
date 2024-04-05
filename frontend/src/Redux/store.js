import { applyMiddleware, legacy_createStore } from "redux";
import { Reducer } from "./Reducer";
import { thunk } from "redux-thunk";

const store = legacy_createStore(Reducer,applyMiddleware(thunk))

export default store