import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { WordItemWrapper } from "../styles/components/WordItemStyles";

export default function WordItem({ word, index }) {
  const { isCurrentWord, isCurrentWordCorrect } = useContext(ChallengeContext)

  return (
    <WordItemWrapper
      isCurrentWord={isCurrentWord(index)}
      isCurrentWordCorrect={isCurrentWord(index) && isCurrentWordCorrect()}
    >
      {word}
    </WordItemWrapper>
  )
}