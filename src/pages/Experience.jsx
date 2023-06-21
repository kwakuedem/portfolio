import React from 'react'
import '../index.css'
import { Link,} from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'

function Experience() {
  return (
    <div>
      <NavigationBar/>
      <div className='container-fluid lg:w-[80%]'>
        <h2 className='p-2 text-yellow-600 font-extrabold text-xl shadow-sm shadow-blue-100'>Area of Experience</h2>
      </div>

      <div className=' container text-center pt-8'>
        <Link to={'/portfolio'} className=' shadow-md rounded-sm shadow-gray-300 p-3'>Portfolio</Link>
      </div>
    </div>
  )
}

export default Experience