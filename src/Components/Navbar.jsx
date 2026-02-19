import React from 'react'


const Navbar = () => {
  return (
    <div className='Navbar fixed top-0 left-0 w-screen h-18 z-50'>
        <div className="nav w-screen h-18 bg-gray-800/20 text-white flex items-center justify-between px-4">
            <div className="logo text-2xl font-bold flex w-[20vw] h-full items-center justify-center gap-7">
                <h1 className='cursor-pointer'> <span className='text-blue-400'>&lt;</span> ABHAY <span className='text-blue-400'> /&gt;</span> </h1>
            </div>
            <div className="links flex space-x-4 w-[35vw] h-full items-center justify-center gap-7">
                <a href="#" className="w-[5vw] text-center text-gray-400 hover:text-white hover:border-2 p-2 rounded-md">Home</a>
                <a href="#about" className="w-[5vw] text-center text-gray-400 hover:text-white hover:border-2 p-2 rounded-md">About</a>
                <a href="#projects" className="w-[5vw] text-center text-gray-400 hover:text-white hover:border-2 p-2 rounded-md">Projects</a>
                <a href="#connect" className="w-[10vw] h-8 flex items-center justify-center text-black transition-all duration-300 bg-green-500 hover:text-black p-2 rounded-md hover:bg-white">Let's connect</a>
            </div>
        </div>

    </div>
  )
}

export default Navbar