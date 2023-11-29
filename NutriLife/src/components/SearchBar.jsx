import {useState} from "react"
import { MantineProvider} from "@mantine/core";

const SearchBar = () => {

	const [searchInput, setSearchInput] = useState("Search here")

	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	return (
       
       <MantineProvider>
		<div>
		<i class="fa fa-search" aria-hidden="true"></i>
	<input className="bg-orange-300 rounded-full px-40 my-8 py-3" type="text"
			 placeholder="search here"  onChange ={handleChange}
				value={searchInput} />		
				
		</div>
		</MantineProvider>
	)

}

export default SearchBar
