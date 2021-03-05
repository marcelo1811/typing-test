import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { WordWrapper } from "../styles/components/WordItemStyles";

export default function WordItem({ word }) {
  const { isActiveWord } = useContext(ChallengeContext)

  return (
    <WordWrapper isActive={isActiveWord(word)}>
      {word.word}
    </WordWrapper>
  )
}