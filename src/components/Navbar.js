import React, { useState, useEffect } from "react";
import SignUp from "../Pages/SignUp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import logo from "../../src/assets/deluxesmall.png";
import { clearAccessToken, setAccessToken } from "../Redux/authSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = useNavigate();
  // const {users} = useSelector((state) => state.users);
  const token = useSelector((state) => state.auth.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      dispatch(setAccessToken(storedToken));
    }    
    const details = localStorage.getItem("userDetails");
    if (details) {
      dispatch(setAccessToken(details));
    }    

    console.log('in the useffect')
  }, []);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(clearAccessToken());
    console.log("clearing the token");
    window.location.reload()
  };

  const handleProfile = () => {
    const details = localStorage.getItem("userDetails");
    if (details) {
      dispatch(setAccessToken(details));
    }  
    nav(`/account/${details}`)  
console.log('in the profile', details)
  };

  const handleBookings = () => {
    nav("/bookings");
  };

  function handleSelection(event) {
    const selectedValue = event.target.value;

    if (selectedValue === "logout") {
      handleLogout();
    } else if (selectedValue === "profile") {
      handleProfile();
    } else if (selectedValue === "bookings") {
      handleBookings();
    }
  }

  return (
    <div>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-brand">
          <Link to="/">
            <img
              src={logo}
              alt=""
              width={180}
              height={180}
              style={{ marginTop: -50 }}
            />
          </Link>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-nav ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#rooms">Rooms</a>
          </li>
          <li>
            <a href="#amenities">Amenities</a>
          </li>
          <li>
            <a href="gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <div>
            {token ? (
              <select
                onChange={handleSelection}
                className="custom-select"
                style={{
                  backgroundColor: "#203F5B",
                  padding: "8px",
                  borderRadius: "15px",
                  color: "white",
                }}
              >
                <option value="account">Account</option>
                <option value="logout">Logout</option>
                <option value="profile">Profile</option>
                <option value="bookings">Bookings</option>
                
              </select>
            ) : (
              <button
                style={{
                  backgroundColor: "#203F5B",
                  padding: "8px",
                  borderRadius: "15px",
                  color: "white",
                }}
                onClick={openModal}
              >
                SignIn
              </button>
            )}
          </div>
        </ul>
      </nav>

      <SignUp isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Navbar;
