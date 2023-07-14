import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Price = (props) => {
  const apiKey = "45BE7820-4F1D-4E46-8D4E-A02DABE7448D";
  const params = useParams();

  const symbol = params.symbol;
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [priceData, setPriceData] = useState([]);

  const getCoinsData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setPriceData(data);
    } catch (err) {
      console.error(err);
    }
  };

  getCoinsData()



  useEffect(() => {
    getCoinsData();
  });

  const loaded = () => {
    return (
      <div>
        <h1>
          {priceData.asset_id_base}/{priceData.asset_id_quote}
        </h1>
        <h2>{priceData.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If coin has data, run the loaded function; otherwise, run loading.
  return priceData && priceData.rate ? loaded() : loading();
};

export default Price;
