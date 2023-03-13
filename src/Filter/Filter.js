import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTransfer, transfer } from "../Store/Reducers/ticketsReducer";
import style from './Filter.module.scss'

const filterData = [
     
    {
        label: 'Без пересадок',
        filter: transfer(0,'0'),
        check: '0'
        // className: 'Filter__no'
    },
    {
        label: '1 пересадка',
        filter: transfer(1,'1'),
        check: '1'
        // className: 'Filter__one'
    },
    {
        label: '2 пересадки',
        filter: transfer(2,'2'),
        check: '2'
        // className: 'Filter__two'
    },
    {
        label: '3 пересадки',
        filter: transfer(3,'3'),
        check: '3'
        // className: 'Filter__three'
    },
]

const Filter = () => {
    const { tickets, filters } = useSelector(state => state.tickets)
    const dispatch = useDispatch()
    // const noTrans = tickets.segments[0].stops.length === 0
    const filtersData = filterData.map(el => {
        return (
            <label 
            onClick={() => dispatch(el.filter)}
            key={el.label}>
              <input
                type='checkbox'
                name={el.label}
                checked={filters.includes(el.check)}
              /> 
              <span> </span>
              <span 
              
              className={style.Filter__item}
              >{el.label}</span>
            </label>
          );
    })
    return (
        <div className={style.Filter}>
          <h1>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
    
          <form className={style.Filter__form}>
            <label onClick={() => dispatch(allTransfer())}>
              <input
                type='checkbox'
                name='ALL'
                checked={filters.length === 4}
              /> 
              <span> </span>
              <span className={style.Filter__item}>Все</span>
            </label>
            {filtersData}
          </form>
        </div>
      );
}

export default Filter

