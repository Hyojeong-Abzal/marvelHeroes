import React from 'react';
import { ItemsList } from '../ItemsList/ItemsList';
import { Redirect, Route, Switch } from 'react-router-dom';
import style from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './store';
import { ItemDesctiption } from '../ItemDesc/ItemDescription';
import { RequestStatusType, setAppError } from './appReducer';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ErrorSnackbar } from '../components/ErrorSnackbar/ErrorSnackbar';
import Message from '../components/Message/Message';
import marvelLogoURL from "../assets/images/marvel-logo.png";
import Button from '@material-ui/core/Button/Button';
import { AddBox } from '@material-ui/icons';
import { useState } from 'react';
import { AddItem } from '../components/AddItem/AddItem';
import { ExAdd } from '../components/AddItem/exAddItem';

export const RoutePath = {
  CHARACTER_DESCRIPTION: "/Character-description/"
}

function App() {
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch();
  const status = useSelector<AppRootStateType, RequestStatusType>(st => st.app.status);
  const isOnline = navigator.onLine
  if (!isOnline) {
    dispatch(setAppError("No internet connection"))
    return <ErrorSnackbar />
  }

  return (
    <div className={style.app}>
      <ExAdd />
      <div className={style.header}>
        <img className={style.logo} src={marvelLogoURL} alt="" />
        <Button
          onClick={() => setEditMode(true)}
          variant="contained"
          color="primary"
          endIcon={<AddBox style={{ color: "white" }} />}
          className={style.addBtn}
        >
          Add new character
        </Button>
      </div>
      <ErrorSnackbar />
      {status === 'loading' && <LinearProgress />}
      {editMode && <AddItem onClickHandler={setEditMode} />}
      <Switch>
        <Route exact path={"/"} render={() => <ItemsList />} />
        <Route path={`/Character-description/:name/:itemId`} render={() => <ItemDesctiption />} />
        <Route path={"/404"} render={() => <Message message={"There is some error occured code '404 not found'."} link={"/"} />} />
        <Redirect from={"*"} to={'/404'} />
      </Switch>



    </div>
  );
}
export default App;
