import { useContext, useEffect, useRef, useState } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { WordItemWrapper } from "../styles/components/WordItemStyles";

export default function WordItem({ word, index }) {
  const { isCurrentWord, isCurrentWordCorrect, currentWordIndex, wasWordCorrect } = useContext(ChallengeContext)
  const currentWordRef = useRef(null)

  useEffect(() => {
    if (index == currentWordIndex) {
      currentWordRef.current.scrollIntoView()
    }
  }, [currentWordIndex])

  return (
    <WordItemWrapper
      isCurrentWord={isCurrentWord(index)}
      isCurrentWordCorrect={isCurrentWord(index) && isCurrentWordCorrect()}
      isCheckedWord={currentWordIndex > index}
      wasWordCorrect={wasWordCorrect(index)}
      ref={currentWordRef}
    >
      {word}
    </WordItemWrapper>
  )
}