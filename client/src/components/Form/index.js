import React from "react";
import "./style.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function SelectBox({ props, children }){
  return (
    <div className="form-group">
      <select className="postCategory" {...props}>
        {children}
      </select>
    </div>
  );
}
export function TextArea({ props }){
  return (
    <div className="form-group">
       <textarea className="form-control" {...props}> </textarea>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

