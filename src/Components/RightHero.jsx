import React from 'react'
import heroimg from "../images/heroimg.png";

const RightHero = () => {
  return (
    <div className='righthero w-full flex items-center justify-center px-4 py-8 md:py-0'>
      <div className="img w-[80vw] max-w-[400px] md:max-w-[500px] aspect-[13/5] shadow-[0_0_25px_rgba(34,197,94,0.3)] flex items-center justify-center rounded-2xl overflow-hidden">
        <img src={heroimg} alt="Abhay" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default RightHero