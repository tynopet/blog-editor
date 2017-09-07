import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import MaterialIcon from 'react-google-material-icons';
import { addPage, fetchPages } from '../../redux/actions/pages';
import { Button, Container, HomeLink, PageLink as Link, LinksContailner, ListItem, Title } from './styled';

class Sidebar extends Component {
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
              {/* <Link to={`/edit/${id}`}>
                <MaterialIcon icon="edit" size={18} />
              </Link> */}
            </ListItem>
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
