import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [sort, setSort] = useState("Alphabetically");
  const [filter, setFilter] = useState('All');

  function handleSort(value) {
    setSort(value)
  }

  function handleFilter(value) {

    setFilter(value)
  }


useEffect(() => {
  fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(data => setStocks(data))
}, [])

function handleBuyStock(boughtStockId) {
  const boughtStock = stocks.filter((stock) => stock.id === boughtStockId)[0]
  const stocksAvailaableToBuy = stocks.filter((stock) => stock.id !== boughtStockId)
  setStocks(stocksAvailaableToBuy)
  setPortfolioStocks([...portfolioStocks, boughtStock])
}

function handleSellStock(soldStockId) {
  const soldStock = portfolioStocks.filter((stock) => stock.id === soldStockId)[0]
  setStocks([...stocks, soldStock])
  const remainingStocksInPortfolio = portfolioStocks.filter((stock) => stock.id !== soldStockId)
  setPortfolioStocks(remainingStocksInPortfolio)

}
return (
  <div>
    <SearchBar sort={sort} onSort={handleSort} filter={filter} onFilter={handleFilter} />
    <div className="row">
      <div className="col-8">
        <StockContainer stocks={stocks} sort={sort} filter={filter} onBuyStock={handleBuyStock} onSellStock={handleSellStock} />
      </div>
      <div className="col-4">
        <PortfolioContainer onBuyStock={handleBuyStock} onSellStock={handleSellStock} portfolioStocks={portfolioStocks} />
      </div>
    </div>
  </div>
);
}

export default MainContainer;
