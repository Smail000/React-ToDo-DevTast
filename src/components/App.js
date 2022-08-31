import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import NavBar from "./UI/NavBar/NavBar.jsx"

import Home from "./pages/home/Home.jsx"
import Docs from "./pages/docs/Docs.jsx"
import About from "./pages/about/About.jsx"

export default function App(props) {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    )
}