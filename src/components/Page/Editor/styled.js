import styled from 'styled-components';

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  position: absolute;
  right: 10px;
  top: 10px;
`;

export const OrderButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;

  position: absolute;
  right: 10px;
  bottom: ${props => props.bottom};
`;

export const FloatButton = styled.button`
  background-color: #3f51b5;
  border: none;
  border-radius: 50%;
  color: #fff;
  width: 50px;
  height: 50px;

  position: fixed;
  right: ${props => props.right};
  bottom: 15px;

  z-index: 1;
`;
