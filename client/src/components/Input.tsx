import React from "react";
import styled from 'styled-components'

interface Props {
    placeholder?: string;
}

export const Input: React.FC<Props> = ({placeholder}) => {
    return(
        <InputContainer placeholder={placeholder}></InputContainer>
    )
}

const InputContainer = styled.input`
    font-family: Montserrat;
    font-weight: 500;
    padding: 20px 21px 20px 21px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 10px;
    &:focus{
        outline: none;
    }
`
