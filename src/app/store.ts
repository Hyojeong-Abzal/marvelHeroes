import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { charactersListReducer } from "../CharactersList/characterListReducer";
import { SearchReducer } from "../Movies/SearchReducer";
import { appReducer } from "./appReducer";


const rootReducer = combineReducers({
    app: appReducer,
    charactersList: charactersListReducer,
    movies: SearchReducer

    
})

export const store = createStore(rootReducer, applyMiddleware(thunk));


export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;