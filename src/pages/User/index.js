import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <main>
        <h1>User page</h1>
      </main>
      <nav>
        <Link to="/user">User</Link>
      </nav>
    </>
  );
};

export default User;
