/* eslint-disable no-unused-vars */
import { Checkbox } from "@mantine/core";
import { useState } from "react";

export function SignUp() {
  const divider = (
    <svg
      width="241"
      height="1"
      viewBox="0 0 241 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id="Line 10" d="M0.5 0.5H240.5" stroke="#FE6314" />
    </svg>
  );
  const googleLogo = (
    <img
      className="w-20 h-20"
      src="https://s3-alpha-sig.figma.com/img/5703/8ebf/1b35e56e62039b52bd374b4cfc8ef802?Expires=1701648000&Signature=q5wy0jvMpysrrAfYcS~bW5rvB9EgLma812-62~dvFCm0IsRIN-2A1Uy1SwUUZtbHfENMN0KJXHJlFs1eWoGrCc6x~kHN6oxy7sOAQOer7Pm0BgMvgkkGtCtbxg~u2lqfoWCA6x4KDItmGUHRaZ1lNLBid8hVQOD5~vrqfDVCBmsyl5hNk2YoG0wbc3dVC0ZVG6yRsvshb1a2wmvdUgzkWJ0qHkcmz8SOGQeVO2REvzFhrNwpHe-dtI7ii7O5s3udXcI~b1QTjESYSY~ZxuWosFZx0GSqDOhsQWve04sbauBmwYxvoJDUcIuuzXG~n1xlhNl7k7fsx6PATJZXqOVc0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    />
  );

  const [signup, setLogin] = useState(false);
  const handleClick = () => {
    setLogin(true);
  };

  //input
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      alert("Account created successfully!");
    }
  };

  return (
    <div className="w-1290 h-780 flex text-white font-bold items-center">
      <div className="bg-green w-645 h-780">
        <h1>Sign Up</h1>
        <div className="flex flex-col items-center justify-center p-4">
          <div className="flex justify-start flex-col items-start text-lg">
            <p className="font-bold">Name:</p>
            <input
              className="w-515 rounded-5 px-2 text-black h-40"
              type="text"
              placeholder="Enter your name"
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div
            className="flex justify-start flex-col items-start text-lg"
            id="email"
          >
            <p className="font-bold">Create Password:</p>
            <input
              className="w-515 rounded-5 px-2 text-black h-40"
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <br />
          <div
            className="flex justify-start flex-col items-start text-lg"
            id="email"
          >
            <p className="font-bold">Confirm Password:</p>
            <input
              className="w-515 rounded-5 px-2 text-black h-40"
              type="password"
              placeholder="Enter your password"
              required
              value={confirmPassword}
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <br />
          <Checkbox
            defaultChecked
            label="I agree to the terms and conditions"
          />
          <br />

          <button
            type="button"
            className="w-515 h-58 bg-[#FE6314] rounded-20 text-white font-bold"
            onClick={validatePassword}
          >
            Sign Up
          </button>
          <span className="flex flex-row items-center">
            {divider} <p>Or</p> {divider}
            <hr />
          </span>
          <button
            type="button"
            className="w-300 h-40 bg-white rounded-5 text-[#2A5F3B] flex justify-center items-center font-bold px-8"
          >
            {googleLogo}SignUp with Google
          </button>
        </div>
      </div>
      <div className=" image w-645 h-780">
        <img src="/assets/signup.png" alt="signup" />
      </div>
    </div>
  );
}