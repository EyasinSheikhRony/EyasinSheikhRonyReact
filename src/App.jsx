// @ts-nocheck
import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Details from "./components/Details";

export const Mood = createContext();

export default function App() {
  let [mood, setMood] = useState(false);
  return (
    <div>
      <Mood.Provider value={[mood, setMood]}>
        <BrowserRouter>
          <Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/details" element={<Details />} />
            </Routes>
          </Header>
        </BrowserRouter>
      </Mood.Provider>
    </div>
  );
}
