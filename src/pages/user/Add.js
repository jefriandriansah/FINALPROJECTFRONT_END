import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [handphone, setHandphone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const data = {
    name,
    handphone,
    birthdate,
    address
  };

  function submitForm(e) {
    e.preventDefault();


    axios.post("http://localhost:3001/hospital", data)
      .then(() => {
        alert("Data submitted successfully!");
        navigate("/home");
      })
      .catch((error) => {
        alert("An error occurred while submitting the data.");
        console.error(error);
      });
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Add New Pasien</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Add Your Name"
        />
        <input
          value={handphone}
          onChange={(e) => setHandphone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Add Your Handphone Number"
        />
        <input
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="date"
          placeholder="Add Your Birthdate"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Add Your Address"
        />
        <button
          className="bg-green-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
