import React, { Component } from 'react';
import HeaderLogin from './headerlogin';
import SectionLogin from './sectionlogin';
import FooterLogin from './footerlogin';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <HeaderLogin />
                <SectionLogin />
                <FooterLogin />
            </div>

        );

    }
}

export default LoginPage;