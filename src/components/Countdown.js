import { useContext } from "react";
import { CountdownContext, CountdownProvider } from "../contexts/CountdownContext";
import { CountdownContainer } from "../styles/components/CountdownStyles";

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  }= useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
  
  return (
    <CountdownContainer>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </CountdownContainer>
  )
}