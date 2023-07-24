import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const data = {
    username,
    password
  };

  function submitForm(e) {
    e.preventDefault();

    axios.post("http://localhost:3001/auth/register", data)
      .then(() => {
        alert("Registration successful!");
        navigate("/login");
      })
      .catch((error) => {
        alert("An error occurred while registering.");
        console.error(error);
      });
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Registration</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="password"
          placeholder="Password"
        />
        <button
          className="bg-green-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
