import React from 'react'
import Cards from './Cards'
import dashbord from "../images/dashbord.jpeg";
import UI from "../images/UI.jpeg";
import shop from "../images/shop.jpeg";


const Projects = () => {
  return (
    <div id='projects' className='projects w-screen h-screen'>
        <p className='text-green-500 text-center mt-10'>//projects</p>
        <div className='w-full h-[15vh] flex items-end justify-center'>
        <h1 className='text-7xl text-center font-bold text-gray-300'>My Recent <span className='text-green-500'> Works </span></h1>
        </div>
        <div className='w-full h-[70vh] flex items-center justify-center'>
        <div className="projects_cards w-full h-full flex items-center justify-center gap-10 flex-wrap">
            <Cards img={dashbord} title={"Analytics Dashboard"} description={"A responsive analytics dashboard built with React, TypeScript and Tailwind."} link={"https://abhay750.github.io/BloomMind/"} />
            <Cards img={UI} title={"Portfolio Website"} description={"A modern portfolio website showcasing projects and skills with React and Tailwind."} link={"https://abhay750.github.io/my-portfolio/#main_home"} />
            <Cards img={shop} title={"E-commerce Platform"} description={"A full-stack e-commerce solution with React and Node.js."} link={"https://abhay750.github.io/Dry-Fruits/"} />

        </div>
        </div>
    </div>

  )
}

export default Projects