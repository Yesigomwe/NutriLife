import React from "react";

export const Blogs = () => {
  const Blogs = [
    {
      title: "Guilt-Free Indulgence: 3 Nutrient-Packed Desserts",
      description:
        "Discover delectable dessert recipes that satisfy your sweet cravings without compromising on nutrition. Dive into guilt-free indulgence with these nutrient-packed treats.",
      photo: "/assets/packed-desserts1.jpg",
    },
    {
      title: "Wellness in a Bowl: 5 Nourishing Soup Recipes",
      description:
        "Warm up your body and soul with our collection of wholesome soup recipes. From comforting classics to innovative flavors, these bowls of goodness bring wellness to your table.",
      photo: "/assets/soup1.jpg",
    },
    {
      title: "Mindful Mornings: 4 Breakfasts for a Balanced Start",
      description:
        "Elevate your mornings with nutritious and delicious breakfast options. Explore these quick and easy recipes designed to kickstart your day with a perfect balance of flavors and nutrients.",
      photo: "/assets/breakfast1.jpg",
    },
  ];


  const AdditionalSections = [
    {
      title: "Energizing Smoothie Boosts",
      description:
        "Revitalize your mornings with our selection of nutrient-packed smoothie recipes. From green detox blends to berry-infused delights, these energizing drinks will kickstart your day with a burst of vitality. In the hustle and bustle of our daily lives, finding the perfect balance between health and convenience can be a challenge. One delightful solution that has gained immense popularity is the incorporation of energizing smoothies into our morning routines. These nutrient-packed beverages not only kickstart your day with a burst of vitality but also provide a delicious and convenient way to ensure you're meeting your nutritional needs. Join us as we explore the world of Energizing Smoothie Boosts and discover how these blends can revolutionize your mornings. Whether you're aiming for a refreshing green detox or a fruity explosion of antioxidants, our recipes cater to a variety of tastes and wellness goals.",
      photo: "/assets/smoothie.jpg",
    },
    {
      title: "Fitness Fusion: Workouts for Foodies",
      description:
        "Embark on a fitness journey designed specifically for food enthusiasts. Our fusion workouts seamlessly blend calorie-burning exercises with a love for good food. Stay active, indulge in culinary delights, and maintain a healthy balance in your lifestyle. We understand that the joy of eating is an integral part of life, and our fitness fusion program celebrates this by offering workouts that complement your passion for flavorful meals. From high-energy cardio sessions to strength training inspired by kitchen movements, we've curated a fitness routine that aligns with your foodie spirit. Join us on this unique journey where fitness and food unite to create a harmonious and enjoyable lifestyle.",
      photo: "/assets/workoutfoodies.jpg",
    },
    {
      title: "Sustainable Eating: Eco-Friendly Recipes",
      description:
        "Embark on a culinary adventure with our collection of sustainable and eco-friendly recipes. Explore dishes that not only tantalize your taste buds but also support a sustainable and environmentally conscious lifestyle. From plant-based delights that reduce your carbon footprint to eco-conscious cooking tips, join us in making a positive impact on the planet. Sustainable eating is not just a trend; it's a commitment to nurturing both your well-being and the health of the Earth. Discover recipes that showcase the beauty of locally sourced, seasonal ingredients, and learn practical tips for minimizing food waste in your kitchen. Together, let's savor delicious meals while contributing to a more sustainable and greener world.",
      photo: "/assets/sustainableeating.jpg",
    },
    {
      title: "Nourishing Winter Delights: Seasonal Ingredient Spotlight",
      description:
        "Explore the goodness of seasonal ingredients during this festive winter season. From hearty root vegetables to vibrant berries, discover recipes and wellness tips that embrace the essence of the holidays.",
      photo: "/assets/winterdelights.jpg",
    },
  ];

  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-bold text-3xl mt-16">
        WholesomeBites: Nourish Your Body, Feed Your Soul
      </h1>
      <p className="my-3 text-black md:w-3/4 leading-[2] mx-auto font-bold text-center" style={{ fontFamily: 'Georgia, Helvetica, sans-serif' }}>
        Welcome to WholesomeBites, your gateway to a culinary journey that goes beyond mere sustenance. Here, we believe that every bite is an opportunity to nourish your body and feed your soul. Our mission is to bring you a delectable fusion of flavors, vibrant ingredients, and mindful nutrition. Join us as we explore the world of Epicurean Wellness, where each recipe is a celebration of the symbiosis between wholesome ingredients and soulful satisfaction. It's not just about eating; it's about savoring the essence of life with every WholesomeBite.
      </p>

      {/* Featured projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {Blogs.map((blogs, index) => (
          <div
            key={index}
            className="flex flex-col shadow-sm md:w-[500px] bg-[#033500] p-4 rounded h-600"
          >
            <a
              href={blogs.photo}
              target="_blank"
              rel="noreferrer"
              className="mb-6"
            >
              <img src={blogs.photo} alt={blogs.title} />
            </a>
            <h3 className="text-white font-bold text-lg">
              {blogs.title}
            </h3>
            <p className="text-white mt-1 ">{blogs.description}</p>
            <div className="mt-5">
              <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-orange hover:text-primary">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Sections */}
      <div className="my-8">
        {AdditionalSections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-[#033500] rounded-lg shadow-lg p-4 mb-6"
          >
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img
                src={section.photo}
                alt={section.title}
                className="w-full h-auto rounded"
              />
            </div>
            <div className="md:w-1/2 md:ml-4">
              <h2 className="text-white text-2xl font-bold mb-2">
                {section.title}
              </h2>
              <p className="text-gray-50 text-xl bg-orange">
                {section.description}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

    
      
        
      </div>
    
  );
};
