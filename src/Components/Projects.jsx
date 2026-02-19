import React from 'react'
import Cards from './Cards'
import dashbord from "../images/dashbord.jpeg";
import UI from "../images/UI.jpeg";
import shop from "../images/shop.jpeg";


const Projects = () => {
  return (
    <div id='projects' className='projects w-full min-h-screen py-16'>
      <p className='text-green-500 text-center mt-4 mb-4'>//projects</p>
      <div className='w-full flex items-end justify-center px-4 mb-10'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-gray-300'>
          My Recent <span className='text-green-500'>Works</span>
        </h1>
      </div>
      <div className='w-full flex items-center justify-center px-4'>
        <div className="projects_cards w-full max-w-6xl flex items-center justify-center gap-8 flex-wrap">
          <Cards img={dashbord} title={"Analytics Dashboard"} description={"A responsive analytics dashboard built with React, TypeScript and Tailwind."} link={"https://abhay750.github.io/BloomMind/"} />
          <Cards img={UI} title={"Portfolio Website"} description={"A modern portfolio website showcasing projects and skills with React and Tailwind."} link={"https://abhay750.github.io/my-portfolio/#main_home"} />
          <Cards img={shop} title={"E-commerce Platform"} description={"A full-stack e-commerce solution with React and Node.js."} link={"https://abhay750.github.io/Dry-Fruits/"} />
        </div>
      </div>
    </div>

  )
}

export default Projects