import { useEffect } from "react";
import Loading from "./Loading";

export default function Card({
  coinName,
  unit,
  shortened,
  data,
  imageUrl,
  loadingState,
  price_change_percent,
}) {
  const price = data ? data[coinName]?.USD : null;
  const percent = price_change_percent
    ? price_change_percent[coinName]?.change_24h
    : null;

  return (
    <div className="grid-item">
      <div className="box btc">
        <div className="head-box">
          <div className="icon">
            {loadingState ? <Loading /> : <img src={imageUrl} alt="Error" />}
          </div>
          <div className="moshakhasat-arz">
            <p className="name-arz">{coinName}</p>
            <p className="mokhtasar-arz">{shortened}</p>
          </div>
          <i className="fa-solid fa-caret-up up"></i>
        </div>
        <div className="price">
          <div className="gheymat">
            <p className="price-arz" id="btc-price">
              {loadingState ? <Loading /> : price} <sup>{unit}</sup>
            </p>
            <p className="change-arz" id="btc-today">
              {loadingState ? <Loading /> : percent ? ( <span style={{color : percent > 0 ? "green" : "red"}}>
                {percent + "%"}
              </span>) : "N/A"}
             
            </p>
          </div>
          <img src="./assets/image/up.png" alt="UP" className="box-up" />
        </div>
      </div>
    </div>
  );
}
