import { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src={logo}
        alt="autoSave"
        className="w-[200px] h-[72px] object-contain"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
          font-normal cursor-pointer text-[16px] ${
            index === navLinks.length - 1
              ? "mr-0 bg-white rounded-lg text-black p-2 hover:bg-black hover:text-white border-solid border-2 ease-in duration-200"
              : "mr-10 text-white"
          } `}
          >
            <a href={`${nav.url}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile View  */}

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] cursor-pointer object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col  justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
          font-normal cursor-pointer text-[16px] ${
            index === navLinks.length - 1
              ? "mr-0 bg-white rounded-lg text-black p-3 hover:bg-black hover:text-white border-solid border-2 ease-in duration-200"
              : "mb-10 text-white"
          } `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
