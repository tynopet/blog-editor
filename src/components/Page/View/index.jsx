import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Block, Container } from '../styled';
import { Title } from './styled';

const Page = ({ blocks, title }) => (
  <Container>
    <Title>{title}</Title>
    {blocks.map(({ id, content }) => (
      <Block key={id} dangerouslySetInnerHTML={{ __html: content }} />
    ))}
  </Container>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  blocks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = (state, { match }) => {
  const page = state.pages.pages.find(({ id }) => id === parseInt(match.params.id, 10));
  return {
    title: page ? page.title : '',
    blocks: page ? page.blocks : [],
  };
};

export default connect(mapStateToProps)(Page);
