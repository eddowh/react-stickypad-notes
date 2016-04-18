var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App.jsx');
var AppAPI = require('./utils/appAPI');

AppAPI.getNotes();


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
