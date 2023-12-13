import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuyStock, sort, filter}) {
  const newStock = stocks
  .filter((stock) => filter === "All" ? true :filter === stock.type)
  .sort((stockA, stockB)=>{
    switch (sort) {
      case "Price" :
        if(stockA.price>stockB.price)
        {return 1} else if 
        (stockA.price<stockB.price)
        {return -2} else if 
        (stockA.price===stockB.price)
        {return 0}
      case "Alphabetically":
        return stockA.ticker.localeCompare(stockB.ticker);
        default:
          return 0
    }
  })
    .map((stock) => <Stock key={stock.id} stock={stock} onBuyStock={onBuyStock} />)

  return (
    <div>
      <h2>Stocks</h2>
      {newStock}
    </div>
  );
}

export default StockContainer;
