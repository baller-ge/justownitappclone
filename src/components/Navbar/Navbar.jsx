import React from "react";
import Logo from "../../assets/Logo.jpg";

const Navbar = () => {
  return (
    <nav className="z-50 sticky top-0 left-0 right-0 border-b h-20 text-gray-900 bg-white flex flex-row justify-between items-center">
      <a href="/">
        <img src={Logo} alt="logo" className="w-20 h-20 object-cover" />
      </a>
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="h-full w-full border-2 border-[#ff4000] rounded pl-7 pr-5 py-3 focus:outline-none ease transition-all placeholder:text-black text-sm"
        />
        <button className="px-7 py-3 text-md font-bold text-white rounded-md bg-[#ff4000] ease transition-all hover:opacity-70">
          Search
        </button>
      </form>
      <div className="flex gap-5">
        <a className="px-4 py-3 transition ease font-medium" href="https://play.google.com/store/apps/details?id=com.TDAfrica.justownitapp">
          Download
        </a>
        <a className="font-medium ease transition-all bg-orange-100 text-orange-500 border-[#ff4000] rounded-md py-3 px-4 border" href="/auth/login">
          Log in
        </a>
        <a style={{ backgroundColor: "#ff4000", display: "block", visibility: "visible", position: "relative" }} className="px-4 py-3 text-center search-btn text-white rounded-md font-medium ease transition-all hover:opacity-70" href="/auth/signup">
          Get started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;