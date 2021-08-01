import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NumberBaseball from '../3.NumberBaseball/NumberBaseball';
import RSP from '../5.RSP/RSP';
import Lotto from '../6.Lotto/Lotto';

class GameMatcher extends Component {
  render() {
    if (this.props.match.params.name === 'number-baseball') {
      return <NumberBaseball />;
    } else if (this.props.match.params.name === 'rock-scissors-paper') {
      return <RSP />;
    } else if (this.props.match.params.name === 'lotto-generator') {
      return <Lotto />;
    }
    return <div>일치하는 게임이 없습니다.</div>;
  }
}

export default withRouter(GameMatcher);
