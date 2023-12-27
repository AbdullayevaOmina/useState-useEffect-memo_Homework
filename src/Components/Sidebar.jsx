import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar-title">
        <h1 className="sidebar-brand">Brand name</h1>
        <span className="material-icons-outlined" onclick="closeSidebar()">
          close
        </span>
      </div>

      <ul className="sidebar-list">
        <Link to="/">
          <li className="sidebar-list-item active">
            <span className="material-icons-outlined">dashboard</span>Dashboard
          </li>
        </Link>
        <Link to="/products">
          <li className="sidebar-list-item">
            <span className="material-icons-outlined">inventory_2</span>
            Products
          </li>
        </Link>
        <Link to="/users">
          <li className="sidebar-list-item">
            <span className="material-icons-outlined">groups</span>Users
          </li>
        </Link>
        <Link to="/orders">
          <li className="sidebar-list-item">
            <span className="material-icons-outlined">dvr</span>Orders
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
