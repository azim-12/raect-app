import React from 'react'
// import {Link} from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.link1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.link2}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.link3}</a>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">{props.link3}</button>
        </form> */}
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" 
            style={{backgroundColor:props.mode=== 'grey' ? 'white' : 'rgb(33,37,41)', color:props.mode=== 'grey' ? 'rgb(33,37,41)' : 'white'}}
            type="button" 
            id="dropdownMenu2" 
            data-bs-toggle="dropdown" 
            aria-expanded="false">
              Change Themes
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{backgroundColor:props.mode=== 'dark' ? 'grey' : 'white', color:props.mode=== 'dark' ? 'white' : 'black'}}>
              
              <li>
                <div className={`form-check`}>
                  <input className="form-check-input" name='theme_color' onClick={props.comStyle} type="radio" id="blue_theme" value="blue"/>
                  <label className="form-check-label"  htmlFor="blue_theme">Blue theme</label>
                </div>
              </li>

              <li>
                <div className={`form-check`}>
                  <input className="form-check-input" name='theme_color' onClick={props.comStyle} type="radio" id="red_theme" value="red"/>
                  <label className="form-check-label"  htmlFor="red_theme">Red theme</label> 
                </div>
              </li>

              <li>
                <div className={`form-check`}>
                  <input className="form-check-input" name='theme_color' onClick={props.comStyle} type="radio" id="green_theme" value="green"/>
                  <label className="form-check-label"  htmlFor="green_theme">Green theme</label>
                </div>
              </li>

              <li>
                <div className={`form-check`}>
                  <input className="form-check-input" name='theme_color' onClick={props.comStyle} type="radio" id="dark_theme" value="grey"/>
                  <label className="form-check-label"  htmlFor="dark_theme">Dark theme</label>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar


