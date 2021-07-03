import React from "react";
import styled, {css} from 'styled-components'

interface Props {
  variant: "success" | "danger";
  text: string;
}

export const Button: React.FC<Props> = ({variant, text}) => {
  return(
    <ButtonContainer variant={variant}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}

interface ButtonContainerProps {
  variant: Props["variant"];
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 15px 38px 15px 38px;
  border: none;
  border-radius: 15px;

  ${props => props.variant == "success" ? css`
    color: #2CCB43;
    background: #DCF1DF;
    &:active{
      background-color: #CAE3CD;
      color: #22B738;
    } 
  ` : css`
    color: #E10E44;
    background: #F1DDDD;
    &:active{
      background-color: #EDCCCC;
      color: #DA0F43;
    } 
  `};
`

const ButtonText = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 22px;
`
