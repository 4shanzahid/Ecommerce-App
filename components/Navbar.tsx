"use client";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/public";
import { navLinks } from "@/constants";
import { useState } from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="mx-6 my-18 relative flex py-4 justify-between items-center">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={150}></Image>
        </Link>
      </div>

      <div>
        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "font-bold text-black rounded-full px-4 py-2 border border-transparent bg-slate-700 bg-opacity-20" : ""
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`/category/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:flex hidden justify-center items-center">
        <FiSearch size={22} />
        <input
          type="text"
          className="border border-gray-300 px-3 rounded-lg w-35 h-6.5"
          placeholder="Search"
        />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center pb-1">
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? <AiOutlineClose size={25} /> : <BiMenuAltRight size={31} />}
        </button>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-8 bg-white absolute top-12 right-0 mx-4 my-2 min-w-[180px] rounded-xl border border-b-slate-400 sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black border border-transparent bg-slate-700 bg-opacity-20 rounded-xl px-3" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`/category/${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button type="button" className="cart-icon">
        <FiShoppingCart />
        <span className="cart-item-qty">3</span>
      </button>
    </nav>
  );
};

export default Navbar;
