import styled from 'styled-components';

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  padding: 0px;

  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Input = styled.input`
  height: 30px;
  border-width: 0 0 1px 0;
  margin: 20px;

  &:focus {
    outline: none;
    border-color: #3f51b5;
  }
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
  cursor: pointer;
  width: 50px;
  height: 50px;

  position: fixed;
  right: ${props => props.right};
  bottom: 15px;

  z-index: 1;
`;
