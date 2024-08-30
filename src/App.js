import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landingPage/index";
import AboutPage from "./components/AboutPage";
import Contact from "./components/ContactUs/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
