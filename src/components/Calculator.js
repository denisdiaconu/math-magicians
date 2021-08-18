import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');
  const obje = {
    total,
    next,
    operation,
  };

  const handleState = (newState) => {
    if (newState.total != null) {
      setTotal(newState.total);
    }

    setNext(newState.next);

    if (newState.operation != null) {
      setOperation(newState.operation);
    }
  };

  const getInf = (obje, buttonName) => {
    handleState(calculate(obje, buttonName));
  };

  const format = () => {
    const { total, next, operation } = obje;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  return (
    <div className="cont">
      <div className="contH">
        <h2>Let s do some math!</h2>
      </div>
      <div className="calContainer">
        <input className="calInput" placeholder="0" value={`${format()}`} disabled="disabled" />
        <div className="calNumbers">
          <div className="conFirst">
            <button className="colorW" type="button" name="AC" onClick={(e) => { getInf(obje, e.target.name); }}>AC</button>
            <button className="colorW" type="button" name="+/-" onClick={(e) => { getInf(obje, e.target.name); }}>+/-</button>
            <button className="colorW" type="button" name="%" onClick={(e) => { getInf(obje, e.target.name); }}>%</button>
            <button className="colorS" type="button" name="÷" onClick={(e) => { getInf(obje, e.target.name); }}>÷</button>
          </div>
          <div className="conSecond">
            <button className="colorW" type="button" name="7" onClick={(e) => { getInf(obje, e.target.name); }}>7</button>
            <button className="colorW" type="button" name="8" onClick={(e) => { getInf(obje, e.target.name); }}>8</button>
            <button className="colorW" type="button" name="9" onClick={(e) => { getInf(obje, e.target.name); }}>9</button>
            <button className="colorS" type="button" name="x" onClick={(e) => { getInf(obje, e.target.name); }}>x</button>
          </div>
          <div className="conThird">
            <button className="colorW" type="button" name="4" onClick={(e) => { getInf(obje, e.target.name); }}>4</button>
            <button className="colorW" type="button" name="5" onClick={(e) => { getInf(obje, e.target.name); }}>5</button>
            <button className="colorW" type="button" name="6" onClick={(e) => { getInf(obje, e.target.name); }}>6</button>
            <button className="colorS" type="button" name="-" onClick={(e) => { getInf(obje, e.target.name); }}>-</button>
          </div>
          <div className="conFourth">
            <button className="colorW" type="button" name="1" onClick={(e) => { getInf(obje, e.target.name); }}>1</button>
            <button className="colorW" type="button" name="2" onClick={(e) => { getInf(obje, e.target.name); }}>2</button>
            <button className="colorW" type="button" name="3" onClick={(e) => { getInf(obje, e.target.name); }}>3</button>
            <button className="colorS" type="button" name="+" onClick={(e) => { getInf(obje, e.target.name); }}>+</button>
          </div>
          <div className="conFifth">
            <button className="colorW" type="button" name="0" onClick={(e) => { getInf(obje, e.target.name); }}>0</button>
            <div>
              <button className="colorW" type="button" name="." onClick={(e) => { getInf(obje, e.target.name); }}>.</button>
              <button className="colorS" type="button" name="=" onClick={(e) => { getInf(obje, e.target.name); }}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
