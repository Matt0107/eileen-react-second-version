import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Media from "./pages/Media";
import Privacy from "./pages/Privacy";
// import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Impressum" element={<Impressum />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/Privacy" element={<Privacy />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
