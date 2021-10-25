import React from "react";
import { useParams } from "react-router-dom";
import stocks from "./stock-data";

const Stock = (props) => {
  const param = useParams();
  let selectedStock;
  for (let i = 0; i < stocks.length; i++) {
    if (stocks[i].symbol === param.symbol) {
      selectedStock = stocks[i];
    }
  }
  // const stock = 'https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=YOUR KEY'
  console.log(param.symbol, selectedStock);

  return (
    <div>
      <h3>
        Name: {selectedStock.name} ({selectedStock.symbol})
      </h3>
      <h3 className="price">Price: {selectedStock.lastPrice}</h3>
    </div>
  );
};

export default Stock;
