/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import NavigationBar from "./components/Header";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import LandingPage from "./components/Landing";
import SearchBar from "./components/SearchBar";
import { Route, Routes } from "react-router-dom";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import Categories from "./components/Categories";
import { Blogs } from "./components/Blogs";
import { AboutUs } from "./components/AboutUs";
import { SingleCategory } from "./components/SingleCategory";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <MantineProvider>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/index" element={<LandingPage />} />
        <Route path="/recipe" element={<Recipes />} />
        <Route path="RecipeDetails" element={<RecipeDetails />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/SearchBar" element={<SearchBar />} />
        <Route path="/NavigationBar" element={<NavigationBar />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/SingleCategory" element={<SingleCategory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
