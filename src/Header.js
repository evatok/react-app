import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        {" "}
        <form id="search-form" className="mb-6">
          <div className="row">
            <div className="col-4" id="appname">
              Weather App
            </div>
            <div className="col-8">
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control rounded"
                  id="city-input"
                  autocomplete="off"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
