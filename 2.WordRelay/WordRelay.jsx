const React = require('react');
const { useState, useRef } = React;
// 사용하는 패키지 같은 거를 불러옴

const WordRelay = () => {
  const [word, setWord] = useState('박문호');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length -1] === value[0]){
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    }else{
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.currentTarget.value );
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
// 이 component를 다른데서 사용할 수 있게 해줌