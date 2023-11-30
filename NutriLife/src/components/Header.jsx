/* eslint-disable react/prop-types */
import { useState } from "react";

function NavigationBar(){
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="header flex border-solid border-2 border-orange items-center justify-around p-2">
      <img className="logo rounded-full w-90 h-90" src="./src/assets/logo.png" alt="" />
      <div className="navigation-bar flex">
        <NavItem item="Home" selected={selectedItem === "Home"} onClick={handleClick} />
        <NavItem item="Recipe" selected={selectedItem === "Recipe"} onClick={handleClick} />
        <NavItem item="Blog" selected={selectedItem === "Blog"} onClick={handleClick} />
        <NavItem item="About Us" selected={selectedItem === "About Us"} onClick={handleClick} />
        <NavItem item="Contact" selected={selectedItem === "Contact"} onClick={handleClick} />
      </div>
      <div className="auth flex">
        <div id="signIn" className="text-orange font-bold w-60 h-30">
          <a href="#">Log In</a>
        </div>
        <div id="signUp" className="text-white bg-orange font-bold rounded-5 w-60 h-30">
          <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

const NavItem = ({ item, selected, onClick }) => {
  return (
    <div
      className={`nav-item ${selected ? "text-green" : "text-orange"} cursor-pointer px-2 py-1 mx-2 transition-colors font-bold`}
      onClick={() => onClick(item)}
    >
      {item}
    </div>
  );
};

export default NavigationBar;
