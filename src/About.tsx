import React from "react";
const skills = [
  { name: "React", percentage: 85 },
  { name: "JavaScript", percentage: 90 },
  { name: "HTML & CSS", percentage: 95 },
  { name: "Node.js", percentage: 80 },
  { name: "Python", percentage: 75 },
];
const About: React.FC = () => {
  return (
    <section id="about" className=" bg-black   dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-5xl text-center font-bold  text-orange-700 p-4 dark:text-white">
          About Me
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center  justify-center min-h-screen bg-black p-5">
        {/* Image Section */}
        <div className="flex pr-2 justify-center">
          <img
            src="/images/mero.jpeg"
            alt="Profile"
            className="w-[700px] h-[700px] rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/3 grid  md:grid-cols-2 gap-2 ">
          {/* Skills */}
          <div className="bg-orange-600 p-6 h-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Technical Analyst: Technical, Fundamentals, Candlestick</li>
              <li>Web Development: React, HTML, CSS</li>
              <li>Robotics: Arduino, Sensor Integration</li>
              <li>Problem-Solving and Team Collaboration</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-orange-600 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            <p>
              <strong>Robotics Intern</strong> - NIC Robotics Club
            </p>
            <p className="text-black text-sm mb-4">
              Developed autonomous robots for inter-college competitions.
            </p>
            <p>
              <strong>Web Development Intern</strong> - Aava Tech
            </p>
            <p className="text-black text-sm">
              Built responsive websites and optimized user experiences.
            </p>
          </div>

          {/* Education */}
          <div className="bg-orange-600 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bachelor of Computer Application - Tribhuvan University</li>
              <li>Completed High School - Chanakya College Of Management</li>
            </ul>
          </div>
          <div className="flex  bg-orange-600 p-6 rounded-lg shadow-md">
            <div className="w-full max-w-xl mb-10">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex  justify-between  mb-1">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-lg font-medium">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-4">
                    <div
                      className="bg-orange-500 h-4 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
