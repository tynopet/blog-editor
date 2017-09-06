import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MaterialIcon from 'react-google-material-icons';
import DOMPurify from 'dompurify';
import { savePage, deletePage } from '../../../redux/actions/pages';
import { Block, Container } from '../styled';
import { CloseButton, FloatButton, Input, OrderButton } from './styled';
import Popup from './Popup';

class Editor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: null,
      title: '',
      blocks: [],
      popupIsOpen: false,
      editableBlock: {},
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddBlock = this.handleAddBlock.bind(this);
    this.handleRemoveBlock = this.handleRemoveBlock.bind(this);
    this.handleBlockClick = this.handleBlockClick.bind(this);
    this.handleOrderClick = this.handleOrderClick.bind(this);
    this.saveCallback = this.saveCallback.bind(this);
    this.changeCallback = this.changeCallback.bind(this);
    this.closeCallback = this.closeCallback.bind(this);
  }

  componentDidMount() {
    this.setStateFromProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setStateFromProps(nextProps);
  }

  setStateFromProps({ id, title, blocks }) {
    this.setState({ id, title, blocks });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSave() {
    this.props.save(this.state);
  }

  handleDelete() {
    const confirm = window.confirm('Вы уверены?');
    if (confirm) {
      this.props.delete(this.state.id);
      this.props.history.push('/');
    }
  }

  handleAddBlock() {
    this.setState(({ blocks }) => {
      const id = blocks.length
        ? blocks[blocks.length - 1].id + 1
        : 0;
      return {
        blocks: [...blocks, {
          id,
          order: id,
          content: '',
        }],
      };
    });
  }

  handleRemoveBlock(e, id) {
    e.stopPropagation();
    const confirm = window.confirm('Вы уверены?');
    if (confirm) {
      this.setState(prevState =>
        ({ blocks: prevState.blocks.filter(block => block.id !== id) }));
    }
  }

  handleBlockClick(id) {
    this.setState(prevState => ({
      popupIsOpen: true,
      editableBlock: prevState.blocks.find(block => block.id === id),
    }));
  }

  handleOrderClick(e, id, isUp) {
    e.stopPropagation();
    this.setState(({ blocks }) => {
      const order = blocks.find(block => block.id === id).order;
      if ((isUp && order === 0) || (!isUp && order === blocks.length - 1)) {
        return {};
      }
      const swappedOrder = isUp ? order - 1 : order + 1;
      const swappedBlockId = blocks.find(block => block.order === swappedOrder).id;
      return {
        blocks: blocks.map((block) => {
          switch (block.id) {
            case id:
              return { ...block, order: swappedOrder };
            case swappedBlockId:
              return { ...block, order };
            default:
              return block;
          }
        }),
      };
    });
  }

  saveCallback() {
    this.setState(prevState => ({
      blocks: prevState.blocks.map(block =>
        (block.id === prevState.editableBlock.id
          ? { ...block, content: prevState.editableBlock.content }
          : block)),
      popupIsOpen: false,
      editableBlock: {},
    }));
  }

  changeCallback(value) {
    this.setState(prevState =>
      ({ editableBlock: { ...prevState.editableBlock, content: value } }));
  }

  closeCallback() {
    const result = window.confirm('Сохранить изменения?');
    if (result) {
      this.saveCallback();
    } else {
      this.setState({ editableBlock: {}, popupIsOpen: false });
    }
  }

  render() {
    return (
      <Container>
        <Input
          type="text"
          placeholder="Название страницы"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        {this.state.blocks.sort((a, b) => a.order - b.order).map(({ id, content }) => (
          <Block
            key={id}
            onClick={() => this.handleBlockClick(id)}
          >
            <CloseButton onClick={e => this.handleRemoveBlock(e, id)}>
              <MaterialIcon icon="clear" title="Удалить блок" size={18} />
            </CloseButton>
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
            <OrderButton bottom="30px" onClick={e => this.handleOrderClick(e, id, true)}>
              <MaterialIcon icon="keyboard_arrow_up" title="Переместить вверх" size={18} />
            </OrderButton>
            <OrderButton bottom="10px" onClick={e => this.handleOrderClick(e, id, false)}>
              <MaterialIcon icon="keyboard_arrow_down" title="Переместить вниз" size={18} />
            </OrderButton>
          </Block>
        ))}
        <FloatButton right="15px" onClick={this.handleDelete} title="Удалить страницу">
          <MaterialIcon icon="delete" size={18} />
        </FloatButton>
        <FloatButton right="75px" onClick={this.handleSave} title="Сохранить страницу">
          <MaterialIcon icon="save" size={18} />
        </FloatButton>
        <FloatButton right="150px" onClick={this.handleAddBlock} title="Добавить блок">
          <MaterialIcon icon="note_add" size={18} />
        </FloatButton>
        {this.state.popupIsOpen
          && <Popup
            saveCallback={this.saveCallback}
            changeCallback={this.changeCallback}
            closeCallback={this.closeCallback}
            block={this.state.editableBlock}
          />
        }
      </Container>
    );
  }
}

Editor.propTypes = {
  // id: PropTypes.number.isRequired,
  // title: PropTypes.string.isRequired,
  // blocks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  save: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  delete: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { match }) => {
  const page = state.pages.pages.find(({ id }) => id === parseInt(match.params.id, 10));
  return {
    id: page ? page.id : 0,
    title: page ? page.title : '',
    blocks: page ? page.blocks : [],
  };
};

const mapDispatchToProps = dispatch => ({
  save: page => dispatch(savePage(page)),
  delete: id => dispatch(deletePage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Editor));
