import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { ChallengeSectionContainer, InputArea, InputField, RefreshButton, WordsDisplay } from "../styles/components/ChallengeSectionStyles";
import Countdown from "./Countdown";
import WordItem from "./WordItem";

export default function ChallengeSection() {
  const {
    wordList,
    incrementCurrentWordIndex,
    inputValue,
    setInputValue,
    resetChallenge,
    checkWord,
  } = useContext(ChallengeContext)

  const {
    startCountdown,
    resetCountdown,
    isActive: isActiveCountdown,
    hasFinished: hasFinishedCountdown,
  } = useContext(CountdownContext)

  function handleChange(e) {
    let inputValue = e.target.value
    setInputValue(inputValue)
  }
  
  function handleKeyDown(e) {
    // if space key pressed
    if (!isActiveCountdown) {
      startCountdown()
    }

    if (e.keyCode == 32){
      // prevent from adding spaces
      e.preventDefault()
      incrementCurrentWordIndex()
      checkWord()
      setInputValue('')
    }
  }

  function handleClick() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <ChallengeSectionContainer>
      <WordsDisplay>
        {wordList.map((word, index) => {
          return (
            <WordItem word={word} index={index} key={index} />
          )
        })}
      </WordsDisplay>
      <InputArea>
        <InputField
          type='text'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          disabled={hasFinishedCountdown} />
          <Countdown>
            1:00
          </Countdown>
          <RefreshButton
            type='button'
            onClick={handleClick}
            >
            Recomeçar
          </RefreshButton>
          <RefreshButton
            type='button'
            onClick={startCountdown}
            >
            Iniciar
          </RefreshButton>
      </InputArea>
    </ChallengeSectionContainer>
  )
}