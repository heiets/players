import React, { Component } from 'react'
import { connect } from 'react-redux'

import Search from '../components/Search'
import List from '../components/List'
import Header from '../containers/Header'
import * as actions from './actions';
import selectors from './selectors';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }
    setSearchValue = () => (value) => {
        this.setState({ searchValue: value });
    };
    render() {
      const {  search, loadData } = this.props;
      const { list } = this.props;
      return <div>
        <Header/>
        <div className="body__wrap">
          <Search search={ search } listToSearch={ list }  setSearchValue={ this.setSearchValue() } />
          <List filteredList={ list.filteredResult } loadData={ loadData } searchValue={ this.state.searchValue }  />
        </div>
      </div>
    }
}

export default connect(selectors, actions)(App);