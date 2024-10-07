import React from 'react'; 
import myImage from "../imagesapps/91170631-0b57-436d-9db0-14bb9e9dafd9.webp";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-[#111827] dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse rounded-lg">
          <img src={myImage} className="h-10 rounded-full shadow-md" alt="ZOLDIK Icon" />
          <span className="self-center text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#61aada] to-[#fc4aac]">ZOLDIK</span>
        </a>

        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">

          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "block py-2 px-3 text-[#fc4aac] bg-blue-700 rounded transition duration-300 ease-in-out transform hover:scale-105 md:bg-transparent md:p-0 dark:bg-[#fc4aac] md:dark:bg-transparent" 
                  : "block py-2 px-3 text-white bg-blue-700 rounded transition duration-300 ease-in-out transform hover:scale-105 md:bg-transparent md:text-[#fc4aac] md:p-0 md:dark:text-[#fc4aac] dark:bg-[#fc4aac] md:dark:bg-transparent"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/most-popular" 
                className={({ isActive }) => 
                  isActive ? "block py-2 px-3 text-[#fc4aac] transition duration-300 ease-in-out transform hover:scale-105 md:border-0 md:p-0" 
                  : "block py-2 px-3 text-gray-900 transition duration-300 ease-in-out transform hover:scale-105 md:hover:bg-transparent md:hover:text-[#fc4aac] md:border-0 md:p-0 dark:text-white dark:hover:text-white"
                }
              >
                Most Popular
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/your-gaming-library" 
                className={({ isActive }) => 
                  isActive ? "block py-2 px-3 text-[#fc4aac] transition duration-300 ease-in-out transform hover:scale-105 md:border-0 md:p-0" 
                  : "block py-2 px-3 text-gray-900 transition duration-300 ease-in-out transform  hover:scale-105 md:hover:bg-transparent md:hover:text-[#fc4aac] md:border-0 md:p-0 dark:text-white  dark:hover:text-white"
                }
              >
                Gaming Library
              </NavLink>
            </li>

            
          </ul>



</div>

      </div>
    </nav>
  );
};

export default Header;
