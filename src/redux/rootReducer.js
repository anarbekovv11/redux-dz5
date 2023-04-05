import { combineReducers } from "redux";
import { MainReducer } from "./reducers/MainReducer";



export const rootReducer = combineReducers({
    MainReducer: MainReducer,
});
