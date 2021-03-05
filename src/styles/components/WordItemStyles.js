import styled from "styled-components";

export const WordItemWrapper = styled.span`
  background-color: ${props => props.isActive && '#FFFFFF'};
  padding: 0.5rem;
  border-radius: 5px;
`
