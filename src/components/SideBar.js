import { NavLink } from "react-router-dom";
import iconBike from "../assets/iconBike3.png";
import iconSwim from "../assets/iconSwim2.png";
import iconWeight from "../assets/iconWeight4.png";
import iconZen from "../assets/iconZen1.png";

function SideBar(props) {
  return (
    <>
      <nav className="sidebar">
        <div className="nav-link">
          <NavLink to="#">
            <img src={iconZen} alt="" />
          </NavLink>
          <NavLink to="#">
            <img src={iconSwim} alt="" />
          </NavLink>
          <NavLink to="#">
            <img src={iconBike} alt="" />
          </NavLink>
          <NavLink to="#">
            <img src={iconWeight} alt="" />
          </NavLink>
        </div>

        <div className="nav-copyright">Copyright, SportSee 2020</div>
      </nav>
    </>
  );
}

export default SideBar;
