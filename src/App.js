import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Coin from "./pages/Coin";
import Dashboard from "./pages/Dashboard";

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
          <li>
            <Link to="/coin">Coin</Link>
          </li>{" "}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user" element={<User />} />
        <Route path="coin" element={<Coin />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
