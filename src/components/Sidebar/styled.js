import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  border: none;
  background: #fff;
  padding: 10px;
`;

export const Container = styled.aside`
  background-color: #000;
  box-sizing: border-box;
  flex-basis: 324px;
  min-height: 100vh;
  padding: 65px 45px 0;

  display: flex;
  flex-direction: column;
`;

export const PageLink = styled(NavLink) `
  color: #fff;
  text-decoration: none;
`;

export const LinksContailner = styled.ul`
  align-self: flex-start;
  margin: 30px 0;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 20px;
`;
