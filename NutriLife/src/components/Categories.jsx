/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
function Categories() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className=" categories w-1290 h-780 bg-green">
      <div className="categories-navigation flex">
        <NavItem
          item="Elderly"
          selected={selectedItem === "Elderly"}
          onClick={handleClick}
        />
        <NavItem
          item="Children"
          selected={selectedItem === "Children"}
          onClick={handleClick}
        />
        <NavItem
          item="Lifestyle"
          selected={selectedItem === "Lifestyle"}
          onClick={handleClick}
        />
        <NavItem
          item="Fitness"
          selected={selectedItem === "Fitness"}
          onClick={handleClick}
        />
        <NavItem
          item="Expecting moms"
          selected={selectedItem === "Expecting moms"}
          onClick={handleClick}
        />
       
      </div>

    </div>
  );
}

function NavItem({ item, selected, onClick }) {
  return (
    <div
      className={`nav-item ${
        selected ? "text-white" : "text-orange"
      } cursor-pointer px-2 py-1 mx-2 transition-colors font-bold`}
      onClick={() => onClick(item)}
    >
      {item}
    </div>
  );
}

export default Categories;
