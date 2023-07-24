import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username,
      password
    };

    axios.post('http://localhost:3001/auth/login', data)
      .then((response) => {
        // Periksa respons dari permintaan POST /login
        if (response.data) {
          // Simpan informasi login ke state global atau local storage jika perlu
          localStorage.setItem('token', response.data.token)
          // Alihkan pengguna ke halaman beranda
          navigate('/home');
        } else {
          // Tampilkan pesan error jika login gagal
          alert('Incorrect username or password');
        }
      })
      .catch((error) => {
        // Tampilkan pesan error jika terjadi kesalahan pada permintaan
        alert('An error occurred while logging in');
        console.error(error);
      });
  };

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Login</h2>
      <form className="w-[50%] h-full flex flex-col mt-2" onSubmit={handleLogin}>
        <input
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="bg-green-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
        >
          Login
        </button>
        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-2 rounded-lg mt-4"
        >
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
