import React from "react";
import style from './Filter.module.scss'

const filterData = [
     
    {
        label: 'Без пересадок',
        // className: 'Filter__no'
    },
    {
        label: '1 пересадка',
        // className: 'Filter__one'
    },
    {
        label: '2 пересадки',
        // className: 'Filter__two'
    },
    {
        label: '3 пересадки',
        // className: 'Filter__three'
    },
]

const Filter = () => {
    const filters = filterData.map(el => {
        return (
            <label key={el.label}>
              <input
                type='checkbox'
                name={el.label}
              /> 
              <span> </span>
              <span className={style.Filter__item}>{el.label}</span>
            </label>
          );
    })
    return (
        <div className={style.Filter}>
          <h1>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
    
          <form className={style.Filter__form}>
            <label>
              <input
                type='checkbox'
                name='ALL'
              /> 
              <span> </span>
              <span className={style.Filter__item}>Все</span>
            </label>
            {filters}
          </form>
        </div>
      );
}

export default Filter

