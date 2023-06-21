import React from 'react'
import NavigationBar from '../components/NavigationBar'

function Blog() {
  return (
    <div>
      <NavigationBar/>
      <div className='container-fluid lg:w-[80%]'>
        <h2 className='p-2 text-yellow-600 font-extrabold text-xl shadow-sm shadow-blue-100'>Blogs</h2>
      </div>

      <div className=' container text-center pt-8'>
       <p className='text-xl font-extrabold font-mono text-blue-950'>Coming Soon! ...</p>
      </div>
    </div>
  )
}

export default Blog