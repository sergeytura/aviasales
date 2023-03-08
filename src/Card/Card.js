import React from "react";
import style from './Card.module.scss';
import S7Logo from '../Images/S7Logo.png'

const Card = () => {
    // const infoSegments = info.map((el) => {
        // return (
        //   <div className={style.info}>
        //     <div className={style.content}>
        //       <p className={style.city}>
        //       MOW – HKT
        //       </p>
        //       <p className={style.time}>10:45 – 08:00</p>
        //     </div>
        //     <div className={style.content}>
        //       <p className={style.city}>В ПУТИ</p>
        //       <p className={style.time}>10:45 – 08:00</p>
        //     </div>
        //     <div className={style.content}>
        //       <p className={style.city}> MOW – HKT</p>
        //       <p className={style.time}>10:45 – 08:00</p>
        //     </div>
        //   </div>
        // );
    //   });
    
      return (
        <div className={style.Card}>
          <div className={style.header}>
            <h2>13 400 Р</h2>
            <img alt='logo' src={S7Logo} className={style.img} />
          </div>
         {/*  */}
          <div className={style.info} >
            <div className={style.content}>
              <p className={style.city}>
              MOW – HKT
              </p>
              <p className={style.time}>10:45 – 08:00</p>
            </div>
            <div className={style.content}>
              <p className={style.city}>В ПУТИ</p>
              <p className={style.time}>10:45 – 08:00</p>
            </div>
            <div className={style.content}>
              <p className={style.city}> MOW – HKT</p>
              <p className={style.time}>10:45 – 08:00</p>
            </div>
          </div>
          
        {/*  */}
        </div>
      );
}

export default Card