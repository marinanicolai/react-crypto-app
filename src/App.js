import { Routes, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Favorite from "./pages/Favorite";
import CoinList from "./pages/CoinList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "antd/dist/antd.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">Crypto app</header>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>{" "} */}
          {/* <li>
            <Link to="/favorite">Favorite</Link>
          </li>{" "} */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<CoinList />} />

        <Route path="favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
