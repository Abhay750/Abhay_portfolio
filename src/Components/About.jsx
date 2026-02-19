import React from 'react'
import { Code, Palette, Zap } from 'lucide-react';
import Box from './Box'
import SkillBox from './SkillBox';

const About = () => {
    return (
        <div id='about' className="relative about w-full min-h-screen py-16 md:py-20">
            <div className='w-full px-4 text-center'>
                <p className="text-green-500/55 text-center mb-4">//about Me</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-gray-300 leading-tight">
                    Crafting Digital <span className="text-green-500">Experiences</span>
                </h1>
                <p className="text-gray-300 text-center text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
                    Turning complexity into simple, elegant, and high-performing products.
                    I design and develop experiences that balance engineering precision with thoughtful user interaction.
                    Always building, optimizing, and pushing for better.
                </p>
            </div>
            <div className="boxs w-full flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 px-4">
                <Box icon={<Code />} tital="Clean Code" discription="Writing maintainable, scalable code that's a joy to work with." />
                <Box icon={<Palette />} tital="UI/UX Focus" discription="Designing interfaces that are both beautiful and intuitive." />
                <Box icon={<Zap />} tital="Performance Optimization" discription="Building lightning-fast apps optimized for the best experience." />
            </div>
            <div className="overflow-hidden w-full mt-12">
                <div className="flex gap-6 md:gap-10 animate-scroll">
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