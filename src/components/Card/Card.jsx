import React from "react";
import "../Card/Card.css"

function Card({props}) {
   const {title, price, speed, traffic} = props;
   return (
     <div className="card">
        <h2>{title}</h2>
        <div className="priceWrapper">
         <div className="priceDisplay">
         <div className="top">руб</div>
         <div className="price">{price}</div>
         <div className="bottom">/мес</div>
         </div>
</div>
        <p className="speedInfo">до {speed} Мбит/сек</p>
        <p className="trafficInfo">{traffic}</p>
     </div>
   );
}

export default Card;