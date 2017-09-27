import React, { Component } from 'react';
import '../login.css'

class HeaderLogin extends Component {
    render() {
        return (
         <nav className="navbar navbar-expand-lg nav-color navbar-light navbar-fixed-top">
             <div className="container-fluid">
                 <div className="navbar-header">
                     <button className="call" href="#">Schedule a call-back</button>
                     <a className="navbar-brand logo navbar_brand" href="#"><i className="mdi mdi-logo_nuevo"></i></a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                 </div>
                 <div className="collapse navbar-collapse" id="navbarNavDropdown">
                     <ul className="navbar-nav navbar_nav">
                         <li className="nav-item">
                            <a className="nav-link" href="#">FEATURES</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link" href="#">PRICING</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link" href="#">BLOG</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                         </li>
                     </ul>
                     <button id="log-btn" type="submit">Login</button>
                     </div>
             </div>
         </nav>
        );

    }
}

export default HeaderLogin;