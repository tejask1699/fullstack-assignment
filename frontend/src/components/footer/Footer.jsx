import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerrow">
        <div className="footerCol">
          <h3>Abstract</h3>
          <ul>
            <li>Branches</li>
          </ul>
        </div>
        <div className="footerCol">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="footerCol">
          <h3>Community</h3>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div className="footerCol">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
          <br />
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="http://localhost:3000/">info@abstract.com</a>
            </li>
          </ul>
        </div>
        <div className="copyRight">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEVHcEwwMDEhIiMdHh8dHh4cHR4cHR0gISIdHh8ZGhscHR4fICESFBUAAAAbHB1ISUmNjY5cXV0nKCj///+hoaGcnJweHx81NTZ1dXUNDg+wsbH29vbU1NTk5OTCwsJoaWltbm48PD0dP2tQAAAAF3RSTlMAHF+Vt9Lk8rn/yXT///X///8w////p91j9YUAAAD/SURBVHgBhZIFFoMwDEA7pB4sTHC4/yWXl9K5fJxfTSIChyTNcqkImes0OYg7iTQvqCQ6az6Qf3fRJuYLjiTP5+EJb4iC1smurJ6o2TZhVKjwiRbCuOkneWR5EhlPfq7vXKK0Imfpuw4YepZRSlpssNAPiGMNxkdJy1XBqSHOFiWxS5gQh3kku8Cr7FbEEQAWxOlNQo+4dfScER8lL4h/7o3Mw4Jyli3iSgulqfFxK5oXuyEONXQz4nyXlsIXJw2o7iZPHPi7HcrOl/fAH0wAyn6cK+iMP7dt3YWUhb3EfO8v5Ih/ZSLyz04KJv/uCFd8HDPSuJOV3KSQ9uQawVwB6AYjQ1jySbMAAAAASUVORK5CYII="
            alt=""
          />
          <h3>@CopyRight 2022</h3>
          <ul>
            <li>Abstract Studio Design, Inc.</li>
            <li>All rights reserved</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
