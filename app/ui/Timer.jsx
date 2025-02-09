"use client";

import { useEffect, useState } from "react";

export default function Timer({ minutes, onTimerEnd }) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60); // Convert minutes to seconds

  useEffect(() => {
    if (timeLeft === 0) {
      onTimerEnd(); // Fire the callback function when the timer reaches zero
      return;
    }

    // Set up the interval to decrement the timer every second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or the timer reaches zero
    return () => clearInterval(intervalId);
  }, [timeLeft, onTimerEnd]);

  // Format the time left into MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-center">
      <p className="text-center pb-2 text-white">{formatTime(timeLeft)}</p>
    </div>
  );
}