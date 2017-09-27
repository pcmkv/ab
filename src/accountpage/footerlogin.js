import React, { Component } from 'react';
import '../footerlogin.css'

class FooterLogin extends Component {
    render() {
        return (
       <footer className="footer">
           <div className="container">
               <div className="row">
                   <div className="col-md-5 col-sm-5 col-xs-12 text-left p-0">
                       <p className="m-b">©2017 Arbi All Right Reserved.</p>
                   </div>
                   <div className="col-md-7 col-sm-7 col-xs-12 text-right">
                       <ul className="m-b">
                           <li><a href="feature.html">Features</a></li>
                           <li><a href="pricing_page.html">Pricing</a></li>
                           <li><a href="blog.html">Blog</a></li>
                           <li><a href="home.html#contact_us">Contact</a></li>
                           <li className="p-r-0"><i className="fa fa-facebook"></i></li>
                           <li className="p-r-0"><i className="fa fa-twitter"></i></li>
                           <li className="p-r-0"><i className="fa fa-google-plus"></i></li>
                       </ul>
                   </div>
               </div>
           </div>
       </footer>
        );

    }
}

export default FooterLogin;