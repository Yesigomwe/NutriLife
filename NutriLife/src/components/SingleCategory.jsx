/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function SingleCategory(props) {
  return (
    <>
      <div className="singleCategory w-1290 h-780 bg-green flex flex-col pt-20">
        <h1 className="text-white font-bold text-48">{props.category}</h1>
        <div className="flex gap-5 pt-40 justify-center">
          <Recipe image="src/assets/recipe2.png" name="Rolex" />
          <Recipe image="src/assets/recipe2.png" name="Rolex" />
          <Recipe image="src/assets/recipe2.png" name="Rolex" />
        </div>
      </div>
    </>
  );
}

function Recipe(props) {
  return (
    <div className="w-340 h-580 ">
      <img src={props.image} alt="image" />
      <div className="bg-orange w-340 h-100 flex flex-col text-white font-bold items-center justify-center">
        <p>{props.name}</p>
        <button className="bg-green w-300">View Details</button>
      </div>
    </div>
  );
}

export default SingleCategory;
