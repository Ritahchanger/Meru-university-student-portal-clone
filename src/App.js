import React from 'react'

import {BrowserRouter,Routes,Route } from "react-router-dom"

import Home from './pages/studentDashboard/Home/Home'

import GraduationLink from './pages/studentDashboard/GraduationLinks/GraduationLink'

import sideBarLinks from './NavigationLinks/SidebarLinks'

import Receipts from './pages/studentDashboard/Recepts/Receipts'

const App = () => {
  return (
    <BrowserRouter>

    <Routes>

      <Route path={sideBarLinks.home} element={<Home/> } />

      <Route path={sideBarLinks.graduationLinks} element={<GraduationLink/> } />

      <Route path={sideBarLinks.graduationLinks} element={<GraduationLink/> } />
      <Route path={sideBarLinks.receipts} element={<Receipts/> } />

    </Routes>

    </BrowserRouter>
  )
}

export default App