const PortfolioPage = () => {
  const projects = [
    {
      title: "Robotics Project",
      description:
        "An autonomous robot built for inter-college robotics competitions.",
      image: "/path-to-robotics-image.jpg",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects and skills.",
      image: "/path-to-portfolio-image.jpg",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce website with a modern design.",
      image: "/path-to-ecommerce-image.jpg",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce website with a modern design.",
      image: "/path-to-ecommerce-image.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500 p-5">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <button className="mt-4 bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600">
              View Project
            </button>
          </div>
        ))}
      </div>
          </div>
  );
};

export default PortfolioPage;
