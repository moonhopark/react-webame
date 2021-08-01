import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class GameMatcher extends Component {
  render() {
    console.log(this.props);
    return <div>게임매쳐</div>;
  }
}

export default withRouter(GameMatcher);
