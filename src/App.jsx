import React, { useState } from "react";
import './App.css';
import FirstPage from "./components/first-page";
import SecondPage from "./components/second-page";
import ThirdPage from "./components/third-page";
import FourthPage from "./components/fourth-page";
import FifthPage from "./components/fifth-page";
import { Routes, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState('');

  return (
    <Routes>
      <Route path='/' element={<FirstPage />} />
      <Route path='/2' element={<SecondPage />} />
      <Route path='/3' element={<ThirdPage setName={setName} />} />
      <Route path='/4' element={<FourthPage name={name} />} />
      <Route path='/5' element={<FifthPage name={name} />} />
    </Routes>
  )
}

export default App;
