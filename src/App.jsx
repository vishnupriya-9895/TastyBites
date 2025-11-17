import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";

import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Menu from "./Menu";
import Signin from "./Signin";
import Cart from "./Cart";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
