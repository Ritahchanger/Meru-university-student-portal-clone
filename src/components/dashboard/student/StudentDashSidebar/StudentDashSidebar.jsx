import "./StudentDashSidebar.css";
import { Link } from "react-router-dom";
import sidebarData from "../../../../Data/SidebarData";
const StudentDashSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {sidebarData.map((item, index) => (
          <div className="sidebar-card">
            <p className="card-title">{item.title}</p>
            <ul>
              {item.sidebarPages.map((insideItem, inde) => (
                <li>
                  <Link to="#">
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
