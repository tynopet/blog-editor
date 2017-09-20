// @flow
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import MaterialIcon from 'react-google-material-icons';
import { Block, Container } from '../styled';
import { FloatLink, Title } from './styled';
import type { Block as BlockType } from '../../../types/State';

type Props = {
  blocks: Array<BlockType>,
  match: any,
  title: string,
};

const Page = ({ blocks, match, title }: Props) => (
  <Container>
    <Title>{title}</Title>
    {blocks.map(({ id, content }) => (
      <Block key={id} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
    ))}
    <FloatLink title="Редактировать страницу" to={`/edit/${match.params.id}`}>
      <MaterialIcon icon="edit" />
    </FloatLink>
  </Container>
);

const mapStateToProps = (state, { match }) => {
  const page = state.pages.pages.find(({ id }) => id === parseInt(match.params.id, 10));
  return {
    title: page ? page.title : '',
    blocks: page ? page.blocks : [],
  };
};

export default connect(mapStateToProps)(Page);
