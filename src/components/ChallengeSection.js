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
    if (inputValue.slice(-1) != ' ') return setInputValue(inputValue)
    if (!isActiveCountdown) startCountdown()
    incrementCurrentWordIndex()
    checkWord()
    setInputValue('')
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
            <div
              ref={ref => (wordsRef.current[index] = ref)}
              key={index}
            >
              <WordItem
                word={word}
                index={index}
              />
            </div>
          )
        })}
      </WordsDisplay>
      <InputArea>
        <InputField
          type='text'
          onChange={handleChange}
          value={inputValue}
          autoCapitalize='none'
          autoCorrect='off'
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