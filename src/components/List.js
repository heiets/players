import React, {  Component } from 'react'

export default class List extends Component {
    componentWillMount() {
        const { loadData } = this.props;
        loadData();
    }
    render() {
        var replace = this.props.searchValue;
        var re = new RegExp(replace,'gim');
        const listToShow = this.props.filteredList.map((v,i) => (
            <li key={i}>
                <div className="name" dangerouslySetInnerHTML={{ __html: v.name.replace(re,`<div class="highlight">$&</div>`) }}></div>
                <div className="item">
                    <div className="position" dangerouslySetInnerHTML={{ __html: v.position.replace(re,`<div class="highlight">$&</div>`) }}></div>
                    <div className="jerseyNumber">{v.jerseyNumber}</div>
                    <div  className="dateOfBirth" dangerouslySetInnerHTML={{ __html: v.dateOfBirth.replace(re,`<div class="highlight">$&</div>`) }}></div>
                    <div  className="nationality" dangerouslySetInnerHTML={{ __html: v.nationality.replace(re,`<div class="highlight">$&</div>`) }}></div>
                    <div  className="contractUntil" dangerouslySetInnerHTML={{ __html: v.contractUntil.replace(re,`<div class="highlight">$&</div>`) }}></div>
                    <div  className="marketValue" dangerouslySetInnerHTML={{ __html: v.marketValue.replace(re,`<div class="highlight">$&</div>`) }}></div>
                </div>
            </li>
        ));
        return (
        <div className="list">
            {
                listToShow.length === 0
                ?
                <div style={{'textAlign':'center'}}>Not found</div>
                :
                <ul>{ listToShow }</ul>
            }
        </div>)
    }
}
