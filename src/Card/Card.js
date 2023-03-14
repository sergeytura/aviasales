import React, { useEffect } from "react";
import style from './Card.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns"
// import { sortTickets } from "../Store/Actions/sortActions";

const Card = ({count}) => {
  const dispatch = useDispatch()
  const { tickets } = useSelector(state => state.ticketsReducer) // все билеты
  const { filters } = useSelector(state => state.filterReducer)
  // const { sorted } = useSelector(state => state.sortReducer)

  

  const filteredTickets = tickets.filter(el => filters.some( filter => (el.segments[0].stops).length === parseInt(filter))) //обработка фильтра
  
  const viewedTickets = filteredTickets.slice(0, count) // кол-во отображения билетов

  const view = viewedTickets.map((el, index) => {
    const image = `https://pics.avs.io/99/36/${el.carrier}.png` //изображение самолета

    const formatDateIn = (el) => { // форматирование длительности полета туда
      const dateInHours = parseInt(format(new Date(el.segments[0].date), 'HH')) + Math.floor(el.segments[0].duration/60)
      const hours = (Math.floor(dateInHours%24)).toString()
      const dateInMin = parseInt(format(new Date(el.segments[0].date), 'MM')) + el.segments[0].duration
      const min = (Math.floor(dateInMin%60)).toString()
      return `${hours.length < 2 ? `0${hours}`: hours}:${min.length < 2 ? `0${min}`: min}`
    }

    const formatDateOut = (el) => { // форматирование длительности полета обратно
      const dateInHours = parseInt(format(new Date(el.segments[1].date), 'HH')) + Math.floor(el.segments[1].duration/60)
      const hours = (Math.floor(dateInHours%24)).toString()
      const dateInMin = parseInt(format(new Date(el.segments[1].date), 'MM')) + el.segments[1].duration
      const min = (Math.floor(dateInMin%60)).toString()
      return `${hours.length < 2 ? `0${hours}`: hours}:${min.length < 2 ? `0${min}`: min}`
    }

    const dateIn = format(new Date(el.segments[0].date), 'HH:MM') 
    const dateOut = format(new Date(el.segments[1].date), 'HH:MM')

    //длительность полета туда, обратно
    const durationIn = `${Math.floor((el.segments[0].duration)/60)}Ч ${(el.segments[0].duration)%60}М`
    const durationOut = `${Math.floor((el.segments[1].duration)/60)}Ч ${(el.segments[1].duration)%60}М`

    const transferIn = (el.segments[0].stops).length 
    let viewTransferIn // обработка поля "Пересадки туда"
    if(transferIn === 1) {
      viewTransferIn = '1 ПЕРЕСАДКА'
    }else if(transferIn === 0) {
      viewTransferIn = 'БЕЗ ПЕРЕСАДКИ'
    }else {
      viewTransferIn = `${transferIn} ПЕРЕСАДКИ`
    }

    const transferOut = (el.segments[1].stops).length 
    let viewTransferOut // обработка поля "Пересадки обратно"
    if(transferOut === 1) {
      viewTransferOut = '1 ПЕРЕСАДКА'
    }else if(transferOut === 0) {
      viewTransferOut = 'БЕЗ ПЕРЕСАДКИ'
    }else {
      viewTransferOut = `${transferOut} ПЕРЕСАДКИ`
    }
    
        return (
          <div className={style.Card} key={dateIn + dateOut + index}>
          <div className={style.header}>
            <h2>{el.price} Р</h2>
            <img alt='logo' src={image} className={style.img} />
          </div>
          <div className={style.info} >
            <div className={style.content}>
            <p className={style.city}>{el.segments[0].origin} – {el.segments[0].destination}</p>
            <p className={style.time}>{dateIn} – {formatDateIn(el)}</p>
            </div>
          <div className={style.content}>
            <p className={style.city}>В ПУТИ</p>
            <p className={style.time}>{durationIn}</p>
          </div>
          <div className={style.content}>
            <p className={style.city}>{viewTransferIn}</p>
            <p className={style.time}>{el.segments[0].stops.join(', ')}</p>
          </div>
          <div className={style.content}>
            <p className={style.city}>{el.segments[1].origin} – {el.segments[1].destination}</p>
            <p className={style.time}>{dateOut} – {formatDateOut(el)}</p>
          </div>
          <div className={style.content}>
            <p className={style.city}>В ПУТИ</p>
            <p className={style.time}>{durationOut}</p>
          </div>
            <div className={style.content}>
              <p className={style.city}>{viewTransferOut}</p>
              <p className={style.time}>{el.segments[1].stops.join(', ')}</p>
            </div>
          </div>
          </div>
        );
      });
    
      return (
        <React.Fragment>
            {view}    
        </React.Fragment>
      );
}

export default Card