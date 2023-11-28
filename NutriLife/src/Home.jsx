import './Home.css';
import {useState} from 'react';
import NavigationBar from './components/Header';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import SearchBar from './components/SearchBar';
function Home() {

  const [message, updateMassage] = useState("G5")

  const handleClick = () => {
    updateMassage("Nutrilife");

  }

  return (
    <MantineProvider>
<home>
  
        <NavigationBar/>
        
      <div>
        <h2>Welcome to {message}! </h2>
        <button className='bg-[#FE6314] rounded-lg width: 30px' onClick={handleClick}>Click</button>
        <SearchBar/>
      </div>
  
    </home>

    </MantineProvider>
  )
}

export default Home
