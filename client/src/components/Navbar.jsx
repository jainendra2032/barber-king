import React from "react";

const Navbar = () => {
  return (
    <div className="flex px-12 py-1 items-center justify-between bg-slate-200 w-screen">
      <div className="flex items-center">
        <img
          className="w-16 h-16 object-cover"
          src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h1 className="text-3xl font-bold ml-4">Barber King</h1>
      </div>
      <div className="flex gap-3 text-2xl items-center">
        {/* Home,About,COntact us */}
        <h1 className="hover:bg-slate-500 rounded-full px-4 py-1 hover:text-white transition duration-300">
          Home
        </h1>
        <h1 className="hover:bg-slate-500 rounded-full px-4 py-1 hover:text-white transition duration-300">
          About
        </h1>
        <h1 className="hover:bg-slate-500 rounded-full px-4 py-1 hover:text-white transition duration-300">
          Contact us
        </h1>
      </div>
      <div>
        {/* Search bar */}
        <div className="flex items-center border py-1 pl-4 pr-2 rounded-full border-black">
            <input placeholder="Search by shopname" className="bg-slate-200 focus:border-none focus:outline-none" type="text" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
