import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className = "navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Text Modifier
          </a>
          <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleBtn}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label "
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
