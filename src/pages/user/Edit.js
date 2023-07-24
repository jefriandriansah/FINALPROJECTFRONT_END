import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [handphone, setHandphone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/hospital/${id}`)
      .then((res) => {
        const data = res.data;
        if (data.length > 0) {
          const { name, handphone, birthdate, address } = data[0];
          setName(name);
          setHandphone(handphone);
          setBirthdate(formatDate(birthdate)); // Format the date
          setAddress(address);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const navigate = useNavigate();

  const data = {
    name,
    handphone,
    birthdate,
    address,
  };

  function updateData(e) {
    e.preventDefault();
    console.log('data', data)
    axios
      .put(`http://localhost:3001/hospital/${id}`, data)
      .then((r) => console.log('response', r) )
      .catch((error) => console.error(error));
      navigate("/Home")

  }

  function formatDate(date) {
    // Format the date as "YYYY-MM-DD" for the input field
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Update Data</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={handphone}
          onChange={(e) => setHandphone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your handphone"
        />
        <input
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="date"
          placeholder="Enter your date"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your address"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={updateData}
        >
          Update Data
        </button>
      </form>
    </div>
  );
}

export default Edit;