import React, { Component } from "react";
import "../Header/Header.css";
import logo from "../Header/logo.svg";

class Header extends Component {

    handleClick = () => {
        this.setState({ working: !this.state.working });
    }

    constructor(props) {
        super(props);
        this.state = { working: props.working };
    }

    render() {
        return (
            <header className="Header-header">
                <img src={logo} className="Header-logo" alt="logo" />
                <h1 className="Header-title">Simpsons Quotes</h1>
                
            </header>
        )
    }
}

export default Header;