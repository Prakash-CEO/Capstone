import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css"; // Import your CSS file for styling

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout-related tasks here, such as clearing user data or tokens.
    // For this example, we will simply simulate a logout by redirecting to a login page.

    // Redirect to the login page or any other appropriate page after logout.
    navigate("/login");
  };

  return (
    <div className="logout-container">
      <div className="logout-content">
        <p>Are you sure you want to log out?</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
