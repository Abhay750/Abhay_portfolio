import React from 'react'
import { Code, Palette, Zap } from 'lucide-react';
import Box from './Box'
import SkillBox from './SkillBox';

const About = () => {
  return (
    <div id='about' className=" relative about w-screen h-screen ">
        <div className='w-full h-1/3'> {/* why p or m not work */}
      <p className=" text-green-500/55 text-center"> //about Me</p>
        <div className="about__ title w-full h-1/2 flex items-end justify-center">
            <h1 className="text-7xl text-center font-bold text-gray-300">Crafting Digital <span className="text-green-500"> Experiences </span></h1>
        </div>
        <div className='relative '>
            <p className="text-gray-300 text-center absolute top-7 left-1/4 text-lg">
                Turning complexity into simple, elegant, and high-performing products. <br />
                I design and develop experiences that balance engineering precision with thoughtful user interaction. <br />
                Always building, optimizing, and pushing for better. <br />
            </p>
        </div>
        </div>
        <div className="boxs w-full h-[50vh] flex items-center justify-center gap-10">
            <Box icon={<Code />} tital="Clean Code" discription="Writing maintainable, scalable code that's a joy to work with." />
            <Box icon={<Palette />} tital="UI/UX Focus" discription="Designing interfaces that are both beautiful and intuitive." />
            <Box icon={<Zap />} tital="Performance Optimization" discription="Building lightning-fast apps optimized for the best experience." />
        </div>
        <div className="overflow-hidden w-full">
            <div className="flex gap-10 animate-scroll">
                <SkillBox name="React" />
                <SkillBox name="Tailwind CSS" />
                <SkillBox name="JavaScript" />
                <SkillBox name="TypeScript" />
                <SkillBox name="Node.js" />
                <SkillBox name="Git" />
                <SkillBox name="SaaS" />
                <SkillBox name="THREE JS" />
                <SkillBox name="Figma" />
                <SkillBox name="Spline" />
                <SkillBox name="React" />
                <SkillBox name="Tailwind CSS" />
                <SkillBox name="JavaScript" />
                <SkillBox name="TypeScript" />
                <SkillBox name="Node.js" />
                <SkillBox name="Git" />
                <SkillBox name="SaaS" />
                <SkillBox name="THREE JS" />
                <SkillBox name="Figma" />
                <SkillBox name="Spline" />

            </div>
        </div>
    </div>
  )
}

export default About