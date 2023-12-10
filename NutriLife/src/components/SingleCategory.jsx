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
