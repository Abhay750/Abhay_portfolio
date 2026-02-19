import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full text-white flex flex-col items-center justify-around mt-20">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-40" />

      <div className="max-w-8xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">
              Abhay<span className="text-green-500">...</span>
            </h1>
            <p className="text-gray-400 mt-2">
              Building modern, scalable and user-focused digital experiences.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Abhay750"
              className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-kumar-a6651337a/"
              className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:abhaykumarvaidh@gmail.com"
              className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Abhay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
