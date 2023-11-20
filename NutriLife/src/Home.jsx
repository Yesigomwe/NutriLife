import './Home.css';
import {useState} from 'react';
import Header from './components/Header';
function Home() {

  const [message, updateMassage] = useState("G5")

  const handleClick = () => {
    updateMassage("Nutrilife");

  }

  return (

    <home>
        <Header/>
      <div>
        <h2>Welcome to {message}! </h2>
        <button onClick={handleClick}>Click</button>
      </div>
    </home>
  )
}

export default Home
