import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="currencies">
        <div>CURRENCY</div>
      </Link>
    </div>
  );
};

export default Nav;
