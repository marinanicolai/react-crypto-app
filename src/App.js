import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <header className="App-header">Crypto app</header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>{" "}
          <li>
            <Link to="/about">About</Link>
          </li>{" "}
          <li>
            <Link to="/user">User</Link>
          </li>{" "}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
