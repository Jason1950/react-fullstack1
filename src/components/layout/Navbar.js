import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    static defaultProps = {
        title : 'Github Finder Props Title',
        icons : 'fab fa-github'
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h2>Navbar and props : {this.props.tittle}</h2>
            </nav>
        )
    }
}

export default Navbar
