import { useContext } from "react";
import { ChallengeProvider, ChallengeContext } from "../contexts/ChallengeContext";
import { ChallengeSectionContainer, InputArea, InputField, RefreshButton, TimerDisplay, WordsDisplay } from "../styles/components/ChallengeSectionStyles";
import WordItem from "./WordItem";

export default function ChallengeSection() {
  const { wordList, incrementActiveWordIndex, inputValue, setInputValue, resetChallenge } = useContext(ChallengeContext)

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleKeyDown(e) {
    // if space key pressed
    if (e.keyCode == 32){
      incrementActiveWordIndex()
      setInputValue('')
    }
  }

  return (
    <ChallengeSectionContainer>
      <WordsDisplay>
        {wordList.map((word) => {
          return (
            <WordItem word={word} />
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