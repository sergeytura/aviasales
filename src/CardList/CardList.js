import React from "react";
import style from './CardList.module.scss';
import Card from "../Card/Card";
import { useState } from "react";

const CardList = () => {
    const [count, setCount] = useState(5) // количество билетов
    const moreTickets = () => {
        setCount((count) => count + 5)
    }
    return <div className={style.CardList}>
        <Card count={count}/>
        <button className={style.CardList__button} onClick={() => moreTickets()}>Показать еще 5 билетов!</button>
    </div>
}

export default CardList