import React from 'react';
import { CharactersList } from '../CharactersList/CharactersList';
import { Redirect, Route, Switch } from 'react-router-dom';
import style from './App.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector } from 'react-redux';
import { AppRootStateType } from './store';
import { ItemDesctiption } from '../CharacterDesc/ItemDescription';
import { CharacterType } from '../CharactersList/characterListReducer';
import { RequestStatusType } from './appReducer';
import LinearProgress from '@material-ui/core/LinearProgress';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);


function App() {
  const classes = useStyles();
  const status = useSelector<AppRootStateType, RequestStatusType>(st => st.app.status)
  const selectedItemId = useSelector<AppRootStateType, string>(st => st.app.selectedItemId)
  const allItems = useSelector<AppRootStateType, CharacterType[]>(st => st.charactersList.characters)
  const item = allItems.find(it => it.id === selectedItemId)
  return (
    <div className={style.app}>
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>

            <Typography className={classes.title} variant="h6" noWrap>
              MARVEL
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
          {status === 'loading' && <LinearProgress />}
        </AppBar>
      </div>

      <Switch>
        <Route exact path={"/"} render={() => <CharactersList />} />
        <Route path={`/Character-description/${item?.name.trim().replace(/ /g, "-")}`} render={() => <ItemDesctiption />} />
        <Route path={"/404"} render={() => <h1> 404: PAGE NOT FOUND</h1>} />
        <Redirect from={"*"} to={'/404'} />
      </Switch>



    </div>
  );
}

export default App;
