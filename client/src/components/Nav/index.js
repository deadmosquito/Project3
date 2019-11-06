import React from "react";
import "./style.css";

function Nav() {
  return (
    <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/"> <i class="fas fa-poo-storm" aria-hidden="true"></i>  Project 3</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav" id="navbar-icons">
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-search" aria-hidden="true">  </i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="far fa-bookmark" aria-hidden="true">  </i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login"><i class="fas fa-user-circle" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
        </nav>
        {/* ////////////////////////////////////////////////////// */}
        
        <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light bg-navBar">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav" id="category-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/technology">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/business">News</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/sports">Share a Post</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default Nav;
