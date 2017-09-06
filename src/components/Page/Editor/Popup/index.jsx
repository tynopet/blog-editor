import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import MaterialIcon from 'react-google-material-icons';
import { Editor, ModalContainer, ModalMask, ModalWrapper, SaveButton } from './styled';
import { CloseButton } from './../styled';

const Popup = ({ block, changeCallback, closeCallback, saveCallback }) => (
  <ModalMask>
    <ModalWrapper>
      <CloseButton onClick={closeCallback}>
        <MaterialIcon icon="clear" size={18} />
      </CloseButton>
      <ModalContainer>
        <ReactQuill theme="snow" value={block.content} onChange={changeCallback}>
          <Editor />
        </ReactQuill>
        <SaveButton onClick={saveCallback}>Сохранить</SaveButton>
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
