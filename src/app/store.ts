import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { itemsListReducer } from '../ItemsList/itemsListReducer'
import { searchReducer } from '../Movies/movieReducer'
import { loadState, saveState } from '../utils/localStorage'
import { appReducer } from './appReducer'

const rootReducer = combineReducers({
  app: appReducer,
  itemsList: itemsListReducer,
  movies: searchReducer,
})

export const store = createStore(
  rootReducer,
  loadState(),
  applyMiddleware(thunk)
)

store.subscribe(() => {
  saveState({
    app: store.getState().app,
    itemsList: store.getState().itemsList,
    movies: store.getState().movies,
  })
})

export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
