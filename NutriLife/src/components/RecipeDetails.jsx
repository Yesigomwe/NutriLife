/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
function RecipeDetails(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          "https://nutrilife.onrender.com/api/recipe-details?populate[detail_image][populate]=*"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        let recipeName = localStorage.getItem("recipeName")
        let recipe = result.data.filter((recipeData)=>{

          return recipeData.attributes.name === recipeName
        })
        console.log(result.data);
        setData(recipe)
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchRecipeDetails();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="m-4">
      {Array.isArray(data) ? (
        data.map((recipeDetails) => (
          <div className="flex w-1290 h-780" key={recipeDetails.id}>
            <div className="bg-green flex flex-col items-center justify-center w-645 h-780 text-white font-bold">
              <h1 className="text-30">{recipeDetails.attributes.name}</h1>

              <p>{recipeDetails.attributes.details} </p>
            </div>
            <div >
            {recipeDetails.attributes.detail_image && recipeDetails.attributes.detail_image.image && (
              <img className="w-645 h-780"
                src={`https://nutrilife.onrender.com${recipeDetails.attributes.detail_image.image.data.attributes.formats.thumbnail.url}`}
                alt="recipe_details"
              />
            )}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RecipeDetails;
