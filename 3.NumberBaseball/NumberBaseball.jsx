import React, { Component, createRef } from 'react';

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

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {[
            ['사과','맛있다'],
            ['바나나','맛없다'],
            ['포도','시다'],
          ].map( (v) => {
            return (
              <li><b>{v[0]}</b> - {v[1]}</li>
            );
          })
          }

          {[
            { fruit: '사과', taste: '맛있다'},
            { fruit: '바나나', taste: '맛없다'},
            { fruit: '포도', taste: '시다'},
          ].map( (v,i) => {
            return (
              <li key={v.fruit}><b>{v.fruit}</b> - {i}</li>
            );
          })
          }
        </ul>
      </>
    );
  };
}
export default NumberBaseball; // import NumberBaseball;