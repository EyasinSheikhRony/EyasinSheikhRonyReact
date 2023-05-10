// @ts-nocheck
import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];


const Header = (props) => {
  return (
    <>
    <div className=" h-[10vh] bg-gray-400">
      {nav.map((item, index) => (
        <NavLink key={index} to={item.href} >{item.name}</NavLink>
      ))}
    </div>
    {props.children}
    </>
  );
};

export default Header;

