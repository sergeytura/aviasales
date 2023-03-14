import React, {useState} from "react"; 
import { useDispatch, useSelector } from "react-redux";
// import { sortCheap, sortFast, sortOptimal } from "../Store/Reducers/ticketsReducer";
import { sortCheap, sortFast, sortOptimal } from "../Store/Actions/sortActions";
import style from './Tabs.module.scss';



const Tabs = () => {
  const [active, setActive] = useState('Самый дешевый')
  // const { tickets } = useSelector(state => state.ticketsReducer)
  // const { sorted } = useSelector(state => state.sortReducer)
  const dispatch = useDispatch()

  const tabsData = [
    {
      label: 'Самый дешевый',
      // sort: sortCheap(tickets)
      sort: sortCheap()
    },
    {
      label: 'Самый быстрый',
      sort: sortFast()
    },
    {
      label: 'Оптимальный',
      sort: sortOptimal()
    }
  ]

    const tab = tabsData.map(el => {
      return (
        <button
          className={active.includes(el.label) ? style.Tabs__button + ' ' + style.Tabs__active : style.Tabs__button}
          key={el.label}
          onClick={() => {
            setActive((active) => active = el.label)
            dispatch(el.sort)
          }}
          
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