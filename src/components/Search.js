import React, { Component } from 'react'

export default class Search extends Component {
    search = () => () => {
        const formValue  = document.querySelector('#formInput').value;
        let filteredList = this.props.listToSearch.initialData.filter(v => (
            v.name.toLowerCase().indexOf(formValue) !== -1)
            || (v.name.toLowerCase().indexOf(formValue) !== -1)
            || (v.position.toLowerCase().indexOf(formValue) !== -1)
            || (v.dateOfBirth.toLowerCase().indexOf(formValue) !== -1)
            || (v.nationality.toLowerCase().indexOf(formValue) !== -1)
            || (v.contractUntil.toLowerCase().indexOf(formValue) !== -1)
            || (v.marketValue.toLowerCase().indexOf(formValue) !== -1)
        );
        this.props.setSearchValue(formValue);
        this.props.search(filteredList);
    }
    render() {
        return (
        <div className="search__wrap">
            <input id="formInput" type="text" onChange={ this.search() } />
        </div>)
    }
}