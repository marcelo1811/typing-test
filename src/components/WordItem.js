import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { WordItemWrapper } from "../styles/components/WordItemStyles";

export default function WordItem({ word }) {
  const { isActiveWord } = useContext(ChallengeContext)

  return (
    <WordItemWrapper isActive={isActiveWord(word)}>
      {word.word}
    </WordItemWrapper>
  )
}