import React from 'react';
import { Container, Logo } from './styled';
import logo from './logo.svg';

const Home = () => (
  <Container>
    <h1>Простой редактор постов</h1>
    <Logo src={logo} alt="react=logo" />
  </Container>
);

export default Home;
