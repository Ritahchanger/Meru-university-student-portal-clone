import "./StudentDashSidebar.css";
import { Link } from "react-router-dom";
import sidebarData from "../../../../Data/SidebarData";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { hideSidebar } from "../../../../store/features/SidebarSlice";

const StudentDashSidebar = () => {
  const dispatch = useDispatch();
  const isSidebarShown = useSelector((state) => state.sidebar.isSidebarShown);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {

    if (screenWidth <= 820) {
      dispatch(hideSidebar());
    }

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              {item.sidebarPages.map((insideItem, customID) => (
                <li key={customID} onClick={handleHideSidebar}>
                  <Link to={insideItem.path}>
                    <span>{insideItem.icon}</span>
                    {insideItem.subTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashSidebar;
