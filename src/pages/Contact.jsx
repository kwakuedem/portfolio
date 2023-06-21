import React from 'react'
import '../index.css'
import { Link} from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'

function Contact() {
  return (
    <div className='container-fluid'>
      <NavigationBar/>

      <div className='container-fluid lg:w-[80%]'>
        <h2 className='p-2 text-yellow-600 font-extrabold text-xl shadow-sm shadow-blue-100'>Contact Me</h2>
      </div>

      <div className=' container text-center pt-8'>
        <Link to={'/blogs'} className=' shadow-md rounded-sm shadow-gray-300 p-3'>Blogs</Link>
      </div>

    </div>
  )
}

export default Contact