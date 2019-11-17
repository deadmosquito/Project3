import React from "react";
import "./style.css";

function Nav() {
  return (
    <div className="container-fluid">
    {/*     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/"> <i className="fas fa-poo-storm" aria-hidden="true"></i>  Project 3</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav" id="navbar-icons">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-search" aria-hidden="true">  </i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="far fa-bookmark" aria-hidden="true">  </i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login"><i className="fas fa-user-circle" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
        </nav> */}
        {/* ////////////////////////////////////////////////////// */}
        <div className="row bg-dark">
          <div className="col-md-6">
          <a className="navbar-brand" href="/"> <i className="fas fa-poo-storm" aria-hidden="true"></i>  Project 3</a>
          </div>
          <div className="col-md-6 float-right">
            <span><a href="#"><i className="fas fa-search" aria-hidden="true">  </i></a></span>
            <span><a href="#"><i className="far fa-bookmark" aria-hidden="true">  </i></a></span>
            <span><a href="/login"><i className="fas fa-user-circle" aria-hidden="true"></i></a></span>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light bg-navBar">
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
