import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const logo = require('../css/images/logo.png');
        return <div className="header">
            <div className="header__wrap">
                <img src={logo} alt=""/>
            </div>
        </div>
    }
}