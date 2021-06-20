import React from 'react'
import style from './CharactersList.module.css'
import { useSelector } from 'react-redux'
import { ItemType } from './itemsListReducer'
import { AppRootStateType } from '../app/store'
import { Item } from '../Item/Item'
import { Grid, Paper } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { AddItem } from '../components/AddItem/AddItem'


export const ItemsList: React.FC<any> = () => {
    const items = useSelector<AppRootStateType, ItemType[]>(state => state.itemsList.characters)
    const selectedItemId = useSelector<AppRootStateType, string>(st => st.app.selectedItemId)
    if (selectedItemId) {
        { <Redirect to={'/Character-description'} /> }
    }
    return (
        <div className={style.wrapper}>
            <AddItem />
            <Grid container spacing={3} style={{ padding: '20px' }}>
                {
                    items.map((c) => {
                        return <Grid item  key={c.id}>
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