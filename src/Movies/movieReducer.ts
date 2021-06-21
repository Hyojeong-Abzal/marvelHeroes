import { Dispatch } from 'redux'
import { searchAPI } from '../Api/API'
import { setAppError, setAppStatus } from '../app/appReducer'

const initState = {
  movies: [] as MovieType[],
  isFound: true,
}

export const searchReducer = (
  state: initStateType = initState,
  action: ActionType
) => {
  switch (action.type) {
    case MOVIE_AT.SET_SEARCHED_MOVIES:
      return { ...state, movies: [...action.movies] }
    default:
      return state
  }
}

export enum MOVIE_AT {
  SET_SEARCHED_MOVIES = 'SET_SEARCHED_MOVIES',
  SET_IS_FOUND = 'SET_IS_FOUND',
}

export const setSearchedMoveis = (movies: MovieType[]) =>
  ({
    type: MOVIE_AT.SET_SEARCHED_MOVIES,
    movies,
  } as const)

export const setIsFound = (isFound: boolean) =>
  ({ type: MOVIE_AT.SET_IS_FOUND, isFound } as const)

export const setSearchedMoveisTC = (title: string) => (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  searchAPI.searchFilmsByTitle(title).then((data) => {
    if (data.Response === 'True') {
      dispatch(setAppStatus('succeeded'))
      dispatch(setSearchedMoveis(data.Search))
    } else {
      dispatch(setAppStatus('failed'))
      dispatch(setSearchedMoveis([]))
    }
  })
}

//types
type initStateType = typeof initState
type SetSearchedMoveisType = ReturnType<typeof setSearchedMoveis>
type setIsFoundType = ReturnType<typeof setIsFound>
type ActionType = SetSearchedMoveisType | setIsFoundType

export type MovieType = {
  Title: string
  Year: string
  imdbID: string
  type: string
  Poster: string
}
