import { createRef, useContext, useEffect, useRef, useState } from "react";
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
    currentWordIndex,
  } = useContext(ChallengeContext)

  const {
    startCountdown,
    resetCountdown,
    isActive: isActiveCountdown,
    hasFinished: hasFinishedCountdown,
  } = useContext(CountdownContext)

  const wordsRef = useRef([])

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

  useEffect(() => {
    wordsRef.current[currentWordIndex].scrollIntoView()
  }, [currentWordIndex])

  return (
    <ChallengeSectionContainer>
      <WordsDisplay>
        {wordList.map((word, index) => {
          return (
            <div ref={ref => (wordsRef.current[index] = ref)}>
              <WordItem
                word={word}
                index={index}
                key={index}
              />
            </div>
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
        <Countdown />
        <RefreshButton
          type='button'
          onClick={handleClick}
          >
          Recomeçar
        </RefreshButton>
      </InputArea>
    </ChallengeSectionContainer>
  )
}