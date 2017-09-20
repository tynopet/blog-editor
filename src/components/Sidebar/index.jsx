// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPage, fetchPages } from '../../redux/actions/pages';
import {
  Button,
  Container,
  HomeLink,
  PageLink as Link,
  LinksContailner,
  ListItem,
  Title,
} from './styled';
import type { Page, Pages } from '../../types/State';

type Props = {
  addPage: Function,
  pages: Array<Page>,
  fetchPages: Function,
};

class Sidebar extends Component<Props, void> {
  componentDidMount() {
    this.props.fetchPages();
  }

  render() {
    return (
      <Container>
        <HomeLink to="/">Главная</HomeLink>
        <Title>Существующие страницы:</Title>
        <LinksContailner>
          {this.props.pages.map(({ id, title }) => (
            <ListItem key={id}>
              <Link to={`/pages/${id}`}>{title}</Link>
            </ListItem>
          ))}
        </LinksContailner>
        <Button onClick={this.props.addPage}>Добавить</Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pages.pages,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addPage,
      fetchPages,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
