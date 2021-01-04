const React = require('react');
const { Component } = React;
// 사용하는 패키지 같은 거를 불러옴

class WordRelay extends Component {
  state  = {
    text: 'Hello, webpack',
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRelay;
// 이 component를 다른데서 사용할 수 있게 해줌