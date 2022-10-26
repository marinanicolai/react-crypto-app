import React, { useEffect, useState } from "react";
import { StyledAsyncSelect } from "./Search.styles";
import { getAllCoins } from "../../store/search/searchActions";

const Search = ({ allCoins, isLoading }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    getAllCoins(value);
  }, [getAllCoins, value]);

  return (
    <>
      <StyledAsyncSelect placeholder="Search" isLoading={isLoading} />
    </>
  );
};

export default Search;
