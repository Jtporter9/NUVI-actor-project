var React = require('react');
var ReactDOM = require('react-dom');
import { Router, hashHistory } from 'react-router';
import routes from'./config/routes';

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>,document.getElementById('app'))
