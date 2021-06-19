import React from 'react'
import style from './CharactersList.module.css'
import { useSelector } from 'react-redux'
import { CharacterType } from './characterListReducer'
import { AppRootStateType } from '../app/store'
import { Item } from '../Item/Item'
import { Grid, Paper } from '@material-ui/core'
import { Redirect } from 'react-router-dom'


export const CharactersList: React.FC<any> = () => {
    const characters = useSelector<AppRootStateType, CharacterType[]>(state => state.charactersList.characters)
    const selectedItemId = useSelector<AppRootStateType, string>(st => st.app.selectedItemId)
    if (selectedItemId) {
        { <Redirect to={'/Character-description'} /> }
    }
    return (
        <div className={style.wrapper}>
            <Grid container style={{ padding: '20px' }}>
                <textarea ></textarea>
            </Grid>
            <Grid container spacing={3} style={{ padding: '20px' }}>
                {
                    characters.map((c) => {
                        return <Grid item key={c.id}>
                            <Paper elevation={10} >
                                <Item
                                    id={c.id}
                                    name={c.name}
                                    tags={c.tags}
                                    description={c.description}
                                    smallPic={c.smallPicture}
                                 
                                />
                            </Paper>

                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}