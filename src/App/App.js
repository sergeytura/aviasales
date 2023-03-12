import React, { useEffect } from "react";
import style from './App.module.scss';
import logo from '../Images/Logo.png'
import Filter from "../Filter";
import Tabs from "../Tabs";
import CardList from "../CardList";
import { useDispatch, useSelector } from "react-redux";
import {  setSearchId } from "../Store";
import { fetchTickets, fetchSearchId } from "../Store/Async/Async";
import { addOne, getTickets } from "../Store/Reducers/ticketsReducer";

const App = () => {
  const dispatch = useDispatch()
  // const { searchId } = useSelector(state => state.tickets)
  // console.log(searchId)
  // dispatch(fetchTickets())
  // dispatch(fetchSearchId())

  useEffect(() => {
    dispatch(fetchSearchId())
    
  }, []);

  // const searchId = useSelector(state => state.searchId)
  // console.log(searchId)

  // useEffect(() => {
    
  //   dispatch(fetchTickets(searchId))
  // })

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
