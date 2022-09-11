import React from "react";
import { Link } from "react-router-dom";

const Coin = () => {
  return (
    <>
      <main>
        <h1>Coin page</h1>
      </main>
      <nav>
        <Link to="/coin">Coin</Link>
      </nav>
    </>
  );
};

export default Coin;
