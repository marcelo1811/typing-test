import styled from "styled-components";

export const HomePageContainer = styled.div`
  background-color: blue;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "sidebar ChallengeSection ChallengeSection ChallengeSection ."
    "sidebar ResultsSection ResultsSection ResultsSection . "
    "sidebar ResultsSection ResultsSection ResultsSection ."
    "sidebar . . . ."
`