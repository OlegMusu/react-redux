import { createStore, combineReducers } from "redux";
import cardreduser from "./cardreduser";

const rootReduser = combineReducers({
    cards: cardreduser,

})

export const store = createStore(rootReduser)
