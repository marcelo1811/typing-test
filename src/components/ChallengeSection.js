import { useContext } from "react";
import { ChallengeProvider, ChallengeContext } from "../contexts/ChallengeContext";
import { ChallengeSectionContainer, InputArea, InputField, RefreshButton, TimerDisplay, WordsDisplay } from "../styles/components/ChallengeSectionStyles";
import WordItem from "./WordItem";

export default function ChallengeSection() {
  const {
    wordList,
    incrementCurrentWordIndex,
    inputValue,
    setInputValue,
    resetChallenge,
  } = useContext(ChallengeContext)

  function handleChange(e) {
    let inputValue = e.target.value
    setInputValue(inputValue)
  }
  
  function handleKeyDown(e) {
    // if space key pressed
    if (e.keyCode == 32){
      // prevent from adding spaces
      e.preventDefault()
      incrementCurrentWordIndex()
      setInputValue('')
    }
  }

  return (
    <ChallengeSectionContainer>
      <WordsDisplay>
        {wordList.map((word, index) => {
          return (
            <WordItem word={word} index={index} />
          )
        })}
      </WordsDisplay>
      <InputArea>
        <InputField
          type='text'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={inputValue} />
        <TimerDisplay>
          1:00
        </TimerDisplay>
        <RefreshButton
          type='button'
          onClick={resetChallenge}
        >
          Recomeçar
        </RefreshButton>
      </InputArea>
    </ChallengeSectionContainer>
  )
}