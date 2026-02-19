import React from 'react'

const LeftHero = () => {
  return (
    <div>
        <div className="relative innerhero w-full h-screen flex flex-col gap-5 text-start">
            <h1 className='absolute top-75 left-10 text-8xl font-bold uppercase ml-7 w-full'>Hi, I'm <span className='text-green-500'>Abhay </span> </h1>
            <p className=' absolute top-100 left-10 text-lg text-gray-300 ml-7 w-full'>A passionate web developer specializing in creating stunning and functional <br /> websites. With a keen eye for design and I bring your digital visions to <br /> life. Let's collaborate to build something amazing together!</p>
            <div className="buttons flex justify-center gap-15 absolute top-130 left-10">
            
            <a href="/projects" className="w-[11vw] h-11 flex items-center text-xl justify-center text-black bg-green-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] p-2 rounded-md ml-7">View Projects</a>
            <a href="/about" className="w-[11vw] h-11 flex items-center text-xl justify-center text-white bg-transparent border border-white hover:bg-green-500/5 transition-all duration-300 hover:border-green-500/50 p-2 rounded-md  ml-7">About Me </a>
            </div>
        </div>
    </div>
  )
}

export default LeftHero