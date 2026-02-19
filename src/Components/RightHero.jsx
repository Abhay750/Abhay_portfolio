import React from 'react'
import heroimg from "../images/heroimg.png";

const RightHero = () => {
  return (
    <div className='righthero w-full h-full flex items-center justify-center'>
        <div className="img w-130 h-50 shadow-[0_0_25px_rgba(34,197,94,0.3)] flex items-center justify-center rounded-2xl  overflow-hidden">
            <img src={heroimg} alt="" className='w-full h-full object-cover' /> {/* overflow-hidden ? */}
        </div>
    </div>
  )
}

export default RightHero