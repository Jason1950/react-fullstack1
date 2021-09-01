import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    static defaultProps = {
        title : 'Github Finder in json',
        icons : 'fab fa-github',
        test : 13
    }

    static propTypes = {
        title : PropTypes.string.isRequired,
        icons : PropTypes.string.isRequired,
        test : PropTypes.number.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className="fab fa-github"/> Props {this.props.title}  {this.props.test}
                </h1>
            </nav>
        )
    }
}

export default Navbar
