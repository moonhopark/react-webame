import React, { useState, useRef } from 'react';

const ResponseCheckHooks = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();
  // State는 바뀌면 return 부분이 렌더링 된다.
  // Ref는 바뀌어도 렌더링이 되지 않는다.
  // 즉 값이 바뀌었을 때 렌더링이 되지 않게 하려면 Ref를 써서 쓸 데없는
  // 렌더링이 일어나지 않게 해야 한다.

  const onClickScreen = () => {
    if (state === 'waiting'){
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
      timeout.current = setTimeout( () => { // Ref 쓸때는 current 꼭 써주기
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
        }, Math.floor(Math.random() * 1000) + 2000);  // 2초~3초 랜덤
    } else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now'){ // 반응속도 체크
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요!');
      setResult( (prevResult) => {
        return [...prevResult, endTime.current - startTime.current]
      })
    }
  }

  const onReset = () => {
    setState([]);
  }

  const renderAverage = () => {
    return result.length === 0
    ? null
    : <> 
      <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
      <button onClick={onReset}>리셋</button>
    </>
  };


  return [
    <div key="사과">사과</div>,
    <div key="배">배</div>,
    <div key="귤">귤</div>,
    <div key="배">배</div>,
  ]; // return에서 array로 출력할 수 있는데 무조건 key 붙여주기

//   return (
//     <d>
//       <div
//         id="screen"
//         className={state}
//         onClick={onClickScreen}
//       >
//         {message}
//       </div>
//       {renderAverage()}
//     </div>
//   )
}



export default ResponseCheckHooks;