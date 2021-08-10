import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calContainer">
        <input className="calInput" value="0" disabled="disabled" />
        <div className="calNumbers">
          <div className="conFirst">
            <button className="colorW" type="button">AC</button>
            <button className="colorW" type="button">+/-</button>
            <button className="colorW" type="button">%</button>
            <button className="colorS" type="button">+</button>
          </div>
          <div className="conSecond">
            <button className="colorW" type="button">7</button>
            <button className="colorW" type="button">8</button>
            <button className="colorW" type="button">9</button>
            <button className="colorS" type="button">X</button>
          </div>
          <div className="conThird">
            <button className="colorW" type="button">4</button>
            <button className="colorW" type="button">5</button>
            <button className="colorW" type="button">6</button>
            <button className="colorS" type="button">-</button>
          </div>
          <div className="conFourth">
            <button className="colorW" type="button">1</button>
            <button className="colorW" type="button">2</button>
            <button className="colorW" type="button">3</button>
            <button className="colorS" type="button">+</button>
          </div>
          <div className="conFifth">
            <button className="colorW" type="button">0</button>
            <div>
              <button className="colorW" type="button">.</button>
              <button className="colorS" type="button">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
