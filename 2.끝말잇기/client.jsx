const React = require('react');
const ReactDom = require('react-dom');

const WordRealy = require('./WordRelay');
// client.jsx가 WordRelay.jsx를 불러왔다.

ReactDom.render(<WordRealy />, document.querySelector('#root'));