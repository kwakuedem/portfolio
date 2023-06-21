import React from 'react'
import '../index.css'

function SideNav() {
  return (
    <div className=' bg-gray-400 flex w-full opacity-80 h-full absolute top-0 left-0'>
      <div className='bg-white w-[50%]'>
        <ul  className='top-0 h-full left-0 p-[50px] block'>
           <a href=""> <li className=' font-bold py-2'>Home</li></a>
           <a href=""> <li className=' font-bold py-2'>About</li></a>
           <a href=""> <li className=' font-bold py-2'>Experience</li></a>
           <a href=""> <li className=' font-bold py-2'>Portfolio</li></a>
           <a href=""> <li className=' font-bold py-2'>Contact</li></a>
        </ul>
        <span className=' absolute right-3'>X</span>
      </div>
        
       
    </div>
  )
}

export default SideNav