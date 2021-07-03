import React from 'react';
import styled from 'styled-components'

interface Props {
  rank: string;
  symbol: 'spades' | 'diamond' | 'club' | 'heart';
}

export const Card: React.FC<Props> = ({rank, symbol}) => {
  let renderSymbol;
  if(symbol == "spades") renderSymbol = "♠";
  else if(symbol == "diamond") renderSymbol = "♦";
  else if(symbol == "club") renderSymbol = "♣";
  else if(symbol == "heart") renderSymbol = "♥";

  return(
    <CardContainer color={(symbol == "heart" || symbol == "diamond") ? "red" : "black"}>
      <Rank>{rank}</Rank>
      <Symbol>{renderSymbol}</Symbol>
    </CardContainer>
  )
}

interface CardContainerProps {
  color: "red" | "black";
}

const CardContainer = styled.div<CardContainerProps>`
  font-family: 'Montserrat';
  font-weight: 700;
  width: 280px;
  height: 400px;
  padding: 40px 0px 0px 35px;
  background: #FFFFFF;
  border: 1px solid #D2D2D2;
  box-sizing: border-box;
  box-shadow: 0px 5px 34px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  color: ${props => props.color == "red" ? "#F24822;" : "#1A1919"};
`

const Rank = styled.div`
  font-size: 80px;
`
const Symbol = styled.div`
  font-size: 60px;
  margin-top: -10px;
`
