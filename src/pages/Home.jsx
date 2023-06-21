import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import Edem from '../images/Edem.jpg'
import NavigationBar from '../components/NavigationBar'

function Home() {
  return (
    <div className='container-fluid'>
      <NavigationBar/>
        <div className='container-fluid w-full rounded-sm  lg:bg-gray-50  lg:rounded-lg lg:p-4'>
          
          <div className='container-fluid lg:flex lg:items-center lg:p-4'>
            <div className=' w-[200px]  h-[230px] lg:float-left  lg:w-2/3 lg:h-full m-auto rounded-full lg:rounded-none shadow-sm shadow-blue-200 p-4 lg:shadow-none'>
                <img src={Edem} alt="" className=' rounded-full p-2 '/>
            </div>

            <div className=' lg:float-right'>
              <p className=' p-4'>
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Omnis dignissimos placeat 
                deserunt odio libero laborum nemo officia. 
                Nam perspiciatis neque architecto suscipit 
                error modi minus, debitis sequi, animi ex illum.
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Omnis dignissimos placeat 
                deserunt odio libero laborum nemo officia. 
                Nam perspiciatis neque architecto suscipit 
                error modi minus, debitis sequi, animi ex illum.
              </p>

              <div className=' w-full text-center mt-10'>
              <Link to={'/about'}><button className=' py-3 px-2 ring-2 rounded-md ring-blue-600 bg-yellow-500 text-sm text-blue-600 font-bold hover:ring-yellow-500 hover:bg-blue-600 hover:text-yellow-500'>READ MORE ....</button></Link>
              </div>
            </div>
            
          </div>
            
            
        </div>
    </div>
  )
}

export default Home