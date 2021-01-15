import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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
      color: #fff;
    }
  }
`

export default function RightNav({ open }) {
  const [airlines, setAirlines] = useState([])
  useEffect(() => {
    fetch('./ApiFake.json')
      .then(response => response.json())
      .then(data => setAirlines(data))
  }, [])
  return (
    <RightNavStyled open={open}>
      {airlines.length > 0 &&
        airlines.map(airline => <li key={airline.id} >{airline.name}</li>)
      }
    </RightNavStyled>
  )
}