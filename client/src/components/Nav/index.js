import React from "react";
import "./style.css";

function Nav() {
  return (
      <div className="navigation sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-navBar">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav" id="category-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blogs">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login/Resgister</a>
              </li>

            </ul>
          </div>
        </nav>
      </div>
  );
}

export default Nav;
