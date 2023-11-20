import './Home.css';
import {useState} from 'react';

function Home() {

  const [message, updateMassage] = useState("G5")

  const handleClick = () => {
    updateMassage("Nutrilife");

  }

  return (

    <body>

      <div>
        <h2>Welcome to {message}! </h2>
        <button onClick={handleClick}>Click</button>
      </div>
    </body>
  )
}

export default Home
