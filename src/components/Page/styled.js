import styled from 'styled-components';
import { OrderButton } from './Editor/styled';

export const Block = styled.section`
  background-color: #fafafa;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin: 20px;
  padding: 20px;

  min-height: 200px;
  position: relative;

  &:hover ${OrderButton} {
    display: inline;
  }
`;

export const Container = styled.main`
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
`;
