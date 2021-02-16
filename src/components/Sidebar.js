import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            {/* <Link to='/' className="simple-text">
              Covid Dashboard Example
            </Link> */}
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Covid Test Results</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                <i className="nc-icon nc-circle-09"></i>
                <p>Covid Positivity Rate</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar