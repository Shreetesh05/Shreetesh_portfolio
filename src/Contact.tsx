import { Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email, subject, message } = formData;
    const recipientEmail = "shreetesh032@"; // Replace with your email

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nProblem: ${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full">
      <h1 className="text-orange-700 bg-black text-center pt-8 font-bold text-5xl">
        Contact Me
      </h1>
      <div className="bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-orange-600 py-10 px-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-black mb-8">
              Send a Message
            </h2>
            <form className="space-y-6" onSubmit={handleSendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-500 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h1 className="text-orange-700 font-bold text-3xl sm:text-5xl pb-6">
              Know me more
            </h1>
            <p className="text-orange-700 leading-relaxed">
              I am a passionate frontend developer and technical analyst with a
              strong eye for detail and a deep understanding of both design and
              data-driven decision-making. With expertise in modern web
              technologies like React, JavaScript, HTML, and CSS, I craft
              responsive, user-friendly, and visually appealing interfaces. My
              work ensures seamless user experiences, optimizing websites for
              performance and engagement.
            </p>
            <h2 className="text-2xl font-bold text-orange-700 pt-6">
              Get in Touch
            </h2>
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-orange-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-orange-700">Call Me</h3>
                    <p className="text-orange-700">
                      +977-9862410114, 9709066789
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-orange-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-orange-700">Email</h3>
                    <p className="text-orange-700">shreetesh032@gmail.com</p>
                    <p className="text-sm text-orange-700">
                      I'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
