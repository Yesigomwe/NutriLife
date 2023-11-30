/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Recipes(props){
    
    return (
        <>
        <a href="">
        <div className="flex flex-col text-white font-bold h-480 w-275 justify-center gap-8 items-center border-solid border-2 border-white p-2">
            <img className=" rounded-5" src={props.image} alt="Recipe_image" />
            <p className="max-w-400 h-28">{props.description}</p>
            <button className="bg-green w-192 h-28 mb-5 rounded-5">View Details</button>
        </div>
        </a>

        </>

    )
}
export default Recipes;