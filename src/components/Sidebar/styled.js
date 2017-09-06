import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  border: none;
  background: #3f51b5;
  color: #fff;
  padding: 10px;
`;

export const Container = styled.aside`
  background-color: #fafafa;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  box-sizing: border-box;
  flex-basis: 324px;
  min-height: 100vh;
  padding: 65px 45px 0;

  display: flex;
  flex-direction: column;
`;

export const PageLink = styled(NavLink) `
  color: #000;
  text-decoration: none;
  margin-right: 10px;
`;

export const HomeLink = styled(PageLink) `
  align-self: center;
  font-size: 24px;
`;

export const LinksContailner = styled.ul`
  align-self: flex-start;
  margin: 30px 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 20px;
`;
