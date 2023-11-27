import { useState } from "react"
import { MantineProvider } from "@mantine/core";
const searchBar = () =>{

const[searchInput, setSearchInput] = useState("null")

const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
};

return(
    <MantineProvider>
        theme={{
        fontFamily: 'Verdana, sans-serif'}}

    <div>
        <input className="rounded-full px-20" type="text" placeholder="search here" 
        onChange ={handleChange} value={searchInput}></input>
    </div>
    </MantineProvider>
)

}

export default searchBar