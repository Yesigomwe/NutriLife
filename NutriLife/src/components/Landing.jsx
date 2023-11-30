/* eslint-disable no-unused-vars */
import Recipes from "./Recipes";
import WhyUs from "./WhyUs";
function LandingPage() {
  return (
    <div className="pt-6">
      <div className="flex h-700 w-1400 text-white items-center font-bold bg-orange justify-center">
        <p className="w-700">
          We take pride in sourcing the finest, locally-sourced ingredients,
          ensuring that every meal is a testament to our dedication to quality
          and flavor.
        </p>
        <img
          className="h-700 w-700"
          src="src/assets/home_image.png"
          alt="image"
        />
      </div>

      <h1 className="text-green font-bold border-solid border-2 border-orange m-2">
        {" "}
        <span className="font-bold text-orange">Take A Look At Our</span>{" "}
        Recipes
      </h1>
      <div className="bg-orange w-1440 h-600 p-6 flex flex-col  ">
        <div className="flex justify-around">
          <Recipes
            image="src/assets/recipe1.png"
            description="Matooke(Green Banana) Stew"
          />
          <Recipes
            image="src/assets/recipe2.png"
            description="Matooke(Green Banana) Stew"
          />
          <Recipes
            image="src/assets/recipe1.png"
            description="Matooke(Green Banana) Stew"
          />
        </div>
        <div className="justify-center">
          <button className="bg-green h-70 w-192 text-white font-bold rounded-5 m-8">
            View More
          </button>
        </div>
      </div>
      <div className="bg-yellow w-1440 h-426 flex flex-col items-center pt-8">
        <h1 className="bg-green text-white font-bold w-894 h-90 text-48">
          Why Us
        </h1>
        <div className="pt-16 flex justify-between flex-grow">
          <WhyUs
            image="src/assets/delivery.png"
            description="Fast Deliveries"
          />

          <WhyUs
            image="src/assets/payment.png"
            description="Budget-Friendly"
          />

          <WhyUs
            image="src/assets/support.png"
            description="Live Chat"
          />
        </div>
      </div>
      <div className="w-1440 h-700 bg-orange p-8">
        <h2 className="bg-green text-white font-bold w-340 h-40"> Special Offers!</h2>
        <div className="flex ">
          <p className="w-650 text-white font-bold text-30"><span className="text-48">GET 30% OFF THIS FESTIVE SEASON</span> This offer is available from 16th NOV-27th DEC. It applies on all package subscriptions and orders.</p>
          <img className ="w-650" src="src/assets/offer.png" alt="offer" />
        </div>
        <h2 className="bg-green text-white font-bold w-340 h-40"> Claim Offers Now!</h2>
      </div>
      <div className="w-auto bg-green h-102 flex justify-end gap-5 items-center pr-4">
      <img className="w-80 h-64" src="src/assets/fb.png" alt="fb" />
      <img className="w-80 h-64" src=" src/assets/YouTube.png" alt="youtube" />
       </div>
       <div className="w-auto h-380 bg-orange">
        <div><span><h3>About</h3></span>
        
        </div>

       </div>
    </div>
  );
}

export default LandingPage;
