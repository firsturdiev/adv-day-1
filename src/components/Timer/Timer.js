import { useEffect, useState } from 'react';
import './Timer.css';

function Timer() {
  const [time, setTime] = useState(1500);
  const [timerId, setTimerId] = useState();
  const [togglerState, setTogglerState] = useState('Start');

  useEffect(() => {
    if (togglerState === 'Stop') {
      setTimerId(
        setInterval(() => {
          setTime(time => time - 1);
        }, 1000)
      );
    } 
  }, [togglerState]);

  useEffect(() => {
    if (time === 0) {
      alert('The timer is end. It\'s time to reset');
      clearInterval(timerId);
      setTime(1500);
      setTogglerState('Start');
    }
  })

  function handleStartTimer() {
    setTogglerState('Stop');
  }

  function handleStopTimer() {
    clearInterval(timerId);
    setTogglerState('Start');
  }

  function handleRestartTimer() {
    clearInterval(timerId);
    setTime(1500);
    setTogglerState('Start');
  }

  return (
    <div className="timer">
      <svg width="510" height="510" viewBox="0 0 518 518" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(483.5 231.5) rotate(128.082) scale(363.981 258.283)">
            <stop />
            <stop offset="1" stopColor="#910A0A" />
          </radialGradient>
        </defs>
        <circle cx="259" cy="259" r="259" fill="transparent" stroke="url(#gradient)" strokeWidth="9" strokeDasharray="1627" strokeDashoffset={(time / 1500) * 1627} />
      </svg>

      <div className="timer__inner">
        <h2 className="visually-hidden">Amount time</h2>
        <p className="timer__amount">{Math.floor(time / 60) + ':' + (time % 60)}</p>
        <button onClick={(togglerState === 'Start' ? handleStartTimer : handleStopTimer)} className="timer__toggler">{togglerState}</button>
        <button onClick={handleRestartTimer} className="timer__restart" aria-label="Reset timer" />
      </div>
    </div>
  )
}

export default Timer;
