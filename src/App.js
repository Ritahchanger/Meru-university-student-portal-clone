import React from 'react'

import {BrowserRouter,Routes,Route } from "react-router-dom"

import Home from './pages/studentDashboard/Home/Home'

import GraduationLink from './pages/studentDashboard/GraduationLinks/GraduationLink'

import sideBarLinks from './NavigationLinks/SidebarLinks'

const App = () => {
  return (
    <BrowserRouter>

    <Routes>

      <Route path={sideBarLinks.home} element={<Home/> } />

      <Route path={sideBarLinks.graduationLinks} element={<GraduationLink/> } />

    </Routes>

    </BrowserRouter>
  )
}

export default App