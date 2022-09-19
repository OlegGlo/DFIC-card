import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Main from './pages/Main';
import Link from './pages/Link';
// import Contact from './Contact';
// import About from './About';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import NavBar from './NavBar';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/link" element={<Link />} />
            </Routes>
        </div>
    );
}

export default App;