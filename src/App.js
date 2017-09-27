import React, { Component } from 'react';
import Menu from './accountpage/menu';
import Header from './accountpage/header';
import Main from './accountpage/main';
import Library from './accountpage/library';
import Upload from './accountpage/upload-file';
import Users from './accountpage/users';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
                <Menu />
                <Main />
            <Library />
            <Users />
        </div>

    );
  }
}

export default App;
