import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import { Link } from "react-router-dom";
import NavBar from './NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;