import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
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

  const dispatch = useDispatch()
  let searchId = useSelector(state => state.searchId)

  const getSearchId = () => {
    
    console.log(searchId)
  }

    const tab = tabsData.map(el => {
      return (
        <button
          className={style.Tabs__button}
          key={el.label}
          onClick={() => getSearchId()}
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