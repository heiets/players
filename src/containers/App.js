import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Search from '../components/Search'
import List from '../components/List'
import Header from '../containers/Header'
import * as Actions from '../actions/Actions'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }
    setSearchValue = () => (value) => {
        console.log(value);
        this.setState({ searchValue: value });
    }
    render() {
      const {  search, loadData } = this.props.Actions;
      const { list } = this.props;
      console.log(this.state.searchValue);
      return <div>
        <Header/>
        <div className="body__wrap">
          <Search search={ search } listToSearch={ list }  setSearchValue={ this.setSearchValue() } />
          <List filteredList={ list.filteredResult } loadData={ loadData } searchValue={ this.state.searchValue }  />
        </div>
      </div>
    }
}
function mapStateToProps(state) {
  return {
    list: state.list
  }
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
