import React from "react";
import "./style.css";

function Topbar() {
  return (
    <div className="container-fluid tobarCustomPadding">
      <div className="row bg-dark topbar">
        <div className="col-md-6">
          <a className="navbar-brand" href="/"> <i className="fas fa-umbrella" aria-hidden="true"></i>  Forumbrella</a>
        </div>
        <div className="col-md-6 topBarIcons">
          <span><a href="#"><i className="fas fa-search" aria-hidden="true">  </i></a></span>
          <span><a href="#"><i className="far fa-bookmark" aria-hidden="true">  </i></a></span>
          <span><a href="/login"><i className="fas fa-user-circle" aria-hidden="true"></i></a></span>
        </div>
      </div>
    </div>
  );
}


export default Topbar;