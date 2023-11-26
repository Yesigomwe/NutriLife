import "./Home.css";
import { useState } from "react";
import NavigationBar from "./components/Header";
import Login from "./components/Login";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
function Home() {
  const [message, updateMassage] = useState("G5");

  const handleClick = () => {
    updateMassage("Nutrilife");
  };

  return (
    <MantineProvider>
      <NavigationBar />
      <Login />

     <div>
        <h2>WELCOME TO {message}! </h2>
        <button
          className="bg-[#FE6314] rounded-lg width: 30px"
          onClick={handleClick}
        >
          Click
        </button>
      </div> 
      
    </MantineProvider>
  );
}

export default Home;
