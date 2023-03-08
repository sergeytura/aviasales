import React from "react";
import style from './CardList.module.scss';
import Card from "../Card/Card";

const CardList = () => {
    const card = 'hello'
    return <div className={style.CardList}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
}

export default CardList