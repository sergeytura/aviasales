import React, { useEffect } from "react";
import style from './App.module.scss';
import logo from '../Images/Logo.png'
import Filter from "../Filter";
import Tabs from "../Tabs";
import CardList from "../CardList";
import { useDispatch } from "react-redux";
import { fetchSearchId } from "../Store/Async/Async";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSearchId())
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.logo} ><img src={logo} alt='logo'/></div>
      <div className={style.main}>
        <Filter/>
        <Tabs/>
        <CardList/> 
      </div>
    </div>
  );
}

export default App;
