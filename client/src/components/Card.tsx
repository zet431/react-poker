import React from 'react';
import styled from 'styled-components'

export const Card = () => {
  return(
    <CardContainer>
      <Rank>A</Rank>
      <Symbol value="Diamond"/>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 280px;
  height: 400px;
  background: #FFFFFF;
  border: 1px solid #D2D2D2;
  box-sizing: border-box;
  box-shadow: 0px 5px 34px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`

const Rank = styled.div`
  color: #F24822;
  padding: 40px 0px 0px 35px;
  font-family: Roboto;
  font-size: 80px;
`
const Symbol = styled.div``
