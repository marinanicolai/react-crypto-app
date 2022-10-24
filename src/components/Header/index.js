import React from "react";
import { Link } from "react-router-dom";
import CurrencySelect from "../CurrencySelect";

const Header = () => {
  return (
    <>
      <main>
        <CurrencySelect />
      </main>
    </>
  );
};

export default Header;
