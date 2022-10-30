import React, { useEffect, useState } from "react";
import { StyledAsyncSelect } from "./Search.styles";
import Crypto from "../Crypto";
import axios from "axios";

const Search = ({ allCoins, isLoading }) => {
  const [value, setValue] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  const base =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios //fetch the data from the API
      .get(base)
      .then((res) => {
        setValue(res.data); //set the state with JSON object []
      })
      .catch((err) => {
        //if there's an error, it will be catche here
        console.log("Error Fetching Data! See Error Code: " + err);
      });
  }, []);

  const handleChange = (e) => {
    //based on the input from the user, this event will be triggered
    setSearchResult(e.target.value); //value from <input> tag is set to this 'search' state
  };

  console.log(value);
  return (
    <>
      <form>
        <input
          placeholder="Search"
          isLoading={isLoading}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Search;
