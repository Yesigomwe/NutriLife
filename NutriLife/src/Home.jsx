/* eslint-disable no-unused-vars */
import "./Home.css";
import NavigationBar from "./components/Header";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import LandingPage from "./components/Landing";
import SearchBar from "./components/SearchBar";

function Home() {



  return (
    <MantineProvider>
      <NavigationBar />
      <SearchBar/>
      <LandingPage />
    </MantineProvider>
  );
}

export default Home;
