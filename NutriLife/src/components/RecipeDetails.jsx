/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function RecipeDetails(props){
    return(
        <div className="flex w-1290 h-780">
            <div className="bg-green flex flex-col items-center justify-center w-645 h-780 text-white font-bold">
                <h1 className="text-30">{props.recipeName}</h1>
                <div className="bg-orange w-575 h-600 flex flex-col justify-center">
                    <h2>Ingredients needed:</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam rem dolorum pariatur quos enim atque velit sit eum, placeat qui! Ea perferendis sapiente modi soluta suscipit labore vitae molestiae?</p>
                    <h2>Procedure</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum adipisci, quasi fugit nihil incidunt praesentium fuga dicta quo doloremque itaque dignissimos, ex odit quidem architecto doloribus possimus nisi, quae laborum.</p>
                    <h2>Nutritional information</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis veritatis natus corporis, perferendis velit consectetur porro veniam architecto distinctio.</p>

                </div>
            </div>
            <div className="w-645 h-780"><img src={props.image} alt="" /></div>
        </div>
    )
}

export default RecipeDetails