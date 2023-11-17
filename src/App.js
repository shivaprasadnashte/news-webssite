import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        </Routes>
    </Router>
  );
}

export default App;
