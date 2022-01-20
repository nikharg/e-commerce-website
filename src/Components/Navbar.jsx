import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left">
        <div className="lang">EN</div>
        <div className="search-container">
          <input type="text" placeholder="Search" id="s-input" />
          <Search style={{ fontSize: 18, color: "grey", position:"absolute", right: "0.8rem" }} />
        </div>
      </div>
      <div className="middle">
        <p>ShopKart</p>
      </div>
      <div className="right">
        <div className="menu-item">Sign In</div>
        <div className="menu-item">Register</div>
        <div className="menu-item">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlined color="action" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
