import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='Navbar fixed top-0 left-0 w-full h-18 z-50'>
        <div className="nav w-full h-18 bg-gray-800/20 backdrop-blur-md text-white flex items-center justify-between px-6 md:px-12">
            <div className="logo text-2xl font-bold flex items-center gap-2">
                <h1 className='cursor-pointer'> <span className='text-blue-400'>&lt;</span> ABHAY <span className='text-blue-400'> /&gt;</span> </h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
                <a href="#connect" className="bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-white transition-all duration-300">Let's connect</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-18 left-0 w-full bg-gray-900/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center gap-8 py-10 transition-all duration-300 md:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
            <a href="#" className="text-xl text-gray-300" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-xl text-gray-300" onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" className="text-xl text-gray-300" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#connect" className="bg-green-500 text-black px-8 py-3 rounded-md font-bold" onClick={() => setIsOpen(false)}>Let's connect</a>
        </div>
    </div>
  )
}

export default Navbar