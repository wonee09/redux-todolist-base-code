import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
  return (
    <StMainTitle>
        <p onClick={() => {navigate(`/`)}}>TodoList</p>
        <p>Standard TimeAttack</p>
    </StMainTitle>
  )
}

export default Header;

const StMainTitle = styled.div`
    font-size: 25px;
    font-weight: 700px;
    background-color: black;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`