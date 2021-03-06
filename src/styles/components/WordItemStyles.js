import styled from "styled-components";
import Colors from "../constants/Colors";

export const WordItemWrapper = styled.span`
  background-color: ${props => props.isCurrentWord && Colors.gray};
  color: ${props => props.isCurrentWord && !props.isCurrentWordCorrect && Colors.red};
  color: ${props => props.isCheckedWord &&(props.wasWordCorrect ? Colors.green : Colors.red)};
  padding: 0.5rem;
  border-radius: 5px;
`
