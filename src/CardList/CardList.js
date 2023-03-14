import React from "react";
import style from './CardList.module.scss';
import Card from "../Card/Card";
import { useState } from "react";
import { useSelector } from "react-redux";

const CardList = () => {
    const [count, setCount] = useState(5) // количество билетов
    const { loading, error } = useSelector(state => state.ticketsReducer)
    const { filters } = useSelector(state => state.filterReducer)
    const moreTickets = () => {
        setCount((count) => count + 5)
    }
    return <div className={style.CardList}>
        { loading && !error ? <div className={style.loader}><div className={style.loaderBar}></div></div> : null }
        { filters.length !== 0  && !error ? 
        <React.Fragment>
        <Card count={count}/> 
        <button className={style.CardList__button} onClick={() => moreTickets()}>Показать еще 5 билетов!</button>
        </React.Fragment>
        : <div className={style.CardList__empty}>Рейсы, подходящие под заданные фильтры, не найдены</div> }
        </div>
}

export default CardList