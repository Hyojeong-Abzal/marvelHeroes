import { combineReducers, createStore } from "redux";
import { charactersListReducer } from "../CharactersList/characterList-reducer";
import { appReducer } from "./appReducer";


const rootReducer = combineReducers({
    app: appReducer,
    charactersList: charactersListReducer,

    
})

export const store = createStore(rootReducer);


export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;