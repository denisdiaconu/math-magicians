/* eslint-disable */
import React, { Component } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleState = this.handleState.bind(this);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }
  handleState(newState) {
    if (newState.total != null) {
      this.setState({ total: newState.total });
    }

    this.setState({ next: newState.next });

    if (newState.operation != null) {
      this.setState({ operation: newState.operation });
    }
  }

  display(next) {
    if (next != null) {
      return next;
    } else {
      next = ''
      return next;
    }
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calContainer">
        <input className="calInput" value={total + ' ' + operation + this.display(next)} disabled="disabled" />
        <div className="calNumbers">
          <div className="conFirst">
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, 'AC')); }}>AC</button>
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '+/-')); }}>+/-</button>
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '%')); }}>%</button>
            <button className="colorS" type="button" onClick={() => { this.handleState(calculate(this.state, '÷')); }}>÷</button>
          </div>
          <div className="conSecond">
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '7')); }}>7</button>
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '8')); }}>8</button>
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '9')); }}>9</button>
            <button className="colorS" type="button" onClick={() => { this.handleState(calculate(this.state, 'x')); }}>x</button>
          </div>
          <div className="conThird">
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '4')); }}>4</button>
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '5')); }}>5</button>
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '6')); }}>6</button>                
            <button className="colorS" type="button" onClick={() => { this.handleState(calculate(this.state, '-')); }}>-</button> 
          </div>
          <div className="conFourth">
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '1')); }}>1</button>
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '2')); }}>2</button>
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '3')); }}>3</button>
            <button className="colorS" type="button" onClick={() => { this.handleState(calculate(this.state, '+')); }}>+</button>
          </div>
          <div className="conFifth">
            <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '0')); }}>0</button>
            <div>
              <button className="colorW" type="button" onClick={() => { this.handleState(calculate(this.state, '.')); }}>.</button>
              <button className="colorS" type="button" onClick={() => { this.handleState(calculate(this.state, '=')); }}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
