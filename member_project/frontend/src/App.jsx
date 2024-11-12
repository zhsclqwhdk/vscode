import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Save from "./pages/Save";
import List from "./pages/List";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>App.jsx</h1>
      <BrowserRouter>
        <Header />
        <Body />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
