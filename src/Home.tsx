import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import About from "./About";
import PortfolioPage from "./Portfolio";
import { Contact } from "./Contact";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black min-h-screen pl-12 flex flex-col-reverse lg:flex-row items-center px-6 md:px-16 py-10 md:py-20">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6">
          <p className="text-3xl md:text-4xl text-white font-bold">Hi, I am</p>
          <h1 className="animated-text">Shreetesh Sharma</h1>
          <p className="text-2xl md:text-3xl text-orange-400">
            <li>Frontend Developer</li>
             <li>Technical Analyst</li>
            <li>Ticketing Officer</li>
            <li>Tour Operator</li>
           
          </p>
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 md:gap-6 pt-4 pb-4 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=100085717322611"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8 text-orange-600 hover:text-orange-700 transition" />
            </a>
            <a
              href="https://www.instagram.com/shreetesh_h/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8 text-orange-500 hover:text-orange-700 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/shreetesh-sharma-79790219a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 text-orange-500 hover:text-orange-700 transition" />
            </a>
            <a
              href="https://github.com/Shreetesh05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 text-orange-500 hover:text-orange-700 transition" />
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row justify-center lg:justify-start gap-4">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Hire me
            </Link>
            <a
              href="/images/mycv.pdf"
              download
              className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/images/mero.jpeg"
            alt="Profile"
            className="h-full lg:h-[500px] w-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Additional Sections */}
      <About />
      <PortfolioPage />
      <Contact />
    </div>
  );
};

export default Home;
