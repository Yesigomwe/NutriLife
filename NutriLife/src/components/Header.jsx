import './Header.css';
import { useState } from 'react';

function Header() {
    let [clicked,setClicked]=useState(false)




    return (
        <div className='header'>

            <img className="logo" src="src/assets/logo.png" alt="logo" />


            <nav className="navigation">
                <a id="home"  style={{ color: clicked ? '#DC661F' : 'black' }}
      onClick={() => setClicked(!clicked)} href="#">Home</a>
                <a id="recipes" href="#">Recipes</a>
                <a id="blogs" href="#">Blogs</a>
                <a id="about" href="#">About Us</a>
                <a id="contact" href="#">Contact</a>
            </nav>

            <div className="authentification">

            </div>
        </div>)
}

export default Header