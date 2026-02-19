import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full text-white flex flex-col items-center justify-around mt-20">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">
              Abhay<span className="text-green-500">...</span>
            </h1>
            <p className="text-gray-400 mt-2 max-w-sm">
              Building modern, scalable and user-focused digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Abhay750"
              className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition group"
            >
              <Github size={20} className="group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-kumar-a6651337a/"
              className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition group"
            >
              <Linkedin size={20} className="group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition group"
            >
              <Twitter size={20} className="group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="mailto:abhaykumarvaidh@gmail.com"
              className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition group"
            >
              <Mail size={20} className="group-hover:text-green-400 transition-colors" />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-12 pt-8 border-t border-white/5">
          © {new Date().getFullYear()} Abhay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
