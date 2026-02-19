import React from 'react'
// if i take both className and name and pass in this function , why this not work ?
const SkillBox = ({ name }) => {
  return (
    <div className="bg-gray-800/60 border border-white/10 rounded-md p-3 md:p-4 min-w-[120px] md:min-w-[150px] h-12 md:h-14 flex items-center justify-center transition-colors hover:border-green-500/30">
      <h1 className="text-white font-semibold text-sm md:text-base">{name}</h1>
    </div>
  )
}

export default SkillBox