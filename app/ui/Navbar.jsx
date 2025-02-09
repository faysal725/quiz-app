import React from "react";

export default function Navbar() {
  return (
      <header className="max-w-[90%] mx-auto md:px-5 py-2 flex justify-between items-center">
        <p className="text-4xl md:text-6xl font-semibold text-indigo-900">
          Quiz<span className="text-teal-700">Line</span>
        </p>

        <button className="text-base md:text-xl font-semibold text-indigo-900 border-2 border-teal-700 p-1 px-4 md:p-3 md:px-7">
          <p>Download App</p>
        </button>
      </header>


  );
}
