import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuyStock , onSellStock}) {
  const newStock = stocks
    .map((stock) => <Stock key={stock.id} stock={stock} onBuyStock={onBuyStock} />)

  return (
    <div>
      <h2>Stocks</h2>
      {newStock}
    </div>
  );
}

export default StockContainer;
