import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { itemsListReducer } from "../ItemsList/itemsListReducer";
import { searchReducer } from "../Movies/movieReducer";
import { appReducer } from "./appReducer";


const rootReducer = combineReducers({
    app: appReducer,
    itemsList: itemsListReducer,
    movies: searchReducer

    
})

export const store = createStore(rootReducer, applyMiddleware(thunk));


export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;