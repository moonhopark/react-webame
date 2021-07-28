import React from "react";

import Table from "./Table";

const TicTacToe = () => {
  return (
    <>
      <Table />
      {winner && <div>{winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
