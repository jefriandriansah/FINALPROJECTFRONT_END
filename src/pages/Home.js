import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    const token = localStorage.getItem('token')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    axios.get("http://localhost:3001/hospital", config).then((res) => {
      setUsers(res.data.reverse());
      console.log(res.data.reverse())
    });
  }

  function deleteUser(id) {
    console.log(id)

    axios.delete(`http://localhost:3001/hospital/${id}`).then(() => {
      loadUsers();
    });
  }
  

  return (
    <>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold" style={{ color: 'black' }}>Hospital Patient Data</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-green-400">

                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-lg text-black px-6 py-4"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-black px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-black px-6 py-4"
                      >
                        Handphone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-black px-6 py-4"
                      >
                        Date of Birth
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-black px-6 py-4"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-black px-6 py-4"
                      >
                        Options
                      </th>
                        
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {users.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index + 1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.name}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.handphone}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.birthdate ? data.birthdate.split("T")[0] : ""}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.address}
                        </td>
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link
                            to={`/users/${data._id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            View
                          </Link>
                          <Link
                            to={`/edit-user/${data._id}`}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </Link>

                          <Link
                            onClick={() => deleteUser(data._id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;