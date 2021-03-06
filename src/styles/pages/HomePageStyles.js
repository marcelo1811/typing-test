import styled from "styled-components";

export const HomePageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    ". Header Header Header Header"
    ". ChallengeSection ChallengeSection ChallengeSection ."
    ". ResultsSection . . ."
    ". ResultsSection . . ."
    ". . . . ."
`