import React from 'react'
// if i take both className and name and pass in this function , why this not work ?
const SkillBox = ({name}) => {
  return (
    <div className="bg-gray-800/60 border border-white/10 rounded-md p-4 min-w-[150px] h-13 flex items-center justify-center">
      <h1 className="text-white font-semibold">{name}</h1>
    </div>
  )
}

export default SkillBox