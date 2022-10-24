import logo from "./logo.svg";
import { Routes, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import Coin from "./pages/Coin";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">Crypto app</header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>{" "}
          <li>
            <Link to="/explore">Explore</Link>
          </li>{" "}
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>{" "}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Coin />} />
        <Route path="explore" element={<About />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
