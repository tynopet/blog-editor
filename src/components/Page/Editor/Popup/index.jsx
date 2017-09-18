// @flow

import React from 'react';
// import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import MaterialIcon from 'react-google-material-icons';
import { Button } from '../../../Sidebar/styled';
import { Editor, ModalContainer, ModalMask, ModalWrapper } from './styled';
import { CloseButton } from './../styled';

type Props = {
  block: {
    id: number,
    order: number,
    content: string,
  };
  changeCallback: Function;
  closeCallback: Function;
  saveCallback: Function;
}

const Popup = ({ block, changeCallback, closeCallback, saveCallback }: Props) => (
  <ModalMask>
    <ModalWrapper>
      <CloseButton onClick={closeCallback}>
        <MaterialIcon icon="clear" size={18} />
      </CloseButton>
      <ModalContainer>
        <ReactQuill theme="snow" value={block.content} onChange={changeCallback}>
          <Editor />
        </ReactQuill>
        <Button onClick={saveCallback}>Сохранить</Button>
      </ModalContainer>
    </ModalWrapper>
  </ModalMask>
);

// Popup.propTypes = {
//   block: PropTypes.shape().isRequired,
//   changeCallback: PropTypes.func.isRequired,
//   closeCallback: PropTypes.func.isRequired,
//   saveCallback: PropTypes.func.isRequired,
// };

export default Popup;
