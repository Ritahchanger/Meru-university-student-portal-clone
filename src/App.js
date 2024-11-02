import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/studentDashboard/Home/Home";

import GraduationLink from "./pages/studentDashboard/GraduationLinks/GraduationLink";

import sideBarLinks from "./NavigationLinks/SidebarLinks";

import Receipts from "./pages/studentDashboard/Recepts/Receipts";

import Login from "./pages/Authentication/Login/Login";

import CourseRegistration from "./pages/studentDashboard/CourseRegistration/CourseRegistration";

import AcademicRequisition from "./pages/studentDashboard/AcademicRequision/AcademicRequision";

import LecturesEvaluation from "./pages/studentDashboard/LecturesEvaluation/LecturesEvaluation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />

        <Route path={sideBarLinks.home} element={<Home />} />

        <Route
          path={sideBarLinks.graduationLinks}
          element={<GraduationLink />}
        />

        <Route
          path={sideBarLinks.graduationLinks}
          element={<GraduationLink />}
        />

        <Route path={sideBarLinks.receipts} element={<Receipts />} />

        <Route
          path={sideBarLinks.unitsRegistration}
          element={<CourseRegistration />}
        />
        <Route
          path={sideBarLinks.academicRequisions}
          element={<AcademicRequisition />}
        />
        <Route
          path={sideBarLinks.lecturesEvaluation}
          element={<LecturesEvaluation/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
