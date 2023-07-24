

import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();

  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/hospital/${id}`).then((res) => {
      console.log('data', res.data)
      setHospital(res.data);
      console.log('hostpital ', hospital)

    });
  }, [id]);



  console.log('hospital ok', hospital);
  return (
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/home`}
          className="hover:bg-white-600 bg-black hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          back
        </Link>
        {hospital && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Name 
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Handphone
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Date of Birth
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Address
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4">

{            hospital.map((value) => (
  <>
    <h2 className="text-white font-bold text-3xl border-black border-b-2">{value.name}</h2>
    <h2 className="text-white font-bold text-3xl border-black border-b-2">{value.handphone}</h2>
    <h2 className="text-white font-bold text-3xl border-black border-b-2">{new Date(value.birthdate).toDateString()}</h2>
    <h2 className="text-white font-bold text-3xl border-black border-b-2">{value.address}</h2>
    </>

  ))}
              {/* <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {hospital[0].handphone}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {hospital[0].birthdate}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {data.address} */}
              {/* </h2> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
