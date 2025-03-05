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
    <section id="about" className="bg-black dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-700 dark:text-white mb-8">
          About Me
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/dunga.jpg"
            alt="Profile"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
        {/* Details Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skills */}
          <div className="bg-orange-600 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
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
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
              <li>Bachelor of Computer Application - Tribhuvan University</li>
              <li>Completed High School - Chanakya College Of Management</li>
            </ul>
          </div>
          {/* Skills Progress Bars */}
          <div className="bg-orange-600 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
            <div className="w-full">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm md:text-lg font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm md:text-lg font-medium">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 md:h-4">
                    <div
                      className="bg-amber-500 h-3 md:h-4 rounded-full"
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
