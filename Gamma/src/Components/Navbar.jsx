import React from "react"
import "../css/navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="leftSideContainer">
          <img src="https://asset.brandfetch.io/idAmHoFYTU/idWyo6kqsa.png" />
        </div>
        <div className="rightSideContainer">
          <ul>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Templates</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
          <button className="signupButton">Sign up for free</button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
