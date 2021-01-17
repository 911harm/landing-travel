import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import {AppContext} from '../Provider';

const RightNavStyled = styled.div`
   list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 920px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      display:inline-block;
      color: #fff;
      &:hover{
        opacity:.3;
        transform:scale(.9)
      }
    }
  }
`

export default function RightNav({ open, setOpen }) {
  const [airlines, setAirlines] = useState([])
  const [,setAirline] = useContext(AppContext)
  useEffect(() => {
    fetch('./ApiFake.json')
      .then(response => response.json())
      .then(data => {
        setAirlines(data)
        setAirline(data[0].name)
      })
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  const handlerSelect = (e) => {
    setAirline(e.target.id)
    setOpen()
  }
  return (
    <RightNavStyled open={open} >
      {airlines.length > 0 &&
        airlines.map(airline => <li key={airline.id} onClick={handlerSelect} id={airline.name}>{airline.name}</li>)
      }
    </RightNavStyled>
  )
}