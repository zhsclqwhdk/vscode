import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
function App() {
  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        <Header />
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
