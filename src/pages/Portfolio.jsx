import React from 'react'
import { Link} from 'react-router-dom'
import Edem from '../images/Edem.jpg'
import NavigationBar from '../components/NavigationBar'

function Portfolio() {
  // const portfolio=[
  //     {
  //       id:1,
  //       image:Edem,
  //       text:"I got admitted into the tertiary in the year 2019 to study Information Communication & Technology"+
  //       "(ICT) @ HO TECHNICAL UNIVERCITY GHANA. I undertake three years study and attained"+ 
  //       "Higher National Diploma HND. I graduated with a great GPA of 4.01 out of 5.0 . It have always been"
  //     },
  //     {
  //       id:2,
  //       image:Edem,
  //       text:"I got admitted into the tertiary in the year 2019 to study Information Communication & Technology"+
  //       "(ICT) @ HO TECHNICAL UNIVERCITY GHANA. I undertake three years study and attained"+ 
  //       "Higher National Diploma HND. I graduated with a great GPA of 4.01 out of 5.0 . It have always been"
  //     },
  //     {
  //       id:3,
  //       image:Edem,
  //       text:"I got admitted into the tertiary in the year 2019 to study Information Communication & Technology"+
  //       "(ICT) @ HO TECHNICAL UNIVERCITY GHANA. I undertake three years study and attained"+ 
  //       "Higher National Diploma HND. I graduated with a great GPA of 4.01 out of 5.0 . It have always been"
  //     },
  //     {
  //       id:4,
  //       image:Edem,
  //       text:"I got admitted into the tertiary in the year 2019 to study Information Communication & Technology"+
  //       "(ICT) @ HO TECHNICAL UNIVERCITY GHANA. I undertake three years study and attained"+ 
  //       "Higher National Diploma HND. I graduated with a great GPA of 4.01 out of 5.0 . It have always been"
  //     }
  // ]
  return (
    <div className='container-fluid'>
      <NavigationBar/>

      <div className='container-fluid lg:w-[80%]'>
        <h2 className='p-2 text-yellow-600 font-extrabold text-xl shadow-sm shadow-blue-100'>Portfolio</h2>
      </div>
      

      <div className=' container text-center pt-8'>
        <Link to={'/contact'} className=' shadow-md rounded-sm shadow-gray-300 p-3'>Contact</Link>
      </div>

    </div>
  )
}

export default Portfolio