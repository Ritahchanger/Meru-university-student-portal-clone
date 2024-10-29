import "./StudentDashSidebar.css";
import { Link } from "react-router-dom";
import sidebarData from "../../../../Data/SidebarData";
import { useSelector } from "react-redux";
const StudentDashSidebar = () => {

  const isSidebarShown = useSelector((state) =>state.sidebar.isSidebarShown);
  
  return (
    <div className={`sidebar ${isSidebarShown ? "active" : ''}`}>
      <div className="sidebar-content">
        {sidebarData.map((item, index) => (
          <div className="sidebar-card">
            <p className="card-title">{item.title}</p>
            <ul>
              {item.sidebarPages.map((insideItem, customID) => (
                <li key={customID}>
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
