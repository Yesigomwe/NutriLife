/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function WhyUs(props){
    return (
        <div className="flex flex-col items-center w-300 gap-2">
            <div className="bg-white rounded-full w-100 h-100"><img src={props.image} alt="image" /></div>
            <p className="w-275 h-40 bg-green font-bold text-white items-center justify-center">{props.description}</p>
        </div>
    )
}

export default WhyUs;