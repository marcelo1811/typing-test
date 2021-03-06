import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { ResultsTitle, ResultsSectionContainer, ResultsDetailsContainer, ResultDetailsRows, ResultDetailsValue, ResultsSubtitle } from "../styles/components/ResultsSectionStyles";
import Colors from "../styles/constants/colors";

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
      <ResultsTitle>
        {totalWords} PPMs
      </ResultsTitle>
      <ResultsSubtitle>
        (Palavras por minuto)
      </ResultsSubtitle>
      <ResultsDetailsContainer>
        <ResultDetailsRows>
          <div>
            Tecladas
          </div>
          <ResultDetailsValue>
            {totalPressedKeys}
          </ResultDetailsValue>
        </ResultDetailsRows>
        <ResultDetailsRows>
          <div>
            Palavras corretas
          </div>
          <ResultDetailsValue color={Colors.green}>
            {totalCorrectWords}
          </ResultDetailsValue>
        </ResultDetailsRows>
        <ResultDetailsRows>
          <div>
            Palavras erradas
          </div>
          <ResultDetailsValue color={Colors.red}>
            {totalIncorrectWords}
          </ResultDetailsValue>
        </ResultDetailsRows>
      </ ResultsDetailsContainer>
    </ResultsSectionContainer>
  )
}