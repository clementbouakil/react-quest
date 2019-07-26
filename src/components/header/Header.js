import React, { Component } from "react";
import "../Header/Header.css";
import logo from "../Header/logo.svg";

class Header extends Component {

    handleClick = () => {
        this.setState({ working: !this.state.working });
    }

    constructor(props) {
        super(props);
        this.state = {
          working: props.working
        };
      }

    render() {
        const work = this.state.working ? 'work' : 'donuts';
        return (
            <header className="Header-header">
                <img src={logo} className={work} alt="logo" />
                <h1 className="Header-title">Simpsons Quotes</h1>
                <div className="working">
                    <button className={work} onClick={this.handleClick}>
                        {work.toUpperCase()}
                    </button>
                </div>
            </header>
        )
    }
}

export default Header;