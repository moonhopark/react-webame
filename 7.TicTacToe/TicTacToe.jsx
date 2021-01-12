import React, { useEffect, useReducer, useCallback } from 'react';
import Table from './Table';

const initalState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['','',''],
    ['','',''],
    ['','',''],
  ],
  recentCell: [-1,-1],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK _CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
// action.type이 action의 이름인데 상수로 빼두는 것이 좋다.

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner; 이렇게 하면 안됨.
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      }
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
    }
    case RESET_GAME: {
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['','',''],
          ['','',''],
          ['','',''],
        ],
        recentCell: [-1,-1],
      };
    }
    default:
      return state;
  };
};

const TicTacToe = () => {
  const[state, dispatch] = useReducer(reducer, initalState);
  const { tableData, turn, winner, recentCell } = state;

  // const[winner, setWinner] = useState('');
  // const[turn, setTurn] = useState('0');
  // const[tableData, setTableData] = useState([['','',''],['','',''],['','','']]);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: '0' });
  }, []);

  useEffect(() => {
    const [row, cell] = recentCell;
    if(row < 0){
      return;
    }
    let win = false;
    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn){
      win = true;
    }
    if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn){
      win = true;
    }
    if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn){
      win = true;
    }
    if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn){
      win = true;
    }
    if (win) {
      dispatch({ type: SET_WINNER, winner: turn })
      dispatch({ type: RESET_GAME })
    } else {
      // 무승부검사
      let all = true; // all이 true면 무승부라는 뜻
      tableData.forEach((row) => { // 무승부 검사
        row.forEach((cell) => {
          if(!cell) {
            all = false;
          }
        });
      });
      if (all){
        dispatch({ type: SET_WINNER, winner: null })
        dispatch({ type: RESET_GAME });
      }else{
        dispatch({ type: CHANGE_TURN});
      }
    }
  }, [recentCell]);

  return (
    <>
      <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
      {winner && <div>{winner}님의 승리</div>}
    </>
  )
};

export default TicTacToe;