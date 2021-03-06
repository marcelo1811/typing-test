import styled from "styled-components";
import ScreenSizes from "../constants/ScreenSizes";

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
    ". . . . .";

  @media (${ScreenSizes.maxSm}) {
    grid-template-columns: 2rem 1fr 2rem;
    grid-template-rows: auto repeat(2, 1fr) 2rem;
    grid-template-areas:
    ". Header ."
    ". ChallengeSection ."
    ". ResultsSection ."
    ". . ."
  }
`