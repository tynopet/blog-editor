import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from '../../redux/store';
import Container from './styled';

import Editor from '../Page/Editor';
import Home from '../Home';
import View from '../Page/View';
import Sidebar from '../Sidebar';

const browserHistory = createBrowserHistory();
const store = configureStore(browserHistory);

// const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store={store}>
    <Router>
      <Container>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pages/:id" component={View} />
          <Route exact path="/edit/:id" component={Editor} />
        </Switch>
      </Container>
    </Router>
  </Provider>
);

export default App;
