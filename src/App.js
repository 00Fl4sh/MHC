// import Hello from "./Hello";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <div className="fix">
          <div className="navbar">
            <Link className="nav" to="/Home">
              Home
            </Link>
            <Link className="nav" to="/About">
              About
            </Link>
            <Link className="nav" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
