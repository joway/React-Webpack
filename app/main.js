var ReactDOM = require('react-dom');
var React = require('react');

var CommentList = require('./components/component.jsx');
// ReactDOM.render(<AppComponent />, document.getElementById('content'));
ReactDOM.render(
  <CommentList />,
  document.getElementById('content')
);
