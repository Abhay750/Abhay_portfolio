import { Github, Linkedin, Mail, Phone, Twitter, CheckCircle2, Loader2 } from "lucide-react";
import React, { useState } from "react";

const Contect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate a successful submission without external requests
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    // ✅ MAIN WRAPPER — full screen, no overflow issues
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-12 text-white overflow-hidden">

      {/* ✅ INNER CONTAINER */}
      <div
        id="connect"
        className="relative w-full max-w-6xl flex items-center justify-center"
      >
        {/* ✅ background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] aspect-square bg-green-500/20 blur-[150px] rounded-full" />
        </div>

        {/* ✅ CARD */}
        <div className="relative w-full bg-gray-800/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl">

          <p className="text-green-400 font-bold">Get In Touch</p>

          <h1 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
            Let's work <span className="text-green-400">Together</span>
          </h1>

          <p className="text-gray-300 mb-8 max-w-2xl text-sm md:text-base">
            Have a project in mind? Drop me a message and let's create something amazing.
          </p>

          {/* ✅ CONTENT GRID */}
          <div className="flex flex-col md:flex-row gap-10">

            {/* LEFT — FORM */}
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
                  <h2 className="text-2xl font-bold">thankyou for your rispond</h2>
                  <p className="text-gray-400">Your message has been successfully sent to my Google Sheet.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-green-400 hover:underline mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-green-500/50 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-green-500/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-green-500/50 transition-colors"
                      rows="4"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    disabled={status === "loading"}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg mt-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>

            {/* RIGHT — INFO */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h2 className="text-xl md:text-2xl font-bold">Contact Information</h2>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="p-3 rounded-lg bg-gray-700/50 border border-white/10 text-green-400 group-hover:border-green-500/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm md:text-base">abhaykumarvaidh@gmail.com</span>
                </div>

                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="p-3 rounded-lg bg-gray-700/50 border border-white/10 text-green-400 group-hover:border-green-500/50 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm md:text-base">+91 9664199***</span>
                </div>
              </div>

              <hr className="border-white/10 my-2" />

              <h2 className="text-xl md:text-2xl font-bold">Follow Me</h2>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/abhay-kumar-a6651337a/"
                  className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/Abhay750"
                  className="p-3 rounded-lg border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition"
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
