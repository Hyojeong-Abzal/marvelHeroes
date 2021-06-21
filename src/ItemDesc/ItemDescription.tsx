import { Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../app/store'
import { ItemType } from '../ItemsList/itemsListReducer'
import Message from '../components/Message/Message'
import { Movies } from '../Movies/Movies'
import { MovieType, setSearchedMoveisTC } from '../Movies/movieReducer'
import style from './ItemDesc.module.css'
import { Redirect, useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid/Grid'
import { useEffect } from 'react'


export const ItemDesctiption: React.FC = () => {
    const { itemId, name } = useParams<{ name: string, itemId: string }>()
    const movies = useSelector<AppRootStateType, MovieType[]>(st => st.movies.movies)
    const allItems = useSelector<AppRootStateType, ItemType[]>(st => st.itemsList.characters)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSearchedMoveisTC(name))
    }, [])

    const item = allItems.find(it => it.id === parseInt(itemId))
    if (!item) {
        return <Redirect to={'/404'} />
    }
    return <div className={style.wrapper}>
        <Grid
            spacing={3}
            container
            direction="row"
            justify="center"
            alignItems="center"

        >
            <Grid item xs={12} >
                <div className={style.character}>
                    <Paper elevation={10} >
                        {
                            item.largePicture ?
                                <img className={style.largePicture}
                                    src={item.largePicture}
                                    alt="" />
                                :
                                <img className={style.smallPicture}
                                    src={item.smallPicture}
                                    alt="" />
                        }

                    </Paper>
                    <Paper elevation={10} >
                        <div className={style.desc}>
                            <h1 className={style.title}> {item.name}</h1>
                            {item.tags.map(t => <span className={style.tag}>{t}</span>)}
                            <div>
                                <p>{item.description}</p>
                                <span>For more information look at </span>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={item.wiki}
                                >
                                    <a className={style.wiki}
                                        href={item.wiki}
                                        target="_blank">
                                        Wiki about {item.name}</a>
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>

            </Grid>
            <Grid item xs={12}>
                <Paper elevation={10} >

                    <div className={style.movies}>
                        {movies.length
                            ?
                            <div>
                                <Message
                                    message={"Here some list of movies related to this character :"} />
                                <Movies movies={movies} />
                            </div>
                            :
                            <Message
                                message={"I could't find any movies related to this character"} />
                        }


                    </div>
                </Paper>
            </Grid>
        </Grid>
    </div>



}
