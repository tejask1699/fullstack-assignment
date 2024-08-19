import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="headerComponent">
      <div className="headerRight">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEVHcEwwMDEhIiMdHh8dHh4cHR4cHR0gISIdHh8ZGhscHR4fICESFBUAAAAbHB1ISUmNjY5cXV0nKCj///+hoaGcnJweHx81NTZ1dXUNDg+wsbH29vbU1NTk5OTCwsJoaWltbm48PD0dP2tQAAAAF3RSTlMAHF+Vt9Lk8rn/yXT///X///8w////p91j9YUAAAD/SURBVHgBhZIFFoMwDEA7pB4sTHC4/yWXl9K5fJxfTSIChyTNcqkImes0OYg7iTQvqCQ6az6Qf3fRJuYLjiTP5+EJb4iC1smurJ6o2TZhVKjwiRbCuOkneWR5EhlPfq7vXKK0Imfpuw4YepZRSlpssNAPiGMNxkdJy1XBqSHOFiWxS5gQh3kku8Cr7FbEEQAWxOlNQo+4dfScER8lL4h/7o3Mw4Jyli3iSgulqfFxK5oXuyEONXQz4nyXlsIXJw2o7iZPHPi7HcrOl/fAH0wAyn6cK+iMP7dt3YWUhb3EfO8v5Ih/ZSLyz04KJv/uCFd8HDPSuJOV3KSQ9uQawVwB6AYjQ1jySbMAAAAASUVORK5CYII="
          alt=""
        />
        <span className="headerLogoText">Abstract |</span>&nbsp;
        <span className="headerHelpText">Help Center</span>
      </div>
      <div className="headerLeft">
        <button className="headerButton">Submit a request</button>
      </div>
    </div>
  );
}

export default Header;
