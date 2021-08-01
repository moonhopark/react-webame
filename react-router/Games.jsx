import React from 'react';
import { BrowserRouter, Route, Link, HashRouter } from 'react-router-dom';

import GameMatcher from '../react-router/GameMatcher';

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball?query=10&hello=zerocho&bye=react">
          숫자야구
        </Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또생성기</Link>
        &nbsp;
        <Link to="/game/index">게임 매쳐 </Link>
      </div>
      <div>
        <Route path="/game/:name" component={GameMatcher}></Route>
      </div>
    </BrowserRouter>
  );
};

export default Games;
