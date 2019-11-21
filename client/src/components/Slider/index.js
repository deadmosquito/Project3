import React from "react";
import "./style.css";

function Slider() {
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
         
        </ol>
      
        <div className="carousel-inner" role="listbox">
        
       
          <div className="item active">
            <img src="/img/slider1.jpg" alt="Chania"  width="100%" />
          </div>
          
            <div className="item ">
            <img src="/img/slider2.jpg" alt="Chania"  width="100%" />
          </div>
      
          <div className="item">
            <img src="/img/slider3.jpg" alt="Flower" width="100%" />
          </div>
      
        </div>
      
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Slider