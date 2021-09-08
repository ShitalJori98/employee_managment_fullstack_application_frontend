import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div className="container">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="#" className="navbar-brand">Employee Management Application</a></div>

                    </nav>
                </header>
            </div>
        )
    }
}
