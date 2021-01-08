import React, { useState, useRef, useEffect } from 'react';
import Ball from './Ball';

function getWinNumbers(){
  console.log('getWinNumnbers');
  const candidate = Array(45).fill().map((v, i) => i+1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random()*candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length-1];
  const winNumbers = shuffle.slice(0,6).sort((p,c) => p-c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const [winNumbers, setWinNumbers] = useState(getWinNumbers());
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect( () => {
    console.log('useEffect');
    for ( let i=0; i< winNumbers.length-1; i++){ // let을 쓰면 클로저문제가 안생긴다.
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i+1)*1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => { // componentWillUnmount
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); // 배열이 빈 배열이 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount랑 componentDidUdatd 둘 다 수행
  

  const onClickRedo = () => {
    console.log('onClickRedo')
    setWinNumbers(getWinNumber());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = []; // useEffect에서 timeouts.current가 바뀌는거 감지하는 부분
  };
  
  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
}

export default Lotto;