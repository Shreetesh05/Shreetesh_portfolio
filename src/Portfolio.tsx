const PortfolioPage = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects and skills.",
      image: "/images/portfolio.png",
      href: "https://shreetesh-portfolio.vercel.app",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce website with a modern design.",
      image: "/images/ecom.PNG",
    },
    {
      title: "Sarathi Consultant Website",
      description:
        "A fully responsive Consultant website with a modern design.",
      image: "/images/sarathi.png",
      href: "https://sarathi-six.vercel.app",
    },
    {
      title: "Mount Royal Investment Website",
      description:
        "A fully responsive Consultant website with a modern design.",
      image: "/images/mt-royal.png",
      href: "https://mount-royal.vercel.app",
    },
    {
      title: "Mazzako Trip",
      description:
        "Flight ticketing booking application .",
      image: "/images/mazza.PNG",
      href: "https://dev.mazzakotrip.com/",
    },
    {
      title: "Link Asia  Tours",
      description:
        "Tour Booking Software.",
      image: "/images/linkasia.png",
      href: "https://linkasia.vercel.app/",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500 p-5">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">My Portfolio</h1>
      </header>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-md text-center flex flex-col items-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 text-sm md:text-base">
              {project.description}
            </p>

            {/* Conditional Button for External Links */}
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                View Project
              </a>
            ) : (
              <button
                className="mt-4 bg-orange-500 text-black px-4 py-2 rounded opacity-50 cursor-not-allowed"
                disabled
              >
                No Link Available
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
