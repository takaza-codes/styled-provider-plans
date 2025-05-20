import React from "react";
import "./OptionCard.scss";

function OptionCard({ props }) {
  const { title, price, speed, traffic } = props;

  const showMessage = () => {
    alert("Выбран тариф " + props.title + "!");
  };

  const handleClick = () => {
    showMessage();
  };

  return (
    <div className="card" onClick={handleClick}>
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

export default OptionCard;
