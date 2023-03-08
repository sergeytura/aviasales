import React, {useState} from "react"; 
import style from './Tabs.module.scss';

const tabsData = [
  {
    label: 'Самый дешевый',
    // className: 'Tabs__cheap'
  },
  {
    label: 'Самый быстрый',
    // className: 'Tabs__fast'
  },
  {
    label: 'Оптимальный',
    // className: 'Tabs__optimal'
  }
]

const Tabs = () => {
    const tab = tabsData.map(el => {
      return (
        <button
          className={style.Tabs__button}
          key={el.label}
          onClick
        >
          {el.label}
        </button>
      )
    })
  
    return (
      <div className={style.Tabs}>
        {tab}
      </div>
    )
}

export default Tabs