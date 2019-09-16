import React from 'react';
import historyIcon from '../assets/history-solid.svg';


const Screen = ({ display, showHistory, activateHistory }) => (
  <>
  <div className="screen-container">
    <span>
      {!showHistory && <img onClick={activateHistory} src={historyIcon} alt="history" className="history" />}
      {showHistory && (<div className="show-history">
        <img onClick={activateHistory} src={historyIcon} alt="history" className="history" /> <br />
      <div><span>2 x 2</span>=<span>4</span></div></div>)}
    </span>
    <section className="display">
      {display}
    </section>
  </div>
  </>
)

export default Screen;