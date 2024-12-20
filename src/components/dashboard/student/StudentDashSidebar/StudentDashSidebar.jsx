import "./StudentDashSidebar.css";
import sidebarData from "../../../../Data/SidebarData";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { hideSidebar } from "../../../../store/features/SidebarSlice";
import { Link, useLocation } from "react-router-dom";

const StudentDashSidebar = () => {
  const dispatch = useDispatch();
  const isSidebarShown = useSelector((state) => state.sidebar.isSidebarShown);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation(); 

  useEffect(() => {
    
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      
      if (window.innerWidth <= 820) {
        dispatch(hideSidebar());
      }
    };

    
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]); 

  const handleHideSidebar = () => {
   
    if (screenWidth <= 820) {
      dispatch(hideSidebar());
    }
  };

  return (
    <div className={`sidebar ${isSidebarShown ? "active" : ""}`}>
      <div className="sidebar-content">
        {sidebarData.map((item, index) => (
          <div key={index} className="sidebar-card">
            <p className="card-title">{item.title}</p>
            <ul>
              {item.sidebarPages.map((insideItem, customID) => {
                
                const isActive = location.pathname === insideItem.path;

                return (
                  <li key={customID} onClick={handleHideSidebar}>
                    <Link
                      to={insideItem.path}
                      className={isActive ? "active" : ""}
                    >
                      <span>{insideItem.icon}</span>
                      {insideItem.subTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashSidebar;
