import React from 'react';
import styled from "styled-components";

const HeaderBar = ({ onThemeToggle, isDarkMode }) => {
  return (
    <Nav>
      <LogoTitle>
        <LogoImage src="favicon.png" alt="" />
        <Title className='header-title'>Weather Report</Title>
      </LogoTitle>
      <ThemeToggle>
        <Slider isChecked={isDarkMode}>
          <input type="checkbox" checked={isDarkMode} onChange={onThemeToggle} />
          <span className="slider"></span>
        </Slider>
      </ThemeToggle>
    </Nav>
  );
};

export default HeaderBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 13%;
  width: 100%;
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 999;
`;

const LogoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
`;

const LogoImage = styled.img`
  padding: 0.5%;
  background-color: rgb(221, 241, 215);
  border: 3px solid blue;
  width: 8.5%;
  height: 75%;
  border-radius: 15%;
  img {
    display: block;
    object-fit: contain;
    padding-left: 0px;
  }
`;

const Title = styled.h2`
  font-family: 'Segoe UI';
`;

const ThemeToggle = styled.div`
  position: relative;
`;

const Slider = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 23px;

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.isChecked ? '#2196F3' : '#ccc'};
    transition: .4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 4px;
      bottom: 3px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
      transform: ${props => props.isChecked ? 'translateX(26px)' : 'translateX(0)'};
    }
  }
`;
