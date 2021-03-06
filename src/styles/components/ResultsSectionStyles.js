import styled from "styled-components";
import Colors from "../constants/colors";

export const ResultsSectionContainer = styled.div`
  grid-area: ResultsSection;
  background: ${Colors.lightGray};
  padding: 1rem;
  border-radius: 5px;
`
export const ResultsTitle = styled.div`
  color: ${Colors.green};
  font-size: 2rem;
  display: flex;
  justify-content: center;
`

export const ResultsSubtitle = styled.div`
  font-size: 0.7rem;
  color: ${Colors.darkGray};
  display: flex;
  justify-content: center;
`

export const ResultsDetailsContainer = styled.div`
  padding-top: 1rem;
`

export const ResultDetailsRows = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
`

export const ResultDetailsValue = styled.div`
  font-weight: bold;
  color: ${props => props.color ? props.color : Colors.black}
`
