import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import NumberBaseball from '../3.NumberBaseball/NumberBaseball';
import RSP from '../5.RSP/RSP';
import Lotto from '../6.Lotto/Lotto';

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        공통인 부분
        <Link to="/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/lotto-generator">로또생성기</Link>
      </div>
      <div>
        <Route path="/number-baseball" component={NumberBaseball}></Route>
        <Route path="/rock-scissors-paper" component={RSP}></Route>
        <Route path="/lotto-generator" component={Lotto}></Route>
      </div>
    </BrowserRouter>
  );
};

export default Games;
