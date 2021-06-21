import React, { useState } from 'react'
import style from './ItemsList.module.css'
import { useSelector } from 'react-redux'
import { ItemType } from './itemsListReducer'
import { AppRootStateType } from '../app/store'
import { Item } from '../Item/Item'
import { Button, Grid, Paper } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { AddItem } from '../components/AddItem/AddItem'
import { AddBox } from '@material-ui/icons'


export const ItemsList: React.FC = () => {
    const [editMode, setEditMode] = useState(false)
    const items = useSelector<AppRootStateType, ItemType[]>(state => state.itemsList.characters)
    return (
        <div className={style.wrapper}>
            <Button
                onClick={() => setEditMode(true)}
                variant="contained"
                color="primary"
                endIcon={<AddBox style={{ color: "white" }} />}
                className={style.addBtn}
            >
                Add new character
            </Button>

            {editMode && <AddItem onClickHandler={setEditMode} />}
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                style={{ padding: '20px' }}>
                {
                    items.map((c) => {
                        return <Grid item key={c.id}>
                            <Paper elevation={10} >
                                <Item
                                    id={c.id}
                                    name={c.name}
                                    tags={c.tags}
                                    description={c.description}
                                    smallPic={c.smallPicture}
                                    localStorage={c.localStorage}
                                />
                            </Paper>
                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}