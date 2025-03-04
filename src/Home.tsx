import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import About from "./About";
import PortfolioPage from "./Portfolio";
import { Contact } from "./Contact";
const Home = () => {
  return (
    <div>
      <div className="bg-black min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-3xl md:text-4xl text-white font-bold">Hi, I am</p>
          <div className="animated-text">Shreetesh Sharma </div>
          <p className="text-5xl md:text-6xl text-orange-500 mt-4 md:mt-8">
            Frontend Developer
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-8 md:mt-12 space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-8 h-8 md:w-10 md:h-10 text-orange-600 hover:text-orange-700 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-8 h-8 md:w-10 md:h-10 text-orange-500 hover:text-orange-700 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 md:w-10 md:h-10 text-orange-500 hover:text-orange-700 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8 md:w-10 md:h-10 text-orange-500 hover:text-orange-700 transition" />
            </a>
          </div>
          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="/contact"
              className="bg-orange-500 text-blue-900 px-8 py-3 md:px-12 md:py-4 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
            >
              Hire me
            </Link>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="bg-orange-500 text-blue-900 px-8 py-3 md:px-12 md:py-4 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img
            src="/images/backg.jpeg"
            alt="Profile Image"
            className="h-64 md:h-[400px] w-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <About />
      <PortfolioPage />
      <Contact />
    </div>
  );
};

export default Home;
