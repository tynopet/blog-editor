import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPage, fetchPages } from '../../redux/actions/pages';
import { Button, Container, PageLink as Link, LinksContailner, Title } from './styled';

class Sidebar extends Component {
  componentDidMount() {
    this.props.fetchPages();
  }

  render() {
    console.log(this.props.pages);
    return (
      <Container>
        <Link to="/">Главная</Link>
        <Title>Существующие страницы:</Title>
        <LinksContailner>
          {this.props.pages.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/pages/${id}`}>{title}</Link>
              <Link to={`/edit/${id}`}>🖌</Link>
            </li>
          ))}
        </LinksContailner>
        <Button onClick={this.props.addPage}>Добавить</Button>
      </Container>
    );
  }
}

Sidebar.propTypes = {
  addPage: PropTypes.func.isRequired,
  fetchPages: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = state => ({
  pages: state.pages.pages,
});

const mapDispatchToProps = dispatch => ({
  addPage: () => dispatch(addPage()),
  fetchPages: () => dispatch(fetchPages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
