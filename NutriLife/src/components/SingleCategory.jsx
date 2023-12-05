/* eslint-disable react/prop-types */
import { CategoriesNav } from "./Categories";
import { Recipes } from "./Recipes";

export function SingleCategory(props) {
  return (
    <div className="w-1290 h-780 bg-green flex flex-col items-center pt-20">
      <CategoriesNav />
      <div className="singleCategory w-1290 h-780 bg-orange flex flex-col items-center pt-20">
        <h1 className="text-white font-bold text-48">{props.category}</h1>
        <div className="flex gap-5 pt-40 justify-center">
          <Recipes image="src/assets/recipe1.png" description="Rolex" />
          <Recipes image="src/assets/recipe2.png" description="Rolex" />
          <Recipes image="src/assets/recipe1.png" description="Rolex" />
        </div>
      </div>
    </div>
  );
}

// function Recipe(props) {
//   return (
//     <div className="w-340 h-580 ">
//       <img src={props.image} alt="image" />
//       <div className="bg-orange w-340 h-100 flex flex-col text-white font-bold items-center justify-center">
//         <p>{props.name}</p>
//         <button className="bg-green w-300">View Details</button>
//       </div>
//     </div>
//   );
// }
