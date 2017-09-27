import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, Link, Switch, IndexRoute} from 'react-router';
import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>),
    document.getElementById('root'));
registerServiceWorker();
