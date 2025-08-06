import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coverImage from '../assets/bg-img.jpg';
import nea from '../assets/NEALOGO.png'
import { FaUser,FaLock  } from "react-icons/fa";

// import './index.css'
const LoginRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Simulated login success
    navigate('/dashboard');
  };

  return (
    <div className="h-screen flex  font-sans">

      {/* LEFT SIDE WITH BACKGROUND IMAGE */}
      <div
        className="lg:w-[50vw] w-[0] bg-cover bg-center"
        style={{ backgroundImage: `url(${coverImage})` }}
      ></div>

      {/* RIGHT SIDE FORM */}
      <div className="lg:w-[50vw] md:w-[100vw] w-[100vw] flex items-center justify-center p-8 bg-[#B0D3E5]">
        <div className="form-box max-w-md p-8 rounded-4xl shadow-lg
                        bg-[#e4ebee] 
                       lg:w-[30vw] lg:h-[26rem] w-[23rem] md:h-[26rem]]">

          <div>
            <img alt='nea logo' src={nea} className=" text-blue-700 mt-[3.4vh] mb-[6vh]" />
          </div>


          <div className='space-y-[3vh]'>
          
          <div className='flex  '>
            <FaUser className=' text-2xl mr-2 mt-1.5' />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInputChange} z
              className="w-full py-1.5 px-4 border border-blue-600 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex'>
            <FaLock className=' text-2xl mr-2 mt-1.5'/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              className="w-full py-1.5 px-4 border border-blue-600 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
            


          </div>

          <div className='flex justify-between mt-6 mb-6'>
            <div>
              <input
                type='checkbox'
                className='mr-1.5 ml-1'
              //onClick={}

              />
              <label className="text-sm">Remember me</label>
            </div>


            <button
              // onClick={}
              className="text-sm"
            >
              Forget Password?
            </button>
          </div>

          <div className='flex justify-center mb-4'>
            <button
              onClick={handleLogin}
              className="w-[6rem] bg-blue-600 text-white py-1.5 font-semibold hover:bg-blue-700 transition duration-200 rounded-4xl 
                        bg-gradient-to-r from-gray-blue-600 to-blue-500"
            >
              Login
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LoginRegister;
