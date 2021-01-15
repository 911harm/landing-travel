import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from './Provider';

const MessageStyled = styled.div`
 width:400px;
 height:80px;
 text-align:center;
 margin:40px auto;


`

export default function Message() {
    const [state, setState] = useContext(AppContext)
    return (
        <MessageStyled>
            <h2>
        Hola, bienvenido, sabemos que quieres viajar en un {state}, por favor diligencia el siguiente formulario:”</h2>
        </MessageStyled>
    )
}