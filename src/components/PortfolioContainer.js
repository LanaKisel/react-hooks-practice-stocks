import React from "react";
import Stock from "./Stock";

function PortfolioContainer({onBuyStock, onSellStock, portfolioStocks}) {
  const newPortfolioStocks=portfolioStocks.map((stock)=><Stock key={stock.id} stock={stock} onSellStock={onSellStock} />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {newPortfolioStocks}
    </div>
  );
}

export default PortfolioContainer;
