import React from "react";
import { Link } from "react-router-dom";
import {RiDashboardFill} from 'react-icons/ri'
import {FaBed, FaNewspaper, FaUserAlt} from 'react-icons/fa'
import {RxExit} from 'react-icons/rx'

const Sidebar = () => {
  return (
    <div>
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
         <RiDashboardFill size={40}/> <i className="fas fa-user-secret me-2"></i>Admin Dashboard
        </div>

        <div className="list-group list-group-flush my-3" style={{padding: '10%', paddingTop:'30%'}}>
          <Link to='/'
        
            className="list-group-item-action bg-transparent second-text fw-bold"
          >
          <FaBed color="black" size={27}/>  <i className="fas fa-chart-line me-2"></i>Rooms
          </Link>
          <Link to={'/adminBookings'}
        
            className=" list-group-item-action bg-transparent second-text fw-bold"
          >
          <FaNewspaper color="black" size={27}/><i className="fas fa-paperclip me-2"></i>Bookings
          </Link>
          <Link to={'/adminUsers'}
        
            className=" list-group-item-action bg-transparent second-text fw-bold"
          >
          <FaUserAlt color="black" size={27}/>  <i className="fas fa-shopping-cart me-2"></i>Users
          </Link>

          <Link to={'/adminLogout'}
        
            className=" list-group-item-action bg-transparent text-danger fw-bold"
          >
            <RxExit size={20}/><i className="fas fa-power-off me-2"></i>Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
