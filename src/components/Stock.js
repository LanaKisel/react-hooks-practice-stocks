import React from "react";

function Stock({ stock, onBuyStock, onSellStock }) {
  function handleClick(e) {
    if (onSellStock !== undefined){
      onSellStock(Number(e.currentTarget.getAttribute("data-stockid")))    
    } if (onBuyStock !== undefined) {
      onBuyStock(Number(e.currentTarget.getAttribute("data-stockid")))   
    }
  }

  return (
    <div data-stockid={stock.id} onClick={handleClick}>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
