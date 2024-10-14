import React from 'react'

import  { Link } from "react-router-dom"


import StudentDashNavbar from '../../../components/dashboard/student/StudentDashNavbar/StudentDashNavbar'

const Home = () => {
  return (
    <div className='home'>
        
        <StudentDashNavbar/>

    </div>
  )
}

export default Home