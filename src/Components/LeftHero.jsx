import React from 'react'

const LeftHero = () => {
  return (
    <div className="w-full flex flex-col gap-5 text-start px-6 md:pl-14 md:pr-4 py-8 md:py-0">
      <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight'>
        Hi, I'm <span className='text-green-500'>Abhay </span>
      </h1>
      <p className='text-base md:text-lg text-gray-300 leading-relaxed max-w-lg'>
        A passionate web developer specializing in creating stunning and functional websites. With a keen eye for design and I bring your digital visions to life. Let's collaborate to build something amazing together!
      </p>
      <div className="buttons flex flex-wrap gap-4 mt-2">
        <a href="/projects" className="px-6 py-3 flex items-center text-base md:text-xl justify-center text-black bg-green-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] rounded-md">View Projects</a>
        <a href="/about" className="px-6 py-3 flex items-center text-base md:text-xl justify-center text-white bg-transparent border border-white hover:bg-green-500/5 transition-all duration-300 hover:border-green-500/50 rounded-md">About Me</a>
      </div>
    </div>
  )
}

export default LeftHero