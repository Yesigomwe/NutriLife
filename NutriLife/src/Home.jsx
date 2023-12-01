/* eslint-disable no-unused-vars */
import "./Home.css";
import NavigationBar from "./components/Header";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import LandingPage from "./components/Landing";

function Home() {



  return (
    <MantineProvider>
      <NavigationBar />
      <LandingPage />
    </MantineProvider>
  );
}

export default Home;
