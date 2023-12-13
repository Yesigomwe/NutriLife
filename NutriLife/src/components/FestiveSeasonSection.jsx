import React from "react";

const FestiveSeasonSection = () => {
  const festiveContent = [
    {
      title: "Nourishing Winter Delights: Seasonal Ingredient Spotlight",
      description:
        "Explore the goodness of seasonal ingredients during this festive winter season. From hearty root vegetables to vibrant berries, discover recipes and wellness tips that embrace the essence of the holidays.",
      photo: " src/assets/packed-desserts3.jpg",
    },
    {
      title: "Nourishing Winter Delights: Seasonal Ingredient Spotlight",
      description:
        "Explore the goodness of seasonal ingredients during this festive winter season. From hearty root vegetables to vibrant berries, discover recipes and wellness tips that embrace the essence of the holidays.",
      photo: " src/assets/packed-desserts3.jpg",
    },
    {
      title: "Nourishing Winter Delights: Seasonal Ingredient Spotlight",
      description:
        "Explore the goodness of seasonal ingredients during this festive winter season. From hearty root vegetables to vibrant berries, discover recipes and wellness tips that embrace the essence of the holidays.",
      photo: " src/assets/packed-desserts3.jpg",
    },
    
  ];

  return (
    <div className="mt-10">
      <h2 className="text-primary font-bold text-2xl mb-4">
        Festive Season Delights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 items-center justify-center">
        {festiveContent.map((entry, index) => (
          <div
            key={index}
            className="flex flex-col shadow-sm md:w-[500px] bg-[#033500] p-4 rounded"
          >
            <a href={entry.photo} target="_blank" rel="noreferrer" className="mb-6">
              <img src={entry.photo} alt={entry.title} />
            </a>
            <h3 className="text-white font-bold text-lg">{entry.title}</h3>
            <p className="text-white mt-1">{entry.description}</p>
            <div className="mt-5">
              <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-orange hover:text-primary">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestiveSeasonSection;
