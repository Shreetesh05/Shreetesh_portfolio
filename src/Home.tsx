import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Github, Download, Mail, ChevronRight } from "lucide-react";
import About from "./About";
import PortfolioPage from "./Portfolio";
import { Contact } from "./Contact";

const PortfolioLanding = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Frontend Developer", "Technical Analyst", "Ticketing Officer", "Tour Operator"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 pt-12 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-28">
          <div className="flex-1">
            <p className="text-xl md:text-2xl text-orange-400 mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Shreetesh <span className="text-orange-500">Sharma</span>
            </h1>
            
            <div className="mb-8">
              <div className="text-2xl md:text-3xl text-orange-400 font-medium mb-6 h-12">
                <span className="flex items-center">
                  <ChevronRight className="text-orange-500 mr-2" size={28} />
                  {roles[currentRole]}
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-10 max-w-2xl">
              I create engaging digital experiences and seamless solutions across technology and tourism sectors. 
              With expertise in both technical and customer-facing roles, I bring a unique perspective to every project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1">
                <Mail size={20} />
                Hire Me
              </button>
              <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-md border border-orange-500/30 text-orange-400 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:bg-gray-700/50 hover:shadow-lg hover:shadow-orange-500/10">
                <Download size={20} />
                Download CV
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-start gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=100085717322611"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-orange-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20 hover:bg-orange-600/10"
              >
                <Facebook className="w-6 h-6 text-orange-500" />
              </a>
              <a
                href="https://www.instagram.com/shreetesh_h/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-orange-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20 hover:bg-orange-600/10"
              >
                <Instagram className="w-6 h-6 text-orange-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/shreetesh-sharma-79790219a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-orange-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20 hover:bg-orange-600/10"
              >
                <Linkedin className="w-6 h-6 text-orange-500" />
              </a>
              <a
                href="https://github.com/Shreetesh05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-orange-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20 hover:bg-orange-600/10"
              >
                <Github className="w-6 h-6 text-orange-500" />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 border-4 border-orange-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border-4 border-amber-400/30 rounded-full animate-spin-slow-reverse"></div>
                <img
                  src="/images/mero.jpeg"
                  alt="Shreetesh Sharma"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl"
                />
              </div>
              
              {/* Floating elements */}
              {/* <div className="absolute -top-4 -right-4 p-4 bg-gray-800/80 backdrop-blur-md rounded-xl border border-orange-500/30 shadow-lg animate-float">
                <div className="text-orange-400 font-bold">React</div>
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 bg-gray-800/80 backdrop-blur-md rounded-xl border border-amber-400/30 shadow-lg animate-float-delayed">
                <div className="text-amber-400 font-bold">TypeScript</div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-28" id="skills">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              My Expertise
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 backdrop-blur-md rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-orange-500 mb-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                    <ChevronRight size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{role}</h3>
                <p className="text-gray-400">
                  {role === "Frontend Developer" && "Creating responsive and interactive web experiences with modern frameworks."}
                  {role === "Technical Analyst" && "Analyzing systems and processes to optimize performance and efficiency."}
                  {role === "Ticketing Officer" && "Managing reservations and providing excellent customer service in travel operations."}
                  {role === "Tour Operator" && "Designing and coordinating travel packages for memorable customer experiences."}
                </p>
              </div>
            ))}
          </div>
        </div>
        <About/>
        <PortfolioPage/>
        <Contact/>
      </div>

      {/* Custom styles and animations */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default PortfolioLanding;