import { useContext } from "react";
import { ChallengeProvider, ChallengeContext } from "../contexts/ChallengeContext";
import { ChallengeSectionContainer, InputArea, InputField, RefreshButton, TimerDisplay, WordsDisplay } from "../styles/components/ChallengeSectionStyles";
import WordItem from "./WordItem";

export default function ChallengeSection() {
  const { wordList, test } = useContext(ChallengeContext)

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
        <InputField type='text' />
        <TimerDisplay>
          1:00
        </TimerDisplay>
        <RefreshButton type='submit'>
          Recomeçar
        </RefreshButton>
      </InputArea>
    </ChallengeSectionContainer>
  )
}