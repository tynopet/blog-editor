import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import { ModalContainer, ModalMask, ModalWrapper } from './styled';
import { CloseButton } from './../styled';

const Popup = ({ block, changeCallback, closeCallback, saveCallback }) => (
  <ModalMask>
    <ModalWrapper>
      <CloseButton onClick={closeCallback}>
        <span role="img" aria-label="close">❌</span>
      </CloseButton>
      <ModalContainer>
        <ReactQuill theme="snow" value={block.content} onChange={changeCallback} />
        <button onClick={saveCallback}>Сохранить</button>
      </ModalContainer>
    </ModalWrapper>
  </ModalMask>
);

Popup.propTypes = {
  block: PropTypes.shape().isRequired,
  changeCallback: PropTypes.func.isRequired,
  closeCallback: PropTypes.func.isRequired,
  saveCallback: PropTypes.func.isRequired,
};

export default Popup;
