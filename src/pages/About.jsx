import React from 'react'
import '../index.css'
import NavigationBar from '../components/NavigationBar'
import { Link} from 'react-router-dom'
import Edem from '../images/Edem.jpg'
import Footer from '../components/Footer'

function About() {
  return (
    <div className='container-fluid'>
      <NavigationBar/>
      <div className='container-fluid lg:w-[80%]'>
        <h2 className='p-2 text-yellow-600 font-extrabold text-xl shadow-sm shadow-blue-100'>About Me</h2>
      </div>

      <div className=' container-fluid lg:w-[80%] mx-auto flex items-center justify-center mt-6'>
            <img src={Edem} className=' rounded-full p-2 w-[150px] h-[150px] lg:w-[250px] lg:h-[270px]'/>
        </div>

      <div className=' container-fluid lg:w-[80%] pt-2'>

        <p className=' p-2 container-fluid '>
          <br/>I am a highly skilled IT professional with experience in many areas of IT in
                  both corporate and client-facing environments.My technical expertise encompasses a wide range
                  of areas, including <span className=' font-bold text-blue-400'>Hardware and Software installations,
                  Network Configuration and Maintenance,
                 Programming ( Java, C++, Python, JavaScript, Kotlin, R,PHP )
                  System upgrades,
                    Computer SecurityUser Support</span> 
                    <br />Furthermore, I possess extensive knowledge
                  of <span className=' font-bold text-yellow-600'>Windows and Linux operating systems</span>, as well as proficiency in various software
                  applications.<br />
          <br />
              I got admitted into the tertiary in the year 2019 to study Information Communication & 
              Technology (ICT) @ HO TECHNICAL UNIVERCITY GHANA. I undertake three years study and attained 
              Higher National Diploma (HND). I graduated with a great GPA of 4.01 out of 5.0 . It have always been 
              my passion to become a great IT proffessional so that I can also help in contributing to the development
              of the IT industry and the world as a whole.
          <br /><br />
              With the vast knowledge in the area of IT, the following are things I can do :
          <br />
          <li className='mt-2 py-1 font-mono text'>Web Development</li> 
          <li className=' py-1 font-mono text'>Mobile App Development</li>
          <li className=' py-1 font-mono text'>Network Troubleshooting and Installation</li> 
          <li className=' py-1 font-mono text'>Desktop App Development</li>
          <li className=' py-1 font-mono text'>Server Administration (Linux and Windows)</li>
          <li className=' py-1 font-mono text'>Hardware and Software installation and troubleshooting</li>
          <li className=' py-1 font-mono text'>Computer Security</li>
          <li className=' py-1 font-mono text'>Graphic Design</li>
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

      <div className=' container text-center pt-10'>
        <Link to={'/experience'} className=' shadow-md rounded-sm shadow-gray-300 p-3 text-yellow-600'>Check On my Experiences</Link>
      </div>

      <Footer/>
      </div>
  )
}

export default About