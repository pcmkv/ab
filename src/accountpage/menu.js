import React, { Component } from 'react';
import '../menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="left-menu" aria-hidden="">
                <span className="title">
                    <i className="mdi-logo_nuevo"></i>
                </span>
                <nav className="navigation">
                    <a href="#" className="navigation-link">
                        <i className="mdi-cloud_upload"></i>
                        <p>UPLOAD</p>
                    </a>
                    <a href="#" className="navigation-link" >
                        <i className="mdi-grid_on"></i>
                        <p>LIBRARY</p>
                    </a>
                    <a className="navigation-link"  href="#">
                        <i className="mdi-group_add"></i>
                        <p>USERS</p>
                    </a>
                    <a className="navigation-link" href="">
                        <i className="mdi-person"></i>
                        <p>PROFILE</p>
                    </a>
                    <a className="navigation-link" href="">
                        <i className="fa fa-power-off"></i>
                        <p>LOGOUT</p>
                    </a>
                </nav>
            </div>
        );
    }
}

export default Menu;
