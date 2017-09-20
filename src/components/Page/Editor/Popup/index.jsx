// @flow
import React from 'react';
import ReactQuill from 'react-quill';
import MaterialIcon from 'react-google-material-icons';
import { Button } from '../../../Sidebar/styled';
import { Editor, ModalContainer, ModalMask, ModalWrapper } from './styled';
import { CloseButton } from './../styled';
import type { Block } from '../../../../types/State';

type Props = {
  block: Block,
  changeCallback: Function,
  closeCallback: Function,
  saveCallback: Function,
};

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

export default Popup;
