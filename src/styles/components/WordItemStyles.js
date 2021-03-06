import styled from "styled-components";

export const WordItemWrapper = styled.span`
  background-color: ${props => props.isCurrentWord && '#DDDDDD'};
  color: ${props => props.isCurrentWord && !props.isCurrentWordCorrect && 'red'};
  color: ${props => props.isCheckedWord &&(props.wasWordCorrect ? 'green' : 'red')};
  padding: 0.5rem;
  border-radius: 5px;
`
