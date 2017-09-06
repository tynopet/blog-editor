import styled from 'styled-components';

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  font-family: Helvetica, Arial, sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 800px;
  height: 800px;

  margin: 0px auto;
  padding: 20px 30px;

  transition: all .3s ease;
`;

export const Editor = styled.div`
  height: 700px;
  overflow: auto;
`;

export const ModalMask = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity .3s ease;
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
