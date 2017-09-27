import React, { Component } from 'react';

import "../App.css";


class Header extends Component {
    render() {
        return (
            <header>
                   <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-faded">
                       <div className="row">
                           <div className="col">
                               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                               </button>
                           </div>
                           <div className="col">
                               <div className="float-right">
                                   <div className="dropdown ">
                                       <img className="inline user-logo" src="img/header/nouser.jpg" alt="" />
                                       <a className="drop btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                           John Doe
                                       </a>
                                       <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                           <a className="dropdown-item" href="#">Profile</a>
                                           <a className="dropdown-item" href="#">Logout</a>
                                       </div>
                                   </div>
                               </div>
                           </div>


                       </div>

                   </nav>
            </header>

        );
    }
}

export default Header;