import styled from "styled-components"
import Colors from "../constants/Colors"

export const ChallengeSectionContainer = styled.div`
  grid-area: ChallengeSection;
  display: flex;
  flex-direction: column;
`

export const WordsDisplay = styled.div`
  flex-grow: 5;
  padding: 1rem;
  font-size: 1.8rem;
  height: 10rem;
  overflow-y: hidden;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: ${Colors.lightGray};
`

export const InputArea = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 0;
`

export const InputField = styled.input`
  width: 60%;
  height: 3rem;
  font-size: 1.5rem;
  border-radius: 10px;
`

export const RefreshButton = styled.button`
  height: 3rem;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  font-weight: bold;
  border-radius: 5px;
  border-style: none;
`
