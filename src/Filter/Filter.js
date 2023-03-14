import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { allTransfer, transfer } from "../Store/Reducers/ticketsReducer";
import { allTransfer, transfer } from "../Store/Actions/filterActions";
import style from './Filter.module.scss'

const filterData = [
     
    {
        label: 'Без пересадок',
        filter: transfer(0,'0'),
        check: '0'
    },
    {
        label: '1 пересадка',
        filter: transfer(1,'1'),
        check: '1'
    },
    {
        label: '2 пересадки',
        filter: transfer(2,'2'),
        check: '2'
    },
    {
        label: '3 пересадки',
        filter: transfer(3,'3'),
        check: '3'
    },
]

const Filter = () => {
    const { filters } = useSelector(state => state.filterReducer)
    const dispatch = useDispatch()
    const filtersData = filterData.map(el => {
        return (
            <label
            htmlFor={el.label} 
            
            key={el.label}>
              <input
                id={el.label}
                type='checkbox'
                name={el.label}
                checked={filters.includes(el.check)}
                onChange={() => dispatch(el.filter)}
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
            <label htmlFor='ALL' >
              <input
                id='ALL'
                type='checkbox'
                name='ALL'
                checked={filters.length === 4}
                onChange={() => dispatch(allTransfer())}
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

