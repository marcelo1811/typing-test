import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { ResultsSectionContainer } from "../styles/components/ResultsSectionStyles";

export default function ResultsSection() {
  const { challengeResults } = useContext(ChallengeContext)
  const {
    totalPressedKeys,
    totalCorrectWords,
    totalIncorrectWords,
    totalWords,
  } = challengeResults()

  return (
    <ResultsSectionContainer>
      <div>
        PPM: {totalWords}
      </div>
      <div>
        Tecladas: {totalPressedKeys}
      </div>
      <div>
        Palavras corretas: {totalCorrectWords}
      </div>
      <div>
        Palavras incorretas: {totalIncorrectWords}
      </div>
    </ResultsSectionContainer>
  )
}