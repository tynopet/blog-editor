import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  color: #000;
  font-size: 24px;
  align-self: center;
`;

export const FloatLink = styled(NavLink) `
  background-color: #3f51b5;
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-decoration: none;
  z-index: 1;

  position: fixed;
  right: 15px;
  bottom: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
