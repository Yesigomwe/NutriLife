/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <>
      <div className=" categories w-1290 h-780 bg-green">
        <CategoriesNav />
      </div>
    </>
  );
}

export function CategoriesNav() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="categories-navigation flex">
      <Link to="/SingleCategory">
        <NavItem
          item="Elderly"
          selected={selectedItem === "Elderly"}
          onClick={handleClick}
        />
      </Link>

      <Link to="/SingleCategory">
        <NavItem
          item="Children"
          selected={selectedItem === "Children"}
          onClick={handleClick}
        />
      </Link>

      <Link to="/SingleCategory">
        <NavItem
          item="Lifestyle"
          selected={selectedItem === "Lifestyle"}
          onClick={handleClick}
        />
      </Link>

      <Link to="/SingleCategory">
        <NavItem
          item="Fitness"
          selected={selectedItem === "Fitness"}
          onClick={handleClick}
        />
      </Link>

      <Link to="/SingleCategory">
        <NavItem
          item="Expecting Moms"
          selected={selectedItem === "Expecting Moms"}
          onClick={handleClick}
        />
      </Link>
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
