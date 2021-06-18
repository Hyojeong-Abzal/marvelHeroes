import React from 'react'
import style from './CharactersList.module.css'
import { useSelector } from 'react-redux'
import { CharacterType } from './characterList-reducer'
import { AppRootStateType } from '../app/store'
import { Item } from '../Item/Item'
import { Grid, Paper } from '@material-ui/core'


export const CharactersList: React.FC<any> = () => {
    const characters = useSelector<AppRootStateType, CharacterType[]>(state => state.charactersList.characters)
    return (
        <div>
            <Grid container style={{ padding: '20px' }}>
                <textarea ></textarea>
            </Grid>
            <Grid container spacing={3} style={{ padding: '20px' }}>
                {
                    characters.map((c) => {
                        return <Grid item key={c.id}>
                            <Paper elevation={10} style={{ padding: '10px' }}>
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