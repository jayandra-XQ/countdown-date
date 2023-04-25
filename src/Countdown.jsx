
import React, { useState, useEffect } from "react";
import "./Countdown.css";

export const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputDate, setInputDate] = useState("1 Jan 2023");
  const [currentDate, setCurrentDate] = useState(inputDate);

  useEffect(() => {
    const changingDate = new Date(inputDate);
    const currentDate = new Date();
    const totalSeconds = (changingDate - currentDate) / 1000;

    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds % 60));
  }, [currentDate,inputDate]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  const onChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const onClickHandler = () => {
    setCurrentDate(inputDate);
  };

  return (
    <div className="countdown-container">
      <div className="countdown-values">
        <div className="countdown-value">
          <p className="big-text">{days}</p>
          <span>days</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{hours}</p>
          <span>hours</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{minutes}</p>
          <span>mins</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{seconds}</p>
          <span>seconds</span>
        </div>
      </div>
      <div className="countdown-input-button">
        <input className="countdown-input" onChange={onChangeHandler} />
        <button className="countdown-button" onClick={onClickHandler}>
          Countdown
        </button>
      </div>
    </div>
  );
};


