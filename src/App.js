import "./App.css";
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Features } from "./Pages/Features";
import { Company } from "./Pages/Company";
import { Careers } from "./Pages/Careers";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { About } from "./Pages/About";
import { Header } from "./components/Header";
import { HeroSection } from "./components/Hero/HeroSection";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} />
        <Route path="/features" element={<Features />} />
        <Route path="/company" element={<Company />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <HeroSection/>
    </BrowserRouter>
  );
}

export default App;
