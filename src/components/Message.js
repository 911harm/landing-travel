import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from './Provider';

const MessageStyled = styled.div`
 width: 90%;
 min-width: 300px;
 max-width: 400px;
 height:80px;
 text-align:center;
 margin:40px auto;


`

export default function Message() {
    const [state] = useContext(AppContext)
    return (
        <MessageStyled>
            <h2>
                Hello, welcome, we know that you want to travel in a(n) {state} ,please fill out the following form:</h2>
        </MessageStyled>
    )
}