import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import React from "react";

const Contect = () => {
  return (
    // ✅ MAIN WRAPPER — full screen, no overflow issues
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 text-white overflow-hidden">
      
      {/* ✅ INNER CONTAINER */}
      <div
        id="connect"
        className="relative w-full max-w-6xl min-h-[80vh] flex items-center justify-center"
      >
        {/* ✅ background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/20 blur-[150px] rounded-full" />
        </div>

        {/* ✅ CARD */}
        <div className="relative w-full bg-gray-800/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl">
          
          <p className="text-green-400 font-bold">Get In Touch</p>

          <h1 className="text-3xl font-bold mt-2 mb-4">
            Let's work <span className="text-green-400">Together</span>
          </h1>

          <p className="text-gray-300 mb-8 max-w-2xl">
            Have a project in mind? Drop me a message and let's create something amazing.
          </p>

          {/* ✅ CONTENT GRID */}
          <div className="flex flex-col md:flex-row gap-10">
            
            {/* LEFT — FORM */}
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <label>Name</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-green-500/50"
              />

              <label>Email</label>
              <input
                type="email"
                className="w-full bg-gray-700 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-green-500/50"
              />

              <label>Message</label>
              <textarea
                className="w-full bg-gray-700 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-green-500/50"
                rows="4"
              />

              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg mt-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]">
                Send Message
              </button>
            </div>

            {/* RIGHT — INFO */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Contact Information</h2>

              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-400" />
                <span>abhaykumarvaidh@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91 9664199***</span>
              </div>

              <hr className="border-white/10 my-2" />

              <h2 className="text-2xl font-bold">Follow Me</h2>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/abhay-kumar-a6651337a/"
                  className="p-2 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="p-2 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/Abhay750"
                  className="p-2 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
