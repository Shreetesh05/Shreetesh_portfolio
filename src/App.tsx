import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import ChatBox from "./Chatbox";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ChatBox/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
