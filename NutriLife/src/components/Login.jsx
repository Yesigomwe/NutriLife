/* eslint-disable react/no-unescaped-entities */
import { Checkbox } from "@mantine/core";
import { useState } from "react";


export function Login() {
 const divider = <svg width="241" height="1" viewBox="0 0 241 1" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path id="Line 10" d="M0.5 0.5H240.5" stroke="#FE6314"/>
 </svg>
 const googleLogo = <img className="w-20 h-20" src="https://s3-alpha-sig.figma.com/img/5703/8ebf/1b35e56e62039b52bd374b4cfc8ef802?Expires=1701648000&Signature=q5wy0jvMpysrrAfYcS~bW5rvB9EgLma812-62~dvFCm0IsRIN-2A1Uy1SwUUZtbHfENMN0KJXHJlFs1eWoGrCc6x~kHN6oxy7sOAQOer7Pm0BgMvgkkGtCtbxg~u2lqfoWCA6x4KDItmGUHRaZ1lNLBid8hVQOD5~vrqfDVCBmsyl5hNk2YoG0wbc3dVC0ZVG6yRsvshb1a2wmvdUgzkWJ0qHkcmz8SOGQeVO2REvzFhrNwpHe-dtI7ii7O5s3udXcI~b1QTjESYSY~ZxuWosFZx0GSqDOhsQWve04sbauBmwYxvoJDUcIuuzXG~n1xlhNl7k7fsx6PATJZXqOVc0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
 
 // eslint-disable-next-line no-unused-vars
 const[loggedIn,setLogin] = useState(false)
 const handleClick = ()=>{
    setLogin(true)
 }

  return (
    <div className="h-780 w-1290 flex items-center justify-center m-auto">
        
      <div
        className="w-645 h-780 bg-[#1A5D1A] text-white flex flex-col justify-center px-8 gap-2"
        id="login-info"
      >
        <div
          className="flex justify-start flex-col items-start text-lg"
          id="email"
        >
          <p className="font-bold">Email Address:</p>
          <input
            className="w-515 rounded-5 px-2 text-black h-40"
            type="text"
            placeholder="Enter your email address"
            required
          />
        </div>
        <br />
        <div
          className="flex justify-start flex-col items-start text-lg"
          id="password"
        >
          <p className="font-bold">Email Password:</p>
          <input
            className="w-515 rounded-5 px-2 text-black h-40"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <Checkbox defaultChecked label="I agree to the terms and conditions" />

        <button className="w-515 h-58 bg-[#FE6314] rounded-20 text-white font-bold" >Log In</button>
        <span className="flex flex-row items-center">
        {divider} <p>Or</p> {divider}
            <hr />
        </span>
        <button className="w-300 h-40 bg-white rounded-5 text-[#2A5F3B] flex justify-center items-center font-bold px-8" onClick={handleClick}>{googleLogo}Login with Google</button>

        <p className="font-bold">Don't have an account? <span className="text-[#FE6314]">Sign Up </span></p>
      </div>
      <div>
        <img
          className="w-645 h-780"
          src="/assets/login_image.png"
          alt="login image"
        />
      </div>
    </div>
  );
}

