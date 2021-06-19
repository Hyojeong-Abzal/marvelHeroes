import { Dispatch } from "redux"
import { searchAPI } from "../Api/API"

export type MovieType = {
  Title: string
  Year: string
  imdbID: string
  type: string
  Poster: string
}

type initStateType = {
  movies: MovieType[]
}
const initState = {
  movies: [],
}

export const SearchReducer = (
  state: initStateType = initState,
  action: ActionsType
) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_SEARCHED_MOVIES:
      return { ...state, movies: [...action.movies] }
    default:
      return state
  }
}

type ActionsType = SetSearchedMoveisType

export enum ACTIONS_TYPES {
  SET_SEARCHED_MOVIES = 'SET_SEARCHED_MOVIES',
}

type SetSearchedMoveisType = {
  type: ACTIONS_TYPES.SET_SEARCHED_MOVIES
  movies: MovieType[]
}
export const setSearchedMoveis = (
  movies: MovieType[]
): SetSearchedMoveisType => {
  return {
    type: ACTIONS_TYPES.SET_SEARCHED_MOVIES,
    movies,
  }
}

export const setSearchedMoveisTC = (title: string) => (dispatch: Dispatch) => {
  searchAPI.searchFilmsByTitle(title)
   .then(data => {
    if (data.Response === "True") {
        dispatch(setSearchedMoveis(data.Search))
    }
    

})
}