import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Technology from "./Pages/Tech";
import Intro from "./Pages/Intro";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Technology />
      <Intro />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes> */}
    </>
  );
}

export default App;
