import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { ResultsSectionContainer } from "../styles/components/ResultsSectionStyles";

export default function ResultsSection() {
  const { challengeResults } = useContext(ChallengeContext)

  return (
    <ResultsSectionContainer>
      <div>
        Palavras corretas: {challengeResults().totalCorrectWords}
      </div>
      <div>
        Palavras incorretas: {challengeResults().totalIncorrectWords}
      </div>
    </ResultsSectionContainer>
  )
}