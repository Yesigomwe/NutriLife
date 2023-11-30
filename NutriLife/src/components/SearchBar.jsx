/* eslint-disable no-mixed-spaces-and-tabs */
import {useState} from "react"
import { MantineProvider} from "@mantine/core";

const SearchBar = () => {

	/*
	Aaron great job so far but the functionality is incomplete.

	Initiate another usestate function that will initiate the search. So far you are only getting the input from the user but not doing anything with that user input. 
	Add the search icon to this bar as appears in the figma design.

	I have changed the border color too so that the field appears as is.

	*/
	const [searchInput, setSearchInput] = useState('') //Initial value is empty because initially there is no search text, you just need a place holder.

	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	return (
       
       <MantineProvider>
		<div>
		<i className="fa fa-search" aria-hidden="true"></i>
	<input className="bg-white border-solid border-2 border-[#FE6314] rounded-full px-40 my-8 py-3" type="text"
			 placeholder="search here"  onChange ={handleChange}
				value={searchInput} />		
				
		</div>
		</MantineProvider>
	)

}

export default SearchBar
