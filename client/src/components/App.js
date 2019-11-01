import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import Header from './Header';

import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
