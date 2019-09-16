import React, { useEffect } from 'react'
import Screen from './Screen';
import pi from '../assets/pi.svg';
import sqrt from '../assets/sqrt.svg';
import { storeTheme } from '../context/store';
import Helper from '../utils/helper';
const { simpleArith, solve } = Helper;


const Buttons = () => {
  const left = ['Rad', 'Deg', 'x!', 'Inv', 'sin', 'ln', 'pi', 'cos', 'log', 'e', 'tan', 'sqrt', 'Ans', 'EXP', 'x/y'];
  const right = ['(', ')', '%', 'CE', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];

  useEffect(() => {
    console.log('******')
  },[]);

  return (
    <storeTheme.Consumer>{(context) => {
      const { show, toogleHistory, display, monitorHistory } = context
    return (<>
        <Screen display={display} showHistory={show} activateHistory={toogleHistory} />
        <div className="button-container">
          <section className="trig-left">
              {left.map((val, index) => {
            if (val === 'pi') {
                return <button onClick={() => monitorHistory('pi')}  key={index}><img src={pi} alt="pi" /></button>
            } else if (val === 'sqrt') {
                return <button onClick={() => monitorHistory('sqrt')}  key={index}><img src={sqrt} alt="sqrt" /></button>
            } else if (val === 'x/y') {
                return <button onClick={() => monitorHistory('^')}  key={index}>x<sup>y</sup></button>
            } else if (val === 'x!') {
              return <button onClick={() => monitorHistory('!')}  key={index}>{val}</button>
            } else {
              return <button onClick={() => monitorHistory(val)}  key={index}>{val}</button>
            }
            })}
          </section>
          <section className="num-right">
            {right.map((val, index) => {
            if(Number(val)) {
              return <button onClick={() => monitorHistory(val)} className="lighter-grey" key={index}>{val}</button> 
            } else if (val === '=') {
              return <button onClick={() => monitorHistory(val)}  className="equal-to" key={index}>{val}</button>
            } else {
              return <button onClick={() => monitorHistory(val)}  key={index}>{val}</button>
            }
            })}
          </section>
        </div>
    </>
      )}}
      </storeTheme.Consumer>
  )
}

export default Buttons;