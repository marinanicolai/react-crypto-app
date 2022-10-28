import React, { useEffect, useState } from "react";
import { StyledAsyncSelect } from "./Search.styles";
import axios from "axios";

const options = [
  { value: "btc", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Search = ({ allCoins, isLoading }) => {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const base = "https://crypto-app-server.herokuapp.com/coins";

  useEffect(() => {
    const fetchData = async () => {
      if (!value) {
        const data = await axios(`${base}/${value}`);
        setSearchResult(data.data);
      }
    };
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [value]);

  return (
    <>
      <StyledAsyncSelect
        placeholder="Search"
        isLoading={isLoading}
        options={options}
        onChange={(data) => setValue(data.value)}
      />
    </>
  );
};

export default Search;
