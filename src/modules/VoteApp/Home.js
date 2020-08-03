import React from 'react';
import VotingList from './VotingList';
import { BrowserRouter, Route } from 'react-router-dom';

export default class Home extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={VotingList} />
      </BrowserRouter>
    )
  }
}

