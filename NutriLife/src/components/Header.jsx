import { useState } from "react";
import "./Header.css";

const NavigationBar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="header">
      <img className="logo" src="./src/assets/logo.png" alt="" />
      <div className="navigation-bar">
        <NavItem
          item="Home"
          selected={selectedItem === "Home"}
          onClick={handleClick}
        />
        <NavItem
          item="Recipe"
          selected={selectedItem === "Recipe"}
          onClick={handleClick}
        />
        <NavItem
          item="Blog"
          selected={selectedItem === "Blog"}
          onClick={handleClick}
        />
        <NavItem
          item="About Us"
          selected={selectedItem === "About"}
          onClick={handleClick}
        />
        <NavItem
          item="Contact"
          selected={selectedItem === "Contact"}
          onClick={handleClick}
        />
      </div>
      <div className="auth">
        <div id="signIn">
          <nav href="#">Log In</nav>
        </div>
        <div id="signUp">
          <nav href="#">Sign Up</nav>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const NavItem = ({ item, selected, onClick }) => {
  return (
    <div
      className={`nav-item ${selected ? "selected" : ""}`}
      onClick={() => onClick(item)}
    >
      {item}
    </div>
  );
};

export default NavigationBar;
