import React, { Component, createRef } from 'react';
import Try from './Try';

function getNumbers(){

};

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(), // ex: [1,3,5,7]
    tries: [],
  }

  onSubmitForm = (e) => {

  };

  onChangeInput = (e) => {

  };

  fruit = [
    { fruit: '사과', taste: '맛있다'},
    { fruit: '바나나', taste: '맛없다'},
    { fruit: '포도', taste: '시다'},
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruit.map( (v,i) => {
            return (
              <Try value={v} index={i} />
            );
          })
          }
        </ul>
      </>
    );
  };
}
export default NumberBaseball; // import NumberBaseball;