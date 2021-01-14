import React, { useContext, useCallback, memo, useMemo } from 'react';
import { TableContext, CODE, OPEN_CELL, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL  } from './MineSearch';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      }
    case CODE.CLICKED_MINE:
    case CODE.OPENED:
      return {
        background: 'white',
      };
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return {
        background: 'yellow',
      }
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return {
        background: 'red',
      }
    default: 
      return {
        background: 'white',
      };
  }
};

const getTdText = (code) => {
  console.log('getTdtext');
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return '';
    case CODE.CLICKED_MINE:
      return '펑';
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return '!';
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return '?';
    default:
      return code || '';
  }
};

const Td = memo(({ rowIndex, cellIndex }) => {
  const { tableData, dispatch, halted } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row:rowIndex, cell: cellIndex})
        return;
      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted])

  const onRightClickTd = useCallback((e) => {
    if (halted) {
      return;
    }
    e.preventDefault();
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL:
      case CODE.MINE:
        dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.FLAG:
      case CODE.FLAG_MINE:
        dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  console.log('td rendered');

  return <RealTd onClickTd={onClickTd} onRightClckTd={onRightClickTd} data={tableData[rowIndex][cellIndex]} />;
});

const RealTd = memo(({ onClickTd, onRightClickTd, data }) => {
  console.log('real td rendered');
  return (
    <td
    style={getTdStyle(data)}
    onClick={onClickTd}
    onContextMenu={onRightClickTd}
  >{getTdText(data)}</td>
  )
});

export default Td;