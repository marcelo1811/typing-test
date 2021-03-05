import styled from "styled-components"

export const ChallengeSectionContainer = styled.div`
  background-color: green;
  grid-area: ChallengeSection;
  display: flex;
  flex-direction: column;
`

export const WordsDisplay = styled.div`
  flex-grow: 5;
  background-color: yellow;
  padding: 1rem;
  font-size: 1.8rem;
  display: flex;
  flex-wrap: wrap;
`

export const InputArea = styled.div`
  flex-grow: 2;
  background-color: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 5rem;
`

export const InputField = styled.input`
  flex-grow: 1;
  height: 3rem;
  font-size: 1.5rem;
`

export const TimerDisplay = styled.div`
  color: white;
  font-weight: bold;
  background-color: #3D4D5C;
  width: 5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export const RefreshButton = styled.button`
  height: 3rem;
`
