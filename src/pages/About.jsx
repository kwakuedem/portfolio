import React from 'react'
import '../index.css'
import NavigationBar from '../components/NavigationBar'
import { Link} from 'react-router-dom'

function About() {
  return (
    <div className='container-fluid'>
      <NavigationBar/>
      <div className='container-fluid lg:w-[80%]'>
        <h2 className='p-2 text-yellow-600 font-extrabold text-xl shadow-sm shadow-blue-100'>About Me</h2>
      </div>

      <div className=' container-fluid lg:w-[80%] pt-2'>
        <p className=' p-2 container-fluid'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corrupti, 
          et distinctio veniam eaque magnam vero. Sapiente id debitis quibusdam laboriosam 
          voluptas labore eveniet molestias, atque aperiam accusamus rem odit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam recusandae libero 
          itaque accusamus sequi rem vitae minima, atque similique ipsum modi et facilis voluptatem, 
          repellendus saepe odio cumque incidunt! Ipsam?   <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corrupti, 
          et distinctio veniam eaque magnam vero. Sapiente id debitis quibusdam laboriosam 
          voluptas labore eveniet molestias, atque aperiam accusamus rem odit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam recusandae libero 
          itaque accusamus sequi rem vitae minima, atque similique ipsum modi et facilis voluptatem, 
          repellendus saepe odio cumque incidunt! Ipsam?    <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corrupti, 
          et distinctio veniam eaque magnam vero. Sapiente id debitis quibusdam laboriosam 
          voluptas labore eveniet molestias, atque aperiam accusamus rem odit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam recusandae libero 
          itaque accusamus sequi rem vitae minima, atque similique ipsum modi et facilis voluptatem, 
          repellendus saepe odio cumque incidunt! Ipsam?   <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corrupti, 
          et distinctio veniam eaque magnam vero. Sapiente id debitis quibusdam laboriosam 
          voluptas labore eveniet molestias, atque aperiam accusamus rem odit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam recusandae libero 
          itaque accusamus sequi rem vitae minima, atque similique ipsum modi et facilis voluptatem, 
          repellendus saepe odio cumque incidunt! Ipsam?    <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corrupti, 
          et distinctio veniam eaque magnam vero. Sapiente id debitis quibusdam laboriosam 
          voluptas labore eveniet molestias, atque aperiam accusamus rem odit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam recusandae libero 
          itaque accusamus sequi rem vitae minima, atque similique ipsum modi et facilis voluptatem, 
          repellendus saepe odio cumque incidunt! Ipsam?    <br />
        </p>
      </div>

      <div className=' container text-center pt-8'>
        <Link to={'/experience'} className=' shadow-md rounded-sm shadow-gray-300 p-3'>Check On my Experiences</Link>
      </div>
      </div>
  )
}

export default About