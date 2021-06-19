import { Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../app/store'
import { CharacterType } from '../CharactersList/characterListReducer'
import { Movies } from '../Movies/Movies'
import { MovieType, setSearchedMoveisTC } from '../Movies/SearchReducer'
import style from './ItemDesk.module.css'

export const ItemDesctiption: React.FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        //@ts-ignore
        dispatch(setSearchedMoveisTC(item.name))
    }, [])
    const movies = useSelector<AppRootStateType, MovieType[]>(st => st.movies.movies)
    const selectedItemId = useSelector<AppRootStateType, string>(st => st.app.selectedItemId)
    const allItems = useSelector<AppRootStateType, CharacterType[]>(st => st.charactersList.characters)
    const item = allItems.find(it => it.id === selectedItemId)

    return (
        <div className={style.wrapper}>
            <Paper elevation={10} >
                <img className={style.img} src={item?.largePicture ? item.largePicture : item?.smallPicture} alt="" />
            </Paper>
            <Paper elevation={10} >
                <div className={style.desc}>
                    <h1 className={style.title}> {item?.name}</h1>
                    {item?.tags.map(t => <span className={style.tag}>{t}</span>)}
                    <div>
                        <p>{item?.description}</p>
                        <span>For more information look at </span>
                        <Button
                            variant="contained"
                            color="primary"
                            href={item?.wiki}
                        >
                            <a className={style.wiki} href={item?.wiki} target="_blank">Wiki about {item?.name}</a>
                        </Button>
                    </div>
                </div>
                <div className={style.movies}>
                    <h3>Here some list of movies with title {item?.name}: </h3>
                    <Movies movies={movies} />
                </div>
            </Paper>
        </div>
    )
}
