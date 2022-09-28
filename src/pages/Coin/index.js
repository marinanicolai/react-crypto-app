import axios from "axios";
import { useState, useEffect } from "react";
import { Img } from "./Coin.styles";

export default function App() {
  const [coinState, setCoinState] = useState([]);

  const getAllCoins = async () => {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setCoinState(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!coinState.length) {
      getAllCoins();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {coinState &&
        coinState?.map((item) => (
          <div key={item.id}>
            <h4>{item.name} </h4>
            <Img src={item.image} alt={item.id} />
          </div>
        ))}
    </div>
  );
}
