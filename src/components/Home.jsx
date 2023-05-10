import React, { useContext } from "react";
import { Mood } from "../App";

export default function Home() {
  const [mood] = useContext(Mood)
  return (
    <div className={mood ? "bg-red-400 text-white" : "bg-pink-200 text-gray-700"}>
      <h1>Home</h1>
    </div>
  );
}
