import styled from "styled-components";

export const WordItemWrapper = styled.span`
  background-color: ${props => props.isCurrentWord && '#FFFFFF'};
  color: ${props => props.isCurrentWord && !props.isCurrentWordCorrect && 'red'};
  padding: 0.5rem;
  border-radius: 5px;
`
