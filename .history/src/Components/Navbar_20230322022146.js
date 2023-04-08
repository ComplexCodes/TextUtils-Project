import React from 'react'    //type rfc for shortcut:

export default function Navbar(props) { 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
            {props.home}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.about}</a>
          </li>
          
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success me-4 " type="submit">Search</button>
        </form>
      </div>
    </div>
    <div className="form-check form-switch me-1">
  <input className="form-check-input my-3 " type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault" bg-light>Dark Mode</label>
</div>
  </nav>
  )
}
