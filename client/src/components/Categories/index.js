import React from "react";
import "./style.css";

function Categories() {
    return(
        <div className="row">
            <div className="col-md-12 text-center">
                <ul className="list-inline category-menu">
                    <li><a href="">Technology</a></li>
                    <li><a href="">Business</a></li>
                    <li><a href="">Sports</a></li>
                    <li><a href="">Enternaiment</a></li>
                    <li><a href="">Health</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Categories