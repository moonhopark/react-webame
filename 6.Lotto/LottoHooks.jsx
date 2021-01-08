import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
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
  const lottoNumbers = useMemo(() => getWinNumbers(), []) // useMemo를 안쓰면 getWinNumbers가 계속 실행된다. useMemo는 값을 기억
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
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
  
  useEffect(() => {
    console.log('로또 숫자를 생성합니다.')
  }, [winNumbers])

  const onClickRedo = useCallback( () => {
    console.log('onClickRedo')
    console.log(winNumbers)
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = []; // useEffect에서 timeouts.current가 바뀌는거 감지하는 부분
  }, [winNumbers]); // useCallback은 함수자체를 기억
  
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
//<Ball key={v} number={v} onclick={onClickRedo}/>
// 위 처럼 자식컴포넌트에 props로 함수를 넘길때 꼭 useCallback 써줘야 한다.

export default Lotto;