//imports necessary modules from React, React Router and Redux
import React from "react";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import icon from "../images/icons/icon3.png";
import styles from "../components/styles.css";
import { useSelector } from "react-redux";
//functional component Header
export default function Header() {
  //using useSelector hook to extract the userName from Redux store
  const userName = useSelector((state) => state.user.userName);
  //return statement - returning JSX content of the component
  //the component includes a header element.
  //navigation links - utilizing link components from React Router to create navigational links
  return (
    <header>
      <div className="header" style={{ color: "black", paddingBottom: "0" }}>
        <Link to="/women" className="header-item">
          Women
        </Link>
        <Link to="/men" className="header-item">
          Men
        </Link>
        <Link to="/kids" className="header-item">
          Kids
        </Link>
{/* displaying an image (icon) as the store logo */}
        <img
          src={icon}
          alt="store Icon"
          style={{
            width: "300px",
            height: "150px",
            marginLeft: "200px",
            marginBottom: "",
            padding: "0%",
          }}
        />

        <Link to="/" className="header-item" style={{ marginLeft: "10%" }}>
          Home
        </Link>
        <Link to="/cart" className="header-item">
          Cart
        </Link>
        {/* includes login component for user authentication */}
        <LogIn className="header-item" />
{/* displaying a greeting based on whether a user is logged in or not
if user is available in Redux store it welcomes a user, if not than it welcomes the guest */}
        <div className="userNameGreeting">
          {" "}
          {userName ? (
            <p>Welcome, {userName}! </p>
          ) : (
            <p>Welcome, Guest!</p>
          )}{" "}
        </div>
      </div>
    </header>
  );
}
