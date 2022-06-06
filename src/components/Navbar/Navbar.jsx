import React from "react";
import { useNavigate,Link } from "react-router-dom";
import styles from "../Navbar/navbar.module.css"


// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogin=()=>{
      navigate("/login")
  }
  return (
    <div className={styles.body} data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count"> cart: {0}</span>
      <button onClick={handleLogin} data-cy="navbar-login-logout-button">Login</button>
    </div>
  );
};

export default Navbar;
