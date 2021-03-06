import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { WordItemWrapper } from "../styles/components/WordItemStyles";

export default function WordItem({ word, index }) {
  const { isCurrentWord, isCurrentWordCorrect, currentWordIndex, wasWordCorrect } = useContext(ChallengeContext)

  return (
    <WordItemWrapper
      isCurrentWord={isCurrentWord(index)}
      isCurrentWordCorrect={isCurrentWord(index) && isCurrentWordCorrect()}
      isCheckedWord={currentWordIndex > index}
      wasWordCorrect={wasWordCorrect(index)}
    >
      {word}
    </WordItemWrapper>
  )
}