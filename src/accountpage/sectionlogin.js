import React, { Component } from 'react';
import '../sectionlogin.css'

class SectionLogin extends Component {
    render() {
        return (
        <section className="section-padding">
            <div className="container">
                <div className="col-md-12 text-center">
                    <h3 className="ca-section"><strong>Already have an account?</strong></h3>
                </div>
                <div className="col-md-12 text-center p-0">
                    <p>Login to your account</p>
                    <div className="mdl-card mdl-card-register">
                        <div className="mdl-card__supporting-text p-0">
                            <div className="col-md-12">
                                <h3 className=""><strong>Welcome</strong></h3>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Username" aria-describedby="nameN" />
                                    <span className="input-group-btn">
                                        <button className="mdl-button btn-reg" type="button" tabindex="-1" data-upgraded=",MaterialButton,MaterialRipple"><i className="mdi mdi-person"></i><span class="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Password" aria-describedby="nameN" />
                                    <span className="input-group-btn">
                                        <button className="mdl-button btn-reg" type="button" tabindex="-1" data-upgraded=",MaterialButton,MaterialRipple"><i className="mdi mdi-lock"></i><span class="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-12 text-left">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <a href="Admin/index.html" className="sign-link"><button className="btn-block btn-sign" data-upgraded=",MaterialButton,MaterialRipple"><i className="mdi mdi-input line"></i>Sign in</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );

    }
}

export default SectionLogin;