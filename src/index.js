import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, Link, Switch, IndexRoute} from 'react-router';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>),
    document.getElementById('root'));
registerServiceWorker();
