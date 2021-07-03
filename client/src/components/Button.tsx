import React from "react";
import styled from 'styled-components'

interface Props {
  text: string;
}

export const Button: React.FC<Props> = ({text}) => {
  return(
    <ButtonContainer>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
  padding: 15px 38px 15px 38px;
  color: #2CCB43;
  background: #DCF1DF;
  border: none;
  border-radius: 15px;
  &:active{
    background-color: #CAE3CD;
    color: #22B738;
  }
`

const ButtonText = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 22px;
`
