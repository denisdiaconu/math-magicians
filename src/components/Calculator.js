import React, { Component } from 'react';
import calculate from '../logic/calculate';

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

  getInf(state, buttonName) {
    this.handleState(calculate(state, buttonName));
  }

  display = (next) => {
    if (next != null) {
      return next;
    }
    const newnext = '';
    return newnext;
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calContainer">
        <input className="calInput" placeholder="0" value={`${total} ${operation} ${this.display(next)}`} disabled="disabled" />
        <div className="calNumbers">
          <div className="conFirst">
            <button className="colorW" type="button" name="AC" onClick={(e) => { this.getInf(this.state, e.target.name); }}>AC</button>
            <button className="colorW" type="button" name="+/-" onClick={(e) => { this.getInf(this.state, e.target.name); }}>+/-</button>
            <button className="colorW" type="button" name="%" onClick={(e) => { this.getInf(this.state, e.target.name); }}>%</button>
            <button className="colorS" type="button" name="÷" onClick={(e) => { this.getInf(this.state, e.target.name); }}>÷</button>
          </div>
          <div className="conSecond">
            <button className="colorW" type="button" name="7" onClick={(e) => { this.getInf(this.state, e.target.name); }}>7</button>
            <button className="colorW" type="button" name="8" onClick={(e) => { this.getInf(this.state, e.target.name); }}>8</button>
            <button className="colorW" type="button" name="9" onClick={(e) => { this.getInf(this.state, e.target.name); }}>9</button>
            <button className="colorS" type="button" name="x" onClick={(e) => { this.getInf(this.state, e.target.name); }}>x</button>
          </div>
          <div className="conThird">
            <button className="colorW" type="button" name="4" onClick={(e) => { this.getInf(this.state, e.target.name); }}>4</button>
            <button className="colorW" type="button" name="5" onClick={(e) => { this.getInf(this.state, e.target.name); }}>5</button>
            <button className="colorW" type="button" name="6" onClick={(e) => { this.getInf(this.state, e.target.name); }}>6</button>
            <button className="colorS" type="button" name="-" onClick={(e) => { this.getInf(this.state, e.target.name); }}>-</button>
          </div>
          <div className="conFourth">
            <button className="colorW" type="button" name="1" onClick={(e) => { this.getInf(this.state, e.target.name); }}>1</button>
            <button className="colorW" type="button" name="2" onClick={(e) => { this.getInf(this.state, e.target.name); }}>2</button>
            <button className="colorW" type="button" name="3" onClick={(e) => { this.getInf(this.state, e.target.name); }}>3</button>
            <button className="colorS" type="button" name="+" onClick={(e) => { this.getInf(this.state, e.target.name); }}>+</button>
          </div>
          <div className="conFifth">
            <button className="colorW" type="button" name="0" onClick={(e) => { this.getInf(this.state, e.target.name); }}>0</button>
            <div>
              <button className="colorW" type="button" name="." onClick={(e) => { this.getInf(this.state, e.target.name); }}>.</button>
              <button className="colorS" type="button" name="=" onClick={(e) => { this.getInf(this.state, e.target.name); }}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
