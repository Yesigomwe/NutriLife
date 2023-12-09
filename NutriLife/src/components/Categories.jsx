/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
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

  const CategoriesUrl = "http://localhost:1337/api/recipe-categories";
  const [data, setData] = useState(null);




  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(CategoriesUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.data);
        console.log(result.data );
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array ensures the effect runs once on mount



  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="categories-navigation flex">
      {
        Array.isArray(data)?(
          data.map((category)=>(
            <Link key={category.id} to="/SingleCategory">
            <NavItem
              item={category.attributes.name}
              selected={selectedItem === "Elderly"}
              onClick={handleClick}
            />
          </Link>

          ))
        ):(

          <p>
          Fetching data...
      </p>

        )
      }


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
