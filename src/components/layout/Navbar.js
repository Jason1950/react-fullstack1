import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-primary">
                <h2>Navbar and props : {this.props.tittle}</h2>
            </nav>
        )
    }
}

export default Navbar
