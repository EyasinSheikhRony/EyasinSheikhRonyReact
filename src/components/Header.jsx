// @ts-nocheck
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Mood } from "../App";

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
  const [mood, setMood] = useContext(Mood);
  return (
    <>
      <div className={mood ? "bg-red-600 h-[10vh]" : "bg-green-600 h-[10vh]"}>
        {nav.map((item, index) => (
          <NavLink key={index} to={item.href}>
            {item.name}
          </NavLink>
        ))}
        <button onClick={() => setMood(!mood)} className="ml-4">Dark Mood</button>
      </div>
      {props.children}
    </>
  );
};

export default Header;
