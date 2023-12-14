
import { useEffect, useState } from "react";

export function AboutUs() {
  const apiUrl =
    "https://nutrilife.onrender.com/api/team-members?populate[display_image][populate]=*";
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className=" flex flex-col items-center">
      <div className=" about-text bg-green w-1290 h-700">
        <h1 className="text-48 font-bold text-orange">Why NutriLife?</h1>
        <div className="text-30 text-white">
          <p>
            Are you looking for a recipe to make a healthy meal? <br />
            You are in the right place. We have recipes for all your needs.
          </p>
          <br />
          <p>
            Whether you want to try a continental recipe, watching your weight,
            <br /> body building, breast feeding, expecting a baby, whoever you
            are, <br /> we have just the right recipe for you to make.
          </p>
          <br />
          <p>
            You don’t have to always eat roadside foods <br /> just because you
            don’t know how to cook!
          </p>
        </div>
      </div>
      <h1 className="border-2 border-solid border-orange text-orange font-bold text-48 w-1290 mt-8 mb-8">
        Meet Our <span className="text-green">Team</span>
      </h1>

      <div className="teamMember bg-green w-1290 m-4 p-4 h-auto flex flex-wrap justify-center mt-8 mb-8">
        {Array.isArray(data) ? (
          data.map((teamMember) => (
            <div
              className="m-8 w-96 flex flex-col m-2 items-center justify-center"
              key={teamMember.id}
            >
              {teamMember.attributes.display_image && (
                <img
                  src={teamMember.attributes.display_image.image.data.attributes.url}
                  alt="image"
                  className="h-[250px] w-300 rounded-5"
                />
              )}
              <div className="info flex w-300 flex-col items-start bg-orange text-green font-bold">
                <p>{teamMember.attributes.name}</p>
                <p>
                  <a
                    target="_blank"
                    href={teamMember.attributes.website}
                    rel="noreferrer"
                  >
                    {teamMember.attributes.name}.com
                  </a>
                </p>
                <p>{teamMember.attributes.bio}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}


